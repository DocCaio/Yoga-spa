<script setup lang="ts">
import "./MainTitle.css";
</script>

<template>
  <section class="container">
    <h1>The dawn of a new era in health is here</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur. Quam ut consequat at a. Diam lacus
      platea orci vel elit blandit facilisis 
    </p>

    <RouterLink 
      to="/"
      class="btn rounded-sm text-white py-2 px-4 font-semibold transition duration-150"
    >
      Join now
    </RouterLink>

    <div class="images">
      <img src="/images/MainTitle/yoga.png" alt="Yoga">
      <img src="/images/MainTitle/food.png" alt="Food">
    </div>
  </section>
</template>
