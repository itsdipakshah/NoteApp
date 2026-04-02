# 📝 NoteApp - MERN Stack

A full-stack Note-Taking application built to master the core fundamentals of modern web development. This project serves as a foundational exercise in CRUD operations, API handling, and database integration using the MERN ecosystem.

## 🎯 Project Purpose
This app was developed as a comprehensive learning exercise to master:
* **The Request-Response Cycle:** Handling data flow from React to Node.js and back.
* **Middleware Pipeline:** Mastering the order of operations for `json-parsing`, `cookie-parsing`, and `CORS`.
* **Database Design:** Implementing Mongoose schemas and managing data relationships.
* **State Management:** Handling real-time UI updates in React after API calls.

---

## 🛠️ Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Frontend** | React.js, Axios, CSS3 |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB, Mongoose |
| **Security** | JWT (JSON Web Tokens), Bcrypt.js, Cookie-Parser |
| **Dev Tools** | Postman, Nodemon, Dotenv |

---

## 🚀 Key Features

* **User Authentication:** Secure Sign-up and Login using JWT stored in HTTP-only cookies.
* **CRUD Operations:** Full ability to Create, Read, Update, and Delete personal notes.
* **Protected Routes:** Backend middleware ensures only authenticated users can access their specific data.
* **Standardized Error Handling:** A centralized error middleware providing clear feedback for various HTTP status codes.
* **Cross-Origin Support:** Configured CORS to allow secure communication between the frontend and backend.

---

## 📂 Project Structure

```text
├── backend/
│   ├── database/        # Database connection logic
│   ├── controllers/     # Note & User logic (The "Brains" of the app)
│   ├── middleware/      # Auth & Error handling functions
│   ├── models/          # MongoDB/Mongoose Schemas
│   ├── routers/         # Express API route definitions
│   └── app.js           # Server entry point & Middleware setup
└── frontend/
    ├── src/
    │   ├── components/  # Reusable UI parts (Navbar, NoteCard)
    │   ├── pages/       # Home, Login, Register views
    │   └── App.js       # React Router & Main Logic


---

### Ready to push?
Open your terminal in the project folder and run these commands:
```
```text
1. `git add .`
2. `git commit -m "feat: complete NoteApp with secure auth and error handling"`
3. `git push origin main`

```
