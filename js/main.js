/**
 * Main Application Logic & Interactive Controller
 * Coordinates DOM binding with PORTFOLIO_DATA, smooth scrolling, modal states, and accessibility
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  renderDynamicData();
  initModal();
  initResumeChecker();
  initCopyActions();
  initDynamicYear();
  initScrollSpy();
});

// Mobile Navigation & Sticky Header
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Navbar background change on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Toggle mobile menu
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', !isExpanded);
      navMenu.classList.toggle('open');
    });

    // Close on link click
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Close on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navMenu.classList.contains('open')) {
        navMenu.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.focus();
      }
    });
  }
}

// Active Nav Link Spy on Scroll
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let currentId = '';
    const scrollPos = window.scrollY + 120;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = sec.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('active');
      }
    });
  });
}

// Render dynamic sections from data.js
function renderDynamicData() {
  if (typeof PORTFOLIO_DATA === 'undefined') return;

  // 1. Render Skills
  const skillsContainer = document.getElementById('skills-container');
  if (skillsContainer && PORTFOLIO_DATA.skills) {
    skillsContainer.innerHTML = PORTFOLIO_DATA.skills.map(cat => `
      <div class="skill-category-card">
        <div class="skill-category-header">
          <div class="skill-category-icon" aria-hidden="true">
            ${getCategoryIcon(cat.icon)}
          </div>
          <h3 class="skill-category-title">${cat.category}</h3>
        </div>
        <div class="skill-chips">
          ${cat.items.map(skill => `
            <div class="skill-chip">
              <span>${skill.name}</span>
              ${skill.type ? `<span class="skill-chip-desc">• ${skill.type}</span>` : ''}
            </div>
          `).join('')}
        </div>
      </div>
    `).join('');
  }

  // 2. Render Experience
  const expContainer = document.getElementById('experience-timeline');
  if (expContainer && PORTFOLIO_DATA.experience) {
    expContainer.innerHTML = PORTFOLIO_DATA.experience.map(exp => `
      <div class="timeline-item">
        <div class="timeline-marker" aria-hidden="true"></div>
        <div class="experience-card">
          <div class="exp-header">
            <div>
              <h3 class="exp-role">${exp.role}</h3>
              <div class="exp-company">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>
                ${exp.company}
              </div>
            </div>
            <span class="exp-duration">${exp.duration}</span>
          </div>

          <div class="exp-meta">
            <span class="exp-meta-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              ${exp.location}
            </span>
            <span class="exp-meta-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/></svg>
              ${exp.line}
            </span>
          </div>

          <p class="exp-summary">${exp.summary}</p>

          <h4 style="font-size:0.9rem; margin-bottom:0.6rem; color:var(--text-primary); font-family:var(--font-mono);">Key Responsibilities:</h4>
          <ul class="exp-responsibilities">
            ${exp.responsibilities.map(resp => `<li>${resp}</li>`).join('')}
          </ul>

          <div class="tag-list">
            ${exp.technologies.map(t => `<span class="tag-badge">${t}</span>`).join('')}
          </div>
        </div>
      </div>
    `).join('');
  }

  // 3. Render Certifications
  const certContainer = document.getElementById('certifications-container');
  if (certContainer && PORTFOLIO_DATA.certifications) {
    certContainer.innerHTML = PORTFOLIO_DATA.certifications.map(cert => `
      <div class="cert-card">
        <div class="cert-main">
          <div class="cert-badge-row">
            <span class="tag-badge">${cert.badge}</span>
            <span class="cert-status-badge">● ${cert.status}</span>
          </div>
          <h3 class="cert-title">${cert.title}</h3>
          <div class="cert-provider">${cert.provider}</div>
          <p class="cert-desc">${cert.description}</p>
          <div class="cert-note">${cert.credentialNote}</div>
        </div>
      </div>
    `).join('');
  }
}

// Icon helper
function getCategoryIcon(iconType) {
  switch (iconType) {
    case 'code':
      return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`;
    case 'cpu':
      return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/></svg>`;
    case 'activity':
      return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`;
    case 'git-branch':
      return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="6" x2="6" y1="3" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/></svg>`;
    case 'compass':
    default:
      return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>`;
  }
}

// Project Details Modal Handler
function initModal() {
  const openBtn = document.getElementById('open-project-modal-btn');
  const modal = document.getElementById('project-modal');
  const closeBtn = document.getElementById('close-project-modal-btn');

  if (!modal) return;

  function openModal() {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    if (closeBtn) closeBtn.focus();
  }

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    if (openBtn) openBtn.focus();
  }

  if (openBtn) {
    openBtn.addEventListener('click', openModal);
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  // Backdrop click closes modal
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // ESC key closes modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}

// Resume Verification & Download Handling
function initResumeChecker() {
  const downloadBtn = document.getElementById('download-resume-btn');
  const viewBtn = document.getElementById('view-resume-btn');
  const heroResumeBtn = document.getElementById('hero-resume-btn');
  const statusBox = document.getElementById('resume-status-box');

  const resumePath = PORTFOLIO_DATA && PORTFOLIO_DATA.resume ? PORTFOLIO_DATA.resume.filePath : 'assets/docs/Naveen_Kumar_P_Resume.pdf';

  // Check if file exists via HEAD fetch
  fetch(resumePath, { method: 'HEAD' })
    .then(response => {
      if (!response.ok) {
        showMissingNotice();
      }
    })
    .catch(() => {
      showMissingNotice();
    });

  function showMissingNotice() {
    if (statusBox) {
      statusBox.classList.add('active', 'warning');
      statusBox.innerHTML = `
        <strong>Notice for Recruiter / User:</strong> The resume file <code>assets/docs/Naveen_Kumar_P_Resume.pdf</code> has not yet been placed in the repository. 
        Please place your updated PDF at <code>assets/docs/Naveen_Kumar_P_Resume.pdf</code> to enable seamless in-browser preview and one-click downloading.
      `;
    }

    // Attach user alert if clicked before placement
    const handleMissingClick = (e) => {
      e.preventDefault();
      alert("Resume file (Naveen_Kumar_P_Resume.pdf) has not yet been placed in the 'assets/docs/' directory. Please place your PDF file in that folder to enable download.");
    };

    if (downloadBtn) downloadBtn.addEventListener('click', handleMissingClick);
    if (viewBtn) viewBtn.addEventListener('click', handleMissingClick);
    if (heroResumeBtn) heroResumeBtn.addEventListener('click', handleMissingClick);
  }
}

// Copy Email Utility
function initCopyActions() {
  const copyBtn = document.getElementById('copy-email-btn');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const email = PORTFOLIO_DATA.personal.email;
      navigator.clipboard.writeText(email).then(() => {
        const originalText = copyBtn.innerHTML;
        copyBtn.innerHTML = `
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#34d399" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          <span style="color:#34d399;">Copied!</span>
        `;
        setTimeout(() => {
          copyBtn.innerHTML = originalText;
        }, 2200);
      }).catch(err => {
        console.error('Failed to copy: ', err);
      });
    });
  }
}

// Dynamic Footer Copyright Year
function initDynamicYear() {
  const yearSpan = document.getElementById('copyright-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
}
