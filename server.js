const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Enable secure proxy trust layer for cloud tracking headers
app.set('trust proxy', true);

const LibraryDataSource = {
  books: [
    { id: "B1", title: "Introduction to Algorithms", author: "Cormen", status: "Available", location: "CS-Section Shelf 4" },
    { id: "B2", title: "Principles of Mathematical Analysis", author: "Rudin", status: "Checked Out", location: "Math-Section Shelf 1" },
    { id: "B3", title: "Operating System Concepts", author: "Galvin", status: "Available", location: "CS-Section Shelf 2" }
  ]
};

const CafeteriaDataSource = {
  menu: {
    breakfast: "Aloo Paratha, Curd, Hot Milk, Sprouts",
    lunch: "Dal Makhani, Shahi Paneer, Jeera Rice, Tandoori Roti, Salad",
    snacks: "Samosa, Filter Coffee",
    dinner: "Mix Veg Sabzi, Tarka Dal, Rice, Gulab Jamun"
  }
};

const EventsDataSource = {
  list: [
    { event: "MaRS Open Project Submission Review", time: "04:00 PM", venue: "Robotics Section Lab", organizer: "MaRS" },
    { event: "Inter-IIT WebDev Hackathon", time: "09:00 AM (Tomorrow)", venue: "MAC Auditorium", organizer: "Coding Club" }
  ]
};

const AcademicsDataSource = {
  handbook: {
    min_credits: 16,
    max_credits: 26,
    attendance_policy: "Minimum 75% attendance mandatory to avoid registration cancellation for End-Term Exams."
  }
};

// Internal Filtering Engine Core Logic
function resolveLibrarySearch(keyword) {
  if (keyword) {
    return LibraryDataSource.books.filter(b => 
      b.title.toLowerCase().includes(keyword.toLowerCase()) || 
      b.author.toLowerCase().includes(keyword.toLowerCase())
    );
  }
  return LibraryDataSource.books;
}

// REST Endpoints
app.get('/mcp/library', (req, res) => {
  const keyword = req.query.keyword || '';
  res.json({ provider: "Library Core MCP", data: resolveLibrarySearch(keyword) });
});

app.get('/mcp/cafeteria', (req, res) => res.json({ provider: "Mess & Cafeteria MCP", data: CafeteriaDataSource.menu }));
app.get('/mcp/events', (req, res) => res.json({ provider: "Campus Events MCP", data: EventsDataSource.list }));
app.get('/mcp/academics', (req, res) => res.json({ provider: "Academic Handbook MCP", data: AcademicsDataSource.handbook }));

// Central Routing Orchestrator Layer
app.post('/api/orchestrate', async (req, res) => {
  const { query } = req.body;
  if (!query) return res.status(400).json({ error: "Missing prompt query parameter." });

  const cleanQuery = query.toLowerCase();
  let selectedServer = "Fallback Engine";
  let actionIntent = "unknown_intent";
  let rawData = null;
  let aiResponse = "";

  // Process data streams entirely internally to avoid recursive loop crashes
  if (cleanQuery.includes('book') || cleanQuery.includes('library') || cleanQuery.includes('read') || cleanQuery.includes('algorithms')) {
    selectedServer = "Library Core MCP";
    actionIntent = "search_books";
    const keywordMatch = cleanQuery.replace(/find|search|book|library|for|the/g, "").trim();
    rawData = resolveLibrarySearch(keywordMatch);
  } 
  else if (cleanQuery.includes('food') || cleanQuery.includes('menu') || cleanQuery.includes('lunch') || cleanQuery.includes('mess') || cleanQuery.includes('cafeteria') || cleanQuery.includes('dinner')) {
    selectedServer = "Mess & Cafeteria MCP";
    actionIntent = "fetch_menu";
    rawData = CafeteriaDataSource.menu;
  }
  else if (cleanQuery.includes('event') || cleanQuery.includes('club') || cleanQuery.includes('hackathon') || cleanQuery.includes('mars')) {
    selectedServer = "Campus Events MCP";
    actionIntent = "fetch_events";
    rawData = EventsDataSource.list;
  }
  else if (cleanQuery.includes('policy') || cleanQuery.includes('attendance') || cleanQuery.includes('rule') || cleanQuery.includes('credit')) {
    selectedServer = "Academic Handbook MCP";
    actionIntent = "fetch_rules";
    rawData = AcademicsDataSource.handbook;
  }

  try {
    if (actionIntent === "search_books") {
      if (rawData && rawData.length > 0) {
        aiResponse = `📚 Matrix matching successful. Found book: "${rawData[0].title}" by ${rawData[0].author}. Status: [${rawData[0].status}]. Location: ${rawData[0].location}.`;
      } else {
        aiResponse = `❌ Library search returned 0 results. Try searching for 'Algorithms'.`;
      }
    } 
    else if (actionIntent === "fetch_menu") {
      aiResponse = `🍲 Live Cafeteria Node Menu Parsed:\n\n• 🍳 Breakfast: ${rawData.breakfast}\n• 🍛 Lunch: ${rawData.lunch}\n• ☕ Snacks: ${rawData.snacks}\n• 🍨 Dinner: ${rawData.dinner}`;
    } 
    else if (actionIntent === "fetch_events") {
      aiResponse = `🎯 Active Cluster Events Registered:\n\n${rawData.map(e => `• [${e.time}] ${e.event} - Venue: ${e.venue}`).join('\n')}`;
    } 
    else if (actionIntent === "fetch_rules") {
      aiResponse = `📜 Academic Node Policy Check:\n\n• Policy Rule: ${rawData.attendance_policy}`;
    } 
    else {
      aiResponse = `🤖 Try choosing one of the interactive suggestion chips above!`;
    }

    res.json({
      routedServer: selectedServer,
      intent: actionIntent,
      payload: rawData,
      aiResponse: aiResponse,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    res.status(500).json({ error: "Orchestration layer failed to resolve internals." });
  }
});

app.listen(PORT, () => console.log(`Core backend cluster live on port ${PORT}`));