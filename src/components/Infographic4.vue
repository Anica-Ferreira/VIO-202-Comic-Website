<!--Anica Ferreira u24581802*-->
<template>
    <div class="infographic_3">
        <div class="infographic_content">
            <img src="@/assets/images/infographic/part4/background.webp" class="cover-anchor">
            <img src="@/assets/images/infographic/part4/blue_transition.webp" id="blue_transition">
            <img src="@/assets/images/infographic/part4/text13.webp" id="text13" class="text scroll_reveal">
            <img src="@/assets/images/infographic/part4/text14.webp" id="text14" class="text scroll_reveal">
            <img src="@/assets/images/infographic/part4/text15.webp" id="text15" class="text scroll_reveal">
            <img src="@/assets/images/infographic/part4/text16.webp" id="text16" class="text scroll_reveal">
            <img src="@/assets/images/infographic/part4/text17.webp" id="text17" class="text scroll_reveal">
            <img src="@/assets/videos/green_glow.gif" id="green_glow">
            <img src="@/assets/images/infographic/part4/tree.webp" id="tree">
            <img v-show="bush1Visible" src="@/assets/videos/bush_shaking_mushroom.gif" id="bush1" @click="bushReveal1">
            <img v-show="bush2Visible" src="@/assets/videos/bush_shaking_onion.gif" id="bush2" @click="bushReveal2">
            <img v-show="mushroomVisible" src="@/assets/videos/mushroom_jump.gif" id="bush_mushroom">
            <img v-show="onionVisible" src="@/assets/videos/onion_jump.gif" class="onion">
            <img v-show="onionBlinkVisible" src="@/assets/videos/onion_blinking.gif" class="onion">
            <img src="@/assets/images/infographic/part4/threshhold.webp" id="threshhold">
            <img src="@/assets/images/infographic/part4/green_circle.webp" id="circle">
            <img  src="@/assets/images/infographic/part4/darkness.webp" id="darkness">
        </div>
    </div>
  </template>
  
<script>
    export default {
            data() {
                return {
                    mushroomVisible: false,
                    onionVisible: false,
                    onionBlinkVisible: false,
                    bush1Visible: true,
                    bush2Visible: true, 
                };
          },

          methods: {
                bushReveal1() {
                    this.bush1Visible = false;
                    this.mushroomVisible = true;
                },

                bushReveal2() {
                    this.bush2Visible = false;
                    this.onionVisible = true;

                    setTimeout(() => {
                        this.onionBlinkVisible = true;
                        this.onionVisible = false;
                    }, 1000);
                },
          }
      }
</script>

<style scoped>
#bush1,#bush2{position:absolute;z-index:15;transition:.2s}#text13,#text15{left:35vw;width:30vw}#blue_transition,#darkness,#threshhold,#tree{left:0;width:100vw}.infographic_4{position:relative;width:100%;height:auto}#blue_transition{position:absolute;top:5vw}#green_glow{position:absolute;top:0;left:4vw;width:100vw;z-index:1}#tree{position:absolute;top:70vw}#threshhold{position:absolute;top:40vw;z-index:10;opacity:0}#sparkles{position:absolute;top:48vw;left:73vw;width:7vw;z-index:10}#bush1{top:112vw;left:22vw;width:20vw}#bush2,.onion{left:58vw;width:17vw}#bush2{top:109vw;animation:glow}#bush_mushroom,.onion{z-index:10;position:absolute}#bush1:hover,#bush2:hover{transform:scale(1.05);filter:brightness(1.1) drop-shadow(0 0 .5vw rgba(255, 255, 255, .2));cursor:pointer}#bush_mushroom{top:99.2vw;left:22vw;width:20vw}.onion{top:100vw}#text13{position:absolute;top:0}#text14{position:absolute;top:47vw;left:33vw;width:38vw}#text15{position:absolute;top:85vw;z-index:1}#text16{position:absolute;top:193vw;left:36vw;width:32vw;z-index:1}#text17{position:absolute;top:380vw;left:34vw;width:40vw;z-index:3}#circle{position:absolute;top:163vw;left:20vw;width:65vw;z-index:1;animation:110s linear infinite slow-rotate}#darkness{position:absolute;top:0;z-index:1;mix-blend-mode:multiply}@keyframes slow-rotate{from{transform:rotate(0)}to{transform:rotate(360deg)}}@keyframes glow{0%{filter:drop-shadow(0 0 5px rgba(101, 197, 255, .5))}100%{filter:drop-shadow(0 0 20px rgba(123, 199, 247, .8))}}   
</style>