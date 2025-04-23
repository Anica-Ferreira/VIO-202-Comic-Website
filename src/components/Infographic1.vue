<!--Anica Ferreira u24581802*-->
<template>
    <div class="infographic_1">
      <div class="infographic_content">
        <img src="@/assets/images/infographic/part1/background.png" class="cover-anchor">
        <img src="@/assets/images/infographic/part1/green_fade.png" id="green_fade" class="infographic_images">
        <img src="@/assets/images/infographic/part1/cliffs.png" class="cliffs infographic_images">
        <img src="@/assets/images/infographic/part1/trees.png" class="trees infographic_images">
        <img src="@/assets/images/infographic/part1/text1.png" id="text1" class="text scroll_reveal">
        <img src="@/assets/images/infographic/part1/text2.png" id="text2" class="text scroll_reveal">
        <img src="@/assets/images/infographic/part1/text3.png" id="text3" class="text scroll_reveal">
        <img src="@/assets/images/infographic/part1/malbrush_sitting.png" class="infographic_images" id="malbrush_sitting">

        <img v-if="mushroomState === 'static'" src="@/assets/images/infographic/part1/big_mushroom.png" class="big_mushroom glowing" @click="startAnimation">
        <img v-if="mushroomState === 'animating'" :src="mushroomAliveSrc + `?${Date.now()}`" :key="mushroomState" class="big_mushroom">
        <img v-if="mushroomState === 'blinking'" :src="mushroomBlinkingSrc + `?${Date.now()}`" :key="mushroomState" class="big_mushroom" @click="goToReverse">
        <img v-if="mushroomState === 'reverse'" :src="mushroomAliveReverseSrc + `?${Date.now()}`" :key="mushroomState" class="big_mushroom">

        <img v-if="scrollState === 'closed' "src="@/assets/images/infographic/part1/scroll.png" id="closed_scroll"  @click="openScroll">
        <img v-if="scrollState === 'animating'" :src="scrollOpeningSrc + `?${Date.now()}`" id="scroll_opening">
  
      </div>
    </div>
  </template>
  
<script>
import mushroomAlive from '@/assets/videos/mushroom_alive.gif';
import mushroomAliveReverse from '@/assets/videos/mushroom_alive_reverse.gif';
import mushroomBlinking from '@/assets/videos/mushroom_blinking2.gif';
  
import scrollOpening from '@/assets/videos/scroll_opening.gif';
  
  export default {
    data() {
      return {
        scrollState: 'closed',
        scrollOpeningSrc: scrollOpening,
         
        mushroomState: 'static',
        mushroomAliveSrc: mushroomAlive,
        mushroomAliveReverseSrc: mushroomAliveReverse,
        mushroomBlinkingSrc: mushroomBlinking
      };
    },
  
    methods: {
        startAnimation() {
            this.mushroomState = 'animating';
            setTimeout(() => {
                this.mushroomState = 'blinking';
            }, 500);
        },
  
        goToReverse() {
            this.mushroomState = 'reverse';
            setTimeout(() => {
                this.mushroomState = 'static';
            }, 500);
        },

        openScroll() {
            this.scrollState = 'animating';
            setTimeout(() => {
                const scrollElement = document.getElementById('scroll_opening');
                if (scrollElement) {
                    scrollElement.style.animation = 'float 3s ease-in-out infinite';
                }
            }, 1000);
        },
    }
  };

</script>

<style scoped>

.infographic_1 {
    position: relative;
    width: 100%;
    height: auto;
}

#green_fade{
    position: absolute;
    top: -4vw;
    height: auto;
}

#text1{
    position: absolute;
    top: 76.6vw;
    left: 25.6vw;
    width: 48.4vw;
    height: auto;
}

#text2{
    position: absolute;
    top: 137.5vw;
    left: 36vw;
    width: 28vw;
    height: auto;
}

#text3{
    position: absolute;
    top: 171.5vw;
    left: 24.5vw;
    width: 54vw;
    height: auto;
}

#malbrush_sitting{
    position: absolute;
    top: 192vw;
    left: 11vw;
    width: 38vw;
    z-index: 100;
    height: auto;
}

#closed_scroll{
    position: absolute;
    top: 205vw;
    left: 43vw;
    width: 18vw;
    height: auto;
    cursor: pointer;
    animation: glowfloat 2.5s ease-in-out infinite;
    transition: filter 0.3s ease, transform 0.3s ease;
    z-index: 100;
}

#closed_scroll:hover{
    filter: brightness(1.1) drop-shadow(0 0 0.5vw rgba(255, 255, 255, 0.82));
    animation: none;
    transform: scale(1.02);
}


#scroll_opening{
    position: absolute;
    top: 203vw;
    left: 43vw;
    width: 30vw;
    height: auto;
    cursor: pointer;
}

.big_mushroom {
    position: absolute;
    top: 108vw;
    left: 56vw;
    width: 25vw;
    height: auto;
    z-index: 10;
    transition: filter 0.3s ease, transform 0.3s ease;
    cursor: pointer;
    animation: glowPulse 2.5s ease-in-out infinite;
}

.big_mushroom:hover{
    filter: brightness(1.1) drop-shadow(0 0 0.5vw rgba(255, 255, 255, 0.82));
    animation: none;
}

.big_mushroom:hover {
    transform: scale(1.02);
    pointer-events: auto;
}

@keyframes glowPulse {
    0%, 100% {
        filter: drop-shadow(0 0 0.3vw rgba(255, 255, 255, 0.5));
    }
    50% {
        filter: drop-shadow(0 0 0.6vw rgba(255, 255, 255, 0.7));
    }
}

@keyframes glowfloat {
    0% {
        transform: translateY(0);
        filter: drop-shadow(0 0 0.3vw rgba(255, 255, 255, 0.5));
    }

    50% {
        transform: translateY(-8px);
        filter: drop-shadow(0 0 0.8vw rgba(255, 255, 255, 0.7));
    }

    100% {
        transform: translateY(0);
        filter: drop-shadow(0 0 0.3vw rgba(255, 255, 255, 0.5));
    }  
}

@keyframes float {
    0% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-4px);
    }

    100% {
        transform: translateY(0);
    }
}

</style>