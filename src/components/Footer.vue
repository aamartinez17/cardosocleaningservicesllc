<template>
  <!-- Main Footer Section -->
  <footer class="site-footer">
    <div class="container">
      <div class="row">
        
        <!-- Column 1: Brand and Blurb -->
        <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
          <router-link to="/">
            <img 
              src="/logos/Cardoso Cleaning Services LLC LOGO.png" 
              alt="Cardoso Cleaning Services Logo" 
              class="footer-logo"
            >
          </router-link>
          <p class="footer-blurb">
            Providing spotless residential and commercial spaces in Virginia. We are bonded, insured, and dedicated to your satisfaction.
          </p>
        </div>
        
        <!-- Column 2: Quick Links -->
        <div class="col-lg-2 col-md-4 col-6 mb-4 mb-lg-0">
          <h5 class="footer-heading">Quick Links</h5>
          <ul class="nav flex-column footer-links">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about">About Us</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/services">Services</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/contact">Contact</router-link>
            </li>
          </ul>
        </div>

        <!-- Column 3: Services -->
        <div class="col-lg-3 col-md-4 col-6 mb-4 mb-lg-0">
          <h5 class="footer-heading">Our Services</h5>
          <ul class="nav flex-column footer-links">
            <li class="nav-item">
              <router-link class="nav-link" to="/services/residential">Residential Cleaning</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/services/commercial">Commercial Cleaning</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/services/move-in-out">Move-In/Move-Out</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/services/construction">New Construction Cleanup</router-link>
            </li>
          </ul>
        </div>

        <!-- Column 4: Get In Touch & Socials -->
        <div class="col-lg-3 col-md-4 mb-4 mb-lg-0">
          <h5 class="footer-heading">Get In Touch</h5>
          <p>Contact us for a free estimate!</p>
          <!-- 
            UPDATED: 
            Changed from <router-link> to <button>
          -->
          <button @click="openDrawer" class="btn cta-button-footer mb-3">
            Get a Quote
          </button>
          
          <div class="social-links">
            <!-- Replace '#' with your actual social media URLs -->
            <a href="#" target="_blank" aria-label="Facebook" title="Facebook">
              <i class="bi bi-facebook"></i>
            </a>
            <a href="#" target="_blank" aria-label="Instagram" title="Instagram">
              <i class="bi bi-instagram"></i>
            </a>
            <a href="#" target="_blank" aria-label="Yelp" title="Yelp">
              <i class="bi bi-yelp"></i>
            </a>
          </div>
        </div>

      </div>
    </div>
  </footer>
  
  <!-- Bottom Bar: Copyright and Powered By -->
  <div class="footer-bottom">
    <div class="container d-flex flex-column flex-md-row justify-content-between align-items-center text-center text-md-start">
      
      <!-- "Powered by" Link -->
      <span class="powered-by mb-2 mb-md-0">
        Powered by <a href="https://casatech.org" target="_blank" rel="noopener noreferrer">Casatech LLC</a>
      </span>
      <span class="powered-by mb-2 mb-md-0">
        Partnership with <a href="/home" target="_blank" rel="noopener noreferrer">Double R Production</a>
      </span>
      
      <!-- Copyright -->
      <span class="copyright">
        &copy; {{ currentYear }} Cardoso Cleaning Services LLC. All Rights Reserved.
      </span>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { ref, inject } from 'vue'; // <-- Import inject

// --- Inject the function from App.vue ---
const openDrawer = inject('openQuoteDrawer');

// Gets the current year for the copyright
const currentYear = ref(new Date().getFullYear())
</script>

<style scoped>
/* * This style block uses the variables from your _variables.css file.
 * Ensure _variables.css is imported in your main.css or App.vue.
 */

.site-footer {
  background-color: var(--bg-primary); /* Light grey background */
  color: var(--color-text-light);
  padding: var(--spacing-xl) 0;
  border-top: 1px solid #e0e0e0;
}

.footer-logo {
  height: 60px; /* Same as navbar */
  width: auto;
  margin-bottom: var(--spacing-md);
}

.footer-blurb {
  color: var(--secondary-dark-grey);
  font-size: 0.9rem;
  line-height: var(--line-height-base);
  /* Ensures blurb doesn't get too wide */
  max-width: 350px; 
}

.footer-heading {
  font-family: var(--font-family-headings);
  font-weight: var(--font-weight-bold);
  color: var(--color-primary);
  margin-bottom: var(--spacing-md);
  font-size: var(--font-size-lg);
}

.footer-links .nav-link {
  padding: 0.25rem 0; /* Tighter vertical spacing */
  color: var(--secondary-dark-grey);
  text-decoration: none;
  transition: var(--transition-color);
}

.footer-links .nav-link:hover {
  color: var(--color-primary);
  text-decoration: underline;
}

/* Re-using styles for consistency, but with footer-specific naming */
.cta-button-footer {
  background-color: var(--color-accent);
  border-color: var(--color-accent);
  color: var(--light-text);
  font-weight: var(--font-weight-bold);
  border-radius: var(--border-radius);
  padding: var(--spacing-sm) var(--spacing-md);
  transition: var(--transition-default);
  text-transform: uppercase;
}
.cta-button-footer:hover {
  background-color: var(--color-primary);
  border-color: var(--color-primary);
  transform: translateY(-2px);
  box-shadow: var(--primary-shadow);
  color: var(--light-text);
}

.social-links a {
  font-size: 1.75rem;
  color: var(--color-primary);
  margin-right: var(--spacing-md);
  transition: var(--transition-color);
}

.social-links a:hover {
  color: var(--color-accent);
}

/* Bottom Bar */
.footer-bottom {
  background-color: var(--color-background); /* White */
  padding: var(--spacing-md) 0;
  border-top: 1px solid #e9ecef;
  font-size: 0.85rem;
  color: var(--secondary-dark-grey);
}

.powered-by a {
  color: var(--color-primary);
  font-weight: var(--font-weight-bold);
  text-decoration: none;
}
.powered-by a:hover {
  text-decoration: underline;
}
</style>