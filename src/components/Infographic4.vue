<!--Anica Ferreira u24581802*-->
<template>
    <div class="infographic_3">
        <div class="infographic_content">
            <img src="@/assets/images/infographic/part4/background.png" class="cover-anchor">
            <img src="@/assets/images/infographic/part4/blue_transition.png" id="blue_transition">

            <img src="@/assets/images/infographic/part4/text13.png" id="text13" class="text scroll_reveal">
            <img src="@/assets/images/infographic/part4/text14.png" id="text14" class="text scroll_reveal">
            <img src="@/assets/images/infographic/part4/text15.png" id="text15" class="text scroll_reveal">
            <img src="@/assets/images/infographic/part4/text16.png" id="text16" class="text scroll_reveal">
            <img src="@/assets/images/infographic/part4/text17.png" id="text17" class="text scroll_reveal">

            <img src="@/assets/images/infographic/part4/green_glow.png" id="green_glow">
            <img src="@/assets/images/infographic/part4/tree.png" id="tree">

            <img v-show="bush1Visible" src="@/assets/videos/bush_shaking_mushroom.gif" id="bush1" @click="bushReveal1">
            <img v-show="bush2Visible" src="@/assets/videos/bush_shaking_onion.gif" id="bush2" @click="bushReveal2">

            <img v-show="mushroomVisible" src="@/assets/videos/mushroom_jump.gif" id="bush_mushroom" @click="bushReveal3">
            <img v-show="onionVisible" src="@/assets/videos/onion_jump.gif" class="onion">
            <img v-show="onionBlinkVisible" src="@/assets/videos/onion_blinking.gif" class="onion" @click="bushReveal4">

            <img src="@/assets/images/infographic/part4/threshhold.png" id="threshhold"/>
            <img src="@/assets/images/infographic/part4/sparkles.png" id="sparkles">

            <img src="@/assets/images/infographic/part4/green_circle.png" id="circle">
            <img  src="@/assets/images/infographic/part4/darkness.png" id="darkness">

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

    .infographic_4 {
        position: relative;
        width: 100%;
        height: auto;
    }

    #blue_transition{
        position: absolute;
        top: 5vw;
        left: 0vw;
        width: 100vw;
    }

    #green_glow{
        position: absolute;
        top: 0vw;
        left: 4vw;
        width: 100vw;
        z-index: 1;
    }

    #tree{
        position: absolute;
        top: 70vw;
        left: 0vw;
        width: 100vw;
    }

    #threshhold{
        position: absolute;
        top: 40vw;
        left: 0vw;
        width: 100vw;
        z-index: 10;
        opacity: 0;    
    }

    #sparkles{
        position: absolute;
        top: 48vw;
        left: 73vw;
        width: 7vw;
        z-index: 10;  
    }

    #bush1{
        position: absolute;
        top: 112vw;
        left: 22vw;
        width: 20vw;
        z-index: 15;
        transition: all 0.2s ease;
    }

    #bush2{
        position: absolute;
        top: 109vw;
        left: 58vw;
        width: 17vw;
        z-index: 15;
        transition: all 0.2s ease;
        animation: glow;
    }

    #bush1:hover{
        transform: scale(1.05);
        filter: brightness(1.1) drop-shadow(0 0 0.5vw rgba(255, 255, 255, 0.2));
        cursor: pointer;    
    }

    #bush2:hover{
        transform: scale(1.05);
        filter: brightness(1.1) drop-shadow(0 0 0.5vw rgba(255, 255, 255, 0.2));
        cursor: pointer;   
    }

    #bush_mushroom{
        position: absolute;
        top: 99.2vw;
        left: 22vw;
        width: 20vw;
        z-index: 10;
    }

    .onion{
        position: absolute;
        top: 100vw;
        left: 58vw;
        width: 17vw;
        z-index: 10;   
    }

    #text13{
        position: absolute;
        top: 0vw;
        left: 35vw;
        width: 30vw;
    }

    #text14{
        position: absolute;
        top: 47vw;
        left: 33vw;
        width: 38vw;
    }

    #text15{
        position: absolute;
        top: 85vw;
        left: 35vw;
        width: 30vw;
        z-index: 1;
    }

    #text16{
        position: absolute;
        top: 193vw;
        left: 36vw;
        width: 32vw;
        z-index: 1;
    }
    
    #text17{
        position: absolute;
        top: 380vw;
        left: 34vw;
        width: 40vw;
        z-index: 3;
    }


    #circle{
        position: absolute;
        top: 163vw;
        left: 20vw;
        width: 65vw;
        z-index: 1;
        animation: slow-rotate 110s linear infinite;   
    }

    #darkness{
        position: absolute;
        top: 0vw;
        left: 0vw;
        width: 100vw;
        z-index: 1;
        mix-blend-mode: multiply;
    }

    @keyframes slow-rotate {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        } 
    }

    @keyframes glow {
        0% {
            filter: drop-shadow(0 0 5px rgba(101, 197, 255, 0.5));
        }
        100% {
            filter: drop-shadow(0 0 20px rgba(123, 199, 247, 0.8));
        }
    }
   
</style>