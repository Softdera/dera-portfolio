<template>
    <Header  />
    <Projects />
  </template>
  
  <script>
  import Projects from '../components/Projects.vue';
  import Header from '@/components/Header.vue';
  export default {
    name: 'ProjectsView',
    components: {
      Projects, Header
    }
  }
  </script>
  