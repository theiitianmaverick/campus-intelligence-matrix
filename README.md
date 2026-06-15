# 🎓 Campus Intelligence Matrix

> An AI-powered campus dashboard that unifies library resources, academic policies, student activities, and dining services through intelligent query orchestration.

---

# 🚀 Overview

Campus information is often distributed across multiple disconnected systems. Students frequently switch between portals, PDFs, websites, and notice boards to access essential information.

Campus Intelligence Matrix solves this challenge by providing a unified dashboard powered by an AI-driven orchestration layer. The system analyzes user intent and dynamically routes requests to specialized information nodes responsible for different campus domains.

Rather than relying on a monolithic database, the platform follows a distributed architecture where each service maintains ownership of its own data and functionality.

---

# 📌 Problem Statement

Universities typically maintain separate systems for:

* 📚 Library Resources
* 📜 Academic Policies
* 🎉 Student Activities
* 🍽 Dining Services

This fragmentation creates a poor user experience and makes information discovery inefficient.

Campus Intelligence Matrix addresses this issue through intelligent query routing and centralized access while preserving modularity at the system level.

---

# ✨ Key Features

### 🤖 AI Query Orchestrator

Processes natural-language queries and determines the most appropriate service node.

Example Queries:

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
What is the minimum attendance requirement?
```

---

### 📡 Intelligent Query Routing

Each query is analyzed and forwarded to the most relevant node.

Example:

```text
[ROUTING TRACE]
Query classified as Dining Information
Routing request to Main Dining Hall Node
```

---

### 🖥 Real-Time Orchestrator Console

Provides visibility into:

* Request processing
* Node selection
* Routing decisions
* Response generation
* System activity

---

### 📚 Library Catalog Node

Supports:

* Book search
* Resource discovery
* Availability checks
* Catalog information

---

### 📜 Academic Policy Node

Supports:

* Attendance requirements
* Academic regulations
* Registrar notices
* Institutional guidelines

---

### 🎉 Student Activity Node

Supports:

* Club announcements
* Technical events
* Workshops
* Student engagement programs

---

### 🍽 Dining Hall Node

Supports:

* Daily menus
* Meal schedules
* Dining updates
* Service timings

---

# 🏗 System Architecture

```text
                              Student
                                 │
                                 ▼

                ┌────────────────────────────┐
                │  Campus Intelligence Matrix │
                │      React Dashboard        │
                └─────────────┬──────────────┘
                              │
                              ▼

                ┌────────────────────────────┐
                │     AI Query Orchestrator   │
                └──────┬─────────┬───────────┘
                       │         │
         ┌─────────────┼─────────┼─────────────┐
         │             │         │             │
         ▼             ▼         ▼             ▼

      Library      Academic    Events      Dining
       Node          Node       Node        Node
```

---

# 🔄 Request Flow

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
Node Selection
    │
    ▼
Response Generation
    │
    ▼
Dashboard Output
```

---

# 🛠 Technology Stack

| Layer         | Technology                     |
| ------------- | ------------------------------ |
| Frontend      | React                          |
| Build Tool    | Vite                           |
| Styling       | Tailwind CSS                   |
| Backend       | Node.js                        |
| API Framework | Express.js                     |
| Communication | REST APIs + JSON               |
| Architecture  | MCP-Inspired Distributed Nodes |

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
├── server.js
├── vite.config.js
├── package.json
└── README.md
```

---

# ⚙ Local Setup

### Clone the Repository

```bash
git clone https://github.com/theiitianmaverick/campus-intelligence-matrix.git

cd campus-intelligence-matrix
```

### Install Dependencies

```bash
npm install
```

### Start the Backend

```bash
node server.js
```

### Start the Frontend

```bash
npm run dev
```

Frontend:

```text
http://localhost:5173
```

Backend:

```text
http://127.0.0.1:5000
```

---

# 🔮 Future Enhancements

* User Authentication
* Personalized Student Profiles
* Multi-Campus Support
* Voice-Based Assistant
* Vector Search for Academic Documents
* Real MCP Protocol Integration
* Dynamic Node Discovery
* Additional Campus Service Nodes

---

# 👨‍💻 Author

**Prateek Ostwal**

B.Tech Electrical Engineering
Indian Institute of Technology Roorkee

GitHub: @theiitianmaverick

---

## ⭐ Support

If you found this project interesting, consider giving the repository a star.
