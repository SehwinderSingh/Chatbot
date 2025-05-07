# 🗨️ Chatbot

Chatbot is a full-stack chat application demonstrating modern web development practices with Docker Compose, PostgreSQL, Node.js, and Nginx. It includes multiple tables like user registration, login with JWT-based authentication, and real-time-style chat message handling.

---

# 🧱 Project Structure

Chatbot/
├── Backend/            # Node.js + Express backend API with JWT & PostgreSQL
│   └── server.js       # Main server logic
├── Frontend/           # Static frontend served by Nginx
│   ├── index.html      # UI with login/register and chat area
│   └── js/main.js      # Client-side logic (register, login, send, load)
├── Database/           # SQL schema and seed data
│   ├── 000_init.sql    # Table creation (users, messages)
│   └── 001_content.sql # Sample data
├── .env                # Environment variables (used by backend)
├── nginx.conf          # Custom Nginx config to reverse-proxy /api to backend
└── docker-compose.yml  # Docker setup for frontend, backend, db, and pgAdmin
```

---

# 🚀 How to Run It

> ✅ Prerequisites: [Docker Desktop](https://www.docker.com/products/docker-desktop)

1. Open a terminal in the `Chatbot/` folder.
2. Run:

```bash
docker-compose up --build
```

To **reset the database** (drops data and reloads SQL):

```bash
docker-compose down --volumes
docker-compose build --no-cache
docker-compose up
```

---

## 🌐 App Features

- ✅ User registration and login (secure password hashing with bcrypt)
- ✅ JWT-based token authentication
- ✅ PostgreSQL multi-table schema: `users`, `messages`
- ✅ Message posting & retrieval with timestamps
- ✅ Fully containerized architecture using Docker Compose
- ✅ Custom Nginx reverse proxy config

---

## 🛠️ Tech Stack

- **Frontend**: HTML, CSS, Vanilla JS
- **Backend**: Node.js, Express
- **Database**: PostgreSQL
- **Other**: Docker, Docker Compose, pgAdmin, bcrypt, jsonwebtoken

---

## 📝 Credentials (Default)

- pgAdmin: `admin@chaticus.com` / `admin`
- PostgreSQL DB: `chaticus`, user: `postgres`, password from `.env`

---

## 📬 API Endpoints

- `POST /api/register` – Register a user
- `POST /api/login` – Login and get JWT token
- `POST /api/messages` – Post a chat message (auth required)
- `GET  /api/messages` – Get all chat messages

---

## 🧪 Sample Data

Loaded via `Database/001_content.sql`:
- 1 user account
- 3 sample messages

---

Happy coding! 💬
