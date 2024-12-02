<template>
    <header>
      <div class="header-content">
        <div class="menu-toggle" @click="toggleMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="name">
          <span><strong class="Emmanuel" style="color: gold;">
            Emmanuel</strong></span>
        </div>
      </div>
      <span class="nav">
        <nav>
          <ul :class="{ 'nav-links': true, active: isMenuActive }">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/about">About</router-link></li>
            <li><router-link to="/projects">Projects</router-link></li>
            <li><router-link to="/skills">Skills</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
          </ul>
        </nav>
      </span>
    </header>
  </template>
  
  <script>
  export default {
    name: "Header",
    data() {
      return {
        isMenuActive: false, // State to track menu visibility
      };
    },
    methods: {
      toggleMenu() {
        this.isMenuActive = !this.isMenuActive;
      },
    },
  };
  </script>
  
  <style scoped>
  /* Reset to ensure no spacing above the header */
  html,
  body {
    margin: 0;
    padding: 0;
  }
  
  header {
    background: #023e8a;
    color: #fff;
    padding: 10px 20px;
    position: fixed; /* Navbar sticks to the top */
    top: 0;
    left: 0;
    width: 100%; /* Full width */
    z-index: 1000; /* Ensure it stays above other content */
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  
  .header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .name {
    display: none; /* Hidden by default */
  }
  
  .name span {
    font-size: 16px;
    line-height: 1.2;
  }
  
  nav ul {
    list-style: none;
    display: flex;
    justify-content: center;
    padding: 0;
    margin: 0;
  }
  
  nav ul li {
    margin: 0 15px;
  }
  
  nav ul li a {
    color: #fff;
    text-decoration: none;
  }
  
  .menu-toggle {
    display: none;
    cursor: pointer;
    font-size: 24px;
    position: absolute;
    top: 15px;
    left: 20px; /* Align the menu toggle to the left */
  }
  
  .menu-toggle span {
    display: block;
    background: white;
    height: 3px;
    width: 25px;
    margin: 5px 0;
  }
  
  .nav-links {
    display: flex;
  }
  
  /* Responsive styles for smaller screens */
  @media (max-width: 768px) {
    .menu-toggle {
      display: block; /* Show the menu toggle */
    }
  
    .name {
      display: flex; /* Show only on smaller screens */
      flex-direction: column;
      align-items: center;
      margin-top: 10px;
    }
  
    .nav-links {
      display: none;
      flex-direction: column;
      background: #023e8a;
      position: absolute;
      top: 50px;
      left: 0;
      width: 100%;
      z-index: 1;
    }
  
    .nav-links.active {
      display: flex;
    }
  
    nav ul li {
      margin: 10px 0;
      text-align: center;
    }

    .Emmanuel{
        position: absolute;
        right: 50px;
    }
  }
  </style>
  