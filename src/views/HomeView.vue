<template>
  <div class="home-view">
    
    <!-- 1. Hero Section -->
    <header class="hero-section">
      <div class="container text-center">
        <h1 class="hero-title" data-aos="fade-up">
          Spotless Spaces, Brighter Lives
        </h1>
        <p class="hero-subtitle" data-aos="fade-up" data-aos-delay="100">
          Professional residential and commercial cleaning in Harrisonburg.
        </p>
        <!-- 
          UPDATED: 
          Changed from <router-link> to <button>
        -->
        <button
          @click="openDrawer"
          class="btn cta-button-hero"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Get a Free Quote
        </button>
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
            delay: 5000,
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
                    We are based in Harrisonburg, VA (2213 Pearl Ln) and proudly serve the entire **Shenandoah Valley** and surrounding areas.
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
                    You can call or text us at **(540) 271-3851** or **(540) 476-0348**. You can also click the "Get a Quote" button on our site to fill out a request form directly!
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
                    Our standard operating hours are **Monday - Saturday, 8:00 AM to 5:00 PM**.
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
    name: 'Sarah K., Harrisonburg',
    quote: 'Cardoso Cleaning is a lifesaver! I come home to a spotless house every other week. Their team is professional, trustworthy, and incredibly thorough. I highly recommend them!',
    rating: 5
  },
  {
    name: 'Mike P., Rockingham Co.',
    quote: 'We use them for our commercial space, and the difference is night and day. Maria is responsive, and the crew is reliable. Our office has never been cleaner. Great for business.',
    rating: 5
  },
  {
    name: 'Emily R., Harrisonburg',
    quote: 'They handled our move-out clean, and I am so thankful we hired them. The place looked better than when we moved in, and we got our full security deposit back!',
    rating: 5
  }
]);
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

/* 1. Hero Section (No changes) */
.hero-section {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
              url('/images/hero-page-image.png') 
              no-repeat center center;
  background-size: cover;
  padding: 8rem var(--spacing-md);
  min-height: 70vh;
  color: var(--light-text);
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
  color: var(--color-primary);
  font-weight: var(--font-weight-bold);
  text-decoration: none;
  transition: var(--transition-color);
}
.service-link:hover {
  color: var(--color-accent);
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
.why-choose-us-section {
  background-color: var(--color-background); /* White background */
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

/* 5. NEW: Review Carousel Section */
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
  border-top: 5px solid var(--color-accent);
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