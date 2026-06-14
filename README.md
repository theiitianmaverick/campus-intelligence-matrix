# 🎓 Campus Intelligence Matrix

> **A Unified Campus Dashboard Powered by AI-Orchestrated MCP Nodes**
>
> Transforming fragmented campus information systems into a seamless, intelligent, real-time experience.

---

# 🚀 Overview

College campuses often rely on multiple disconnected systems for essential information. Students are forced to navigate separate platforms for library resources, dining schedules, academic policies, and campus events, leading to a fragmented and inefficient experience.

**Campus Intelligence Matrix** solves this problem by providing a unified dashboard with an embedded AI assistant capable of dynamically routing queries to specialized campus data nodes.

Instead of aggregating everything into a centralized database, the system adopts a distributed architecture inspired by the **Model Context Protocol (MCP)**. Each service exists as an isolated context node, while an intelligent orchestrator determines where requests should be routed and returns responses in real time.

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

Campus information is typically scattered across multiple disconnected systems.

| Existing Challenge                        | Impact on Students      |
| ----------------------------------------- | ----------------------- |
| Legacy library portals                    | Slow resource discovery |
| Cafeteria menus distributed separately    | Poor accessibility      |
| Event information spread across platforms | Missed opportunities    |
| Academic policies hidden in documents     | Difficult retrieval     |
| Multiple interfaces and workflows         | Reduced productivity    |

Students often spend more time searching for information than actually using it.

---

# 💡 Solution

Campus Intelligence Matrix introduces a centralized user experience backed by a distributed architecture.

Rather than storing all campus information in a monolithic database:

* Independent services remain isolated.
* Specialized context nodes manage domain-specific information.
* Queries are routed dynamically based on intent.
* Responses are generated in real time.
* The architecture remains scalable and maintainable.

This approach enables a clean separation of concerns while providing students with a single intelligent interface.

---

# ⚡ Key Features

### 🤖 AI Query Orchestrator

The system analyzes natural-language queries and determines which context node should handle the request.

Example queries:

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

### 📡 Dynamic Routing Traces

The dashboard visualizes routing decisions in real time.

Example:

```text
[ROUTING TRACE]
Directed query payload straight to:
Main Dining Hall Matrix Node
```

This provides transparency into how requests are processed.

---

### 🖥 Live Orchestrator Console

An embedded terminal-style console displays:

* Query payloads
* Processing telemetry
* Routing information
* Context node selection
* Structured responses

This creates an observability layer directly inside the dashboard.

---

### 📚 Campus Library Catalog Node

Handles:

* Book discovery
* Catalog lookups
* Availability checks
* Resource identifiers
* Inventory information

---

### 📜 Academic Registrar Policy Hub

Handles:

* Attendance regulations
* Academic policies
* Registrar notices
* Institutional guidelines

Example dataset:

```text
Minimum Attendance Requirement:
75% per registered course module
```

---

### 🎉 Student Activity Center Hub

Handles:

* Technical events
* Workshops
* Club activities
* Student programs
* Tech fest announcements

---

### 🍽 Main Dining Hall Matrix

Handles:

* Daily menus
* Meal schedules
* Dining timings
* Cafeteria updates

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

# ⚙ Technology Stack

| Layer                   | Technology                          |
| ----------------------- | ----------------------------------- |
| Frontend                | React 18                            |
| Styling                 | Tailwind CSS                        |
| Build Tool              | Vite                                |
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

Example configuration:

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

This allows seamless communication between the React frontend and Express backend while maintaining a clean development workflow.

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

### Clone the Repository

```bash
git clone https://github.com/theiitianmaverick/campus-intelligence-matrix.git

cd campus-intelligence-matrix
```

### Install Dependencies

```bash
npm install
```

### Start Backend Server

```bash
node server.js
```

Backend runs on:

```text
http://127.0.0.1:5000
```

### Start Frontend

```bash
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

# 🔮 Future Enhancements

* Real MCP Protocol Integration
* Multi-Node Discovery Mechanism
* Authentication and Student Profiles
* Live Event Feeds
* Academic Document Search
* Voice-Based Campus Assistant
* Multi-Campus Support
* LLM Tool Calling Integration

---

# 🏆 Hackathon Alignment

This project directly addresses the challenge of building a **Unified Web Dashboard with an Embedded AI Assistant powered by independent MCP Servers**.

Campus Intelligence Matrix demonstrates how distributed campus services can remain decoupled while still providing students with a unified, intelligent, and real-time information retrieval experience.

---

## Built By

**Prateek Ostwal**
B.Tech Electrical Engineering
IIT Roorkee

Built using React, Tailwind CSS, Node.js, Express.js, and MCP-inspired distributed architecture.
