<template>
  <div class="construction-view">
    
    <!-- 1. Reusable Page Header -->
    <ServicePageHeader 
      title="New Construction Cleanup" 
      imageUrl="https://placehold.co/1920x400/443091/B3B5B8?text=New+Construction+Site"
    />

    <!-- 2. Intro Content Section -->
    <section class="page-section">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6" data-aos="fade-right">
            <h2 class="section-title">From Construction Site to Clean Home</h2>
            <p class="section-subtitle">
              We handle the post-construction mess so you can see the finished masterpiece.
            </p>
            <p>
              A new construction or renovation project leaves behind a significant amount of dust and debris. Our post-construction cleanup service is a detailed, multi-phase process designed to make the property move-in ready.
            </p>
            <p>
              We work with contractors, builders, and homeowners in the Shenandoah Valley to provide the final, detailed clean that showcases your hard work.
            </p>
            <button @click="openDrawer" class="btn cta-button-page">
              Get a Cleanup Quote
            </button>
          </div>
          <div class="col-lg-6" data-aos="fade-left" data-aos-delay="100">
            <!-- Image Placeholder 1 -->
            <img 
              src="https://placehold.co/600x450/3DB6BC/FFFFFF?text=New+Renovated+Kitchen" 
              alt="A newly renovated kitchen after cleanup" 
              class="img-fluid rounded-image"
            >
          </div>
        </div>
      </div>
    </section>

    <!-- 3. "Our Cleanup Process" Checklist Section -->
    <section class="page-section bg-light">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 text-center" data-aos="fade-up">
            <h2 class="section-title">Our Post-Construction Process</h2>
            <p class="section-subtitle">
              We clean in phases to ensure a truly dust-free result.
            </p>
          </div>
        </div>
        
        <div class="row">
          <!-- Column 1: Rough Clean -->
          <div class="col-lg-4" data-aos="fade-up" data-aos-delay="100">
            <div class="checklist-card">
              <h4 class="checklist-title">Phase 1: Rough Clean</h4>
              <ul class="checklist">
                <li><i class="bi bi-check-circle-fill"></i> Remove all large debris & trash</li>
                <li><i class="bi bi-check-circle-fill"></i> Scrape and remove stickers from windows</li>
                <li><i class="bi bi-check-circle-fill"></i> Sweep and vacuum all floors</li>
                <li><i class="bi bi-check-circle-fill"></i> Initial dust of all surfaces</li>
              </ul>
            </div>
          </div>
          
          <!-- Column 2: Final Clean -->
          <div class="col-lg-4" data-aos="fade-up" data-aos-delay="200">
            <div class="checklist-card">
              <h4 class="checklist-title">Phase 2: Final Clean</h4>
              <ul class="checklist">
                <li><i class="bi bi-check-circle-fill"></i> Deep clean all cabinets & drawers inside out</li>
                <li><i class="bi bi-check-circle-fill"></i> Clean and shine all fixtures & sinks</li>
                <li><i class="bi bi-check-circle-fill"></i> Clean interior windows, sills, & tracks</li>
                <li><i class="bi bi-check-circle-fill"></i> Deep clean baseboards, trim, & doors</li>
              </ul>
            </div>
          </div>
          
          <!-- Column 3: Touch-Up -->
          <div class="col-lg-4" data-aos="fade-up" data-aos-delay="300">
            <div class="checklist-card">
              <h4 class="checklist-title">Phase 3: Touch-Up</h4>
              <ul class="checklist">
                <li><i class="bi bi-check-circle-fill"></i> Final wipe-down of all horizontal surfaces</li>
                <li><i class="bi bi-check-circle-fill"></i> Remove any remaining fine dust</li>
                <li><i class="bi bi-check-circle-fill"></i> Polish appliance exteriors</li>
                <li><i class="bi bi-check-circle-fill"></i> Final floor moping & vacuuming</li>
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
              src="https://placehold.co/600x450/443091/FFFFFF?text=Pristine+New+Bathroom" 
              alt="A pristine, newly built bathroom" 
              class="img-fluid rounded-image"
            >
          </div>
          <div class="col-lg-6" data-aos="fade-left" data-aos-delay="100">
            <h2 class="section-title">Ready for Showcase</h2>
            <p>
              Our goal is to make your new property shine. We meticulously remove fine dust from every surface, crack, and crevice.
            </p>
            <ul class="checklist">
              <li><i class="bi bi-check-circle-fill"></i> <strong>For Builders:</strong> Impress your clients with a perfectly clean handoff.</li>
              <li><i class="bi bi-check-circle-fill"></i> <strong>For Homeowners:</strong> Move into your new space without worrying about dust or debris.</li>
              <li><i class="bi bi-check-circle-fill"></i> <strong>Flexible & Reliable:</strong> We work with your project timelines.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- 5. Final CTA -->
    <section class="final-cta-section">
      <div class="container text-center" data-aos="zoom-in">
        <h2 class="final-cta-title">Turn Your Site Into a Home</h2>
        <p class="final-cta-subtitle">
          Get a quote for your post-construction cleanup project.
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