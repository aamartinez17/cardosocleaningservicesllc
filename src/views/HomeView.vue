<template>
  <div class="home-view">
    
    <!-- 1. Hero Section -->
    <header class="hero-section">
      <div class="container">
        <div class="row">
      <div class="col-lg-6" data-aos="fade-right">
        <img 
          src="/logos/Cardoso-Cleaning-Services-LLC-LOGO.png" 
          alt="Cardoso-Cleaning-Services-LLC-LOGO" 
          class="hero-img"
        >
      </div>
      <div class="text-center pt-5 col-lg-6 m-auto pt-lg-0">
        <h1 class="hero-title" data-aos="fade-left">
          Spotless Spaces, Brighter Lives
        </h1>
        <p class="hero-subtitle" data-aos="fade-left" data-aos-delay="300">
          Professional residential and commercial cleaning in Harrisonburg.
        </p>
        <!-- 
          UPDATED: 
          Changed from <router-link> to <button>
        -->
        <button
          @click="openDrawer"
          class="btn cta-button-hero"
          data-aos="fade-left"
          data-aos-delay="600"
        >
          Get a Free Quote
        </button>
        </div>
      </div>
      </div>
    </header>

    <!-- 2. Services Overview Section -->
    <section class="services-overview-section">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 text-center">
            <h2 class="section-title" data-aos="fade-up">
              Our Cleaning Services
            </h2>
            <p class="section-subtitle" data-aos="fade-up" data-aos-delay="100">
              We provide a variety of professional cleaning services tailored to your needs.
            </p>
          </div>
        </div>
        <div class="row text-center">
          <!-- Residential -->
          <div class="col-lg-3 col-md-6" data-aos="fade-up">
            <div class="service-card">
              <i class="service-icon bi bi-house-heart-fill"></i>
              <h3 class="service-card-title">Residential Cleaning</h3>
              <p>Complete home cleaning services to make your space sparkle. We handle everything from dusting to deep cleaning.</p>
              <router-link to="/services/residential" class="service-link">Learn More</router-link>
            </div>
          </div>
          <!-- Commercial -->
          <div class="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="100">
            <div class="service-card">
              <i class="service-icon bi bi-building-fill"></i>
              <h3 class="service-card-title">Commercial Cleaning</h3>
              <p>Professional cleaning for offices, fitness clubs, and body shops to ensure a clean and healthy environment.</p>
              <router-link to="/services/commercial" class="service-link">Learn More</router-link>
            </div>
          </div>
          <!-- Move-In/Out -->
          <div class="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="200">
            <div class="service-card">
              <i class="service-icon bi bi-truck"></i>
              <h3 class="service-card-title">Move-In/Move-Out Cleaning</h3>
              <p>Stress-free moving with our thorough cleaning services. We prepare your old or new home for a fresh start.</p>
              <router-link to="/services/move-in-out" class="service-link">Learn More</router-link>
            </div>
          </div>
          <!-- Construction -->
          <div class="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="300">
            <div class="service-card">
              <i class="service-icon bi bi-cone-striped"></i>
              <h3 class="service-card-title">New Construction Cleanup</h3>
              <p>Post-construction cleaning to remove dust, debris, and dirt, making your new property ready for occupancy.</p>
              <router-link to="/services/construction" class="service-link">Learn More</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 5. NEW: Review Carousel Section -->
    <section class="review-carousel-section">
      <div class="container" data-aos="fade-up">
        <h2 class="section-title text-center">What Our Clients Say</h2>
        <p class="section-subtitle text-center">
          We're proud to build lasting relationships in our community.
        </p>
        
        <swiper
          :modules="swiperModules"
          :slides-per-view="1"
          :space-between="30"
          :navigation="true"
          :pagination="{ clickable: true }"
          :autoplay="{
            delay: 7000,
            disableOnInteraction: false,
          }"
          :loop="true"
        >
          <swiper-slide v-for="(review, index) in testimonials" :key="index">
            <div class="review-card">
              <div class="review-stars">
                <i v-for="n in review.rating" :key="n" class="bi bi-star-fill"></i>
              </div>
              <p class="review-quote">"{{ review.quote }}"</p>
              <h4 class="review-name">- {{ review.name }}</h4>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </section>
    <!-- 3. How It Works Section -->
    <section class="how-it-works-section">
      <div class="container">
        <h2 class="section-title text-center" data-aos="fade-up">How It Works</h2>
        <div class="row text-center">
          <div class="col-md-4" data-aos="fade-up" data-aos-delay="100">
            <div class="step-card">
              <div class="step-number">1</div>
              <h3 class="step-title">Get a Quote</h3>
              <p>Contact us for a free, no-obligation estimate tailored to your needs.</p>
            </div>
          </div>
          <div class="col-md-4" data-aos="fade-up" data-aos-delay="200">
            <div class="step-card">
              <div class="step-number">2</div>
              <h3 class="step-title">We Clean</h3>
              <p>Our professional, insured team arrives on time and gets the job done right.</p>
            </div>
          </div>
          <div class="col-md-4" data-aos="fade-up" data-aos-delay="300">
            <div class="step-card">
              <div class="step-number">3</div>
              <h3 class="step-title">You Relax</h3>
              <p>Enjoy your spotless space and the peace of mind that comes with it.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 4. Mid-Page CTA Section -->
    <section class="cta-mid-section">
      <div class="container">
        <div class="row align-items-center">
          <!-- Image Column -->
          <div class="col-lg-6" data-aos="fade-right">
            <!-- TODO: Replace this placeholder with a real photo -->
            <img 
              src="/images/homeview-mid-section-cta.png" 
              alt="Clean commercial space" 
              class="cta-mid-image"
            >
          </div>
          <!-- Text/CTA Column -->
          <div class="col-lg-6" data-aos="fade-left" data-aos-delay="100">
            <h2 class="cta-mid-title">
              Your Space Deserves the Best
            </h2>
            <p class="cta-mid-text">
              A clean, healthy environment is vital for your employees and customers. We specialize in reliable, customized cleaning for fitness clubs, body shops, and offices.
            </p>
            <!-- 
              UPDATED: 
              Changed from <router-link> to <button>
            -->
            <button @click="openDrawer" class="btn cta-button-hero">
              Get a Commercial Quote
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- 5. Why Choose Us / Trust Section -->
    <section class="why-choose-us-section">
      <div class="why-choose-us-section-background">
      <div class="container">
        <h2 class="section-title text-center" data-aos="fade-up">A Service You Can Trust</h2>
        <p class="section-subtitle text-center" data-aos="fade-up" data-aos-delay="100">
          We're committed to providing a reliable, high-quality experience.
        </p>
        <div class="row">
          <!-- Trust Point 1 -->
          <div class="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="200">
            <div class="trust-card">
              <i class="trust-icon bi bi-patch-check-fill"></i>
              <h3 class="trust-title">Experienced & Tested</h3>
              <p>We have years of experience providing premium home and commercial cleaning services.</p>
            </div>
          </div>
          <!-- Trust Point 2 -->
          <div class="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="300">
            <div class="trust-card">
              <i class="trust-icon bi bi-shield-check"></i>
              <h3 class="trust-title">Trusted Team Members</h3>
              <p>Each team member is background-checked, bonded, and insured to ensure everyone’s peace of mind.</p>
            </div>
          </div>
          <!-- Trust Point 3 -->
          <div class="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="400">
            <div class="trust-card">
              <i class="trust-icon bi bi-calendar-check"></i>
              <h3 class="trust-title">Personalized Clean</h3>
              <p>Flexible, personalized cleaning options allow you to enjoy life’s moments on your schedule.</p>
            </div>
          </div>
          <!-- Trust Point 4 -->
          <div class="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="500">
            <div class="trust-card">
              <i class="trust-icon bi bi-people-fill"></i>
              <h3 class="trust-title">We’ve Got This</h3>
              <p>Every year, clients like you trust us to deliver reliable, high-quality cleaning services.</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>

    <!-- 6. NEW: Leave a Review CTA -->
    <section class="leave-review-section py-5" data-aos="fade-up">
      <div class="container text-center">
        <h3 class="review-cta-title">Enjoying Our Service?</h3>

        <div class="review-cta-stars">
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
        </div>
        <p class="review-cta-subtitle">Let us know how we're doing! Your feedback helps us and other customers.</p>
        
        <!-- This button links to the ref you created in Step 1 -->
        <a :href="googleReviewLink" target="_blank" rel="noopener noreferrer" class="btn google-review-button">
          <!-- Google 'G' Logo SVG -->
          <svg width="20" height="20" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-right: 12px;">
            <path d="M17.64 9.20455C17.64 8.56818 17.58 7.95455 17.47 7.36364H9V10.8409H13.84C13.66 11.9773 13.06 12.9318 12.15 13.5682V15.8182H14.95C16.67 14.25 17.64 11.9318 17.64 9.20455Z" fill="#4285F4"/>
            <path d="M9 18C11.43 18 13.47 17.1818 14.95 15.8182L12.15 13.5682C11.36 14.1136 10.3 14.5 9 14.5C7.02 14.5 5.34 13.1136 4.7 11.3409H1.82V13.6591C3.25 16.3 5.92 18 9 18Z" fill="#34A853"/>
            <path d="M4.7 11.3409C4.52 10.8 4.41 10.2045 4.41 9.56818C4.41 8.93182 4.52 8.34091 4.7 7.79545V5.47727H1.82C1.26 6.56818 0.9 7.81818 0.9 9.13636C0.9 10.4545 1.26 11.7045 1.82 12.7955L4.7 10.4773V11.3409Z" fill="#FBBC05"/>
            <path d="M9 4.63636C10.66 4.63636 11.82 5.22727 12.39 5.77273L15.02 3.13636C13.47 1.68182 11.43 0.863636 9 0.863636C5.92 0.863636 3.25 2.56818 1.82 5.47727L4.7 7.79545C5.34 6.02273 7.02 4.63636 9 4.63636Z" fill="#EA4335"/>
          </svg>
          Leave a Review on Google
        </a>
      </div>
    </section>

    <!-- 7. FAQ Section -->
    <section class="faq-section">
      <div class="container">
        <div class="row align-items-center">
          
          <!-- FAQ Accordion (Left Column) -->
          <div class="col-lg-6" data-aos="fade-right">
            <h2 class="section-title mb-4">Frequently Asked Questions</h2>
            
            <div class="accordion" id="faqAccordion">
              
              <!-- FAQ Item 1 -->
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Are you bonded and insured?
                  </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                  <div class="accordion-body">
                    <strong>Yes, absolutely.</strong> Cardoso Cleaning Services LLC is fully bonded and insured. This provides peace of mind for you, your home, and our dedicated team members.
                  </div>
                </div>
              </div>
              
              <!-- FAQ Item 2 -->
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Do I need to be home for the cleaning?
                  </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
                  <div class="accordion-body">
                    No, you do not! Most of our clients provide us with a spare key or a code for entry. We are happy to clean while you are away, so you can come home to a fresh, spotless space.
                  </div>
                </div>
              </div>
              
              <!-- FAQ Item 3 -->
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    What services do you offer?
                  </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
                  <div class="accordion-body">
                    We offer a wide range, including standard Residential Cleaning, Commercial Cleaning (for offices, fitness clubs, body shops), Move-In/Move-Out Cleaning, and New Construction Cleanup. We can tailor a plan to fit your exact needs!
                  </div>
                </div>
              </div>

              <!-- NEW FAQ Item 4: Service Area -->
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingFour">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    What areas do you serve?
                  </button>
                </h2>
                <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#faqAccordion">
                  <div class="accordion-body">
                    We are based in Harrisonburg, VA (2213 Pearl Ln) and proudly serve the entire Shenandoah Valley and surrounding areas.
                  </div>
                </div>
              </div>
              
              <!-- NEW FAQ Item 5: Contact Info -->
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingFive">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                    What's the best way to contact you?
                  </button>
                </h2>
                <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#faqAccordion">
                  <div class="accordion-body">
                    You can call or text us at (540) 271-3851 or (540) 476-0348. You can also click the "Get a Quote" button on our site to fill out a request form directly!
                  </div>
                </div>
              </div>

              <!-- NEW FAQ Item 6: Hours -->
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingSix">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                    What are your business hours?
                  </button>
                </h2>
                <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#faqAccordion">
                  <div class="accordion-body">
                    Our standard operating hours are Monday - Saturday, 8:00 AM to 5:00 PM.
                  </div>
                </div>
              </div>

            </div>
          </div>
          
          <!-- Image (Right Column) -->
          <div class="col-lg-6 text-center" data-aos="fade-left" data-aos-delay="100">
            <!-- TODO: Replace this placeholder with a real photo -->
            <img 
              src="/images/homeview-faq.png" 
              alt="Cardoso Cleaning team member" 
              class="faq-image"
            >
          </div>
        </div>
      </div>
    </section>

    <!-- 7. Final CTA Section -->
    <section class="final-cta-section">
      <div class="container text-center" data-aos="zoom-in">
        <h2 class="final-cta-title">Ready for a Cleaner Space?</h2>
        <p class="final-cta-subtitle">
          Let Cardoso Cleaning Services handle the details.
        </p>
        <router-link to="/contact" class="btn cta-button-final">
            Contact Us Today
        </router-link>
      </div>
    </section>

  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { inject, ref } from 'vue';
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// --- Inject the function from App.vue ---
const openDrawer = inject('openQuoteDrawer');

