<template>
    <section class="rooms-section">
      <div class="row center-lg">
        <div v-for="room in rooms" :key="room.id" class="rooms col col-2">
        <img :src="room.room_image" alt="Room Image" class="rooms-img">
          <h3 class="room-title">{{ room.name }}</h3>
          <p class="room-text">{{ room.description }}</p>
          <div>
            <div class="details-container">
              <img :src="require('@/assets/img/check-square.svg')" alt="tick" class="list-icon">
              <p class="list-text">{{ room.capacity }} Persons</p>
            </div>
            <div class="details-container">
              <img :src="require('@/assets/img/bed.png')" alt="tick" class="list-icon">
              <p class="list-text">{{ room.num_bed }} Bed(maximum)</p>
            </div>
          </div>
          <p class="amount-text">NGN{{ room.price }} Per Night</p>
          <div class="buttons-container">
            <a href="#" class="btn btn-ghost">View More</a>
            <a href="https://timbu.com/search?query=hotel" class="btn btn-fill">Book Now</a>
          </div>
        </div>
        <div v-if="loading" class="loading-message">Loading rooms...</div>
        <div v-if="error" class="error-message">{{ error }}</div>
      </div>
    </section>
  </template>
  
<script>
import axios from 'axios';

export default {
  data() {
    return {
      rooms: [],
      loading: true,
      error: null,
    };
  },
  mounted() {
    this.fetchRooms();
  },
  methods: {
    async fetchRooms() {
      try {
        const response = await axios.get("getData");
        this.rooms = response.data;
        this.loading = false;
      } catch (error) {
        console.error("Error fetching rooms:", error);
        this.loading = false;
        this.error = "Error fetching rooms. Please try again later.";
      }
    },
  },
};
</script>
  
  <style scoped>
  /* Add your custom styles here if needed */
  </style>

