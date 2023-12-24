<template>
  <nav_bar />
  <aboutus />
  <foot_er /> 
</template>

<script>
import { defineComponent } from 'vue';

// Components
import nav_bar from '../components/nav_bar.vue';
import aboutus from '../components//aboutus.vue';
import foot_er from '../components/foot_er.vue';

export default defineComponent({
  name: 'AboutUs',

  components: {
    nav_bar,
    aboutus,
    foot_er,
  },
});
</script>
