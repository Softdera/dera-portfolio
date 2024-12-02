<template>
  <Header />
  <About />
</template>

<script>
import About from '../components/About.vue';
import Header from '../components/Header.vue';

export default {
  name: 'AboutView',
  components: {
    About, Header
  }
}
</script>
