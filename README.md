# 🎓 Campus Intelligence Matrix

A unified AI-powered campus dashboard that intelligently routes user queries across distributed campus information nodes.

Campus Intelligence Matrix brings together academic policies, library resources, student activities, and dining information through a single conversational interface while maintaining a modular, distributed architecture.

---

## 🚀 Overview

Campus information is often scattered across multiple independent systems, making it difficult for students to quickly access the information they need.

Campus Intelligence Matrix addresses this challenge by introducing an AI-driven orchestration layer that analyzes user intent and routes requests to the appropriate domain-specific service.

Instead of relying on a centralized database, the system uses independent context nodes responsible for different campus functions, enabling scalability, maintainability, and clear separation of concerns.

---

## ✨ Features

### 🤖 AI Query Orchestrator

Processes natural-language queries and dynamically determines the appropriate destination node.

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
What is the minimum attendance requirement?
```

### 📡 Intelligent Query Routing

Every request is analyzed and routed to the most relevant service node.

Example routing trace:

```text
[ROUTING TRACE]
Query classified as Dining Information
Routing request to Main Dining Hall Node
```

### 🖥 Real-Time Orchestrator Console

Provides visibility into:

* Request processing
* Node selection
* Routing decisions
* Response generation
* System activity

### 📚 Library Catalog Node

Supports:

* Book search
* Resource discovery
* Availability checks
* Catalog information

### 📜 Academic Policy Node

Supports:

* Attendance policies
* Academic regulations
* Registrar notices
* Institutional guidelines

### 🎉 Student Activity Node

Supports:

* Club announcements
* Technical events
* Workshops
* Student programs

### 🍽 Dining Hall Node

Supports:

* Daily menus
* Meal schedules
* Dining updates
* Service timings

---

## 🏗 Architecture

```text
Student
   │
   ▼

Campus Intelligence Matrix
        │
        ▼

AI Query Orchestrator
        │
 ┌──────┼──────┐
 │      │      │
 ▼      ▼      ▼

Library   Academic   Student
 Node      Node      Activity
                      Node
        │
        ▼

Dining Hall Node
```

The orchestrator acts as the central coordination layer while individual nodes maintain ownership of their respective datasets and responsibilities.

---

## 🔄 Request Flow

```text
User Query
     │
     ▼
Intent Analysis
     │
     ▼
Query Routing
     │
     ▼
Target Node
     │
     ▼
Response Generation
     │
     ▼
Dashboard Output
```

---

## 🛠 Technology Stack

| Layer         | Technology                     |
| ------------- | ------------------------------ |
| Frontend      | React 18                       |
| Build Tool    | Vite                           |
| Styling       | Tailwind CSS                   |
| Backend       | Node.js                        |
| API Framework | Express.js                     |
| Architecture  | MCP-Inspired Distributed Nodes |
| Communication | REST APIs + JSON               |

---

## 📂 Project Structure

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

## ⚙ Local Setup

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

## 🔮 Future Improvements

* Authentication and user profiles
* Multi-campus support
* Enhanced node discovery
* Vector-based document search
* Voice-enabled assistant
* Real MCP protocol integration
* Additional campus service nodes

---

## 👨‍💻 Author

**Prateek Ostwal**
B.Tech Electrical Engineering
Indian Institute of Technology Roorkee

GitHub: @theiitianmaverick

Built with React, Node.js, Express.js, Tailwind CSS, and distributed systems principles.
