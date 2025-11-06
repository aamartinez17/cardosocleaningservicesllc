<template>
  <div class="commercial-view">
    
    <!-- 1. Reusable Page Header -->
    <ServicePageHeader 
      title="Commercial Cleaning" 
      imageUrl="/images/commercialview-header.png"
    />

    <!-- 2. Intro Content Section -->
    <section class="page-section">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6" data-aos="fade-right">
            <h2 class="section-title">A Clean Business is Good Business</h2>
            <p class="section-subtitle">
              First impressions matter. We keep your workspace professional, healthy, and productive.
            </p>
            <p>
              A clean and sanitary environment is essential for the health of your employees and the confidence of your customers. Cardoso Cleaning Services provides reliable, bonded, and insured cleaning solutions for businesses throughout the Shenandoah Valley.
            </p>
            <p>
              We understand that every business is different. We'll work with you to create a customized cleaning schedule—whether it's daily, weekly, or bi-weekly—that fits your needs and budget.
            </p>
            <button @click="openDrawer" class="btn cta-button-page">
              Get Your Commercial Quote
            </button>
          </div>
          <div class="col-lg-6" data-aos="fade-left" data-aos-delay="100">
            <!-- Image Placeholder 1 -->
            <img 
              src="/images/commercialview-intro-section.png" 
              alt="A clean, modern office space" 
              class="img-fluid rounded-image"
            >
          </div>
        </div>
      </div>
    </section>

    <!-- 3. "Industries We Serve" Section -->
    <section class="page-section bg-light">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 text-center" data-aos="fade-up">
            <h2 class="section-title">Tailored for Your Industry</h2>
            <p class="section-subtitle">
              We have the expertise to clean your unique space.
            </p>
          </div>
        </div>
        
        <div class="row">
          <!-- Column 1: Offices -->
          <div class="col-lg-4" data-aos="fade-up" data-aos-delay="100">
            <div class="industry-card">
              <i class="bi bi-building-fill"></i>
              <h4 class="industry-title">Offices & Corporate</h4>
              <p>Keep your team productive and healthy with sanitized workstations, clean common areas, and spotless restrooms.</p>
            </div>
          </div>
          
          <!-- Column 2: Fitness Clubs -->
          <div class="col-lg-4" data-aos="fade-up" data-aos-delay="200">
            <div class="industry-card">
              <i class="bi bi-heart-pulse-fill"></i>
              <h4 class="industry-title">Fitness Clubs & Gyms</h4>
              <p>Hygiene is critical. We focus on high-touch equipment, locker rooms, and floors to ensure a safe workout environment.</p>
            </div>
          </div>

          <!-- Column 3: Retail / Body Shops -->
          <div class="col-lg-4" data-aos="fade-up" data-aos-delay="300">
            <div class="industry-card">
              <i class="bi bi-shop"></i>
              <h4 class="industry-title">Retail & Body Shops</h4>
              <p>From shining floors in your showroom to handling grease in a body shop, we make your space welcoming for customers.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 4. Our Services / Checklist Section -->
    <section class="page-section">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6" data-aos="fade-right">
            <!-- Image Placeholder 2 -->
            <img 
              src="/images/commercialview-services-section.png" 
              alt="A sparkling clean commercial restroom" 
              class="img-fluid rounded-image"
            >
          </div>
          <div class="col-lg-6" data-aos="fade-left" data-aos-delay="100">
            <h2 class="section-title">Reliable & Thorough</h2>
            <p>
              Our commercial cleaning plans are comprehensive and include, but are not limited to:
            </p>
            <ul class="checklist">
              <li><i class="bi bi-check-circle-fill"></i> Trash and recycling removal</li>
              <li><i class="bi bi-check-circle-fill"></i> Restroom cleaning and sanitation</li>
              <li><i class="bi bi-check-circle-fill"></i> Disinfection of high-touch surfaces</li>
              <li><i class="bi bi-check-circle-fill"></i> Vacuuming, sweeping, and mopping floors</li>
              <li><i class="bi bi-check-circle-fill"></i> Breakroom and kitchen cleaning</li>
              <li><i class="bi bi-check-circle-fill"></i> Dusting of desks, shelves, and blinds</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- 5. Final CTA -->
    <section class="final-cta-section">
      <div class="container text-center" data-aos="zoom-in">
        <h2 class="final-cta-title">Trust Us with Your Business</h2>
        <p class="final-cta-subtitle">
          Get a free, no-obligation quote for your commercial space today.
        </p>
        <button @click="openDrawer" class="btn cta-button-final">
          Get My Commercial Quote
        </button>
      </div>
    </section>

  </div>
</template>

<script setup>
// Import our new reusable component
import ServicePageHeader from '@/components/ServicePageHeader.vue';
import { inject } from 'vue';

// Inject the function to open the quote drawer
const openDrawer = inject('openQuoteDrawer');
</script>

<style scoped>
/* Re-using styles from ResidentialView for consistency */
.page-section {
  padding: var(--spacing-xl) 0;
}
.page-section.bg-light {
  background-color: var(--bg-primary);
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

.rounded-image {
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  width: 100%;
}

/* Button for this page */
.cta-button-page {
  background-color: var(--color-accent);
  border-color: var(--color-accent);
  color: var(--light-text);
  font-weight: var(--font-weight-bold);
  border-radius: var(--border-radius);
  padding: var(--spacing-md) var(--spacing-lg);
  transition: var(--transition-default);
  text-transform: uppercase;
}
.cta-button-page:hover {
  background-color: var(--color-primary);
  border-color: var(--color-primary);
  transform: translateY(-2px);
  box-shadow: var(--primary-shadow);
}

/* NEW: Industry Card Styles */
.industry-card {
  background: var(--color-background);
  padding: var(--spacing-lg);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  height: 100%;
  text-align: center;
  border-bottom: 5px solid var(--color-secondary);
  transition: var(--transition-default);
}
.industry-card:hover {
  transform: translateY(-5px);
  border-bottom-color: var(--color-primary);
}
.industry-card i {
  font-size: 3rem;
  color: var(--color-primary);
  margin-bottom: var(--spacing-md);
}
.industry-title {
  font-family: var(--font-family-headings);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-light);
  margin-bottom: var(--spacing-sm);
}
/* End of New Styles */


/* Checklist Styles */
.checklist {
  list-style: none;
  padding-left: 0;
  margin-bottom: 0;
}
.checklist li {
  font-size: 1rem;
  color: var(--color-text-light);
  margin-bottom: var(--spacing-sm);
  display: flex;
  align-items: center;
}
.checklist li i {
  color: var(--color-accent);
  margin-right: var(--spacing-sm);
  font-size: 1.2rem;
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

/* Responsive */
@media (max-width: 991.98px) {
  .rounded-image {
    margin-top: var(--spacing-lg);
  }
  .industry-card {
    margin-bottom: var(--spacing-md);
  }
}
@media (max-width: 767.98px) {
  .rounded-image {
    /* Stack image on top for this specific section */
    margin-top: 0;
    margin-bottom: var(--spacing-lg);
  }
  .page-section .align-items-center .col-lg-6:first-child {
    /* This ensures the image is on top on mobile */
    order: 1;
  }
  .page-section .align-items-center .col-lg-6:last-child {
    /* This ensures the text is below on mobile */
    order: 2;
  }
}
</style>