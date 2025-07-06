# 📚 Minimal Library Management System

A simple and elegant web application that allows users to browse, borrow, and view summaries of books. Built using the **MERN stack**, this system provides core features like book listings, borrow functionality, and a borrow summary without authentication or payment integration.

## 🚀 Important Links

- Frontend Github Link - https://github.com/salehiin/L2_A4_libraryManagement-frontend
- Frontend Live Link: https://minimal-library-management-system-jade.vercel.app/

- Backend GitHub Link: https://github.com/salehiin/L2_A3_libraryManagement
- Backend Live Link: https://l2-a3-library-management-k53m.vercel.app/

<!-- 🔗 [Visit Live App](https://l2-a3-library-management-k53m.vercel.app) -->

---

## ✨ Features

- 📖 Browse books with details like title, author, genre, ISBN, and availability
- 🔍 View single book details on a dedicated page
- 📝 Borrow books with quantity and due date validation
- 📊 Borrow Summary page shows total quantity borrowed (aggregation API)
- ✅ Availability auto-updates based on remaining copies
- 🎨 Responsive and mobile-first design
- ⚛️ React Hook Form, RTK Query, ShadCN UI, and TypeScript used for form handling, API, and UI

---

## 🛠️ Tech Stack

**Frontend**:
- Vite + React
- Redux Toolkit + RTK Query
- TypeScript
- React Router DOM
- ShadCN UI + TailwindCSS
- Toast Notifications

**Backend**:
- Node.js + Express
- MongoDB + Mongoose
- RESTful API (Hosted on Vercel)

---

## 📂 Project Structure (Client)

src/
│
├── components/
│ ├── BookList.tsx
│ ├── ui/ # ShadCN-based form and UI elements
│ └── module/
│ ├── books/
│ └── borrow/
│
├── pages/
│ ├── Home.tsx
│ ├── Books.tsx
│ ├── BookDetails.tsx
│ └── BorrowSummary.tsx
│
├── redux/
│ ├── api/baseApi.ts
│ └── store.ts
│
└── types/
└── index.ts



## 🔐 Borrow Feature Business Logic
Quantity cannot exceed available copies

If book copies reach 0, it is marked as unavailable

Borrow data is stored with bookId, quantity, and dueDate

Borrow summary aggregates borrowed quantity per book (title + ISBN)


## 📈 API Endpoints (Backend)
GET /api/books – Get all books

POST /api/books – Add a book

PATCH /api/books/:id – Update book

DELETE /api/books/:id – Delete book

POST /api/borrow – Borrow a book

GET /api/borrow – Get borrow summary (aggregated)


## Thanks