# 🚀 LearnLoop Collaboration Guide

A clear and simple step-by-step guide to help you and your friend collaborate smoothly on the **LearnLoop** project — with both frontend and backend in one repo.

---

## 🧭 One-Time Setup (First-Time Only)

### 🧱 1. Clone the Repository

Open your terminal and run:

```bash
git clone https://github.com/Sahana-Pixel/learnloop.git
📁 2. Move Into the Project Folder

cd learnloop
🛠️ Setting Up the Backend (For Your Friend)
🗂️ 3. Create a Backend Folder
Inside the root project directory, run:

mkdir backend
Your folder structure should now look like:

learnloop/
├── frontend/
└── backend/   ← Work here!
🧑‍💻 4. Start Backend Development
Work inside the backend/ folder using your preferred tech stack (e.g., Node.js, Express, etc.).

✅ After adding your files, commit and push:

cd learnloop         # Make sure you're at root!
git add .
git commit -m "Your commit message"
git push
🔄 Daily Workflow (For Both Developers)
Before pushing every time, always pull the latest code:

git pull origin main
✅ This keeps your code up-to-date and avoids overwriting your teammate’s work.

⚠️ Important Tips
🔁 Always push from the root project folder (learnloop/)

🚫 Never push from just inside frontend/ or backend/ folders

✅ Follow this flow to avoid merge conflicts and keep teamwork smooth