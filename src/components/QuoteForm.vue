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

    <!-- Section: Contact Info -->
    <fieldset class="form-section">
      <legend>Contact Info</legend>
      <div class="row">
        <div class="mb-3 col-xl-6">
          <label for="quoteName" class="form-label">Full Name</label>
          <input
            type="text"
            class="form-control"
            id="quoteName"
            v-model="formData.name"
            required
          />
        </div>

        <div class="mb-3 col-xl-6">
          <label for="quotePhone" class="form-label">Phone Number</label>
          <input
            type="tel"
            class="form-control"
            id="quotePhone"
            v-model="formData.phone"
            required
          />
        </div>

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
      </div>
    </fieldset>

    <!-- Section: Service Details -->
    <fieldset class="form-section">
      <legend>Service Details</legend>
      
      <div class="mb-3">
        <label for="quoteStreet" class="form-label">Street Address</label>
        <input
          type="text"
          class="form-control"
          id="quoteStreet"
          v-model="formData.address.street"
          required
        />
      </div>
      <div class="row">
        <div class="col-md-6 mb-3">
          <label for="quoteCity" class="form-label">City</label>
          <input
            type="text"
            class="form-control"
            id="quoteCity"
            v-model="formData.address.city"
            required
          />
        </div>
        <div class="col-md-3 mb-3">
          <label for="quoteState" class="form-label">State</label>
          <input
            type="text"
            class="form-control"
            id="quoteState"
            v-model="formData.address.state"
            required
          />
        </div>
        <div class="col-md-3 mb-3">
          <label for="quoteZip" class="form-label">Zip</label>
          <input
            type="text"
            class="form-control"
            id="quoteZip"
            v-model="formData.address.zip"
            required
          />
        </div>
      </div>

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

      <div class="mb-3">
        <label for="quoteFrequency" class="form-label">Cleaning Frequency</label>
        <select
          class="form-select"
          id="quoteFrequency"
          v-model="formData.frequency"
        >
          <option value="one-time">One-Time</option>
          <option value="weekly">Weekly</option>
          <option value="bi-weekly">Every 2 Weeks (Bi-Weekly)</option>
          <option value="monthly">Every 4 Weeks (Monthly)</option>
        </select>
      </div>
    </fieldset>

    <!-- Section: Home Details -->
    <fieldset class="form-section">
      <legend>Home Details</legend>
      
      <!-- NEW: Square Footage -->
      <div class="mb-3">
        <label for="quoteSqft" class="form-label">Approximate Square Footage</label>
        <div class="input-group">
          <input
            type="number"
            class="form-control"
            id="quoteSqft"
            v-model="formData.sqft"
            placeholder="e.g. 2000"
          />
          <span class="input-group-text">sq. ft.</span>
        </div>
      </div>

      <label for="roomSelector" class="form-label">Rooms in Your Home</label>
      <select 
        class="form-select mb-3" 
        id="roomSelector" 
        v-model="newRoomType" 
        @change="addRoom"
      >
        <option value="" disabled>Select a room to add...</option>
        <option v-for="room in availableRoomTypes" :key="room" :value="room">
          {{ room }}
        </option>
      </select>

      <div class="item-list">
        <div v-if="!formData.rooms.length" class="item-placeholder">
          Please add the rooms you'd like cleaned.
        </div>
        <div v-for="room in formData.rooms" :key="room.name" class="item-row">
          <span>{{ room.name }}</span>
          <div class="quantity-control">
            <button type="button" class="quantity-btn" @click="decreaseRoomCount(room)">-</button>
            <span class="quantity-count">{{ room.count }}</span>
            <button type="button" class="quantity-btn" @click="increaseRoomCount(room)">+</button>
          </div>
        </div>
      </div>

      <label class="form-label mt-3">Pets in Your Home</label>
      <div class="item-list">
        <div v-for="pet in formData.pets" :key="pet.name" class="item-row">
          <span>{{ pet.name }}</span>
          <div class="quantity-control">
            <button type="button" class="quantity-btn" @click="decreasePetCount(pet)">-</button>
            <span class="quantity-count">{{ pet.count }}</span>
            <button type="button" class="quantity-btn" @click="increasePetCount(pet)">+</button>
          </div>
        </div>
      </div>
    </fieldset>

    <!-- Section: Final Details -->
    <fieldset class="form-section">
      <legend>Final Details</legend>
      <div class="mb-3">
        <label for="quoteMessage" class="form-label">Message (Optional)</label>
        <textarea
          class="form-control"
          id="quoteMessage"
          rows="4"
          v-model="formData.message"
          placeholder="Please let us know any special requests or details (e.g., 'focus on kitchen,' 'allergies,' 'deep clean needed')."
        ></textarea>
      </div>

      <div class="form-check mb-3">
        <input 
          class="form-check-input" 
          type="checkbox" 
          id="contactApproval"
          v-model="formData.contactApproval"
        >
        <label class="form-check-label" for="contactApproval">
          I give permission for Cardoso Cleaning Services to contact me via call or text at the phone number provided.
        </label>
      </div>

      <p class="form-disclaimer">
        * Please note: This request provides an estimate only. All prices are subject to change based on an in-person assessment. We will not begin any work until you have agreed upon the final price.
      </p>

      <div class="d-grid">
        <button 
          type="submit" 
          class="btn cta-button-form"
          :disabled="!formData.contactApproval"
        >
          Submit Request
        </button>
      </div>
    </fieldset>
  </form>