// List of modules to use
const swiperModules = [Navigation, Pagination, Autoplay];

// Mock testimonial data (you can replace this with real reviews)
const testimonials = ref([
  {
    name: 'Brad Cohen, Founder of Connexa Real Estate',
    quote: "I highly recommend Cardoso's Cleaning Services. Their consistency, quality, and service make them a standout choice.",
    rating: 5
  },
  {
    name: 'Bradlee Blosser, Project and Contracts Coordinator with Nielsen Builders, Inc',
    quote: 'Working with this team has made our transition between cleaning companies completely seamless',
    rating: 5
  },
  {
    name: 'Cindy Roberts, Home Owner, Staunton, Virginia',
    quote: 'Maria and her cleaning team are wonderful! They are thorough, doing all those cleaning chores I do not enjoy',
    rating: 5
  },
  {
    name: 'Jenny Wetsel, General Manager, Valley Fitness Harrisonburg',
    quote: 'If you need reliable, hardworking people to take care of your place, Cardoso Cleaning is the way to go!',
    rating: 5
  }
]);

// TODO: Replace this placeholder with your actual Google review link
const googleReviewLink = ref('https://g.page/r/YOUR_BUSINESS_ID/review')
</script>

<style scoped>
/* * This style block uses the variables from your _variables.css file.
 * Ensure _variables.css is imported in your main.css or App.vue.
 */

