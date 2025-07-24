# 🚀 LearnLoop Collaboration Guide

A step-by-step guide to help you and your teammate work on the same GitHub repository — both **frontend** and **backend** — without any conflicts! ✨

---

## 🧭 One-Time Setup (Only the First Time)

### 1️⃣ Clone the Repository

Open your terminal and run:

```bash
git clone https://github.com/your-username/learnloop.git
🔁 Replace your-username with your actual GitHub username.

2️⃣ Move Into the Project Folder

cd learnloop
🏗️ Setting Up the Backend (Your Friend's Task)
📁 Create a Backend Folder
Inside the main project directory:


mkdir backend
Your folder structure will now look like:


learnloop/
├── frontend/
└── backend/  ← Work here
🔨 Start Backend Development
Work inside the backend/ folder using your tech stack (Node.js, Express, etc.).

Once you've added files, commit and push:


⚠️ Important Push Tip
Always push from the main project folder, not just from backend/ or frontend/.

cd learnloop
git add .
git commit -m "Your commit message"
git push


🔄 Daily Workflow for Both Developers
Before pushing your code every time, run this to avoid conflicts:


git pull origin main
✅ This fetches the latest changes from GitHub so you don’t overwrite your teammate’s work.
