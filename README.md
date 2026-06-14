# 🎓 Campus Intelligence Matrix

> **A Unified Campus Dashboard Powered by AI-Orchestrated MCP Nodes**
>
> Bringing fragmented campus services together through intelligent query routing and distributed context nodes.





\

---

## 📸 Project Preview

> Add your dashboard screenshot here.

```md
![Campus Intelligence Matrix](./screenshots/dashboard.png)
```

---

# 🚀 Overview

College campuses often suffer from fragmented information systems.

Students must navigate multiple independent platforms to find basic information:

* 📚 Library catalog portals
* 🍽 Cafeteria and mess schedules
* 🎉 Club and event platforms
* 📜 Academic regulations and handbook documents
* 📢 Student notices and announcements

This results in poor discoverability, wasted time, and a fragmented user experience.

**Campus Intelligence Matrix** solves this problem through a unified AI-powered dashboard that dynamically routes user queries to specialized MCP-based context nodes in real time.

Rather than storing everything inside one monolithic database, each service remains isolated and independently queryable.

---

# 👨‍💻 Developer

| Field      | Information                   |
| ---------- | ----------------------------- |
| Name       | **Prateek Ostwal**            |
| Program    | B.Tech Electrical Engineering |
| Institute  | IIT Roorkee                   |
| GitHub     | @theiitianmaverick            |
| Repository | `campus-intelligence-matrix`  |

---

# 📌 Problem Statement

Campus information is distributed across disconnected systems.

| Existing Challenge                         | Student Impact       |
| ------------------------------------------ | -------------------- |
| Library resources hosted separately        | Slow book discovery  |
| Cafeteria information buried in menus/PDFs | Poor accessibility   |
| Club events spread across platforms        | Missed opportunities |
| Academic policies hidden inside handbooks  | Difficult retrieval  |
| Multiple systems with different interfaces | Reduced productivity |

> Students often spend more time searching for information than using it.

---

# 💡 Solution

Campus Intelligence Matrix introduces a centralized dashboard experience backed by a distributed architecture.

Instead of aggregating all campus information into a giant database:

✅ Independent services remain isolated

✅ Context-specific nodes manage their own information

✅ Queries are routed dynamically

✅ Responses are generated in real time

✅ Architecture remains scalable and maintainable

---

# ⚡ Key Highlights

* 🤖 AI Query Orchestrator
* 📡 Real-Time Routing Traces
* 🖥 Live Orchestrator Terminal
* 📚 Library Catalog Context Node
* 📜 Academic Registrar Policy Node
* 🎉 Student Activity Center Node
* 🍽 Main Dining Hall Context Node
* 🚫 Zero Centralized Database Architecture

---

# 🏗 System Architecture

```text
                              Student
                                 │
                                 ▼

                ┌────────────────────────────┐
                │  Campus Intelligence Matrix │
                │      React + Tailwind UI    │
                └─────────────┬──────────────┘
                              │
                              ▼

                ┌────────────────────────────┐
                │   Express AI Orchestrator   │
                │     Query Routing Engine    │
                └──────┬─────────┬───────────┘
                       │         │
         ┌─────────────┼─────────┼─────────────┐
         │             │         │             │
         ▼             ▼         ▼             ▼

 ┌────────────┐ ┌───────────┐ ┌──────────┐ ┌────────────┐
 │  Library   │ │ Registrar │ │ Activity │ │ Dining Hall│
 │    Node    │ │   Policy  │ │   Hub    │ │   Matrix   │
 └────────────┘ └───────────┘ └──────────┘ └────────────┘

         ▲             ▲         ▲             ▲
         └─────────────┴─────────┴─────────────┘

                Live Response Aggregation
```

---

# 🔄 Request Processing Flow

```text
User Query
    │
    ▼
Intent Analysis
    │
    ▼
AI Orchestrator
    │
    ▼
Routing Decision
    │
    ▼
Target Context Node
    │
    ▼
Response Generation
    │
    ▼
Dashboard Output
```

---

# ✨ Core Features

## 🤖 AI Query Orchestrator

The orchestrator interprets natural-language queries and determines which context node should handle the request.

