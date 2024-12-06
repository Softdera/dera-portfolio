<!-- src/components/Skills.vue -->
<template>
    <section>
      <h2>Skills</h2>
      <ul>
        <li v-for="(skill, index) in skills" :key="index">{{ skill }}</li>
      </ul>
    </section>
  </template>
  
  <script>
  export default {
    name: 'Skills',
    data() {
      return {
        skills: ['HTML', 'CSS', 'JavaScript', 'Vue.js', 'Git', 'GitHub', 'React.js', 'AI', 'Automation tools', 'RPA tools', 'TypeScript',
            'TailWind CSS', 'Material UI', 'Next.js', 'Prompt Engineering', 'Bot Building', 'LLMs', 'Active Pieces', 'Zapier', 'Flowise', 'and More'
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  section {
    padding: 20px;
    text-align: left;
    margin-top: 35px;

  }
  
  ul {
    list-style: none;
    padding: 0;
  }
  
  li {
    display: inline-block;
    margin: 5px 10px;
    padding: 5px 10px;
    background: black;
    color: white;
    border-radius: 5px;
  }

  h2{
    color: gold;
    text-align: center;

  }
  </style>
  