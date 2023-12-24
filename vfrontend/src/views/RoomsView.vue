<template>
    <nav_bar />
    <room />
    <foot_er /> 
  </template>
  
  <script>

  import { defineComponent } from 'vue';
  
  // Components
  import nav_bar from '../components/nav_bar.vue';
  import room from '../components/room.vue';
  import foot_er from '../components/foot_er.vue';
  
  export default defineComponent({
    name: 'rooms',
  
    components: {
      nav_bar,
      room,
      foot_er,
    },
  });
  </script>


  