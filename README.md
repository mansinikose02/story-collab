# 📖 Story Collab

A real-time collaborative story writing app where multiple users can create and contribute to stories together — live, no refresh needed.

---

## 🛠 Tech Stack
**Node.js · Express.js · MongoDB · Socket.io · EJS · express-session**

---

## ✨ Features
- Create stories and contribute to others in real time
- Live updates across all connected users via Socket.io
- Stories persist in MongoDB across sessions
- Session-based user tracking (no login required)

---

## ⚙️ Run Locally

```bash
git clone https://github.com/mansinikose02/story-collab.git
cd story-collab
npm install
```

Create a `.env` file:
```
MONGO_URI=your_mongodb_connection_string
SESSION_SECRET=your_secret
PORT=3000
```

```bash
npm start
```

---

## 👩‍💻 Author
**Mansi Nikose** · [GitHub](https://github.com/mansinikose02)
