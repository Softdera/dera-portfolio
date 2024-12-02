<template>
    <Header />
    <Contact />
  </template>
  
  <script>
  import Contact from '../components/Contact.vue';
  import Header from '../components/Header.vue';

  export default {
    name: 'ContactView',
    components: {
      Contact, Header
    }
  }
  </script>
  