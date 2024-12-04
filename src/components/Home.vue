<!-- src/components/Home.vue -->
<template>
    <section>
        <p class="hello"><strong><em>Hello World 👋🏻</em></strong></p>
      <h1> I am Chiekwena Emmanuel Chidera, <br>
         a Frontend Developer & an AI/Automation Developer.</h1>
         <img src="@/assets/image2.png" alt="User" class="userImg">
         <p><strong><em>Welcome to my Page</em></strong></p>


      <button><a href="#contact" @click="closeMenu">Contact Me</a></button>
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
    height: 450px;
    width: 300px;
  }

  .hello{
    color: gold;
  }
  </style>
  