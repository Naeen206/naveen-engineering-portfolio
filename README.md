# Naveen Kumar P — Engineering Portfolio

A polished, responsive personal engineering portfolio website for **Naveen Kumar P**, Electronics and Communication Engineering student at **SIMATS Engineering**, Chennai (CGPA 8.4/10).

Designed specifically for technical recruiters, engineering managers, and placement evaluators in embedded systems, IoT, automotive electronics, and digital design.

---

## 🌟 Key Features

- **Hybrid Dark Technical Aesthetic**: Deep navy and charcoal styling with subtle cyan/electric blue accents and circuit-inspired interactive backdrop.
- **Truthful & Authentic Content**: Accurately showcases real academic standing, the HL Mando industrial trainee experience, and the Smart Energy Audit System project.
- **Fully Responsive & Accessible**: Fluid layout tested across mobile screens, tablets, and desktop displays with ARIA attributes and keyboard navigation.
- **Centralized Data Model (`js/data.js`)**: All personal profile information, skills, experience, project components, and contact details are stored in one readable configuration file.
- **Dynamic Background (`js/circuit-bg.js`)**: Lightweight canvas-based circuit traces that automatically respect the user's `prefers-reduced-motion` settings.
- **Missing Asset Detection**: Intelligent fallback notices for resume files or external links, ensuring zero broken download actions or recruiter frustration.
- **Zero Heavy Dependencies**: Pure semantic HTML5, Vanilla CSS, and modern JavaScript for maximum load speed, performance, and maintainability.

---

## 📂 Project Structure

```text
portfolio/
├── index.html              # Main single-page application structure & semantic layout
├── css/
│   └── style.css           # Design system tokens, typography, grid, and responsiveness
├── js/
│   ├── data.js             # Centralized profile, skills, experience, and project data
│   ├── circuit-bg.js       # Subtle animated canvas background with circuit traces
│   └── main.js             # Interactive controller (mobile navigation, modal, resume checker)
├── assets/
│   ├── docs/
│   │   └── Naveen_Kumar_P_Resume.pdf  # Place your official resume PDF here
│   └── images/             # Folder for personal photo and project schematics
└── README.md               # Documentation and local setup instructions
```

---

## 🚀 Running Locally

Because this project uses standard browser APIs and module-free JavaScript, you can run it locally in multiple ways:

### Option 1: VS Code Live Server (Recommended)
1. Open the `portfolio` folder in **VS Code**.
2. Install the **Live Server** extension (by Ritwick Dey).
3. Right-click `index.html` and click **"Open with Live Server"**.
4. The site will launch automatically at `http://127.0.0.1:5500`.

### Option 2: Python Simple HTTP Server
Open your terminal in the portfolio directory and run:
```bash
# Python 3
python -m http.server 8000
```
Then navigate to `http://localhost:8000` in your web browser.

### Option 3: Node.js `npx serve`
```bash
npx -y serve .
```

---

## 🌐 Deploying to GitHub Pages (Free)

Deploying this portfolio directly to GitHub Pages takes under 2 minutes:

1. **Commit and push** all files to your GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "feat: complete engineering portfolio for Naveen Kumar P"
   git branch -M main
   git remote add origin https://github.com/Naeen206/naveen-engineering-portfolio.git
   git push -u origin main
   ```
2. Navigate to your repository on [GitHub](https://github.com/Naeen206/naveen-engineering-portfolio).
3. Click on **Settings** > **Pages** (under Code and automation in the left sidebar).
4. Under **Branch**, select `main` and root folder `/ (root)`, then click **Save**.
5. Your portfolio will be live at:
   `https://naeen206.github.io/naveen-engineering-portfolio/`

---

## 📝 Important Steps for Naveen

1. **Add Your Resume PDF**:
   - Place your real PDF resume file inside:
     `assets/docs/Naveen_Kumar_P_Resume.pdf`
   - Once placed, both the "Download Resume" and "View in Browser" buttons will instantly work.
2. **Add Your Photograph (Optional)**:
   - If you want to use a formal portrait instead of the technical initials placeholder, place your photo inside `assets/images/profile.jpg` and replace the placeholder inside `index.html`.
3. **Customize or Update Information**:
   - Whenever you acquire a new skill, complete your HCLTech certification, or publish a new project, edit `js/data.js` to update the website instantly.
