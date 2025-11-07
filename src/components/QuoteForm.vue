<template>
  <!-- 
    This form component is self-contained.
    It manages its own data and submission.
  -->
  <form @submit.prevent="handleSubmit">
    <h3 class="form-title">Get a Free Quote</h3>
    <p class="form-subtitle">
      Fill out the form and we'll get back to you shortly.
    </p>

    <!-- Name -->
    <div class="mb-3">
      <label for="quoteName" class="form-label">Full Name</label>
      <input
        type="text"
        class="form-control"
        id="quoteName"
        v-model="formData.name"
        required
      />
    </div>

    <!-- Email -->
    <div class="mb-3">
      <label for="quoteEmail" class="form-label">Email Address</label>
      <input
        type="email"
        class="form-control"
        id="quoteEmail"
        v-model="formData.email"
        required
      />
    </div>

    <!-- Phone -->
    <div class="mb-3">
      <label for="quotePhone" class="form-label">Phone Number</label>
      <input
        type="tel"
        class="form-control"
        id="quotePhone"
        v-model="formData.phone"
      />
    </div>

    <!-- Service Type -->
    <div class="mb-3">
      <label for="quoteService" class="form-label">Service Needed</label>
      <select
        class="form-select"
        id="quoteService"
        v-model="formData.service"
        required
      >
        <option value="" disabled>Please select a service...</option>
        <option value="residential">Residential Cleaning</option>
        <option value="commercial">Commercial Cleaning</option>
        <option value="move-in-out">Move-In / Move-Out</option>
        <option value="construction">New Construction Cleanup</option>
        <option value="other">Other - Special Request</option>
      </select>
    </div>

    <!-- Message -->
    <div class="mb-3">
      <label for="quoteMessage" class="form-label">Message (Optional)</label>
      <textarea
        class="form-control"
        id="quoteMessage"
        rows="4"
        v-model="formData.message"
      ></textarea>
    </div>

    <!-- Submit Button -->
    <div class="d-grid">
      <button type="submit" class="btn cta-button-form">Submit Request</button>
    </div>
  </form>
</template>

<script setup>
import { ref } from 'vue';

const formData = ref({
  name: '',
  email: '',
  phone: '',
  service: '',
  message: '',
});

const handleSubmit = () => {
  // TODO: Add your form submission logic here (e.g., send to an API).
  console.log('Form data submitted:', formData.value);
  
  // For demo purposes, we'll just show an alert.
  // In a real app, you might show a success message.
  alert('Thank you! Your quote request has been sent.');
  
  // Reset form
  formData.value = {
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  };
};
</script>

<style scoped>
/* Styles for the form inside the drawer */
.form-title {
  font-family: var(--font-family-headings);
  font-weight: var(--font-weight-bold);
  color: var(--color-primary);
}
.form-subtitle {
  color: var(--secondary-dark-grey);
  margin-bottom: var(--spacing-lg);
}
.form-label {
  font-weight: var(--font-weight-bold);
  color: var(--color-text-light);
}
.cta-button-form {
  background-color: var(--color-accent);
  border-color: var(--color-accent);
  color: var(--light-text);
  font-weight: var(--font-weight-bold);
  padding: var(--spacing-sm) var(--spacing-md);
  transition: var(--transition-default);
  text-transform: uppercase;
}
.cta-button-form:hover {
  background-color: var(--color-primary);
  border-color: var(--color-primary);
}
</style>