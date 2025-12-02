<script setup lang="ts">
import "./OrganicProduce.css";

const tips = [
  { Image: "/images/OrganicProduce/icon.png", text: "Lorem ipsum dolor sit amet consectetur. Quam ut consequat at a. Diam lacus platea orci vel elit." },
  { Image: "/images/OrganicProduce/icon.png", text: "Lorem ipsum dolor sit amet consectetur. Quam ut consequat at a. Diam lacus platea orci vel elit." },
  { Image: "/images/OrganicProduce/icon.png", text: "Lorem ipsum dolor sit amet consectetur. Quam ut consequat at a. Diam lacus platea orci vel elit." },
];
</script>

<template>
  
  <div >
    
    <div class="container-tips">

    <div>
        <img class="flor rounded-[10px]"  src="/images/OrganicProduce/organic.png" alt="organic produce">
    </div>

    <div>
      <h2>Fresh organic produce</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur.
        Quam ut consequat at a. Diam lacus platea orci
        vel elit blandit facilisis enim risus. Ut tristique 
        eget integer odio nec vulputate consequat.
        Elit mattis ac in amet sit viverra.
      </p>

        <span v-for="(tip, index) in tips" :key="index" class="tip-item">
        <img 
                 
          :src="tip.Image"
          alt="Organic produce"
        />
        <p>{{ tip.text }}</p>
        </span>

    </div>
     
    </div>

  
  </div>
</template>
