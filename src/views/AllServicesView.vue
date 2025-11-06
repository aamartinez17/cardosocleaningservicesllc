<template>
  <div class="all-services-view">
    
    <!-- 1. Reusable Page Header -->
    <ServicePageHeader 
      title="Our Cleaning Services" 
      imageUrl="/images/all-services-header.png"
    />

    <!-- 2. Intro Content Section -->
    <section class="page-section">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 text-center" data-aos="fade-up">
            <h2 class="section-title">Comprehensive Cleaning for Every Need</h2>
            <p class="section-subtitle">
              From your home to your new construction site, we have the expertise to make your space shine. We are proud to serve the Shenandoah Valley with reliable, high-quality, and insured cleaning services.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. Service List Section -->
    <section class="page-section service-list-section">
      <div class="container">

        <!-- Service 1: Residential -->
        <div class="row align-items-center service-feature" data-aos="fade-up">
          <div class="col-lg-6 mb-4 mb-lg-0">
            <img 
              src="/images/all-services-residential-services-section.png" 
              alt="Spotless residential living room" 
              class="img-fluid rounded-image"
            >
          </div>
          <div class="col-lg-6">
            <h3 class="service-title">Residential Cleaning</h3>
            <p class="service-description">
              Life is busy. Let us handle the cleaning so you can focus on what matters. We offer one-time deep cleans or regular weekly/bi-weekly maintenance to keep your home healthy and spotless.
            </p>
            <router-link to="/services/residential" class="btn cta-button-page">
              Learn More
            </router-link>
          </div>
        </div>

        <!-- Service 2: Commercial -->
        <div class="row align-items-center service-feature" data-aos="fade-up">
          <!-- Image on right (order-lg-2), Text on left (order-lg-1) -->
          <div class="col-lg-6 order-lg-2 mb-4 mb-lg-0">
            <img 
              src="/images/all-services-commercial-service-section.png" 
              alt="Clean commercial office space" 
              class="img-fluid rounded-image"
            >
          </div>
          <div class="col-lg-6 order-lg-1">
            <h3 class="service-title">Commercial Cleaning</h3>
            <p class="service-description">
              A clean business is good business. We provide reliable, insured cleaning for offices, fitness clubs, body shops, and more. We create custom schedules to keep your space professional and healthy.
            </p>
            <router-link to="/services/commercial" class="btn cta-button-page">
              Learn More
            </router-link>
          </div>
        </div>

        <!-- Service 3: Move-In/Move-Out -->
        <div class="row align-items-center service-feature" data-aos="fade-up">
          <div class="col-lg-6 mb-4 mb-lg-0">
            <img 
              src="/images/all-services-move-in-out-service-section.png" 
              alt="Empty clean home for moving" 
              class="img-fluid rounded-image"
            >
          </div>
          <div class="col-lg-6">
            <h3 class="service-title">Move-In / Move-Out Cleaning</h3>
            <p class="service-description">
              Moving is stressful enough. Our comprehensive, top-to-bottom scrub prepares a home for its next chapter, ensuring a fresh start for new occupants or helping you get your security deposit back.
            </p>
            <router-link to="/services/move-in-out" class="btn cta-button-page">
              Learn More
            </router-link>
          </div>
        </div>

        <!-- Service 4: New Construction -->
        <div class="row align-items-center" data-aos="fade-up">
          <!-- Image on right (order-lg-2), Text on left (order-lg-1) -->
          <div class="col-lg-6 order-lg-2 mb-4 mb-lg-0">
            <img 
              src="/images/all-services-new-construction-service-section.png" 
              alt="Post-construction cleanup site before and after" 
              class="img-fluid rounded-image"
            >
          </div>
          <div class="col-lg-6 order-lg-1">
            <h3 class="service-title">New Construction Cleanup</h3>
            <p class="service-description">
              We work with builders and homeowners to handle the final, detailed clean. Our multi-phase process removes all dust, debris, and stickers, transforming a construction site into a move-in ready masterpiece.
            </p>
            <router-link to="/services/construction" class="btn cta-button-page">
              Learn More
            </router-link>
          </div>
        </div>

      </div>
    </section>

    <!-- 4. "Why Choose Us" Section (Reused from Home) -->
    <section class="page-section bg-light">
      <div class="container">
        <h2 class="section-title text-center" data-aos="fade-up">A Service You Can Trust</h2>
        <p class="section-subtitle text-center" data-aos="fade-up" data-aos-delay="100">
          We're committed to providing a reliable, high-quality experience.
        </p>
        <div class="row">
          <div class="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="200">
            <div class="trust-card">
              <i class="trust-icon bi bi-patch-check-fill"></i>
              <h3 class="trust-title">Experienced & Tested</h3>
              <p>We have years of experience providing premium home and commercial cleaning services.</p>
            </div>
          </div>
          <div class="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="300">
            <div class="trust-card">
              <i class="trust-icon bi bi-shield-check"></i>
              <h3 class="trust-title">Trusted Team Members</h3>
              <p>Each team member is background-checked, bonded, and insured to ensure everyone’s peace of mind.</p>
            </div>
          </div>
          <div class="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="400">
            <div class="trust-card">
              <i class="trust-icon bi bi-calendar-check"></i>
              <h3 class="trust-title">Personalized Clean</h3>
              <p>Flexible, personalized cleaning options allow you to enjoy life’s moments on your schedule.</p>
            </div>
          </div>
          <div class="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="500">
            <div class="trust-card">
              <i class="trust-icon bi bi-star-fill"></i>
              <h3 class="trust-title">Satisfaction Guaranteed</h3>
              <p>We're not happy until you're happy. We stand by our work and will make it right, every time.</p>
            </div>
          </div>
        </div>
      </div>
    </section>


    <!-- 5. Final CTA -->
    <section class="final-cta-section">
      <div class="container text-center" data-aos="zoom-in">
        <h2 class="final-cta-title">Ready to Get Started?</h2>
        <p class="final-cta-subtitle">
          Let us know your needs, and we'll provide a free, no-obligation quote.
        </p>
        <button @click="openDrawer" class="btn cta-button-final">
          Get My Free Quote
        </button>
      </div>
    </section>

  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import ServicePageHeader from '@/components/ServicePageHeader.vue';
