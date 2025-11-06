<template>
  <!-- 
    This is a reusable header for all service pages.
    It takes a 'title' and 'imageUrl' as props.
  -->
  <div class="service-header-container">
    
    <!-- 
      We use v-bind to dynamically set the background image 
      from the imageUrl prop.
    -->
    <div class="header-background" :style="{ backgroundImage: `url(${imageUrl})` }">
    </div>
    
    <!-- This is the dark overlay/filter -->
    <div class="header-overlay"></div>
    
    <!-- This holds the title text -->
    <div class="container header-content">
      <div class="row">
        <div class="col-12">
          <!-- The title is passed in as a prop -->
          <h1 class="header-title" data-aos="fade-up">
            {{ title }}
          </h1>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
// This component accepts 'title' and 'imageUrl' from its parent.
defineProps({
  title: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  }
});
</script>

<style scoped>
.service-header-container {
  position: relative;
  width: 100%;
  height: 40vh; /* 40% of the viewport height */
  min-height: 300px;
  max-height: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--light-text);
  text-align: center;
  overflow: hidden; /* Ensures no bleed-over */
}

.header-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  /* Adds a slight zoom/pan effect on hover */
  transition: transform 0.4s ease-in-out;
}
.service-header-container:hover .header-background {
  transform: scale(1.05);
}

.header-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* This is the filter, same as the home page hero */
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
}

.header-content {
  position: relative;
  z-index: 2; /* Ensures text is above the overlay */
}

.header-title {
  font-size: 3.5rem;
  font-weight: var(--font-weight-bold);
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
}

@media (max-width: 767.98px) {
  .header-title {
    font-size: 2.5rem;
  }
}
</style>