</template>

<script setup>
import { ref } from 'vue';

// --- Form Data Management ---

const getInitialFormData = () => ({
  name: '',
  email: '',
  phone: '',
  service: '',
  frequency: 'one-time',
  sqft: '', 
  address: {
    street: '',
    city: '',
    state: 'VA',
    zip: ''
  },
  rooms: [],
  pets: [
    { name: 'Dogs', count: 0 },
    { name: 'Cats', count: 0 },
    { name: 'Other', count: 0 }
  ],
  message: '',
  contactApproval: false
});

const formData = ref(getInitialFormData());

// --- Room Logic ---
const newRoomType = ref('');
const availableRoomTypes = ref([
  'Bedroom', 
  'Bathroom', 
  'Kitchen', 
  'Living Room', 
  'Dining Room', 
  'Office / Study', 
  'Basement (Finished)',
  'Laundry Room',
  'Half-Bath',
  'Other Room'
]);

const addRoom = () => {
  const roomName = newRoomType.value;
  if (!roomName) return;

  const existingRoom = formData.value.rooms.find(room => room.name === roomName);

  if (existingRoom) {
    increaseRoomCount(existingRoom);
  } else {
    formData.value.rooms.push({ name: roomName, count: 1 });
  }

  newRoomType.value = '';
};

const increaseRoomCount = (room) => {
  room.count++;
};

const decreaseRoomCount = (room) => {
  if (room.count > 1) {
    room.count--;
  } else {
    formData.value.rooms = formData.value.rooms.filter(r => r.name !== room.name);
  }
};

// --- Pet Logic ---
const increasePetCount = (pet) => {
  pet.count++;
};

const decreasePetCount = (pet) => {
  if (pet.count > 0) {
    pet.count--;
  }
};

// --- Form Submission ---
const handleSubmit = () => {
  console.log('Form data submitted:', JSON.parse(JSON.stringify(formData.value)));
  alert('Thank you! Your quote request has been sent.');
  formData.value = getInitialFormData();
};
</script>

<style scoped>
.form-title {
  font-family: var(--font-family-headings);
  font-weight: var(--font-weight-bold);
  color: var(--color-primary);
  font-size: clamp(1.75rem, 1.5rem + 1vw, 2.25rem);
}
.form-subtitle {
  color: var(--secondary-dark-grey);
  margin-bottom: var(--spacing-lg);
  font-size: 1rem;
}
.form-label {
  font-weight: var(--font-weight-bold);
  color: var(--color-text-light);
  font-size: 0.9rem;
}

.form-section {
  border: 1px solid #e0e0e0;
  border-radius: var(--border-radius);
  padding: var(--spacing-md);
  margin-bottom: var(--spacing-lg);
}
.form-section legend {
  font-family: var(--font-family-headings);
  font-weight: var(--font-weight-bold);
  font-size: 1.2rem;
  padding: 0 var(--spacing-sm);
  width: auto;
}

.item-list {
  border: 1px solid #e0e0e0;
  border-radius: var(--border-radius);
  padding: var(--spacing-sm);
  background-color: var(--bg-primary);
}
.item-placeholder {
  color: var(--secondary-dark-grey);
  font-style: italic;
  font-size: 0.9rem;
  padding: var(--spacing-sm) var(--spacing-xs);
}
.item-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-sm) var(--spacing-xs);
  border-bottom: 1px solid #f0f0f0;
}
.item-row:last-child {
  border-bottom: none;
}
.item-row span {
  font-weight: var(--font-weight-bold);
  color: var(--color-text-light);
}

.quantity-control {
  display: flex;
  align-items: center;
}
.quantity-count {
  font-size: 1.1rem;
  font-weight: var(--font-weight-bold);
  color: var(--color-primary);
  padding: 0 var(--spacing-md);
}
.quantity-btn {
  background-color: var(--color-background);
  border: 1px solid var(--color-secondary);
  color: var(--color-primary);
  font-weight: var(--font-weight-bold);
  border-radius: 50%;
  width: 30px;
  height: 30px;
  cursor: pointer;
  transition: var(--transition-default);
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 3px; /* Visual tweak for symbol centering */
}
.quantity-btn:hover {
  background-color: var(--color-accent);
  border-color: var(--color-accent);
  color: var(--light-text);
}

.form-check-label {
  color: var(--secondary-dark-grey);
  font-size: 0.85rem;
}
.form-disclaimer {
  font-size: 0.75rem;
  color: var(--secondary-dark-grey);
  font-style: italic;
  line-height: 1.4;
  margin-bottom: var(--spacing-md);
}

.cta-button-form {
  background-color: var(--color-accent);
  border-color: var(--color-accent);
  color: var(--light-text);
  font-weight: var(--font-weight-bold);
  padding: var(--spacing-md) var(--spacing-lg);
  transition: var(--transition-default);
  text-transform: uppercase;
  font-size: 1.1rem;
}
.cta-button-form:hover {
  background-color: var(--color-primary);
  border-color: var(--color-primary);
}
.cta-button-form:disabled {
  background-color: var(--color-secondary);
  border-color: var(--color-secondary);
  cursor: not-allowed;
}
</style>