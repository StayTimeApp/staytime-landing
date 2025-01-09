---
layout: default
---

{% assign i18n = site.data.i18n[page.lang] %}

<div class="highlights-section">
  <div class="highlight-item">
    <div class="highlight-icon">🔒</div>
    <h4>{{ i18n.highlights.security.title }}</h4>
    <p>{{ i18n.highlights.security.description }}</p>
  </div>
  
  <div class="highlight-item">
    <div class="highlight-icon">📊</div>
    <h4>{{ i18n.highlights.visualization.title }}</h4>
    <p>{{ i18n.highlights.visualization.description }}</p>
  </div>
  
  <div class="highlight-item">
    <div class="highlight-icon">🎯</div>
    <h4>{{ i18n.highlights.personalization.title }}</h4>
    <p>{{ i18n.highlights.personalization.description }}</p>
  </div>
</div>

<h2>{{ i18n.features.title }}</h2>

<div class="feature-section">
  <h3>🛡️ {{ i18n.features.app_lock.title }}</h3>
  <ul>
    {% for item in i18n.features.app_lock.items %}
    <li>{{ item }}</li>
    {% endfor %}
  </ul>
</div>

<div class="feature-section">
  <h3>⏱️ {{ i18n.features.screen_time.title }}</h3>
  <ul>
    {% for item in i18n.features.screen_time.items %}
    <li>{{ item }}</li>
    {% endfor %}
  </ul>
</div>

<div class="feature-section">
  <h3>👮 {{ i18n.features.protection.title }}</h3>
  <ul>
    {% for item in i18n.features.protection.items %}
    <li>{{ item }}</li>
    {% endfor %}
  </ul>
</div>

<h2>{{ i18n.screenshots.title }}</h2>

<div class="screenshots-section">
  <div class="screenshot-grid">
    {% for item in i18n.screenshots.items %}
    <div class="screenshot-item">
      <img src="assets/images/screenshot{{ forloop.index }}.png" alt="{{ item.title }}" />
      <div class="screenshot-caption">{{ item.description }}</div>
    </div>
    {% endfor %}
  </div>
</div>

<h2>{{ i18n.testimonials.title }}</h2>

<div class="testimonials-section">
  <div class="testimonial-grid">
    {% for item in i18n.testimonials.items %}
    <div class="testimonial-item">
      <div class="quote">{{ item.quote }}</div>
      <div class="author">
        <div class="name">{{ item.author }}</div>
        <div class="rating">⭐⭐⭐⭐⭐</div>
      </div>
    </div>
    {% endfor %}
  </div>
</div>

<h2>{{ i18n.more_features.title }}</h2>

<div class="feature-section">
  <ul>
    {% for item in i18n.more_features.items %}
    <li><strong>{{ item.title }}</strong>: {{ item.description }}</li>
    {% endfor %}
  </ul>
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

<div style="text-align: center; margin-top: 50px;">
  <small>{{ i18n.footer.copyright }}</small>
</div> 