<template>
  <div class="contact-view">
    
    <!-- 1. Reusable Page Header -->
    <ServicePageHeader 
      title="Contact Us" 
      imageUrl="/images/contactview-header.png"
    />

    <!-- 2. Main Content Section (Info + Form) -->
    <section class="page-section">
      <div class="container-fluid px-5">
        <div class="row">

          <!-- Column 2: Contact Form (Reused) -->
          <div class="col-lg-6" data-aos="fade-left" data-aos-delay="100">
            <div class="form-container">
              <!-- We are re-using the same quote form component -->
              <QuoteForm />
            </div>
          </div>
          
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
                  <span>Harrisonburg VA 22801</span>
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


            <!-- 3. NEW: Service Area List -->
    <section class="service-area-section">
      <div class="container">
        <h2 class="section-title text-center">Proudly Serving the Shenandoah Valley</h2>
        <p class="section-subtitle text-center">
          We provide services to Harrisonburg and all surrounding towns, including:
        </p>
        
        <!-- Responsive Town List -->
        <div class="row">
          <div 
            v-for="(column, colIndex) in townColumns" 
            :key="colIndex" 
            class="col-lg-4 col-md-4 col-sm-6"
          >
            <ul class="town-list">
              <li v-for="town in column" :key="town" data-aos="fade-up" :data-aos-delay="towns.indexOf(town) * 20">
                <i class="bi bi-check-circle-fill"></i> {{ town }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- 4. Google Map Section -->
    <section class="map-section">
      <h2 class="section-title text-center">Our Service Area Map</h2>
      <p class="section-subtitle text-center">
        Serving Harrisonburg, the Shenandoah Valley, and surrounding areas.
      </p>
      <div class="map-wrapper container">
        <iframe 
          src="https://www.google.com/maps/d/u/0/embed?mid=1Dfdtfxg6d8hrQZCb-gDM3XQqAbNZowg&ehbc=2E312F&noprof=1" 
          class="google-map" 
          style="border:0;" 
          allowfullscreen="" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
          </div>

        </div>
      </div>
    </section>

    

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'; // <-- Added ref and computed
import ServicePageHeader from '@/components/ServicePageHeader.vue';
import QuoteForm from '@/components/QuoteForm.vue';

// --- NEW: Town List Logic ---
const towns = ref([
  'Harrisonburg, VA',
  'Bridgewater, VA',
  'Elkton, VA',
  'Woodstock, VA',
  'Strasburg, VA',
  'Mount Jackson, VA',
  'Staunton, VA',
  'Waynesboro, VA',
  'Fishersville, VA',
  'Lovingston, VA',
  'Nellysford, VA',
  'Afton, VA',
  'Luray, VA',
  'Stanley, VA',
  'Shenandoah, VA',
  'Charlottesville, VA',
  'Crozet, VA',
  'Scottsville, VA'
]);

// Automatically creates 4 columns from the towns list
const townColumns = computed(() => {
  const columns = [[], [], [], []];
  let colIndex = 0;
  towns.value.forEach(town => {
    columns[colIndex].push(town);
    colIndex = (colIndex + 1) % 3; // Cycles from 0 to 3
  });
  return columns;
});
// --- End New Logic ---

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

/* --- NEW: Service Area List --- */
.service-area-section {
  padding: var(--spacing-xl) 0;
  background-color: var(--color-background); /* White bg */
  border-top: 1px solid #e0e0e0;
}
.town-list {
  list-style-type: none;
  padding-left: 0;
  margin-bottom: var(--spacing-md);
}
.town-list li {
  display: flex;
  align-items: center;
  color: var(--secondary-dark-grey);
  padding: var(--spacing-xs) 0;
  font-size: 1.1rem;
}
.town-list i {
  color: var(--color-accent); /* Use accent color for checkmarks */
  font-size: 1.25rem;
  margin-right: var(--spacing-sm);
}
/* --- End New Styles --- */


/* Map Section */
.map-section {
  padding: var(--spacing-xl) 0;
  background-color: var(--bg-primary); /* Light grey bg */
}

/* NEW: The "window" div that hides the bar */
.map-wrapper {
  position: relative;
  height: 450px; /* This is the *visible* height you want */
  overflow: hidden; /* This is the magic: it clips the black bar */
  
  /* We move these styles from the map to the wrapper */
  border-radius: var(--border-radius);
  border: 2px solid var(--color-background);
  box-shadow: var(--box-shadow);
}

/* UPDATED: The map iframe itself */
.google-map {
  width: 100%;
  
  /* Make the map 80px TALLER than the wrapper */
  /* (450px + 80px for the black bar = 530px) */
  height: 510px; 
  
  /* Pull the map UP by 80px to hide the bar */
  margin-top: -46px; 
  
  /* The border is now on the wrapper */
  border: none; 
}

@media (max-width: 991.98px) {
  .form-container {
    margin-top: var(--spacing-xl);
  }
}
</style>