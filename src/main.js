import './style.css';

// ===== APP TEMPLATE =====
document.querySelector('#app').innerHTML = `
  <!-- Navigation -->
  <nav class="navbar" id="navbar">
    <div class="nav-container">
      <a href="#home" class="nav-logo">
        <div class="logo-icon">
          <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 4L4 20L8 36H32L36 20L20 4Z" stroke="currentColor" stroke-width="2" fill="none"/>
            <path d="M12 28C12 28 16 22 20 22C24 22 28 28 28 28" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            <circle cx="20" cy="16" r="3" stroke="currentColor" stroke-width="2"/>
            <path d="M20 4V13" stroke="currentColor" stroke-width="2"/>
          </svg>
        </div>
        <span class="logo-text">MarineTech<span class="logo-accent">Pro</span></span>
      </a>
      <div class="nav-links" id="navLinks">
        <a href="#home" class="nav-link active">Home</a>
        <a href="#services" class="nav-link">Services</a>
        <a href="#about" class="nav-link">About</a>
        <a href="#experience" class="nav-link">Experience</a>
        <a href="#contact" class="nav-link">Contact</a>
      </div>
      <a href="#contact" class="nav-cta">Get a Quote</a>
      <button class="nav-toggle" id="navToggle" aria-label="Toggle navigation menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </nav>

  <!-- Hero Section -->
  <section class="hero" id="home">
    <div class="hero-bg">
      <img src="/images/hero.png" alt="Ship repair in dry dock" class="hero-bg-img">
      <div class="hero-overlay"></div>
    </div>
    <div class="hero-content">
      <div class="hero-badge">
        <span class="badge-dot"></span>
        <span>20+ Years of Marine Excellence</span>
      </div>
      <h1 class="hero-title">
        Expert Ship <span class="gradient-text">Electrical</span> &
        <span class="gradient-text">Mechanical</span> Repair
      </h1>
      <p class="hero-subtitle">
        Delivering world-class marine engineering solutions — from complex electrical systems
        and mechanical overhauls to cutting-edge shipboard automation.
      </p>
      <div class="hero-actions">
        <a href="#services" class="btn btn-primary">
          <span>Explore Services</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
        <a href="#contact" class="btn btn-outline">
          <span>Contact Us</span>
        </a>
      </div>
      <div class="hero-stats-mini">
        <div class="stat-mini">
          <span class="stat-mini-value">500+</span>
          <span class="stat-mini-label">Projects</span>
        </div>
        <div class="stat-mini-divider"></div>
        <div class="stat-mini">
          <span class="stat-mini-value">20+</span>
          <span class="stat-mini-label">Years</span>
        </div>
        <div class="stat-mini-divider"></div>
        <div class="stat-mini">
          <span class="stat-mini-value">100%</span>
          <span class="stat-mini-label">Reliability</span>
        </div>
      </div>
    </div>
  </section>

  <!-- Services Section -->
  <section class="services" id="services">
    <div class="container">
      <div class="section-header reveal">
        <span class="section-tag">Our Services</span>
        <h2 class="section-title">Comprehensive <span class="gradient-text">Marine Solutions</span></h2>
        <p class="section-desc">From routine maintenance to complex overhauls, we deliver end-to-end marine engineering services with unmatched precision.</p>
      </div>
      <div class="services-grid">
        <!-- Service 1 -->
        <div class="service-card reveal" id="service-electrical">
          <div class="service-icon-wrap">
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M28 4L10 28H24L20 44L38 20H24L28 4Z" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <h3 class="service-title">Electrical Systems</h3>
          <p class="service-desc">Complete ship electrical repair, installation, and troubleshooting. Generators, switchboards, motors, and power distribution networks.</p>
          <ul class="service-list">
            <li>Generator Overhaul & Repair</li>
            <li>Main Switchboard Services</li>
            <li>Motor Rewinding & Replacement</li>
            <li>Power Distribution Systems</li>
          </ul>
          <div class="service-card-footer">
            <a href="#contact" class="service-link">
              Learn More
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>
        </div>
        <!-- Service 2 -->
        <div class="service-card featured reveal" id="service-mechanical">
          <div class="service-badge">Most Popular</div>
          <div class="service-icon-wrap">
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="24" cy="24" r="8" stroke="currentColor" stroke-width="2.5"/>
              <path d="M24 4V10" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
              <path d="M24 38V44" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
              <path d="M4 24H10" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
              <path d="M38 24H44" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
              <path d="M9.86 9.86L14.1 14.1" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
              <path d="M33.9 33.9L38.14 38.14" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
              <path d="M9.86 38.14L14.1 33.9" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
              <path d="M33.9 14.1L38.14 9.86" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
            </svg>
          </div>
          <h3 class="service-title">Mechanical Repair</h3>
          <p class="service-desc">Expert mechanical repair for all ship propulsion and auxiliary systems. Main engines, pumps, compressors, and deck machinery.</p>
          <ul class="service-list">
            <li>Main Engine Overhaul</li>
            <li>Pump & Compressor Repair</li>
            <li>Hydraulic System Services</li>
            <li>Deck Machinery Maintenance</li>
          </ul>
          <div class="service-card-footer">
            <a href="#contact" class="service-link">
              Learn More
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>
        </div>
        <!-- Service 3 -->
        <div class="service-card reveal" id="service-automation">
          <div class="service-icon-wrap">
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="8" y="8" width="14" height="14" rx="2" stroke="currentColor" stroke-width="2.5"/>
              <rect x="26" y="8" width="14" height="14" rx="2" stroke="currentColor" stroke-width="2.5"/>
              <rect x="8" y="26" width="14" height="14" rx="2" stroke="currentColor" stroke-width="2.5"/>
              <rect x="26" y="26" width="14" height="14" rx="2" stroke="currentColor" stroke-width="2.5"/>
              <path d="M22 15H26" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
              <path d="M15 22V26" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
              <path d="M33 22V26" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
              <path d="M22 33H26" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
            </svg>
          </div>
          <h3 class="service-title">Automation & Control</h3>
          <p class="service-desc">Modern ship automation, PLC programming, SCADA systems, and integrated control solutions for intelligent vessel operations.</p>
          <ul class="service-list">
            <li>PLC Programming & Configuration</li>
            <li>SCADA System Integration</li>
            <li>Alarm & Monitoring Systems</li>
            <li>Remote Diagnostics Setup</li>
          </ul>
          <div class="service-card-footer">
            <a href="#contact" class="service-link">
              Learn More
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- About Me Section -->
  <section class="about-section" id="about">
    <div class="container">
      <div class="section-header reveal">
        <span class="section-tag">About Me</span>
        <h2 class="section-title">The <span class="gradient-text">Engineer</span> Behind the Work</h2>
      </div>
      <div class="about-content reveal">
        <p class="about-text">
          With over two decades of hands-on experience in the maritime industry, I have dedicated my career to keeping vessels running safely and efficiently across the world's oceans. From troubleshooting complex electrical faults on cargo ships in the Arabian Sea to overhauling main engines at dry docks in Mumbai, every project has deepened my expertise and passion for marine engineering. I founded MarineTech Pro with a simple belief — that every ship deserves reliable, world-class engineering support delivered with honesty, precision, and an unwavering commitment to safety.
        </p>
      </div>
    </div>
  </section>

  <!-- Stats / Experience Section -->
  <section class="stats-section" id="experience">
    <div class="stats-bg">
      <img src="/images/automation.png" alt="Ship automation control room" class="stats-bg-img">
      <div class="stats-overlay"></div>
    </div>
    <div class="container">
      <div class="section-header light reveal">
        <span class="section-tag light">Track Record</span>
        <h2 class="section-title light">Numbers That Speak <span class="gradient-text">For Themselves</span></h2>
      </div>
      <div class="stats-grid">
        <div class="stat-card reveal">
          <span class="stat-value" data-target="20">0</span><span class="stat-suffix">+</span>
          <div class="stat-label">Years Experience</div>
          <div class="stat-bar"><div class="stat-bar-fill" data-width="100"></div></div>
        </div>
        <div class="stat-card reveal">
          <span class="stat-value" data-target="500">0</span><span class="stat-suffix">+</span>
          <div class="stat-label">Projects Completed</div>
          <div class="stat-bar"><div class="stat-bar-fill" data-width="90"></div></div>
        </div>
        <div class="stat-card reveal">
          <span class="stat-value" data-target="150">0</span><span class="stat-suffix">+</span>
          <div class="stat-label">Vessels Serviced</div>
          <div class="stat-bar"><div class="stat-bar-fill" data-width="75"></div></div>
        </div>
        <div class="stat-card reveal">
          <span class="stat-value" data-target="98">0</span><span class="stat-suffix">%</span>
          <div class="stat-label">Client Satisfaction</div>
          <div class="stat-bar"><div class="stat-bar-fill" data-width="98"></div></div>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact Section -->
  <section class="contact" id="contact">
    <div class="container">
      <div class="contact-grid">
        <div class="contact-info reveal">
          <span class="section-tag">Get In Touch</span>
          <h2 class="section-title">Ready to <span class="gradient-text">Start a Project?</span></h2>
          <p class="contact-text">Whether you need emergency repairs, scheduled maintenance, or automation upgrades — we're here to help. Get in touch for a free consultation.</p>
          <div class="contact-details">
            <div class="contact-item">
              <div class="contact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <div>
                <span class="contact-item-label">Phone</span>
                <span class="contact-item-value">+91 98765 43210</span>
              </div>
            </div>
            <div class="contact-item">
              <div class="contact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div>
                <span class="contact-item-label">Email</span>
                <span class="contact-item-value">info@marinetechpro.com</span>
              </div>
            </div>
            <div class="contact-item">
              <div class="contact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div>
                <span class="contact-item-label">Location</span>
                <span class="contact-item-value">Mumbai, India</span>
              </div>
            </div>
          </div>
        </div>
        <div class="contact-form-wrap reveal">
          <form class="contact-form" id="contactForm">
            <div class="form-group">
              <label for="name">Full Name</label>
              <input type="text" id="name" name="name" placeholder="Your full name" required>
            </div>
            <div class="form-row">
              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" placeholder="you@company.com" required>
              </div>
              <div class="form-group">
                <label for="phone">Phone</label>
                <input type="tel" id="phone" name="phone" placeholder="+91 XXXXX XXXXX">
              </div>
            </div>
            <div class="form-group">
              <label for="service">Service Required</label>
              <select id="service" name="service" required>
                <option value="" disabled selected>Select a service</option>
                <option value="electrical">Electrical Systems</option>
                <option value="mechanical">Mechanical Repair</option>
                <option value="automation">Automation & Control</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div class="form-group">
              <label for="message">Message</label>
              <textarea id="message" name="message" rows="4" placeholder="Tell us about your project..." required></textarea>
            </div>
            <button type="submit" class="btn btn-primary btn-full" id="submitBtn">
              <span>Send Message</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"/>
                <polygon points="22 2 15 22 11 13 2 9 22 2"/>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div>
          <a href="#home" class="nav-logo">
            <div class="logo-icon">
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 4L4 20L8 36H32L36 20L20 4Z" stroke="currentColor" stroke-width="2" fill="none"/>
                <path d="M12 28C12 28 16 22 20 22C24 22 28 28 28 28" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                <circle cx="20" cy="16" r="3" stroke="currentColor" stroke-width="2"/>
                <path d="M20 4V13" stroke="currentColor" stroke-width="2"/>
              </svg>
            </div>
            <span class="logo-text">MarineTech<span class="logo-accent">Pro</span></span>
          </a>
          <p class="footer-desc" style="margin-top: 8px;">Precision engineering for the maritime world.</p>
        </div>
        <div class="footer-links">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2026 MarineTech Pro. All rights reserved.</p>
        <p class="footer-tagline">Precision Engineering for the Maritime World</p>
      </div>
    </div>
  </footer>
`;

