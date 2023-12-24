<template>
    <div>
      <nav_bar />
      <div class="main-content">
        <yourbooking />
      </div>
      <foot_er />
    </div>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  
  // Components
  import nav_bar from '../components/nav_bar.vue';
  import yourbooking from '../components/yourbooking.vue';
  import foot_er from '../components/foot_er.vue';
  
  export default defineComponent({
    name: 'rooms',
  
    components: {
      nav_bar,
      yourbooking,
      foot_er,
    },
  });
  </script>
  
  <style scoped>
  .main-content {
    min-height: calc(100vh - 56px); /* Adjust 56px based on the actual height of your navigation bar */
    padding-bottom: 60px; /* Adjust 60px based on the actual height of your footer */
  }
  </style>
  