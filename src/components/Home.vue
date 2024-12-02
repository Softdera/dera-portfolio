<!-- src/components/Home.vue -->
<template>
    <section>
        <p class="hello"><strong><em>Hello to you 👋🏻</em></strong></p>
      <h1> I am Chiekwena Emmanuel Chidera, <br>
         a Frontend Developer & an AI/Automation Developer.</h1>
         <img src="@/assets/soft.jpg" alt="User" class="userImg">
         <p><strong><em>Welcome to my Page</em></strong></p>


      <button><router-link to="/contact">Contact Me</router-link></button>
    </section>
  </template>
  
  <script>
  export default {
    name: 'Home'
  }
  </script>
  
  <style scoped>
  section {
    padding: 20px;
    text-align: center;
    color: #fff;
    margin-top: 50px;

  }
  
  button {
    background-color: black;
    color: gold;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 5px;
  }
  
  button a {
    color: inherit;
    text-decoration: none;
  }


  .userImg{
    border-radius: 20px;
    height: 250px;
    width: 200px;
  }

  .hello{
    color: gold;
  }
  </style>
  