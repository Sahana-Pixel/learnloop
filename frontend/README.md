# 👯‍♀️ Project Collaboration Guide

This guide helps you and your friend work together on the same GitHub project smoothly — frontend and backend in one repo.

---

## ✅ Initial Setup (Only Once)

### 1. Clone the Repository

Open your terminal and run:

```bash
git clone https://github.com/your-username/your-repo-name.git
🔁 Replace with your actual GitHub repo URL.

2. Move Into the Project Directory
bash
Copy
Edit
cd your-repo-name
🧑‍💻 Backend Developer Setup
1. Inside the project folder, create a new folder:
bash
Copy
Edit
mkdir backend
Your structure should look like:

pgsql
Copy
Edit
your-repo-name/
├── frontend/
└── backend/  ← Work here
2. Start backend development (e.g., Node.js, Express)
Add your files, then commit and push:

bash
Copy
Edit
git add .
git commit -m "Started backend setup"
git push
🔁 Ongoing Work (For Both Developers)
Before pushing your changes every time:

bash
Copy
Edit
git pull origin main
This prevents conflicts and ensures you're up-to-date with the latest code.

⚠️ Important Push Tip
Always push from the main project folder, not just backend/:

bash
Copy
Edit
cd your-repo-name
git add .
git commit -m "Your message here"
git push