# 🎓 Campus Intelligence Matrix

> A Unified Web Dashboard featuring an embedded AI Assistant that orchestrates independent, real-time campus data nodes using a decentralized Model Context Protocol (MCP) design.

---

## 🔗 Live Demo & Links

* **Deployed Web Dashboard:** [https://campus-intelligence-matrix.onrender.com](https://campus-intelligence-matrix.onrender.com)
* **Project Video Demo:** [Watch on Google Drive](https://drive.google.com/file/d/15FPNl12HeI17tD67gJa742bb31X75YTC/view?usp=sharing)
* **GitHub Repository:** [https://github.com/theiitianmaverick/campus-intelligence-matrix](https://github.com/theiitianmaverick/campus-intelligence-matrix)

---

## 📖 Project Description

Campus information is usually scattered across multiple broken portals and static PDFs. To solve this, the **Campus Intelligence Matrix** acts as a single, centralized student dashboard. 

Instead of building a massive, brittle web scraper that dumps everything into one giant database, this project implements a decentralized architecture inspired by the **Model Context Protocol (MCP)**. An embedded AI assistant dynamically intercepts natural-language queries from students and routes them to independent, specialized campus servers (nodes) in real-time. Data is fetched live from each source server, ensuring lightning-fast updates and zero data duplication.

---

## ✨ Features

* **AI Query Orchestrator:** Processes natural-language queries (e.g., *"What is for lunch today?"*) and automatically routes them to the correct data node.
* **Independent MCP Server Nodes:** Dedicated, isolated micro-servers for distinct campus data sources:
  * 📚 **Library Catalog:** Real-time book availability and location search.
  * 🍽 **Dining & Cafeteria:** Daily, multi-meal mess menus.
  * 🎉 **Campus Events:** Active schedules for clubs, workshops, and hackathons.
  * 📜 **Academic Handbook:** Institutional policies, grading parameters, and attendance rules.
* **Unified Dashboard UI:** A sleek, dark-mode matrix interface that surfaces results from multiple background sources into one single view.
* **Real-Time Terminal Console:** An integrated orchestrator log that shows students exactly how their query is being parsed and routed in the backend.

---

## 🛠️ Tech Stack

| Layer | Technology Used |
| :--- | :--- |
| **Frontend Framework** | React.js |
| **Build Tool** | Vite |
| **Styling** | Tailwind CSS |
| **Backend Engine** | Node.js |
| **API Framework** | Express.js |
| **Hosting & Deployment** | Render Cloud (CI/CD Automated Deployment) |

---

## ⚙️ Setup Instructions

Follow these steps to run the application locally on your machine.

**1. Clone the repository**
```bash
git clone [https://github.com/theiitianmaverick/campus-intelligence-matrix.git](https://github.com/theiitianmaverick/campus-intelligence-matrix.git)
cd campus-intelligence-matrix
