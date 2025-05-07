# 🗨️ Chatbot

Chatbot is a full-stack chat application demonstrating modern web development practices with Docker Compose, PostgreSQL, Node.js, and Nginx. It includes multiple tables like user registration, login with JWT-based authentication, and real-time-style chat message handling.

---

Chaticus/
├── Backend/          # Node.js + Express backendAPI +sql+package.json    + server.json
├── Frontend/         # Static HTML/CSS/JS frontend served by Nginx
├── Database/         # SQL files for initial database schema and content
├── .env              # Environment variables for PostgreSQL and pgAdmin
└── docker-compose.yml


---

# 🚀 How to Run It

> Make sure [Docker Desktop] is running.

1. Open a terminal in the 'Chatbot' folder.
2. Run: docker-compose up --build

To *reset the database* (drops data and reloads SQL):
docker-compose down --volumes
docker-compose build --no-cache
docker-compose up


---

# 🌐 App Features

- ✅ User registration and login (secure password hashing with bcrypt)
- ✅ JWT-based token authentication
- ✅ PostgreSQL multi-table schema: 'users', 'messages'
- ✅ Message posting & retrieval with timestamps
- ✅ Fully containerized architecture using Docker Compose
- ✅ Custom Nginx reverse proxy config

---

# 🛠️ Tech Stack

- **Frontend**: HTML, CSS, Vanilla JS
- **Backend**: Node.js, Express
- **Database**: PostgreSQL
- **Other**: Docker, Docker Compose, pgAdmin, bcrypt, jsonwebtoken

---

# 📝 Credentials (Default)

- pgAdmin: `admin@chaticus.com` / `admin`
- PostgreSQL DB: `chaticus`, user: `postgres`, password from `.env`

---

# 📬 API Endpoints

- `POST /api/register` – Register a user
- `POST /api/login` – Login and get JWT token
- `POST /api/messages` – Post a chat message (auth required)
- `GET  /api/messages` – Get all chat messages

---

# 🧪 Sample Data

Loaded via `Database/001_content.sql`:
- 1 user account
- 3 sample messages

---
 Thanks 
