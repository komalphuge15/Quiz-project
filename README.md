# Quiz Project 📝

## Project Description
This is a full-stack Quiz Application built with **React** (frontend) and **Node.js + Express + SQLite** (backend).  

- Users can start a quiz, answer multiple-choice questions, and see their **instant score** at the end.  
- A timer is included for each question.    
- Questions are served dynamically from the backend database.  



## Project Structure

quiz-project/
├─ backend/ # Node.js + Express backend
│ ├─ src/
│ ├─ package.json
│ └─ .gitignore
├─ frontend/ # React frontend
│ ├─ src/
│ ├─ package.json
│ └─ .gitignore
└─ README.md



## Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/quiz-project.git
cd quiz-project

cd backend
npm install


node src/seed.js

npm start
The backend runs on: http://localhost:5000

Frontend Setup

cd frontend
npm install
npm start

The frontend runs on: http://localhost:3000
