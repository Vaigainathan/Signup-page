# React Signup/Login with Express.js Backend

This project is a simple full-stack application with a **React frontend** and an **Express.js backend**. It allows users to **sign up** by entering a username, email, and password, which is then saved to a local `data.json` file. There's also a basic **login page** that validates hardcoded credentials.

## 🛠️ Tech Stack

- **Frontend:** React.js
- **Backend:** Node.js, Express.js
- **Data Storage:** JSON file (`data.json`)
- **Others:** CORS, Fetch API

---

## 🚀 Getting Started

### 1. Clone the Repository

git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
cd backend
npm install express cors
node server.js

cd frontend
npm install
npm start

🔐 Functionality
Signup
Enter a username, email, and password

Click "Sign Up"

Details are sent to the backend and saved in data.json

Login
Hardcoded check for:
Username: admin
Password: admin
Shows login success or failure message


⚠️ Notes
This project is for learning/demo purposes.
Passwords are not hashed — not suitable for production.
No database is used — data is stored in data.json