### Example Queries

```text
Is Introduction to Algorithms available in the library?
```

```text
What is being served for lunch today?
```

```text
Are there any upcoming coding club events?
```

```text
What is the minimum attendance requirement policy?
```

---

## 📡 Dynamic Routing Traces

The dashboard visualizes routing decisions in real time.

Example:

```text
[ROUTING TRACE]
Directed query payload straight to:
Main Dining Hall Matrix Node
```

This allows users to understand exactly how requests are processed.

---

## 🖥 Live Orchestrator Console

An integrated terminal panel displays:

* Query payloads
* Processing telemetry
* Routing information
* Context node selection
* Structured responses

This creates transparency and observability within the system.

---

## 📚 Campus Library Catalog Node

Handles:

* Book discovery
* Catalog lookups
* Availability checks
* Resource identifiers
* Inventory information

---

## 📜 Academic Registrar Policy Hub

Handles:

* Attendance requirements
* Academic regulations
* Registrar notices
* Institutional guidelines

Example dataset:

```text
Minimum Attendance Requirement:
75% per registered course module
```

---

## 🎉 Student Activity Center Hub

Handles:

* Technical events
* Workshops
* Club activities
* Student engagement programs
* Tech fest announcements

---

## 🍽 Main Dining Hall Matrix

Handles:

* Daily menus
* Meal schedules
* Serving times
* Dining updates

---

# ⚙ Technology Stack

| Layer                   | Technology                          |
| ----------------------- | ----------------------------------- |
| Frontend                | React 18                            |
| Build Tool              | Vite                                |
| Styling                 | Tailwind CSS                        |
| Backend                 | Node.js                             |
| API Framework           | Express.js                          |
| Architecture            | MCP-Based Distributed Context Nodes |
| Communication           | REST APIs + JSON                    |
| Development Environment | Localhost                           |

---

# 🔌 Vite Proxy Layer

To eliminate CORS issues during development, the frontend uses a proxy configuration inside `vite.config.js`.

Requests made to:

```text
/api/*
```

are automatically forwarded to:

```text
http://127.0.0.1:5000/api/*
```

Example:

```javascript
server: {
  proxy: {
    '/api': {
      target: 'http://127.0.0.1:5000',
      changeOrigin: true
    }
  }
}
```

This allows seamless communication between the React frontend and Express backend.

---

# 📂 Project Structure

```bash
campus-intelligence-matrix/
│
├── src/
│   ├── components/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── public/
│
├── server.js
│
├── vite.config.js
│
├── package.json
│
└── README.md
```

---

# 🛠 Local Setup

### 1. Clone Repository

```bash
git clone https://github.com/theiitianmaverick/campus-intelligence-matrix.git

cd campus-intelligence-matrix
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Backend Server

```bash
node server.js
```

Server runs on:

```text
http://127.0.0.1:5000
```

### 4. Start Frontend

```bash
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

# 📸 Screenshots

## Dashboard

```md
![Dashboard](./screenshots/dashboard.png)
```

## Routing Trace

```md
![Routing Trace](./screenshots/routing-trace.png)
```

---

# 🎥 Submission Artifacts

## 🌐 Live Deployment

```text
[Deployment URL Here]
```

## 🎬 Demo Video

```text
[Demo Video Link Here]
```

---

# 🔮 Future Enhancements

* Real MCP Protocol Integration
* Authentication & Student Profiles
* Multi-Node Discovery
* Vector Search for Academic Documents
* Live Event Feeds
* Voice-Based Campus Assistant
* Multi-Campus Support
* LLM Tool Calling Integration

---

# 🏆 Hackathon Alignment

This project directly addresses the challenge of building a **Unified Web Dashboard with an Embedded AI Assistant using distributed MCP Servers**.

Campus Intelligence Matrix demonstrates how independent campus services can remain decoupled while still providing a seamless student experience through intelligent orchestration and real-time routing.

---

## ⭐ Star the Repository

If you found this project interesting, consider giving it a star and exploring the architecture.

**Built with React, Node.js, Express, Tailwind CSS, and a passion for distributed systems.**
