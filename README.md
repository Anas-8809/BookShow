# 🎬 BookShow — Movie Ticket Booking Platform

BookShow is a **full-stack movie ticket booking web application** where users can discover movies, view show timings, select seats, and securely book tickets online. The platform also includes a powerful **Admin Dashboard** to manage movies, shows, and bookings efficiently.

---

## 🌐 Live Application

👉 **User Website:**
[https://bookshow-client.vercel.app/](https://bookshow-client.vercel.app/)

👉 **Admin Panel:**
[https://bookshow-client.vercel.app/admin](https://bookshow-client.vercel.app/admin)

---

## 🚀 Features

### 👤 User Features

* Browse trending and upcoming movies
* View show timings
* Interactive seat selection
* Secure Stripe payments
* Booking confirmation
* Automated email confirmations using SMTP
* Fully responsive design

### 🛠️ Admin Features

* Add and manage movies
* Schedule shows
* Track bookings
* Control platform data

---

## 🧑‍💻 Tech Stack

### Frontend

* React.js
* Vite
* Tailwind CSS

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas

### Authentication

* Clerk

### Payments

* Stripe

### Email Service

* SMTP (Nodemailer) — Used for sending booking confirmations and notifications

### Background Jobs

* Inngest

### Deployment

* Frontend: Vercel
* Backend: Node Server
* Database: MongoDB Atlas

---

# ⚙️ Run Locally

## 1️⃣ Clone Repository

```bash
git clone https://github.com/Anas-8809/BookShow.git
cd BookShow
```

---

# 🔧 Backend Setup

```bash
cd server
npm install
```

Create a **.env** file inside `server/` and add:

```env
# Database
MONGODB_URI=your_mongodb_uri

# Clerk Authentication
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# Movie Data
TMDB_API_KEY=your_tmdb_api_key

# SMTP Credentials (for sending emails)
SENDER_EMAIL=your_sender_email
SMTP_USER=your_smtp_user
SMTP_PASS=your_smtp_password

# Inngest
INNGEST_EVENT_KEY=your_inngest_event_key
INNGEST_SIGNING_KEY=your_inngest_signing_key

# Stripe
STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
```

Start the backend:

```bash
npm start
```

Server runs on:

```
http://localhost:3000
```

---

# 💻 Frontend Setup

```bash
cd client
npm install
```

Create `.env` inside `client/`:

```env
VITE_CURRENCY=$
VITE_BASE_URL=http://localhost:3000
VITE_TMDB_IMAGE_BASE_URL=https://image.tmdb.org/t/p/original

VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
```

Run frontend:

```bash
npm run dev
```

---

# 🔐 Environment Variables (IMPORTANT)

✅ Never push `.env` files to GitHub.
✅ Always add them to `.gitignore`.
✅ Use `.env.example` when sharing the project.

---

## 📌 Recommended `.env.example` Practice

Create:

```
server/.env.example
client/.env.example
```

---

# 🧪 Test Payments

Use Stripe test card:

```
4242 4242 4242 4242
Expiry: Any future date  
CVC: Any 3 digits  
```

---

# 🚀 Future Improvements

* 🎟️ QR-based ticket validation
* 🍿 Snack pre-ordering
* 📊 Advanced admin analytics

---

# 🤝 Contributing

Contributions are welcome!
Feel free to fork the repo and submit a pull request.

---

# ⭐ Support

If you found this project helpful, consider giving it a **star ⭐ on GitHub!**

---

# 👨‍💻 Author

**Md Anas**

---

🔥 *BookShow makes movie ticket booking fast, secure, and effortless.*