/* General Section Padding */
.services-overview-section,
.how-it-works-section,
.cta-mid-section, /* Added */
.why-choose-us-section,
.faq-section {
  padding: var(--spacing-xl) 0;
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

/* 1. Hero Section (UPDATED) */
.hero-section {
  /* background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),  */
  background: linear-gradient(90deg,rgba(68, 48, 145,1) 0%,
   rgba(68, 48, 145, .5) 20%,
   rgba(64, 118, 167, .5) 49%, 
   rgba(62, 165, 183, .5) 66%,
   rgba(61, 182, 188, .5) 80%,
   rgba(61, 182, 188, 1) 100%),
   url('/images/hero-page-image.png') 
  no-repeat center center;
  background-size: cover;
  color: var(--light-text);

  /* --- NEW / UPDATED STYLES --- */

  /* This calculates 100% of the viewport height MINUS your navbar's height */
  min-height: calc(100vh - var(--top-padding)); 

  /* These 3 lines vertically and horizontally center your content in the new space */
  display: flex;
  align-items: center;
  justify-content: center;

  /* We can remove the old padding, as flex-centering handles it */
  /* padding: 8rem var(--spacing-md); */ /* <-- REMOVED */
}

.hero-img {
  width: 100%;
  margin: auto;
  background-color: var(--bg-primary);
  border-radius: var(--border-radius);
  padding-right: 15px;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: var(--font-weight-bold);
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
}
.hero-subtitle {
  font-size: var(--font-size-lg);
  margin-bottom: var(--spacing-lg);
  font-weight: var(--font-weight-light);
}
.hero-section .cta-button-hero {
  background-color: var(--color-primary);
}

.hero-section .cta-button-hero:hover {
  color: var(--color-accent);
}



.cta-button-hero {
  background-color: var(--color-accent);
  border-color: var(--color-accent);
  color: var(--light-text);
  font-weight: var(--font-weight-bold);
  border-radius: var(--border-radius);
  padding: var(--spacing-md) var(--spacing-lg);
  transition: var(--transition-default);
  text-transform: uppercase;
  font-size: var(--font-size-lg);
}
.cta-button-hero:hover {
  background-color: var(--light-text);
  border-color: var(--light-text);
  color: var(--color-primary);
  transform: translateY(-3px);
  box-shadow: var(--primary-shadow);
}

/* 2. Services Overview Section (No changes) */
.services-overview-section {
  background-color: var(--bg-primary);
}
.service-card {
  background-color: var(--color-background);
  padding: var(--spacing-lg);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  transition: var(--transition-default);
  height: 100%;
  border-bottom: 5px solid var(--color-secondary);
  margin-bottom: var(--spacing-md);
}
.service-card:hover {
  transform: translateY(-5px);
  border-bottom-color: var(--color-primary);
}
.service-icon {
  font-size: 3rem;
  color: var(--color-primary);
  margin-bottom: var(--spacing-md);
}
.service-card-title {
  font-family: var(--font-family-headings);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-light);
  margin-bottom: var(--spacing-sm);
  min-height: 48px; 
}
.service-link {
  color: var(--color-accent);
  font-weight: var(--font-weight-bold);
  text-decoration: none;
  transition: var(--transition-color);
}
.service-link:hover {
  color: var(--color-primary);
  text-decoration: underline;
}

