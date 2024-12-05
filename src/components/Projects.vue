<!-- src/components/Projects.vue -->
<template>
    <section>
      <h2>My Projects</h2>
      <p style="color: #fff;">A few of my projects include:</p>

      <div class="projects">
        <div v-for="(project, index) in projects" :key="index" class="project">
          <!--img :src="project.image" :alt="project.title" /-->
          <img
              v-if="project.image"
              :src="project.image"
              :alt="project.title"
              class="cropped-image"
            />


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
            title: 'VoteDeck Project App',
            description: 'A project with multiple developers, the website is for fashion contestants, from their registration through to the final round of the competition',
            technologies: 'HTML, CSS, JavaScript, Vue.js, TailWind CSS.',
            image: require('@/assets/ProjectImage copy/VoteDeck Small.jpeg') 


          },
          {
            title: 'Product Web App',
            description: 'A website to showcase an array of products.',
            technologies: 'HTML, CSS, JavaScript, Vue.js.',
            GithubLink: 'https://github.com/Softdera/myProductApp',
            VercelLink: 'https://my-product-app.vercel.app',
            image: require('@/assets/ProjectImage copy/product Small.jpeg') 


          },

          {
            title: 'Design Website',
            description: 'A company’s website designed majorly for larger screens.',
            technologies: 'HTML, CSS, JavaScript, Vue.js, Bootstrap, Figma.',
            GithubLink: 'https://github.com/Softdera/designP',
            VercelLink: 'https://design-p-xi.vercel.app',
            image: require('@/assets/ProjectImage copy/Design Small.jpeg') 

          },

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
            VercelLink: 'https://react-dashboard-prototype.vercel.app',
            image: require('@/assets/ProjectImage copy/Dashboard Small.jpeg') 

          },

          {
            title: 'Bank App',
            description: 'A simple Bank app that can perform basic Bank operations such as transfers from one account to another, adding new accounts, records the transaction carried out by individual accounts as well as total transactions made by the customers in the said bank etc',
            technologies: 'Vue.js, CSS, HTML, JavaScript, Bootstrap.',
            GithubLink: 'https://github.com/Softdera/BankAppUpdated',
            VercelLink: 'https://bank-app-updated-mvl2.vercel.app',
            image: require('@/assets/ProjectImage copy/BankApp Small.jpeg') 

          },

          {
            title: 'ContactList App',
            description: 'A simple list app to manage the information of staff in a company.',
            technologies: 'Vue.js, CSS, HTML, JavaScript, Bootstrap.',
            GithubLink: 'https://github.com/Softdera/ContactList',
            VercelLink: 'https://contact-list-zubr.vercel.app'
          },
          {
            title: 'DHIS2',
            description: 'A simple developed design of a Dhis2 mockup design alongside the basic functionalities',
            technologies: 'Vue.js, CSS, HTML, JavaScript, Bootstrap.',
            image: require('@/assets/ProjectImage copy/Dhis2 Small.jpeg') 

          },

          {
            title: 'A Chart Distribution Project',
            description: 'A simple highchart project where data was pulled from firebase realtime database and saved in the local storage.',
            technologies: 'Vue.js, CSS, HTML, JavaScript, Firebase, Bootstrap.',
            GithubLink: 'https://github.com/Softdera/Practice',
            VercelLink: 'https://practice-lime-theta.vercel.app/#/',
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
    border: 1px solid gold;
    border-radius: 10px;
    margin: 10px;
    padding: 10px;
    width: 400px;
    text-align: center;
    max-width: 25.13rem;

  }
  
  .project img {
    max-width: 100%;
    border-radius: 10px;
  }
  .project img {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 10px;
}

.cropped-image {
  width: 100%;
  height: auto; 
  position: relative;
  clip-path: inset(10px 0 0 0); 
}


  h2{
    color: gold;
  }
  .projects {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px; /* Space between items */
  color: #fff;
}

.project {
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 10px;
  text-align: center;
  background-color: #333; /* Optional for better visuals */
  flex: 1 1 300px; /* Ensures consistent width with flexibility */
  max-width: 400px; /* Restricts maximum width */
  box-sizing: border-box; /* Ensures padding is included in width */
  word-wrap: break-word; /* Break long words */
  overflow-wrap: break-word; /* Ensures wrapping in modern browsers */
}

.project img {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 10px;
}

.project a {
  color: #00f; /* Link color */
  text-decoration: none;
  word-wrap: break-word; /* Break long URLs */
  overflow-wrap: break-word; /* Ensures wrapping for URLs */
  display: inline-block; /* Ensures proper wrapping inside flex containers */
  max-width: 100%; /* Prevents overflowing the container */
  overflow: hidden; /* Hides any potential overflow */
  text-overflow: ellipsis; /* Adds ellipsis for long links */
}

.project a:hover {
  text-decoration: underline;
}

.cropped-image {
  width: 100%;
  height: auto;
  position: relative;
  clip-path: inset(10px 0 0 0);
}

/* Small Screen Styles */
@media (max-width: 600px) {
  .projects {
    gap: 10px; /* Reduce spacing for smaller screens */
  }
  .project {
    flex: none; /* Prevent flex resizing */
    width: 90%; /* Set a consistent width for all items */
    max-width: none; /* Remove the max-width restriction */
    margin: 0 auto; /* Center items */
  }
  .project p,
  .project a {
    font-size: 14px; /* Reduce font size for smaller screens */
    overflow-wrap: break-word; /* Ensure wrapping for long words/links */
    word-break: break-word; /* Ensure wrapping in older browsers */
    line-break: anywhere; /* Allow breaking links at any character */
    text-align: justify; /* Align text for better readability */
  }
  .project a {
    text-overflow: ellipsis; /* Adds ellipsis for links */
    white-space: normal; /* Prevent links from forcing single-line display */
  }
}
</style>