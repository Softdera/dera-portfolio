<template>
  <div>
    <Header />
    <section id="home"><Home /></section>
    <section id="about"><About /></section>
    <section id="projects"><Projects /></section>
    <section id="skills"><Skills /></section>
    <section id="contact"><Contact /></section>
  </div>
</template>

<script>
import Home from '../components/Home.vue';
import Header from '../components/Header.vue';
import About from '../components/About.vue';
import Projects from '../components/Projects.vue';
import Skills from '../components/Skills.vue';
import Contact from '../components/Contact.vue';

export default {
  name: 'HomeView',
  components: {
    Home,
    Header,
    About,
    Projects,
    Skills,
    Contact,
  },
};
</script>
