👯‍♀️ Step-by-Step Guide for Your Friend:
✅ Do this only once to get the full project.

Open terminal

Run:

bash
Copy
Edit
git clone https://github.com/your-username/your-repo-name.git
Replace with your actual repo link.

Then go into the project folder:

bash
Copy
Edit
cd your-repo-name
🧑‍💻 Now your friend can:
Create a new folder like backend/ inside the project

Start backend development (Node.js, Express, etc.)

Add files to Git as usual:

bash
Copy
Edit
git add .
git commit -m "Started backend setup"
git push
🔁 Going forward (For both of you):
Every time before pushing, both of you must do:

bash
Copy
Edit
git pull origin main
This prevents overwriting each other's work.



🔸 If your friend cloned the repo and is in:
Copy
Edit
project-folder/
├── frontend/
└── backend/  ← working here
Then:

✅ Your friend should stay in the main project folder (not just backend/) when pushing:
bash
Copy
Edit
cd project-folder  # not just backend/
git add .
git commit -m "Added backend server setup"
git push
