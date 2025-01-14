---
layout: default
---

{% assign i18n = site.data.i18n[page.lang] %}

<div class="hero-section">
  <h1>{{ i18n.site.title }}</h1>
  <p class="hero-description">{{ i18n.site.description }}</p>
  <div class="hero-buttons">
    <a href="https://play.google.com/store/apps/details?id=com.kapp.applocker&hl=en" target="_blank" class="download-button">
      <img alt="Get it on Google Play" src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"/>
    </a>
  </div>
</div>

<div class="main-features">
  <div class="feature-block">
    <h2>{{ i18n.features.app_lock.title }}</h2>
    <p>{{ i18n.features.app_lock.items[0] }}</p>
    <div class="screenshots-section">
      <div class="screenshot-grid">
        <div class="screenshot-item">
          <img src="assets/images/1.png" alt="App Lock Screen" />
        </div>
        <div class="screenshot-item">
          <img src="assets/images/2.png" alt="Usage Statistics" />
        </div>
        <div class="screenshot-item">
          <img src="assets/images/3.png" alt="Settings Screen" />
        </div>
      </div>
    </div>
  </div>

  <div class="feature-block">
    <h2>{{ i18n.features.screen_time.title }}</h2>
    <p>{{ i18n.features.screen_time.items[0] }}</p>
    <div class="screenshots-section">
      <div class="screenshot-grid">
        <div class="screenshot-item">
          <img src="assets/images/4.png" alt="Time Management" />
        </div>
        <div class="screenshot-item">
          <img src="assets/images/5.png" alt="Privacy Protection" />
        </div>
      </div>
    </div>
  </div>
</div>

<div class="highlights-section">
  <div class="highlight-item">
    <div class="highlight-icon">🔒</div>
    <h3>{{ i18n.highlights.security.title }}</h3>
    <p>{{ i18n.highlights.security.description }}</p>
  </div>
  
  <div class="highlight-item">
    <div class="highlight-icon">📊</div>
    <h3>{{ i18n.highlights.visualization.title }}</h3>
    <p>{{ i18n.highlights.visualization.description }}</p>
  </div>
  
  <div class="highlight-item">
    <div class="highlight-icon">🎯</div>
    <h3>{{ i18n.highlights.personalization.title }}</h3>
    <p>{{ i18n.highlights.personalization.description }}</p>
  </div>
</div>

<div class="download-section">
  <h2>{{ i18n.download.title }}</h2>
  <a href="https://play.google.com/store/apps/details?id=com.kapp.applocker&hl=en" target="_blank">
    <img alt="Get it on Google Play" src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"/>
  </a>
</div>

<div class="contact-section">
  <h2>{{ i18n.contact.title }}</h2>
  <p>{{ i18n.contact.description }}</p>
  <p><strong>{{ i18n.contact.email }}</strong> <a href="mailto:feedback@applockguard.com">feedback@applockguard.com</a></p>
</div>

<footer>
  <small>{{ i18n.footer.copyright }}</small>
</footer> 