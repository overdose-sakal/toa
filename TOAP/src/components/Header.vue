<template>
  <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark" data-bs-theme="dark">
    <div class="container-fluid">
      <div class="row w-100">
        <!-- Logo Section -->
        <div class="col-md-4 d-flex align-items-center position-relative" id="logo-panel">
          <img 
            id="logo" 
            src="./naibrozen.png" 
            alt="Naibrozen Logo"
            style="width: 35px; margin-right: 20px;"
          >
          <a id="title2" class="navbar-brand align-middle" href="#">NAIBROZEN</a>

           <div class="position-absolute top-0 end-0">

            <!-- 
              MODIFICATION: 
              - Removed 'data-bs-toggle' and 'data-bs-target'
              - Added '@click="toggleNavbar"'
            -->
            <button 
              id="nav-button" 
              class="navbar-toggler" 
              type="button" 
              aria-controls="navbarNavDropdown" 
              aria-expanded="false" 
              aria-label="Toggle navigation"
              @click="toggleNavbar" 
            >
              <span class="navbar-toggler-icon"></span>
            </button>
          </div>

        </div>
      
        <!-- Navigation Links -->
        <!-- Note: The 'collapse' class is still needed for Bootstrap's CSS -->
        <div class="col-md-6 collapse navbar-collapse gx-5" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <router-link class="nav-link" to="/" @click="closeNavbar">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about" @click="closeNavbar">About Us</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/package" @click="closeNavbar">Packages</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/our-work" @click="closeNavbar">Our Work</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/contact-us" @click="closeNavbar">Contact Us</router-link>
            </li>
            
            <li>
              <a
                href="https://wa.me/+919854757911"
                target="_blank"
                class="text-success nav-link d-flex align-items-center lg-mx-2"
              >
                <span>Chat</span> &nbsp;&nbsp;
                <i class="bi bi-whatsapp"></i>
              </a>
            </li>
          </ul>
          
        </div>

      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isDarkMode = ref(true)

// Load saved theme preference
onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme === 'light') {
    isDarkMode.value = false
    document.body.classList.add('light-mode')
  }
})

// Toggle between dark and light mode
const toggleMode = () => {
  isDarkMode.value = !isDarkMode.value
  document.body.classList.toggle('light-mode')
  
  if (isDarkMode.value) {
    localStorage.setItem('theme', 'dark')
  } else {
    localStorage.setItem('theme', 'light')
  }
}

/**
 * NEW FUNCTION:
 * Manually toggles the 'show' class on the navbar menu.
 */
const toggleNavbar = () => {
  const navbarCollapse = document.getElementById('navbarNavDropdown')
  if (navbarCollapse) {
    navbarCollapse.classList.toggle('show')
  }
}

/**
 * MODIFIED FUNCTION:
 * Manually removes the 'show' class to hide the menu.
 * This is for when a user clicks a nav link.
 */
const closeNavbar = () => {
  const navbarCollapse = document.getElementById('navbarNavDropdown')
  if (navbarCollapse && navbarCollapse.classList.contains('show')) {
    navbarCollapse.classList.remove('show')
  }
}
</script>

<style scoped>
/* Add any custom header styles here */
#logo-panel {
  display: flex;
  align-items: center;
}

#logo {
  width: 35px;
  margin-right: 20px;
}

.navbar {
  z-index: 1000;
}
</style>