/* 3. How It Works Section (No changes) */
.how-it-works-section {
  background-color: var(--color-background);
}
.step-card {
  padding: var(--spacing-md);
}
.step-number {
  width: 60px;
  height: 60px;
  line-height: 60px;
  border-radius: 50%;
  background-color: var(--color-accent);
  color: var(--light-text);
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
  margin: 0 auto var(--spacing-md);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--primary-shadow);
}
.step-title {
  font-family: var(--font-family-headings);
  font-weight: var(--font-weight-bold);
  color: var(--color-primary);
  margin-bottom: var(--spacing-sm);
}

/* 4. Mid-Page CTA Section */
.cta-mid-section {
  background-color: var(--bg-primary); /* Light grey bg */
  /* This is a base64-encoded SVG dot pattern using your secondary color */
  background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8Y2lyY2xlIGZpbGw9IiNCM0I1QjgiIGN4PSIxMCIgY3k9IjEwIiByPSIyIiBmaWxsLW9wYWNpdHk9IjAuMyIvPgo8L3N2Zz4=");
  background-repeat: repeat;
  overflow: hidden; /* Contains the AOS fades */
}
.cta-mid-image {
  max-width: 100%;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
}
.cta-mid-title {
  font-family: var(--font-family-headings);
  font-weight: var(--font-weight-bold);
  font-size: 2.5rem;
  color: var(--color-primary);
  margin-bottom: var(--spacing-sm);
}
.cta-mid-text {
  font-size: var(--font-size-lg);
  color: var(--secondary-dark-grey);
  margin-bottom: var(--spacing-lg);
}


