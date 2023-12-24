<template>
    <nav_bar />
    <products />
    <foot_er /> 
  </template>
  
  <script>

  import { defineComponent } from 'vue';
  
  // Components
  import nav_bar from '../components/nav_bar.vue';
  import products from '../components/products.vue';
  import foot_er from '../components/foot_er.vue';
  
  export default defineComponent({
    name: 'rooms',
  
    components: {
      nav_bar,
      products,
      foot_er,
    },
  });
  </script>


  