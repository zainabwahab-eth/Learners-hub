# LinkVault

**LinkVault** is a platform designed to help developers (and lifelong learners in general) **organize, manage, and share their learning resources** in one simple, structured space.  
Users can create topic-based folders and fill them with helpful links to blogs, tutorials, courses, or videos.

Built with **React (Vite)** on the frontend and **NestJS + Supabase** on the backend, LinkVault provides a seamless and collaborative learning experience.

---

## 🚀 Features

- 🔐 **Authentication** — Sign up or log in using **Google** or **email/password**.
- 📁 **Create and Manage Folders** — Organize your learning resources by topic.
- 🔗 **Add Links Easily** — Each link includes a title, URL, and optional description.
- 🌍 **Explore Community Folders** — Browse folders shared by other users to discover new learning materials.
- ⭐ **Bookmark Folders** — Save interesting folders for quick access later.
- 💬 **Contribution System (Upcoming)** —
  - Users can contribute new links to existing public folders.
  - Folder owners receive contribution requests and can **accept** or **reject** them.
  - Accepted links are added automatically to the folder, with optional feedback messages.
- 📱 **Responsive Design** — Optimized for desktop, tablet, and mobile screens.

---

## 🧠 Tech Stack

**Frontend** (`frontend/`):

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [React Router](https://reactrouter.com/)
- [Supabase JS](https://supabase.com/docs/reference/javascript) for authentication
- [Axios](https://axios-http.com/) for talking to the backend API

**Backend** (`backend/`):

- [NestJS](https://nestjs.com/)
- [Prisma](https://www.prisma.io/) ORM
- [Supabase](https://supabase.com/) for the hosted Postgres database, and Auth (the backend verifies Supabase-issued JWTs)

---

## 📂 Project Structure

```
Learners-hub/
├── frontend/   # React (Vite) client — talks to Supabase Auth directly, and to the backend API for data
└── backend/    # NestJS API — owns folders/links/bookmarks, backed by Prisma + Supabase Postgres
```

---

## ⚙️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/zainabwahab-eth/Learners-hub
cd Learners-hub
```

### 2. Set Up a Supabase Project

1. Create a free project at [supabase.com](https://supabase.com).
2. **(Optional, for Google sign-in)** Go to **Authentication → Providers → Google**, enable it, and add your Google OAuth Client ID/Secret. Add the redirect URI Supabase gives you to your Google Cloud OAuth credentials.
3. Under **Authentication → URL Configuration**, set the Site URL to `http://localhost:5173` and add `http://localhost:5173/auth/callback` to the redirect allow-list.
4. From **Settings → API**, copy the **Project URL**, **anon public key**, and **service_role key**.
5. From **Settings → Database → Connection string**, copy the **Direct connection** URI (use this one, not the transaction pooler, so Prisma migrations work correctly).

### 3. Backend Setup

```bash
cd backend
npm install
```

Fill in `backend/.env`:

```bash
DATABASE_URL=postgresql://postgres:<password>@db.<project-ref>.supabase.co:5432/postgres
SUPABASE_URL=https://<project-ref>.supabase.co
SUPABASE_SERVICE_ROLE_KEY=<service-role-key>
PORT=3000
FRONTEND_URL=http://localhost:5173
```

Apply the database schema, then start the server:

```bash
npx prisma migrate dev
npm run start:dev
```

The API will be running on 👉 `http://localhost:3000`

### 4. Frontend Setup

```bash
cd frontend
npm install
```

Fill in `frontend/.env`:

```bash
VITE_SUPABASE_URL=https://<project-ref>.supabase.co
VITE_SUPABASE_ANON_KEY=<anon-key>
VITE_API_URL=http://localhost:3000
```

Then run the dev server:

```bash
npm run dev
```

Your app should now be running on 👉 `http://localhost:5173`

---

## ☁️ Deployment

LinkVault's database and authentication are hosted on **Supabase**. The frontend can be deployed to any static host (e.g. Vercel, Netlify), and the backend to any Node host (e.g. Railway, Render, Fly.io) — just make sure to set the same environment variables described above on each, pointing `FRONTEND_URL` / `VITE_API_URL` at your deployed URLs.


## 🤝 Open Source Vision

LinkVault is **open source and community-driven**.  
The goal is to build a collaborative space where anyone can contribute useful learning links to public folders — making it easier for developers to learn together.

Contributions, feedback, and ideas are always welcome!

---

## 🛠️ Run Scripts

**Frontend** (`frontend/`):

| Command           | Description                  |
| ----------------- | ----------------------------- |
| `npm run dev`     | Run in development mode      |
| `npm run build`   | Build for production         |
| `npm run preview` | Preview the production build |
| `npm run lint`    | Lint the source code         |

**Backend** (`backend/`):

| Command              | Description                          |
| --------------------- | ------------------------------------- |
| `npm run start:dev`    | Run in development mode (watch)      |
| `npm run build`        | Compile to `dist/`                   |
| `npm run start:prod`   | Run the compiled production build    |
| `npm run lint`         | Lint the source code                 |
| `npm run test`         | Run unit tests                       |
| `npm run test:e2e`     | Run end-to-end tests                 |

---

## 🧑‍🎨 Author

**Wahab Zainab**  
Backend Developer & UI/UX Designer

- 💼 [LinkedIn](https://www.linkedin.com/in/zainab-wahab-8280ba326/)
- 🐦 [Twitter](https://x.com/zaynab_eth)

---

## 📄 License

This project is licensed under the **MIT License** — feel free to use, modify, and build upon it.