/* 5. Why Choose Us / Trust Section */
/* .why-choose-us-section  { */
  /* background-color: black; */
  /* background-color: var(--color-background); */
  /* background-image: url("/logos/Cardoso-Cleaning-Services-LLC-LOGO.png");
  background-size:contain; */
/* } */

 .why-choose-us-section .why-choose-us-section-background{
  position: relative;
  background-color: var(--color-background);
  background-image: url("/logos/Cardoso-Cleaning-Services-LLC-LOGO.png");
  background-size:contain;
  background-repeat:no-repeat;
  background-position: center center;

}

.why-choose-us-section .why-choose-us-section-background::before{
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, .95); /* Black overlay with 50% opacity */
}
.trust-card {
  text-align: center;
  padding: var(--spacing-lg) var(--spacing-md);
  border-radius: var(--border-radius);
  transition: var(--transition-default);
  height: 100%;
}
.trust-card:hover {
  background-color: var(--bg-primary);
  transform: translateY(-5px);
}
.trust-icon {
  font-size: 3rem;
  color: var(--color-accent); /* Use accent color for icons */
  margin-bottom: var(--spacing-md);
}
.trust-title {
  font-family: var(--font-family-headings);
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-lg);
  color: var(--color-primary);
  margin-bottom: var(--spacing-sm);
}

/* 6. NEW: Review Carousel Section */
.review-carousel-section {
  background-color: var(--color-background); /* White */
  /* This is the same dot pattern from your other section */
  background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8Y2lyY2xlIGZpbGw9IiNCM0I1QjgiIGN4PSIxMCIgY3k9IjEwIiByPSIyIiBmaWxsLW9wYWNpdHk9IjAuMyIvPgo8L3N2Zz4=");
  background-repeat: repeat;
  padding: var(--spacing-xl) 0;
}

.review-card {
  max-width: 700px; /* Constrains width for readability */
  margin: 0 auto; /* Centers the card */
  padding: var(--spacing-lg) var(--spacing-xl);
  text-align: center;
  background-color: var(--color-background);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  border-top: 5px solid var(--color-primary);
}
.review-stars {
  color: var(--color-accent);
  font-size: 1.25rem;
  margin-bottom: var(--spacing-md);
}
.review-quote {
  font-size: var(--font-size-lg);
  font-style: italic;
  color: var(--secondary-dark-grey);
  line-height: 1.6;
}
.review-name {
  font-family: var(--font-family-headings);
  font-weight: var(--font-weight-bold);
  color: var(--color-primary);
  margin-top: var(--spacing-lg);
  font-size: 1.1rem;
}

