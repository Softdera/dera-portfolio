<!-- src/components/Projects.vue -->
<template>
    <section>
      <h2>My Projects</h2>
      <div class="projects">
        <div v-for="(project, index) in projects" :key="index" class="project">
          <!--img :src="project.image" :alt="project.title" /-->
          <h3>{{ project.title }}</h3>
          <p>Description: {{ project.description }}</p>
          <p>Technologies Used: {{ project.technologies }} </p>
          <p>Vercel Link:</p><a :href="project.VercelLink">{{  project.VercelLink}}</a>
         <p>Source Code:</p> <a :href="project.GithubLink">{{ project.GithubLink }}</a>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'Projects',
    data() {
      return {
        projects: [
          {
            title: 'Product Web App',
            description: 'A website to showcase an array of products.',
            technologies: 'HTML, CSS, JavaScript, Vue.js.',
            GithubLink: 'https://github.com/Softdera/myProductApp',
            VercelLink: 'my-product-app.vercel.app'
          },

          {
            title: 'Design Website',
            description: 'A company’s website designed majorly for larger screens.',
            technologies: 'HTML, CSS, JavaScript, Vue.js, Bootstrap, Figma.',
            GithubLink: 'https://github.com/Softdera/designP',
            VercelLink: 'design-p-xi.vercel.app' },

            {
            title: 'Health AI Chatbot',
            description: 'An AI Chatbot that answers basic health questions.',
            technologies: 'HTML, CSS, JavaScript, Vue.js, Node.js, replicate Ai, llama Model, express etc.,',
            GithubLink: 'https://github.com/Softdera/AI-Bot',
          },

          {
            title: 'Dashboard Demo Project ',
            description: 'A simple React App showing a company’s DashBoard.',
            technologies: 'React.js, CSS, HTML, JavaScrip, Bootstrap, Figma.',
            GithubLink: 'https://github.com/Softdera/react-dashboard-prototype',
            VercelLink: 'react-dashboard-prototype.vercel.app'
          },

          {
            title: 'Bank App',
            description: 'A simple Bank app that can perform basic Bank operations such as transfers from one account to another, adding new accounts, records the transaction carried out by individual accounts as well as total transactions made by the customers in the said bank etc',
            technologies: 'Vue.js, CSS, HTML, JavaScript, Bootstrap.',
            GithubLink: 'https://github.com/Softdera/BankAppUpdated',
            VercelLink: 'bank-app-updated-mvl2.vercel.app'
          },

          {
            title: 'ContactList App',
            description: 'A simple list app to manage the information of staff in a company.',
            technologies: 'Vue.js, CSS, HTML, JavaScript, Bootstrap.',
            GithubLink: 'https://github.com/Softdera/ContactList',
            VercelLink: 'contact-list-zubr.vercel.app'
          },

          {
            title: 'A Chart Distribution Project',
            description: 'A simple highchart project where data was pulled from firebase realtime database and saved in the local storage.',
            technologies: 'Vue.js, CSS, HTML, JavaScript, Firebase, Bootstrap.',
            GithubLink: 'https://github.com/Softdera/Practice',
            VercelLink: 'practice-lime-theta.vercel.app'
          },

        
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  section{
    margin-top: 50px;

  }
  .projects {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    color: #fff;

  }
  
  .project {
    border: 1px solid #ccc;
    border-radius: 10px;
    margin: 10px;
    padding: 10px;
    width: 400px;
    text-align: center;
  }
  
  .project img {
    max-width: 100%;
    border-radius: 10px;
  }

  h2{
    color: gold;
  }

  </style>
  
