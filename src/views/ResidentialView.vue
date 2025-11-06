<template>
  <div class="residential-view">
    
    <!-- 1. Reusable Page Header -->
    <ServicePageHeader 
      title="Residential Cleaning" 
      imageUrl="/images/residentialview-header.png"
    />

    <!-- 2. Intro Content Section -->
    <section class="page-section">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6" data-aos="fade-right">
            <h2 class="section-title">Your Home, Cleaned Your Way</h2>
            <p class="section-subtitle">
              Life is busy. Let us handle the cleaning so you can focus on what matters.
            </p>
            <p>
              Our professional residential cleaning services are designed to give you a spotless, healthy home without the hassle. We serve the entire Shenandoah Valley with reliability and attention to detail.
            </p>
            <p>
              Whether you need a one-time deep clean or regular weekly/bi-weekly maintenance, our bonded and insured team is here to help. We treat your home with the same care and respect we would our own.
            </p>
            <button @click="openDrawer" class="btn cta-button-page">
              Get Your Free Estimate
            </button>
          </div>
          <div class="col-lg-6" data-aos="fade-left" data-aos-delay="100">
            <!-- Image Placeholder 1 -->
            <img 
              src="/images/residentialview-intro-section.png" 
              alt="A spotless, clean living room" 
              class="img-fluid rounded-image"
            >
          </div>
        </div>
      </div>
    </section>

    <!-- 3. "What's Included" Checklist Section -->
    <section class="page-section bg-light">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 text-center" data-aos="fade-up">
            <h2 class="section-title">Our Standard Cleaning Checklist</h2>
            <p class="section-subtitle">
              We cover every corner to ensure a comprehensive clean.
            </p>
          </div>
        </div>
        
        <div class="row">
          <!-- Column 1: Kitchen/Bath -->
          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <div class="checklist-card">
              <h4 class="checklist-title">Kitchen & Dining</h4>
              <ul class="checklist">
                <li><i class="bi bi-check-circle-fill"></i> Wipe down countertops and backsplash</li>
                <li><i class="bi bi-check-circle-fill"></i> Clean and sanitize sinks</li>
                <li><i class="bi bi-check-circle-fill"></i> Clean appliance exteriors (stove, fridge, microwave)</li>
                <li><i class="bi bi-check-circle-fill"></i> Mop floors</li>
              </ul>
              
              <h4 class="checklist-title">Bathrooms</h4>
              <ul class="checklist">
                <li><i class="bi bi-check-circle-fill"></i> Sanitize toilets, showers, and tubs</li>
                <li><i class="bi bi-check-circle-fill"></i> Clean sinks and vanities</li>
                <li><i class="bi bi-check-circle-fill"></i> Clean mirrors</li>
                <li><i class="bi bi-check-circle-fill"></i> Mop floors</li>
              </ul>
            </div>
          </div>
          
          <!-- Column 2: Living/Bedrooms -->
          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <div class="checklist-card">
              <h4 class="checklist-title">Bedrooms & Living Areas</h4>
              <ul class="checklist">
                <li><i class="bi bi-check-circle-fill"></i> Dust all surfaces (tables, shelves, blinds)</li>
                <li><i class="bi bi-check-circle-fill"></i> Vacuum carpets and rugs</li>
                <li><i class="bi bi-check-circle-fill"></i> Mop hard floors</li>
                <li><i class="bi bi-check-circle-fill"></i> Straighten up cushions and pillows</li>
              </ul>

              <h4 class="checklist-title">All Rooms</h4>
              <ul class="checklist">
                <li><i class="bi bi-check-circle-fill"></i> Empty trash receptacles</li>
                <li><i class="bi bi-check-circle-fill"></i> Dust baseboards and window sills</li>
                <li><i class="bi bi-check-circle-fill"></i> Remove cobwebs</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="text-center mt-4" data-aos="fade-up">
          <p><strong>Have special requests?</strong> Just ask! We can customize our services to fit your needs.</p>
        </div>
      </div>
    </section>

    <!-- 4. Deep Cleaning / Add-ons Section -->
    <section class="page-section">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6" data-aos="fade-right">
            <!-- Image Placeholder 2 -->
            <img 
              src="/images/residentialview-deep-clean.png" 
              alt="A sparkling clean kitchen" 
              class="img-fluid rounded-image"
            >
          </div>
          <div class="col-lg-6" data-aos="fade-left" data-aos-delay="100">
            <h2 class="section-title">Need a Deeper Clean?</h2>
            <p>
              In addition to our standard cleaning, we also offer deep cleaning services perfect for a seasonal refresh or special occasions.
            </p>
            <p>
              Deep cleaning services can include:
            </p>
            <ul class="checklist">
              <li><i class="bi bi-check-circle-fill"></i> Inside oven and refrigerator</li>
              <li><i class="bi bi-check-circle-fill"></i> Interior window cleaning</li>
              <li><i class="bi bi-check-circle-fill"></i> Detailed baseboard and millwork washing</li>
              <li><i class="bi bi-check-circle-fill"></i> Inside cabinets and drawers</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- 5. Final CTA -->
    <section class="final-cta-section">
      <div class="container text-center" data-aos="zoom-in">
        <h2 class="final-cta-title">Come Home to a Spotless Space</h2>
        <p class="final-cta-subtitle">
          Ready to reclaim your free time? Let us do the work.
        </p>
        <button @click="openDrawer" class="btn cta-button-final">
          Get Your Free Quote
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
/* Re-using styles from HomeView for consistency */
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
  margin-top: var(--spacing-sm);
  margin-bottom: var(--spacing-md);
}
.checklist-card:first-child .checklist-title:first-child {
  margin-top: 0;
}

.checklist {
  list-style: none;
  padding-left: 0;
  margin-bottom: var(--spacing-md);
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
  .checklist-card {
    margin-bottom: var(--spacing-md);
  }
}
</style>