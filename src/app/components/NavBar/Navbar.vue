<script setup lang="ts">
import { ref, watch } from "vue";
import "./NavBar.css";

const isOpen = ref(false);
const darkMode = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

const toggleDarkMode = () => {
  darkMode.value = !darkMode.value;
};


watch(darkMode, (value) => {
  if (value) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
});
</script>


<template>
  <header>
    <nav class="NavBar">

      <div class="logo">
        <img src="/assets/Logo.png" alt="Logo" />
      </div>

      <div class="hamburger" @click="toggleMenu">
        <span :class="{ open: isOpen }"></span>
        <span :class="{ open: isOpen }"></span>
        <span :class="{ open: isOpen }"></span>
      </div>

      <ul :class="{ open: isOpen }">
        <li><RouterLink to="/">About</RouterLink></li>
        <li><RouterLink to="/">Services</RouterLink></li>
        <li><RouterLink to="/">Team</RouterLink></li>
        <li><RouterLink to="/">Contact</RouterLink></li>

   
        <li @click="toggleDarkMode" class="dark-toggle">
          <i :class="darkMode ? 'bi bi-toggle-on' : 'bi bi-toggle-off'"></i>
        </li>
      </ul>

    </nav>
  </header>
</template>
