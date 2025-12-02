<script setup lang="ts">
import "./PlantProtective.css";
const card = [
  { Image: "/images/PlantProtective/plants.png", text: "Plant Protective" },
  { Image: "/images/PlantProtective/plants.png", text: "Plant Protective" },
  { Image: "/images/PlantProtective/plants.png", text: "Plant Protective" },
  { Image: "/images/PlantProtective/plants.png", text: "Plant Protective" },
];
</script>

<template>
  <section>
    <div>
      <div class="bg">
      <img class="border" src="/images/PlantProtective/leaf.png" alt="icon" />
      <h2>Wellbeing starts with well doing</h2>
      <p>Lorem ipsum dolor sit amet consectetur.
          Quam ut consequat at a. Diam lacus platea orci
           vel elit blandit facilisis enim risus.
          Ut tristique eget integer odio nec.</p>

      <RouterLink class="plant-btn" to="/join">
        Join now
      </RouterLink>
    </div> 
    <div class="bg-plant">
         <div 
            v-for="item in card" 
            :key="item.text" 
            class=""
          >
            <img  :src="item.Image" />
            <p>{{ item.text }}</p>
          </div>
    </div>
    </div>
  </section>
</template>
