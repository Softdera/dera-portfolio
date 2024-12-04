<template>
    <header>
      <div class="header-content">
        <div class="menu-toggle" @click="toggleMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="name">
          <span><strong class="Emmanuel" style="color: gold; ;">Emmanuel</strong></span>
        </div>
      </div>
      <span class="nav">
        <nav>
          <ul :class="{ 'nav-links': true, active: isMenuActive }">
            <li><a href="#home" @click="closeMenu">Home</a></li>
            <li><a href="#about" @click="closeMenu">About</a></li>
            <li><a href="#projects" @click="closeMenu">Projects</a></li>
            <li><a href="#skills" @click="closeMenu">Skills</a></li>
            <li><a href="#contact" @click="closeMenu">Contact</a></li>
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
      closeMenu() {
        this.isMenuActive = false; // Close menu after clicking an item
      },
    },
  };
  </script>
  
  <style scoped>
  html,
  body {
    margin: 0;
    padding: 0;
    scroll-behavior: smooth; /* Enable smooth scrolling */
  }
  
  header {
    background: #023e8a;
    color: #fff;
    padding: 10px 20px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  
  .header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .name {
    display: none;
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
    cursor: pointer;
  }
  
  .menu-toggle {
    display: none;
    cursor: pointer;
    position: absolute;
    top: 15px;
    left: 20px;
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
  
  @media (max-width: 768px) {
    .menu-toggle {
      display: block;
    }
  
    .name {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 10px;
      position: absolute;
      right: 60px;
      font-style: italic;
      font-size: small;
      top: 15px;
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

  }
  </style>
  