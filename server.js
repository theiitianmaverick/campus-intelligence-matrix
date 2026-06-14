import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

// Mock Decoupled MCP Data Sources (No central monolithic database)
const libraryMCP = {
  name: "Campus Library System Node",
  query: (q) => q.toLowerCase().includes('algorithm') 
    ? "SUCCESS: 'Introduction to Algorithms (4th Ed.)' is AVAILABLE in Sector 4, Shelf B. 3 copies remaining."
    : "NOT_FOUND: No exact matching catalog title found on this node."
};

const cateringMCP = {
  name: "Main Dining Hall Matrix Node",
  query: (q) => q.toLowerCase().includes('lunch') || q.toLowerCase().includes('food')
    ? "SUCCESS: Today's Menu -> Lunch: Grilled Paneer/Chicken Matrix, Herb Basmati Rice, Decoupled Dal Fry. Serving until 14:30."
    : "NOT_FOUND: No culinary logs match your schedule request."
};

const eventsMCP = {
  name: "Student Activity Center Hub Node",
  query: (q) => q.toLowerCase().includes('code') || q.toLowerCase().includes('hackathon')
    ? "SUCCESS: Upcoming Event -> 'ByteCraft Hackathon 2026' starts Friday at 18:00. Venue: Aud-3. Registration open."
    : "NOT_FOUND: No immediate campus activities matched your inquiry filter."
};

const handbookMCP = {
  name: "Academic Registrar Policy Node",
  query: (q) => q.toLowerCase().includes('attendance') || q.toLowerCase().includes('policy')
    ? "SUCCESS: Policy Code 75-A -> Minimum attendance requirement is 75% per registered course module to clear audit checks."
    : "NOT_FOUND: Academic handbook metadata query returned empty."
};

// AI Orchestration Routing Endpoint
app.post('/api/orchestrate', (req, res) => {
  const { prompt } = req.body;
  if (!prompt) return res.status(400).json({ error: "Empty query array parameters." });

  let selectedNode = "Global Fallback Router";
  let mcpResponse = "Unable to automatically map query parameters to an isolated MCP Node subsystem.";

  const text = prompt.toLowerCase();

  // Dynamic Real-Time Intelligent Routing Layer
  if (text.includes('algorithm') || text.includes('book') || text.includes('library')) {
    selectedNode = libraryMCP.name;
    mcpResponse = libraryMCP.query(prompt);
  } else if (text.includes('lunch') || text.includes('food') || text.includes('mess') || text.includes('eat')) {
    selectedNode = cateringMCP.name;
    mcpResponse = cateringMCP.query(prompt);
  } else if (text.includes('code') || text.includes('club') || text.includes('event') || text.includes('hackathon')) {
    selectedNode = eventsMCP.name;
    mcpResponse = eventsMCP.query(prompt);
  } else if (text.includes('attendance') || text.includes('policy') || text.includes('requirement')) {
    selectedNode = handbookMCP.name;
    mcpResponse = handbookMCP.query(prompt);
  }

  res.json({
    routedNode: selectedNode,
    timestamp: new Date().toISOString(),
    payload: mcpResponse
  });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`[ORCHESTRATOR MATRIX] Core backend cluster live on port ${PORT}`);
});