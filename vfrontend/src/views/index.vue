<template>
    <nav_bar />
    <jumbotron />
    <enjoy />
    <foot_er /> 
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  
  // Components
  import nav_bar from '../components/nav_bar.vue';
  import jumbotron from '../components/jumbotron.vue';
  import enjoy from '../components/enjoy.vue';
  import foot_er from '../components/foot_er.vue';
  
  export default defineComponent({
    name: 'index',
  
    components: {
      nav_bar,
      jumbotron,
      enjoy,
      foot_er,
    },
  });
  </script>
  