<template>
  <div>
    <!-- 1. Overlay / Backdrop -->
    <!-- This semi-transparent background covers the site when the drawer is open -->
    <transition name="fade">
      <div
        v-if="isOpen"
        class="drawer-overlay"
        @click="closeDrawer"
      ></div>
    </transition>

    <!-- 2. Drawer Panel -->
    <!-- This is the panel that slides in from the right -->
    <transition name="slide">
      <div v-if="isOpen" class="drawer-panel">
        
        <!-- Drawer Header with Close Button -->
        <div classs="drawer-header">
          <button @click="closeDrawer" class="close-btn" aria-label="Close">
            &times;
          </button>
        </div>

        <!-- Drawer Content (The Form) -->
        <div class="drawer-content">
          <QuoteForm />
        </div>

      </div>
    </transition>
  </div>
</template>

<script setup>
import QuoteForm from './QuoteForm.vue';

// This component receives 'isOpen' as a prop and 'emits' a 'close' event.
// This allows App.vue to control it.
defineProps({
  isOpen: Boolean,
});
const emit = defineEmits(['close']);

const closeDrawer = () => {
  emit('close');
};
</script>

<style scoped>
/* Backdrop */
.drawer-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 998; /* Below the drawer, above content */
}

/* Panel */
.drawer-panel {
  position: fixed;
  top: 0;
  right: 0;
  width: 90%; /* Responsive width for mobile */
  max-width: 480px; /* Max width on desktop */
  height: 100vh;
  background-color: var(--color-background);
  box-shadow: -4px 0 15px rgba(0, 0, 0, 0.1);
  z-index: 1050; /* On top of everything */
  display: flex;
  flex-direction: column;
  overflow-y: auto; /* Allows form to scroll on small screens */
}

.drawer-header {
  padding: var(--spacing-sm);
  display: flex;
  justify-content: flex-end;
}

.close-btn {
  background: none;
  border: none;
  font-size: 2.5rem;
  color: var(--secondary-dark-grey);
  line-height: 1;
  padding: 0 var(--spacing-sm);
  cursor: pointer;
  transition: var(--transition-color);
}
.close-btn:hover {
  color: var(--color-primary);
}

.drawer-content {
  /* Padding for the form */
  padding: 0 var(--spacing-lg) var(--spacing-lg);
}

/* * VUE TRANSITIONS
 * These make the fade and slide effects work.
 */

/* Overlay Fade */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Panel Slide */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease-in-out;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}
</style>