// ===== NAVBAR SCROLL =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ===== MOBILE TOGGLE =====
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close mobile menu on link click
navLinks.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ===== ACTIVE NAV LINK =====
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY + 200;
  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');
    const link = document.querySelector(`.nav-link[href="#${id}"]`);
    if (link) {
      link.classList.toggle('active', scrollY >= top && scrollY < top + height);
    }
  });
});

// ===== SCROLL REVEAL =====
const revealElements = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealElements.forEach(el => revealObserver.observe(el));

// ===== COUNTER ANIMATION =====
const statValues = document.querySelectorAll('.stat-value[data-target]');
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const target = parseInt(el.dataset.target);
      let current = 0;
      const step = Math.ceil(target / 60);
      const timer = setInterval(() => {
        current += step;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        el.textContent = current;
      }, 25);
      counterObserver.unobserve(el);
    }
  });
}, { threshold: 0.5 });

statValues.forEach(el => counterObserver.observe(el));

// ===== STAT BAR ANIMATION =====
const statBars = document.querySelectorAll('.stat-bar-fill[data-width]');
const barObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.width = entry.target.dataset.width + '%';
      barObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

statBars.forEach(el => {
  el.style.width = '0%';
  barObserver.observe(el);
});

// ===== CONTACT FORM =====
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = document.getElementById('submitBtn');
  const originalText = btn.innerHTML;
  btn.innerHTML = '<span>Message Sent! ✓</span>';
  btn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
  setTimeout(() => {
    btn.innerHTML = originalText;
    btn.style.background = '';
    contactForm.reset();
  }, 2500);
});

// ===== SMOOTH SCROLL FOR ALL ANCHOR LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
