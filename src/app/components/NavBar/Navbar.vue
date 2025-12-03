<script setup lang="ts">
import { ref } from "vue";
import "./NavBar.css";

const isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};
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
      </ul>

    </nav>
  </header>
</template>
