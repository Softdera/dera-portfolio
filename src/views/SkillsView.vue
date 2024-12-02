<template>
    <Header />
    <Skills />
  </template>
  
  <script>
  import Skills from '../components/Skills.vue';
  import Header from '@/components/Header.vue';
  
  export default {
    name: 'SkillsView',
    components: {
      Skills, Header
    }
  }
  </script>
  