import { inject } from 'vue';

// Inject the function to open the quote drawer
const openDrawer = inject('openQuoteDrawer');
</script>

<style scoped>
/* Re-using styles from other service pages for consistency */
.page-section {
  padding: var(--spacing-xl) 0;
}
.page-section.bg-light {
  background-color: var(--bg-primary);
}
.service-list-section {
  background-color: var(--color-background);
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

/* New styles for the service feature rows */
.service-feature {
  margin-bottom: var(--spacing-xl);
}
.service-feature:last-child {
  margin-bottom: 0;
}
.rounded-image {
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  width: 100%;
}
.service-title {
  font-family: var(--font-family-headings);
  font-weight: var(--font-weight-bold);
  color: var(--color-primary);
  margin-bottom: var(--spacing-sm);
}
.service-description {
  color: var(--color-text-light);
  font-size: 1.05rem;
  margin-bottom: var(--spacing-lg);
}

/* Button for this page (router-link styled as a button) */
.cta-button-page {
  background-color: var(--color-accent);
  border-color: var(--color-accent);
  color: var(--light-text);
  font-weight: var(--font-weight-bold);
  border-radius: var(--border-radius);
  padding: var(--spacing-md) var(--spacing-lg);
  transition: var(--transition-default);
  text-transform: uppercase;
  text-decoration: none;
  display: inline-block;
}
.cta-button-page:hover {
  background-color: var(--color-primary);
  border-color: var(--color-primary);
  transform: translateY(-2px);
  box-shadow: var(--primary-shadow);
  color: var(--light-text);
}


/* Re-using trust card styles from HomeView */
.trust-card {
  text-align: center;
  padding: var(--spacing-lg) var(--spacing-md);
  border-radius: var(--border-radius);
  transition: var(--transition-default);
  height: 100%;
  background: var(--color-background);
  box-shadow: var(--box-shadow);
}
.trust-card:hover {
  transform: translateY(-5px);
}
.trust-icon {
  font-size: 3rem;
  color: var(--color-accent);
  margin-bottom: var(--spacing-md);
}
.trust-title {
  font-family: var(--font-family-headings);
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-lg);
  color: var(--color-primary);
  margin-bottom: var(--spacing-sm);
}

/* Final CTA section, reusing home page styles */
.final-cta-section {
  background-color: var(--color-primary);
  color: var(--light-text);
  padding: var(--spacing-xl) 0;
}
.final-cta-title {
  font-size: 2.5rem;
  font-weight: var(--font-weight-bold);
  margin-bottom: var(--spacing-sm);
}
.final-cta-subtitle {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-light);
  margin-bottom: var(--spacing-lg);
}
.cta-button-final {
  background-color: var(--light-text);
  border-color: var(--light-text);
  color: var(--color-primary);
  font-weight: var(--font-weight-bold);
  border-radius: var(--border-radius);
  padding: var(--spacing-md) var(--spacing-lg);
  transition: var(--transition-default);
  text-transform: uppercase;
  font-size: var(--font-size-lg);
}
.cta-button-final:hover {
  background-color: var(--color-accent);
  border-color: var(--color-accent);
  color: var(--light-text);
  transform: scale(1.05);
}
</style>