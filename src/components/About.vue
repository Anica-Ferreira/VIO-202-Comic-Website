<!--Anica Ferreira u24581802*-->
<template>
    <div class="about_section">
        <div class="infographic_content">
            <img src="@/assets/images/about/top.png" class="top" @click="scrollToTop">
            <img src="@/assets/images/about/about.png" class="about">
            <img src="@/assets/videos/title.gif" class="author_title">       
            <img src="@/assets/videos/cats.gif" class="cats">
            <img src="@/assets/videos/author.gif" class="author">
        </div>
    </div>
  </template>
  
<script>
import { useSoundStore } from "@/stores/sound";

export default {
  setup() {


    function scrollToTop() {
        const soundStore = useSoundStore();
        soundStore.toggleSound();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    return { scrollToTop };
  }
}
</script>

<style scoped>
    .about_section{
        position: relative;
        width: 100%;
        height: auto;
    }

    .about{
        position: absolute;
        top: 15vw;
        left: 0vw;
        width: 100vw;
        z-index: 10;
    }

    .top{
        position: absolute;
        top: 155vw;
        left: 35vw;
        width: 30vw;
        z-index: 100;
        transition: opacity 0.3s ease, transform 0.2s ease;
        cursor: pointer;
        opacity: 0.8;
    }

    .top:hover {
        transform: scale(1.05);
        opacity: 1;
    }

    .author_title{
        position: absolute;
        top: 65vw;
        left: 0vw;
        width: 100vw;
        z-index: 11; 
    }

    .author{
        position: absolute;
        top: 85vw;
        left: 39vw;
        width: 20vw;
        z-index: 11; 
    }

    .cats{
        position: absolute;
        top: 127.5vw;
        left: 61vw;
        width: 26vw;
        z-index: 11; 
    }
</style>