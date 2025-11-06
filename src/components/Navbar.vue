<template>
  <!-- 
    Bootstrap 5 Navbar:
    - 'fixed-top': Keeps the navbar visible on scroll.
    - 'navbar-expand-lg': Collapses the navbar on screens smaller than 'lg' (992px).
    - 'navbar-light': Configures text for a light background.
  -->
  <nav class="navbar navbar-expand-lg navbar-light fixed-top">
    <div class="container">
      
      <!-- Logo / Brand Link -->
      <router-link class="navbar-brand" to="/">
        <img 
          src="/logos/Cardoso Cleaning Services LLC LOGO.png" 
          alt="Cardoso Cleaning Services LLC Logo" 
          class="navbar-logo"
        >
      </router-link>

      <!-- Mobile Toggler Button -->
      <button 
        class="navbar-toggler" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#navbarNav" 
        aria-controls="navbarNav" 
        aria-expanded="false" 
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- 
        Collapsible Menu
        UPDATED: Added ref="navbarNavRef" for manual collapse control
      -->
      <div class="collapse navbar-collapse" id="navbarNav" ref="navbarNavRef">
        <!-- 
          'ms-auto' pushes the nav links to the right.
          'align-items-center' vertically centers items in the mobile menu.
        -->
        <ul class="navbar-nav ms-auto align-items-center">
          
          <!-- Dynamic Nav Links -->
          <li class="nav-item" v-for="link in navLinks" :key="link.name">
            
            <!-- Standard Link -->
            <router-link v-if="!link.isDropdown" class="nav-link" :to="link.path">
              {{ link.name }}
            </router-link>

            <!-- UPDATED: Dropdown Link -->
            <li v-if="link.isDropdown" class="nav-item dropdown">
              <a 
                class="nav-link dropdown-toggle" 
                href="#" 
                :id="`navbarDropdown-${link.name}`" 
                role="button" 
                data-bs-toggle="dropdown" 
                aria-expanded="false"
              >
                {{ link.name }}
              </a>
              <ul class="dropdown-menu" :aria-labelledby="`navbarDropdown-${link.name}`">
                <!-- 
                  UPDATED: 
                  This loop now supports dividers (v-if/v-else)
                -->
                <li v-for="(child, index) in link.children" :key="child.name || `divider-${index}`">
                  <hr v-if="child.isDivider" class="dropdown-divider">
                  <router-link v-else class="dropdown-item" :to="child.path">
                    {{ child.name }}
                  </router-link>
                </li>
              </ul>
            </li>

          </li>

          <!-- Call-to-Action (CTA) Button -->
          <li class="nav-item ms-lg-2 mt-2 mt-lg-0">
            <!-- 
              UPDATED: 
              Changed from <router-link> to <button>
            -->
            <button @click="openDrawer" class="btn cta-button">
              Get a Quote
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
// --- UPDATED IMPORTS ---
import { ref, inject, onMounted, watch } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import { Collapse } from 'bootstrap'; // Import Bootstrap's JS

// --- Inject functions/state from App.vue ---
const openDrawer = inject('openQuoteDrawer');
const isDrawerOpen = inject('isDrawerOpen'); // Injected the state

// --- Page Links (UPDATED) ---
const navLinks = ref([
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  {
    name: 'Services',
    isDropdown: true,
    children: [
      { name: 'All Services', path: '/services' }, // <-- ADDED
      { isDivider: true }, // <-- ADDED
      { name: 'Residential Cleaning', path: '/services/residential' },
      { name: 'Commercial Cleaning', path: '/services/commercial' },
      { name: 'Move-In/Move-Out', path: '/services/move-in-out' },
      { name: 'New Construction Cleanup', path: '/services/construction' },
    ],
  },
  { name: 'Contact', path: '/contact' },
]);

// --- NEW NAVBAR COLLAPSE LOGIC ---
const navbarNavRef = ref(null); // Ref for the collapsible element
const collapseInstance = ref(null); // Ref to store the Bootstrap Collapse instance
const route = useRoute(); // Get the route object

// When the component mounts, create the Bootstrap Collapse instance
onMounted(() => {
  if (navbarNavRef.value) {
    collapseInstance.value = new Collapse(navbarNavRef.value, {
      toggle: false, // We will control it manually
    });
  }
});

// Function to manually hide the navbar
const hideNavbar = () => {
  if (collapseInstance.value) {
    collapseInstance.value.hide();
  }
};

// Watcher 1: Close navbar on route change (e.g., clicking a link)
watch(() => route.path, () => {
  hideNavbar();
});

// Watcher 2: Close navbar when the form drawer opens
watch(isDrawerOpen, (isOpen) => {
  if (isOpen) {
    hideNavbar();
  }
});
// --- END NEW LOGIC ---
</script>

<style scoped>
/* All existing styles remain the same */
.navbar {
  background-color: var(--color-background);
  box-shadow: var(--box-shadow);
  padding-top: var(--spacing-sm);
  padding-bottom: var(--spacing-sm);
  min-height: var(--top-padding);
}

.navbar-logo {
  height: 60px;
  width: auto;
}

.nav-link {
  color: var(--color-text-light);
  font-family: var(--font-family-headings);
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-base);
  margin: 0 var(--spacing-sm);
  transition: var(--transition-color);
  text-transform: uppercase;
}

.nav-link:hover,
.nav-link.router-link-exact-active {
  color: var(--color-primary);
}

/* NEW: Style for the dropdown menu */
.dropdown-menu {
  border-radius: var(--border-radius);
  border: 1px solid rgba(0,0,0,0.1);
  box-shadow: var(--box-shadow);
  padding: var(--spacing-sm) 0;
}

.dropdown-item {
  font-family: var(--font-family-body);
  font-weight: var(--font-weight-bold);
  padding: var(--spacing-sm) var(--spacing-md);
  color: var(--color-text-light);
  transition: var(--transition-default);
}

.dropdown-item:hover {
  background-color: var(--bg-primary);
  color: var(--color-primary);
}
/* End of new styles */

.cta-button {
  background-color: var(--color-accent);
  border-color: var(--color-accent);
  color: var(--light-text);
  font-weight: var(--font-weight-bold);
  border-radius: var(--border-radius);
  padding: var(--spacing-sm) var(--spacing-md);
  transition: var(--transition-default);
  text-transform: uppercase;
}

.cta-button:hover {
  background-color: var(--color-primary);
  border-color: var(--color-primary);
  color: var(--light-text);
  transform: translateY(-2px);
  box-shadow: var(--primary-shadow);
}

@media (max-width: 991.98px) {
  .nav-link {
    padding: var(--spacing-md) 0;
    text-align: center;
  }
  .cta-button {
    width: 100%;
  }
}
</style>