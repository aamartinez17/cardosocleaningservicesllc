<template>
  <Navbar />

  <main class="main-content">
    <RouterView />
  </main>

  <Footer />

  <!-- 
    The FormDrawer component lives here.
    We pass the 'isDrawerOpen' state as a prop.
    We listen for the 'close' event to update the state.
  -->
  <FormDrawer :isOpen="isDrawerOpen" @close="closeDrawer" />
</template>

<script setup>
import { RouterView } from 'vue-router';
import { ref, provide, watch } from 'vue'; // Import ref, provide, and watch
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import FormDrawer from './components/FormDrawer.vue'; // Import the new drawer

// --- Drawer State Management ---
// 1. Create a reactive state for the drawer
const isDrawerOpen = ref(false);

// 2. Create functions to open and close it
const openDrawer = () => {
  isDrawerOpen.value = true;
};

const closeDrawer = () => {
  isDrawerOpen.value = false;
};

// 3. "Provide" the functions/state to all children
provide('openQuoteDrawer', openDrawer);
provide('isDrawerOpen', isDrawerOpen); // Provides the state for the Navbar to watch

// 4. Watch for changes to the drawer state
watch(isDrawerOpen, (isOpen) => {
  if (isOpen) {
    // Add class to body when drawer opens to prevent scrolling
    document.body.classList.add('drawer-open');
  } else {
    // Remove class from body when drawer closes
    document.body.classList.remove('drawer-open');
  }
});
// --- End Drawer State Management ---
</script>

<style>
/* Import your variables file globally */
@import '@/assets/_variables.css';

/* * This padding ensures your page content doesn't
 * get hidden behind the fixed navbar
 */
.main-content {
  padding-top: var(--top-padding);
}

body {
  font-family: var(--font-family-body);
  color: var(--color-text-light);
  background-color: var(--color-background);
}

/* * This class is added to the <body> via JS
 * to prevent the main page from scrolling 
 * when the drawer is open.
 */
body.drawer-open {
  overflow: hidden;
}
</style>