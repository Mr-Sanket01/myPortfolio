# Sanket Shrikrishna Jadhav - Personal Portfolio Website

A minimal, clean, and modern personal developer portfolio built with **HTML5**, **Plain CSS**, and **React** powered by **Vite**.

Designed with generous white space, a light aesthetic, a calm accent blue (`#2563eb`), crisp typography (Inter), smooth scrolling, mobile responsiveness with a hamburger menu, accessible form validation, and zero third-party UI/CSS libraries.

---

## 🌟 Live Demo & Preview
- **Local Dev Server:** `http://localhost:5173/`
- **GitHub Repository:** [https://github.com/Mr-Sanket01](https://github.com/Mr-Sanket01)

---

## 📁 Project Structure

```text
myPortfolio/
├── index.html
├── vite.config.js
├── package.json
├── README.md
├── public/
│   ├── favicon.svg
│   └── resume.pdf
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── assets/
    │   └── avatar.svg
    ├── data/
    │   └── portfolioData.js
    ├── components/
    │   ├── SectionTitle.jsx
    │   ├── SkillTag.jsx
    │   ├── ProjectCard.jsx
    │   ├── Navbar.jsx
    │   ├── Hero.jsx
    │   ├── About.jsx
    │   ├── Skills.jsx
    │   ├── Projects.jsx
    │   ├── Education.jsx
    │   ├── Certificates.jsx
    │   ├── Contact.jsx
    │   └── Footer.jsx
    └── styles/
        ├── styles.css
        ├── SectionTitle.css
        ├── SkillTag.css
        ├── ProjectCard.css
        ├── Navbar.css
        ├── Hero.css
        ├── About.css
        ├── Skills.css
        ├── Projects.css
        ├── Education.css
        ├── Certificates.css
        ├── Contact.css
        └── Footer.css
```

---

## 🚀 Quick Setup & Run Instructions

### Prerequisites
- [Node.js](https://nodejs.org/) (v18.0.0 or higher recommended)
- `npm` (comes with Node.js)

### 1. Clone the repository & navigate to directory
```bash
git clone https://github.com/Mr-Sanket01/myPortfolio.git
cd myPortfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start local development server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser. Any change saved in `src/` will hot-reload instantly.

### 4. Create production build
```bash
npm run build
```
This generates an optimized static bundle in the `dist/` directory.

### 5. Preview production build locally
```bash
npm run preview
```

---

## 🌐 Deployment to GitHub Pages

This project is pre-configured with `gh-pages` and relative asset resolution (`base: './'` in `vite.config.js`).

### Step-by-Step GitHub Pages Deployment:

1. **Initialize Git & push to your GitHub repo (if not already done):**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio release"
   git branch -M main
   git remote add origin https://github.com/Mr-Sanket01/myPortfolio.git
   git push -u origin main
   ```

2. **Deploy automatically using the npm script:**
   ```bash
   npm run deploy
   ```
   *Note: This command runs `npm run build` and automatically pushes the contents of `dist/` to the `gh-pages` branch on your GitHub repository.*

3. **Configure GitHub Pages in your repository settings:**
   - Go to your repository on GitHub (`https://github.com/Mr-Sanket01/myPortfolio`).
   - Navigate to **Settings** > **Pages** (under the "Code and automation" section).
   - Under **Build and deployment > Source**, select **Deploy from a branch**.
   - Under **Branch**, select `gh-pages` and `/ (root)`, then click **Save**.
   - Your portfolio will be live at:
     ```text
     https://mr-sanket01.github.io/myPortfolio/
     ```

---

## ✏️ How to Edit Content

All personal data, projects, educational background, and contact links are centralized in:
```text
src/data/portfolioData.js
```
To update your bio, skills, or add a new project, edit `src/data/portfolioData.js`. The components will automatically adapt without modifying any JSX or CSS!

---

## 📄 License
This project is open source and available under the [MIT License](LICENSE).
