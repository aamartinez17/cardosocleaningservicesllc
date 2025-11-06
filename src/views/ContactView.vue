<template>
  <div class="contact-view">
    
    <!-- 1. Reusable Page Header -->
    <ServicePageHeader 
      title="Contact Us" 
      imageUrl="https://placehold.co/1920x400/443091/B3B5B8?text=Get+In+Touch"
    />

    <!-- 2. Main Content Section (Info + Form) -->
    <section class="page-section">
      <div class="container">
        <div class="row">
          
          <!-- Column 1: Contact Info -->
          <div class="col-lg-6" data-aos="fade-right">
            <h2 class="section-title">Get In Touch</h2>
            <p class="section-subtitle">
              We're here to help. Contact us for a free quote or any questions you may have.
            </p>
            
            <div class="contact-info-block">
              <div class="info-item">
                <i class="bi bi-geo-alt-fill"></i>
                <div class="info-text">
                  <strong>Our Location</strong>
                  <span>2213 Pearl Ln, Harrisonburg VA 22801</span>
                </div>
              </div>
              <div class="info-item">
                <i class="bi bi-telephone-fill"></i>
                <div class="info-text">
                  <strong>Call or Text Us</strong>
                  <span>(540) 271-3851</span>
                  <span>(540) 476-0348</span>
                </div>
              </div>
              <div class="info-item">
                <i class="bi bi-clock-fill"></i>
                <div class="info-text">
                  <strong>Business Hours</strong>
                  <span>Mon - Sat: 8:00 AM - 5:00 PM</span>
                  <span>Sunday: Closed</span>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Column 2: Contact Form (Reused) -->
          <div class="col-lg-6" data-aos="fade-left" data-aos-delay="100">
            <div class="form-container">
              <!-- We are re-using the same quote form component -->
              <QuoteForm />
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- 3. Google Map Section -->
    <section class="map-section">
      <h2 class="section-title text-center">Our Service Area</h2>
      <p class="section-subtitle text-center">
        Serving Harrisonburg, the Shenandoah Valley, and surrounding areas.
      </p>
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3129.621345997207!2d-78.89274298466635!3d38.42738897964601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b493b2111d4e0b%3A0x7d2d31a547b7381d!2s2213%20Pearl%20Ln%2C%20Harrisonburg%2C%20VA%2022801!5e0!3m2!1sen!2sus!4v1678888888888!5m2!1sen!2sus" 
        class="google-map" 
        style="border:0;" 
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>

  </div>
</template>

<script setup>
import ServicePageHeader from '@/components/ServicePageHeader.vue';
import QuoteForm from '@/components/QuoteForm.vue';
</script>

<style scoped>
/* Re-using styles from other service pages for consistency */
.page-section {
  padding: var(--spacing-xl) 0;
  background-color: var(--bg-primary); /* Light grey bg */
  
  /* UPDATED: Added dot pattern texture */
  background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8Y2lyY2xlIGZpbGw9IiNCM0I1QjgiIGN4PSIxMCIgY3k9IjEwIiByPSIyIiBmaWxsLW9wYWNpdHk9IjAuMyIvPgo8L3N2Zz4=");
  background-repeat: repeat;
}
.section-title {
  font-family: var(--font-family-headings);
  font-weight: var(--font-weight-bold);
  color: var(--color-primary);
  margin-bottom: var(--spacing-sm);
}
.section-subtitle {
  font-size: var(--font-size-lg);
  color: var(--secondary-dark-grey);
  margin-bottom: var(--spacing-lg);
}

/* Contact Info Styles */
.contact-info-block {
  margin-top: var(--spacing-lg);
}
.info-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: var(--spacing-lg);
}
.info-item i {
  font-size: 1.75rem;
  color: var(--color-accent);
  margin-right: var(--spacing-md);
  margin-top: 5px;
}
.info-text {
  display: flex;
  flex-direction: column;
}
.info-text strong {
  font-family: var(--font-family-headings);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-light);
  font-size: 1.1rem;
}
.info-text span {
  color: var(--secondary-dark-grey);
  line-height: 1.6;
}

/* Form Container */
.form-container {
  background-color: var(--color-background);
  padding: var(--spacing-lg);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
}

/* Map Section */
.map-section {
  padding: var(--spacing-xl) 0;
  background-color: var(--color-background);
}
.google-map {
  width: 100%;
  height: 450px; /* Taller map */
  border-radius: var(--border-radius);
}

@media (max-width: 991.98px) {
  .form-container {
    margin-top: var(--spacing-xl);
  }
}
</style>