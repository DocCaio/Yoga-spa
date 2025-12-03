<script setup lang="ts">
import "./Foot.css";
</script>

<template>
  <footer class="container-foot">

    <div class="teste">
    <RouterLink  to="/"   class=""
    >
     <img src="/assets/Logo.png" alt="Logo">
    </RouterLink>

    <nav class="foot-links">

    <ul>

     <li>    
        <RouterLink  to="/" class="">  About</RouterLink>
    </li>

    <li> 
        <RouterLink to="/" class=""> Services</RouterLink>
    </li>

  <li>
   <RouterLink to="/" class=""> Team </RouterLink>
  </li>

    <li>
     <RouterLink to="/" class="">Contact </RouterLink>
    </li>

    </ul>

    </nav>

    <ul class="foot-social">

     <li>
     <RouterLink to="/" class="">
      <i class="bi bi-twitter-x"></i>
    </RouterLink>
    </li>

     <li>
     <RouterLink to="/" class="">
      <i class="bi bi-instagram"></i>
    </RouterLink>
    </li>

     <li>
     <RouterLink to="/" class="">
      <i class="bi bi-linkedin"></i>
    </RouterLink>
    </li>

     <li>
     <RouterLink to="/" class="">
      <i class="bi bi-discord"></i>
    </RouterLink>
    </li>

    </ul>

    </div>
    
  </footer>
</template>
