<template>
  <div class="about-view">
    
    <!-- 1. Reusable Page Header -->
    <ServicePageHeader 
      title="About Cardoso Cleaning" 
      imageUrl="/images/aboutview-header.png"
    />

    <!-- 2. Our Story Section -->
    <section class="page-section">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-xxl-12" data-aos="fade-right">
            <h2 class="section-title">Our Story</h2>
            <p class="section-subtitle">
              Serving the Shenandoah Valley Since 2022.
            </p>
            <p>
              Welcome to Cardoso Cleaning Services LLC! We are a locally owned and operated business based in Harrisonburg, VA, dedicated to providing top-quality residential and commercial cleaning services to our community.
            </p>
            
            <!-- NEW PARAGRAPH (INSPIRED BY MM) -->
            <p>
              We are more than just a cleaning service. We're a company dedicated to giving our customers back the time they deserve to enjoy the things they love. Our goal is to restore balance to your life by taking care of your home.
            </p>
            <!-- NEW PARAGRAPH (INSPIRED BY MM) -->
            <p>
              Our process gets deep into the corners and crevices, ridding your space of dust and germs to deliver a home that is both spotless and healthy.
            </p>

            <p>
              Founded by Maria Cardoso in 2022, our company was built on a simple foundation: to provide a reliable, professional, and high-quality cleaning service that our clients can trust.
            </p>
            <!-- MOVED THIS PARAGRAPH DOWN FOR BETTER FLOW -->
            <p>
              Every member of our team is bonded, insured, and trained to treat your space with the utmost care and respect.
            </p>
            <button @click="openDrawer" class="btn cta-button-page">
              Get Your Free Estimate
            </button>
          </div>
          <!-- <div class="mt-5 col-xxl-6" data-aos="fade-left" data-aos-delay="100">
            <img 
              src="https://placehold.co/600x450/3DB6BC/FFFFFF?text=Maria+Cardoso+(Founder)" 
              alt="Maria Cardoso, Founder of Cardoso Cleaning" 
              class="img-fluid rounded-image"
            >
          </div> -->
        </div>
      </div>
    </section>

    <!-- 3. "Why Choose Us" Section (Reused from Home) -->
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
              <!-- UPDATED TEXT (INSPIRED BY MM) -->
              <p>We carefully screen and background-check every employee, then provide comprehensive training before they ever enter your home.</p>
            </div>
          </div>
          <div class="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="400">
            <div class="trust-card">
              <i class="trust-icon bi bi-calendar-check"></i>
              <h3 class="trust-title">Personalized Clean</h3>
              <!-- UPDATED TEXT (INSPIRED BY MM) -->
              <p>No two homes are the same. We take the time to listen and create a custom cleaning program that fits your specific needs and budget.</p>
            </div>
          </div>
          <div class="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="500">
            <div class="trust-card">
              <i class="trust-icon bi bi-star-fill"></i>
              <h3 class="trust-title">Satisfaction Guaranteed</h3>
              <!-- UPDATED TEXT (INSPIRED BY MM) -->
              <p>Your satisfaction is our goal. If you're not happy with a clean, let us know within 24 hours and we will return to make it right.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 4. Testimonials Section -->
    <section class="testimonials-section page-section">
      <div class="container">
        <h2 class="section-title text-center" data-aos="fade-up">Hear From Our Community</h2>
        <p class="section-subtitle text-center" data-aos="fade-up" data-aos-delay="100">
          We pride ourselves on the relationships we build with local families and businesses.
        </p>

        <div class="row g-4">
          <div v-for="(item, index) in testimonials" :key="index" class="col-lg-6" data-aos="fade-up" :data-aos-delay="index * 100">
            <div class="testimonial-card">
              <i class="bi bi-quote testimonial-quote-icon"></i>
              <h4 v-if="item.title" class="testimonial-card-title">{{ item.title }}</h4>
              <p class="testimonial-text">{{ item.text }}</p>
              <div class="testimonial-author">
                <span class="author-name">{{ item.name }}</span>
                <span class="author-role">{{ item.role }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 5. Final CTA -->
    <section class="final-cta-section">
      <div class="container text-center" data-aos="zoom-in">
        <h2 class="final-cta-title">Join Our Family of Happy Clients</h2>
        <p class="final-cta-subtitle">
          Experience the Cardoso Cleaning difference for yourself.
        </p>
        <button @click="openDrawer" class="btn cta-button-final">
          Get My Free Quote
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

const testimonials = [
  {
    name: 'Brad Cohen',
    role: 'Founder of Connexa Real Estate',
    text: "As a local realtor in Harrisonburg, it is incredibly hard to find a cleaning company that is consistently reliable, responsive, and detail oriented. My experience with Cardoso's Cleaning Services in Harrisonburg, Virginia has been exceptional. Maria and her team were quick to respond, easy to schedule with, and immediately impressed me with their professionalism. Their attention to detail shows in every room they touch. The cleaning was thorough, thoughtful, and far exceeded the standard surface-level work I often see. They made the home feel genuinely refreshed and ready to show. The team is friendly, dependable, and truly trustworthy. It is clear they take pride in their work and treat every property with care, which is invaluable in my line of business. If you are looking for professional cleaning services in Harrisonburg, I highly recommend Cardoso's Cleaning Services. Their consistency, quality, and service make them a standout choice."
  },
  {
    name: 'Jenny Wetsel',
    role: 'General Manager, Valley Fitness Harrisonburg',
    title: '"Highly Recommend Cardoso Cleaning Services!"',
    text: "At Valley Fitness, we need a cleaning service we can count on— and that's exactly what we get. They clean our gym six nights a week, always showing up in the middle of the night, no matter the weather. Whether it's raining, snowing, or freezing cold, they're here making sure everything is spotless by morning. What stands out the most is how dependable and professional they are. The team is always on time, friendly, and they don't miss a detail. From the gym floor to the locker rooms, everything looks amazing when we open for business. We couldn't ask for a better cleaning service to keep our gym in top shape. If you need reliable, hardworking people to take care of your place, Cardoso Cleaning is the way to go!"
  },
  {
    name: 'Bradlee Blosser',
    role: 'Project and Contracts Coordinator with Nielsen Builders, Inc',
    text: "Working with this team has made our transition between cleaning companies completely seamless. They've been extremely attentive to every request and consistently follow up to make sure everything is done just the way we need it. The cleaning has truly been next-level, especially considering the size of our office. They're a great family with a great business—reliable, professional, and genuinely trustworthy. We couldn't be happier with their service."
  },
  {
    name: 'Cindy Roberts',
    role: 'Home Owner, Staunton, Virginia',
    text: "Maria and her cleaning team are wonderful! They are thorough (cleaning under furniture, beds, etc.) as well as doing all those cleaning chores I do not enjoy (mopping and dusting in particular!). I would highly recommend them to anyone!"
  }
];
</script>

<style scoped>
/* Re-using styles from other pages for consistency */
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

/* Testamonial*/
.testimonials-section {
  background-color: var(--color-background);
}

.testimonial-card {
  background-color: var(--bg-primary); /* Light grey matches your theme */
  padding: var(--spacing-lg);
  border-radius: var(--border-radius);
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  border-left: 5px solid var(--color-accent);
  transition: transform 0.3s ease;
}

.testimonial-card:hover {
  transform: translateY(-5px);
}

.testimonial-quote-icon {
  font-size: 2.5rem;
  color: var(--color-accent);
  opacity: 0.5;
  margin-bottom: var(--spacing-sm);
}

.testimonial-card-title {
  font-family: var(--font-family-headings);
  font-weight: var(--font-weight-bold);
  color: var(--color-primary);
  margin-bottom: var(--spacing-sm);
  font-size: 1.2rem;
}

.testimonial-text {
  font-style: italic;
  color: var(--color-text-light);
  line-height: 1.6;
  flex-grow: 1;
  margin-bottom: var(--spacing-md);
}

.testimonial-author {
  display: flex;
  flex-direction: column;
  border-top: 1px solid rgba(0,0,0,0.05);
  padding-top: var(--spacing-sm);
}

.author-name {
  font-weight: var(--font-weight-bold);
  color: var(--color-primary);
  font-size: 1.1rem;
}

.author-role {
  font-size: 0.9rem;
  color: var(--secondary-dark-grey);
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
  .trust-card {
    margin-bottom: var(--spacing-md);
  }
}
</style>