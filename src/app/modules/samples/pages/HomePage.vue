<script setup lang="ts">
import Eat from '@/app/components/Eat/Eat.vue';
import MainTitle from '@/app/components/MainTitle/MainTitle.vue';
import OrganicProduce from '@/app/components/OrganicProduce/OrganicProduce.vue';
import PlantProtective from '@/app/components/PlantProtective/PlantProtective.vue';
import Wellbeing from '@/app/components/Wellbeing/Wellbeing.vue';
import Foot from '@/app/components/Foot/Foot.vue';
import Navbar from '@/app/components/NavBar/Navbar.vue';

</script>

<template>
    <div> 
        <Navbar/>       
        <MainTitle/>
        <Wellbeing/>
        <OrganicProduce/>
        <Eat/>
        <PlantProtective/>
        <Foot/>

    </div>
    
</template>