<template>
  <div class="move-in-out-view">
    
    <!-- 1. Reusable Page Header -->
    <ServicePageHeader 
      title="Move-In / Move-Out Cleaning" 
      imageUrl="https://placehold.co/1920x400/443091/B3B5B8?text=Empty+Home"
    />

    <!-- 2. Intro Content Section -->
    <section class="page-section">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6" data-aos="fade-right">
            <h2 class="section-title">A Fresh Start, Guaranteed</h2>
            <p class="section-subtitle">
              Moving is stressful enough. Let us handle the deep clean.
            </p>
            <p>
              Whether you're moving into a new home or preparing to sell, you want the space to be spotless. Our move-in/move-out cleaning service is a comprehensive, top-to-bottom scrub that prepares a home for its next chapter.
            </p>
            <p>
              We serve renters, homeowners, and real estate professionals across the Shenandoah Valley, ensuring a smooth and clean transition.
            </p>
            <button @click="openDrawer" class="btn cta-button-page">
              Get Your Moving Quote
            </button>
          </div>
          <div class="col-lg-6" data-aos="fade-left" data-aos-delay="100">
            <!-- Image Placeholder 1 -->
            <img 
              src="https://placehold.co/600x450/3DB6BC/FFFFFF?text=Moving+Boxes" 
              alt="An empty, clean room with moving boxes" 
              class="img-fluid rounded-image"
            >
          </div>
        </div>
      </div>
    </section>

    <!-- 3. "Our Deep Cleaning" Checklist Section -->
    <section class="page-section bg-light">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 text-center" data-aos="fade-up">
            <h2 class="section-title">The Ultimate Deep Clean</h2>
            <p class="section-subtitle">
              Our moving cleans include everything in a standard clean, plus:
            </p>
          </div>
        </div>
        
        <div class="row">
          <!-- Column 1 -->
          <div class="col-lg-4" data-aos="fade-up" data-aos-delay="100">
            <div class="checklist-card">
              <h4 class="checklist-title">Kitchen</h4>
              <ul class="checklist">
                <li><i class="bi bi-check-circle-fill"></i> Inside oven & refrigerator</li>
                <li><i class="bi bi-check-circle-fill"></i> Inside all cabinets & drawers</li>
                <li><i class="bi bi-check-circle-fill"></i> Inside microwave</li>
                <li><i class="bi bi-check-circle-fill"></i> Deep clean countertops & sinks</li>
              </ul>
            </div>
          </div>
          
          <!-- Column 2 -->
          <div class="col-lg-4" data-aos="fade-up" data-aos-delay="200">
            <div class="checklist-card">
              <h4 class="checklist-title">Bathrooms</h4>
              <ul class="checklist">
                <li><i class="bi bi-check-circle-fill"></i> Deep scrub of showers & tubs</li>
                <li><i class="bi bi-check-circle-fill"></i> Inside all vanities & cabinets</li>
                <li><i class="bi bi-check-circle-fill"></i> Sanitize toilets, sinks, & counters</li>
                <li><i class="bi bi-check-circle-fill"></i> Remove soap scum</li>
              </ul>
            </div>
          </div>
          
          <!-- Column 3 -->
          <div class="col-lg-4" data-aos="fade-up" data-aos-delay="300">
            <div class="checklist-card">
              <h4 class="checklist-title">All Rooms</h4>
              <ul class="checklist">
                <li><i class="bi bi-check-circle-fill"></i> Clean baseboards & trim</li>
                <li><i class="bi bi-check-circle-fill"></i> Clean interior windows & sills</li>
                <li><i class="bi bi-check-circle-fill"></i> Clean light fixtures & ceiling fans</li>
                <li><i class="bi bi-check-circle-fill"></i> Vacuum all floors & closets</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- 4. Why Choose Us Section -->
    <section class="page-section">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6" data-aos="fade-right">
            <!-- Image Placeholder 2 -->
            <img 
              src="https://placehold.co/600x450/443091/FFFFFF?text=Clean+Empty+Apartment" 
              alt="A sparkling clean empty apartment" 
              class="img-fluid rounded-image"
            >
          </div>
          <div class="col-lg-6" data-aos="fade-left" data-aos-delay="100">
            <h2 class="section-title">Focus On Your Move</h2>
            <p>
              Don't lose your security deposit over cleaning, and don't start life in your new home with someone else's mess.
            </p>
            <ul class="checklist">
              <li><i class="bi bi-check-circle-fill"></i> <strong>For Renters:</strong> Maximize your security deposit return.</li>
              <li><i class="bi bi-check-circle-fill"></i> <strong>For Homeowners:</strong> Present a beautiful, clean home to potential buyers.</li>
              <li><i class="bi bi-check-circle-fill"></i> <strong>For New Movers:</strong> Start fresh in a space that is fully sanitized and ready for you.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- 5. Final CTA -->
    <section class="final-cta-section">
      <div class="container text-center" data-aos="zoom-in">
        <h2 class="final-cta-title">Make Your Move Easier</h2>
        <p class="final-cta-subtitle">
          Schedule your move-in or move-out cleaning today.
        </p>
        <button @click="openDrawer" class="btn cta-button-final">
          Get My Free Quote
        </button>
      </div>
    </section>

  </div>
</template>

<script setup>
// Import our reusable component
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

/* Checklist Styles */
.checklist-card {
  background: var(--color-background);
  padding: var(--spacing-lg);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  height: 100%;
}
.checklist-title {
  font-family: var(--font-family-headings);
  font-weight: var(--font-weight-bold);
  color: var(--color-primary);
  border-bottom: 2px solid var(--color-accent);
  padding-bottom: var(--spacing-sm);
  margin-top: 0;
  margin-bottom: var(--spacing-md);
}

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
  align-items: flex-start;
}
.checklist li i {
  color: var(--color-accent);
  margin-right: var(--spacing-sm);
  font-size: 1.2rem;
  margin-top: 3px;
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
  .checklist-card {
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