<script setup lang="ts">
import "./Eat.css";

const eat = [
  {
    Image: "images/Eat/Leaf.png",
    text: "Lorem ipsum dolor sit amet consectetur. Quam ut consequat at a. Diam lacus platea orci vel elit.",
  },
  {
    Image: "images/Eat/Leaf.png",
    text: "Lorem ipsum dolor sit amet consectetur. Quam ut consequat at a. Diam lacus platea orci vel elit.",
  },
];
</script>

<template>
  <section>
    <div class="container-eat">

        <div>
            <img class="drink" src="/images/Eat/drinks.png" alt="drink" />
        </div>



      <div class="eat-text">
        <h2>You are what you eat</h2>

        <div class="eat-icons">

        <div v-for="(item, index) in eat" :key="index" class="eat-item">
          <img class="bg-pink" :src="item.Image" alt="icon" />
          <p>{{ item.text }}</p>
        </div>
        </div>

      </div>
    </div>
  </section>
</template>