/* 6. NEW: Leave a Review CTA */
.leave-review-section {
  background-color: var(--color-background); /* Light grey bg */
  padding: var(--spacing-lg) 0; /* Tighter padding than other sections */
  /* border-top: 1px solid #e0e0e0;
  border-bottom: 1px solid #e0e0e0; */
  /* background-color: var(--color-accent); */
}

.leave-review-section .container {
  /* padding: var(--spacing-xl);
  border: 5px solid var(--color-accent);
  border-radius: var(--border-radius); */
  /* background-color: var(--bg-primary); */
/* 
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='75' height='75' viewBox='0 0 75 75'><path fill-opacity='0.3' fill='%23B3B5B8' d='M37.5%2032.5%20L38.5%2036.5%20L42.5%2037.5%20L38.5%2038.5%20L37.5%2042.5%20L36.5%2038.5%20L32.5%2037.5%20L36.5%2036.5%20Z'/></svg>");
  background-repeat: repeat; */
  background-color: var(--color-background);
  padding: var(--spacing-lg);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  transition: var(--transition-default);
  height: 100%;
  border-top: 5px solid var(--color-secondary);
  margin-top: var(--spacing-md);
}

.leave-review-section .container:hover {
  transform: translateY(-5px);
  border-top-color: var(--color-accent);
}

.review-cta-title {
  /* Using h3 font size from main.css */
  font-family: var(--font-family-headings);
  font-weight: var(--font-weight-bold);
  color: var(--color-primary);
  margin-bottom: var(--spacing-sm);
}

.review-cta-subtitle {
  /* Using base font size from main.css */
  color: var(--secondary-dark-grey);
  margin-bottom: var(--spacing-lg);
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.review-cta-stars {
  color: #FBBC05; /* This is the standard "Google" gold/yellow color */
  font-size: 1.5rem; /* ~24px */
  margin-bottom: var(--spacing-sm); /* Space between stars and subtitle */
}
.review-cta-stars i {
  /* Adds a tiny bit of space between each star */
  margin: 0 0.15rem;
}

.google-review-button {
  background-color: #FFFFFF;
  border: 1px solid #DADCE0;
  color: #3C4043;
  font-family: var(--font-family-headings);
  font-weight: var(--font-weight-bold);
  padding: 0.75rem 1.5rem;
  border-radius: var(--border-radius);
  transition: var(--transition-default);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 2px 0 rgba(60,64,67,.3), 0 1px 3px 1px rgba(60,64,67,.15);
  text-transform: uppercase;
  font-size: 0.9rem;
}

.google-review-button:hover {
  box-shadow: 0 1px 3px 0 rgba(60,64,67,.3), 0 4px 8px 3px rgba(60,64,67,.15);
  border-color: #D2D2D2;
}

/* 7. FAQ Section */
.faq-section {
  background-color: var(--bg-primary); /* Light grey background */
}

.faq-image {
  max-width: 100%;
  height: auto;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
}

/* Styling for Bootstrap Accordion */
.accordion-item {
  border-radius: var(--border-radius);
  border: none;
  margin-bottom: var(--spacing-sm);
  box-shadow: var(--box-shadow);
  overflow: hidden; 
}
.accordion-header {
  margin: 0;
}
.accordion-button {
  font-family: var(--font-family-headings);
  font-weight: var(--font-weight-bold);
  color: var(--color-primary);
  background-color: var(--color-background);
  border-radius: 0;
  border: none;
}
.accordion-button:not(.collapsed) {
  color: var(--color-primary);
  background-color: #f8f9fa;
  box-shadow: inset 0 -1px 0 rgba(0,0,0,.125);
}
.accordion-button:focus {
  box-shadow: none;
  border-color: transparent;
}
.accordion-button::after {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23443091'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
}
.accordion-button:not(.collapsed)::after {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23443091'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
  transform: rotate(-180deg);
}
.accordion-body {
  background-color: var(--color-background);
  color: var(--color-text-light);
}


/* 7. Final CTA Section */
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

/* Responsive adjustments */
@media (min-width: 768px) and (max-width: 991.98px) {
  .service-card {
    min-height: 320px;
  }
}
@media (max-width: 991.98px) {
  .faq-image {
    margin-bottom: var(--spacing-lg);
  }
  .cta-mid-image {
    margin-bottom: var(--spacing-lg);
  }
  .cta-mid-section .col-lg-6 {
    text-align: center;
  }
}
</style>