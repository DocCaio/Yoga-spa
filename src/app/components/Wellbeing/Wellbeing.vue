<script setup lang="ts">
import "./Wellbeing.css";
import Woman from "/images/Wellbeing/Woman.png";

const info = [
  { Image: "/images/Wellbeing/Leaf.png", text: "Lorem ipsum dolor sit amet consectetur. Quam ut consequat at a. Diam lacus platea orci vel elit." },
  { Image: "/images/Wellbeing/Leaf.png", text: "Lorem ipsum dolor sit amet consectetur. Quam ut consequat at a. Diam lacus platea orci vel elit." }
];
</script>

<template>
  <section class="w-full flex justify-center px-4">
    <div class="container-Wellbeing w-full rounded-[10px]">


      <div class="text-side flex flex-col items-center xl:items-start">
        <h2>Wellbeing is well doing</h2>

        <div class="image">
          <div 
            v-for="item in info" 
            :key="item.text" 
            class="info w-full text-center xl:text-left"
          >
            <img class="icons rounded-[10px] p-2 object-contain" :src="item.Image" />
            <p>{{ item.text }}</p>
          </div>
        </div>
      </div>

     
      <img class="woman" :src="Woman" />
    </div>
  </section>
</template>

