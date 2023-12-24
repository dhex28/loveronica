<template>
    <nav_bar />
    <aminities />
    <foot_er /> 
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  
  // Components
  import nav_bar from '../components/nav_bar.vue';
  import aminities from '../components/aminities.vue';
  import foot_er from '../components/foot_er.vue';
  
  export default defineComponent({
    name: 'AminitiesView',
  
    components: {
      nav_bar,
      aminities,
      foot_er,
    },
  });
  </script>
  