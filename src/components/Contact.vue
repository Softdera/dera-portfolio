<template>
    <section>
      <h2>Contact Me</h2>
      <p class="excited">If you are excited about <b>software technologies</b> 
        and want to share ideas, seek collaboration, give me your project to develop or 
        simply to make inquiries.
        <br> You can reach me via:
      </p>
      <p>
      <label for="email">Email: </label> 
      <span id="email">chiekwenachidera@gmail.com</span>
    </p>
    <p>
      <label for="mobile">Mobile: </label> 
      <span id="mobile">08138134923</span>
    </p>
    <button>
      <a href="mailto:chiekwenachidera@gmail.com" 
      target="_blank" rel="noopener noreferrer">Message Me</a>
    </button>
    </section>
  </template>
  
  <script>
  
  export default {
    name: 'Contact',
    data() {
      return {
       
      }
    },
  }
  </script>
  
  <style scoped>
  section {
    padding: 20px;
    text-align: center;
    margin-top: 35px;

  }
  
 label {
    color: #fff;
    font-weight: bolder;
  }

  a, p{
    color: gold;
    font-weight: bolder;
  }

  h2{
    color: gold;
  }

  .excited{
    color: #fff
  }


  button {
    background-color: black;
    color: gold;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 5px;
  }
  </style>
  