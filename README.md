# LinkVault

**LinkVault** is a platform designed to help developers (and lifelong learners in general) **organize, manage, and share their learning resources** in one simple, structured space.  
Users can create topic-based folders and fill them with helpful links to blogs, tutorials, courses, or videos.

Built with **React (Vite)** and **Appwrite Cloud**, LinkVault provides a seamless and collaborative learning experience.

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

**Frontend:**

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [React Router](https://reactrouter.com/)

**Backend:**

- [Appwrite Cloud](https://appwrite.io/cloud) for Authentication, Database, and Storage

**Other Tools:**

- Appwrite OAuth (Google)
- Appwrite SDK

---

## ⚙️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/zainabwahab-eth/Learners-hub
cd learners-hub
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root folder and add your Appwrite configuration:

```bash
VITE_APPWRITE_PROJECT_ID=your_appwrite_project_id
VITE_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
VITE_APPWRITE_DATABASE_ID=your_database_id
```

> You can find these values in your Appwrite Cloud console.

### 4. Run the Development Server

```bash
npm run dev
```

Your app should now be running on  
👉 `http://localhost:5173`

---

## ☁️ Deployment

LinkVault is deployed on **Appwrite Hosting** with **Appwrite Cloud backend**.

---

## 🧩 Upcoming Features

- 📬 Email notifications for contribution requests
- 💡 Folder insights and analytics
- 🧑‍💻 Profile pages showing users’ shared folders
- 🌈 Dark mode

---

## 🤝 Open Source Vision

LinkVault is **open source and community-driven**.  
The goal is to build a collaborative space where anyone can contribute useful learning links to public folders — making it easier for developers to learn together.

Contributions, feedback, and ideas are always welcome!

---

## 🛠️ Run Scripts

| Command           | Description                  |
| ----------------- | ---------------------------- |
| `npm run dev`     | Run in development mode      |
| `npm run build`   | Build for production         |
| `npm run preview` | Preview the production build |

---

## 🧑‍🎨 Author

**Wahab Zainab**  
Backend Developer & UI/UX Designer

- 💼 [LinkedIn](https://www.linkedin.com/in/zainab-wahab-8280ba326/)
- 🐦 [Twitter](https://x.com/zaynab_eth)

---

## 📄 License

This project is licensed under the **MIT License** — feel free to use, modify, and build upon it.
