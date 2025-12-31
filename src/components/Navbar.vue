<template>
  <nav class="navbar navbar-expand-lg navbar-light fixed-top" ref="navRef">
    <div class="container d-flex align-items-center justify-content-between my-0 px-2">
      
      <!-- 1. Logo / Brand Link -->
      <router-link class="navbar-brand p-0 m-0" to="/">
        <img 
          src="/logos/Cardoso-Cleaning-Services-LLC-LOGO.png" 
          alt="Cardoso-Cleaning-Services-LLC-LOGO" 
          class="navbar-logo"
        >
      </router-link>

      <!-- 2. NEW: Mobile-only CTA Button (Outside Collapse) -->
      <div class="d-lg-none mx-auto">
        <button @click="openDrawer" class="btn cta-button btn-sm px-3">
          Get A Quote
        </button>
      </div>

      <!-- 3. Mobile Toggler Button -->
      <button 
        class="navbar-toggler border-0" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#navbarNav" 
        aria-controls="navbarNav" 
        aria-expanded="false" 
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- 4. Collapsible Menu -->
      <div class="collapse navbar-collapse" id="navbarNav" ref="navbarNavRef">
        <ul class="navbar-nav ms-auto align-items-center">
          
          <!-- Dynamic Nav Links -->
          <li class="nav-item" v-for="link in navLinks" :key="link.name">
            <router-link v-if="!link.isDropdown" class="nav-link" :to="link.path">
              {{ link.name }}
            </router-link>

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
              <ul class="dropdown-menu text-center text-lg-start" :aria-labelledby="`navbarDropdown-${link.name}`">
                <li v-for="(child, index) in link.children" :key="child.name || `divider-${index}`">
                  <hr v-if="child.isDivider" class="dropdown-divider">
                  <router-link v-else class="dropdown-item" :to="child.path">
                    {{ child.name }}
                  </router-link>
                </li>
              </ul>
            </li>
          </li>

          <!-- 5. Desktop CTA Button (Hidden on Mobile) -->
          <li class="nav-item ms-lg-2 d-none d-lg-block">
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
import { ref, inject, onMounted, onUnmounted, watch } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import { Collapse } from 'bootstrap';

const openDrawer = inject('openQuoteDrawer');
const isDrawerOpen = inject('isDrawerOpen');

const navLinks = ref([
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  {
    name: 'Services',
    isDropdown: true,
    children: [
      { name: 'All Services', path: '/services' },
      { isDivider: true },
      { name: 'Residential Cleaning', path: '/services/residential' },
      { name: 'Commercial Cleaning', path: '/services/commercial' },
      { name: 'Move-In/Move-Out', path: '/services/move-in-out' },
      { name: 'New Construction Cleanup', path: '/services/construction' },
    ],
  },
  { name: 'Contact', path: '/contact' },
]);

const navRef = ref(null);
const navbarNavRef = ref(null);
const collapseInstance = ref(null);
const route = useRoute();

onMounted(() => {
  if (navbarNavRef.value) {
    collapseInstance.value = new Collapse(navbarNavRef.value, {
      toggle: false,
    });
  }
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
  if (collapseInstance.value) {
    collapseInstance.value.dispose();
  }
});

const hideNavbar = () => {
  if (collapseInstance.value) {
    collapseInstance.value.hide();
  }
};

const handleClickOutside = (event) => {
  const isNavbarOpen = navbarNavRef.value?.classList.contains('show');
  if (!isNavbarOpen || !navRef.value) return;
  if (!navRef.value.contains(event.target)) {
    hideNavbar();
  }
};

watch(() => route.path, () => {
  hideNavbar();
});

watch(isDrawerOpen, (isOpen) => {
  if (isOpen) {
    hideNavbar();
  }
});
</script>

<style scoped>
.navbar {
  background-color: var(--color-background);
  box-shadow: var(--box-shadow);
  min-height: var(--top-padding);
}

.navbar-brand img{
  height: 70px;
}

.navbar-logo {
  height: 60px; /* Slightly smaller for mobile layout space */
  width: auto;
}

@media (min-width: 992px) {
  .navbar-logo {
    height: 70px;
  }
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

.cta-button {
  background-color: var(--color-accent);
  border-color: var(--color-accent);
  color: var(--light-text);
  font-weight: var(--font-weight-bold);
  border-radius: var(--border-radius);
  padding: var(--spacing-sm) var(--spacing-md);
  transition: var(--transition-default);
  text-transform: uppercase;
  white-space: nowrap;
}

.cta-button:hover {
  background-color: var(--color-primary);
  border-color: var(--color-primary);
  color: var(--light-text);
  transform: translateY(-2px);
  box-shadow: var(--primary-shadow);
}

@media (max-width: 991.98px) {
  .navbar-logo {
    height: 50px; /* More space for the button */
  }
  .nav-link {
    padding: var(--spacing-md) 0;
    text-align: center;
  }
  .cta-button {
    font-size: 0.85rem;
  }
}
</style>