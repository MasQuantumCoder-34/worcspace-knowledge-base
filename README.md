# Worcspace – Knowledge Base UI

A pixel-accurate React implementation of the Worcspace Knowledge Base screens, built with React 18 + Tailwind CSS.

---

## 📁 Folder Structure

```
worcspace-knowledge-base/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header/
│   │   │   └── Header.jsx          # Top nav bar (logo, search, notifications)
│   │   ├── Sidebar/
│   │   │   └── Sidebar.jsx         # Left navigation sidebar
│   │   ├── KnowledgeBase/
│   │   │   ├── KnowledgeBasePage.jsx   # Main page with grid & search
│   │   │   ├── KnowledgeBaseCard.jsx   # Individual KB card
│   │   │   └── Pagination.jsx          # Bottom pagination bar
│   │   └── Modal/
│   │       └── CreateKnowledgeBaseModal.jsx  # Slide-in create modal
│   ├── App.jsx                     # Root component, modal state
│   ├── index.js                    # React entry point
│   └── index.css                   # Tailwind directives + global styles
├── tailwind.config.js
├── package.json
└── README.md
```

---

## 🚀 Setup & Run (Step by Step)

### Prerequisites
- Node.js v16+ installed → https://nodejs.org
- Git installed → https://git-scm.com

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/worcspace-knowledge-base.git
cd worcspace-knowledge-base
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm start
```

Opens at **http://localhost:3000**

### 4. Build for production

```bash
npm run build
```

Output is in the `build/` folder.

---

## 📤 Pushing to GitHub (Step by Step)

### Step 1 – Create a new repo on GitHub
1. Go to https://github.com/new
2. Name it `worcspace-knowledge-base`
3. Leave it empty (no README, no .gitignore)
4. Click **Create repository**

### Step 2 – Initialize git locally

```bash
cd worcspace-knowledge-base
git init
git add .
git commit -m "Initial commit: Worcspace Knowledge Base UI"
```

### Step 3 – Link and push

```bash
git remote add origin https://github.com/YOUR_USERNAME/worcspace-knowledge-base.git
git branch -M main
git push -u origin main
```

### Step 4 – Deploy to GitHub Pages

1. **Update package.json**: Replace `YOUR_USERNAME` in the `homepage` field with your actual GitHub username.

2. **Deploy the app**:
   ```bash
   npm run deploy
   ```

3. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Click **Settings** > **Pages**
   - Under "Source", select **Deploy from a branch**
   - Choose **gh-pages** branch and **/(root)** folder
   - Click **Save**

Your app will be live at `https://YOUR_USERNAME.github.io/worcspace-knowledge-base`

---

## 🎨 Design Tokens

| Token | Value |
|-------|-------|
| Primary Color | `#4F46E5` (Indigo 600) |
| Secondary Color | `#1E1B4B` (Indigo 950) |
| Font | Inter (Google Fonts) |

---

## ✅ Features Implemented

- [x] **Screen 1** – Knowledge Base home page with 3-column card grid
- [x] **Screen 2** – Slide-in "Create New" modal with form validation
- [x] **Create New button** – Clickable, opens modal
- [x] **Form fields** – Name (required), Description, Vector Store dropdown, LLM Embedding Model dropdown
- [x] **Create action** – Adds new card to the grid immediately
- [x] **Search** – Live filter on Knowledge Base cards
- [x] **Pagination** – Row count display, rows-per-page selector
- [x] **Sidebar** – All navigation items with active state on Knowledge Base
- [x] **Responsive** – Works across screen sizes
- [x] **Pixel-accurate** – Colors, spacing, and typography match the Figma design

---

## 🧩 Component Architecture

| Component | Purpose |
|-----------|---------|
| `App.jsx` | Root: owns modal open/close state |
| `Header` | Logo, workspace selector, global search, notifications, avatar |
| `Sidebar` | Left nav with section labels and active item highlight |
| `KnowledgeBasePage` | Page header (title + search + Create New), card grid |
| `KnowledgeBaseCard` | Reusable card: name, description, created date, options menu |
| `Pagination` | Row count, rows-per-page, page indicator, nav buttons |
| `CreateKnowledgeBaseModal` | Slide-in panel: form with validation, Create button |
