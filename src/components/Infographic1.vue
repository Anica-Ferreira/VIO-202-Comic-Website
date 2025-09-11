<!--Anica Ferreira u24581802*-->
<template>
    <div class="infographic_1">
      <div class="infographic_content">
        <img src="@/assets/images/infographic/part1/background.webp" class="cover-anchor">
        <img src="@/assets/images/infographic/part1/green_fade.webp" id="green_fade" class="infographic_images">
        <img src="@/assets/images/infographic/part1/cliffs.webp" class="cliffs infographic_images">
        <img src="@/assets/images/infographic/part1/trees.webp" class="trees infographic_images">
        <img src="@/assets/images/infographic/part1/text1.webp" id="text1" class="text scroll_reveal">
        <img src="@/assets/images/infographic/part1/text2.webp" id="text2" class="text scroll_reveal">
        <img src="@/assets/images/infographic/part1/text3.webp" id="text3" class="text scroll_reveal">
        <img src="@/assets/images/infographic/part1/malbrush_sitting.gif" class="infographic_images" id="malbrush_sitting">
        <img v-show="mushroomState === 'static'" src="@/assets/images/infographic/part1/big_mushroom.webp" class="big_mushroom glowing mushroom_hover" @click="startAnimation" ref="mushroom">
        <img v-show="mushroomState === 'animating'" :src="mushroomAliveSrc" class="big_mushroom">
        <img v-show="mushroomState === 'blinking'" :src="mushroomBlinkingSrc" class="big_mushroom mushroom_hover">
        <img v-show="mushroomState === 'reverse'" :src="mushroomAliveReverseSrc" class="big_mushroom">
        <img v-show="scrollState === 'closed' "src="@/assets/images/infographic/part1/scroll.webp" id="closed_scroll"  @click="openScroll">
        <img v-show="scrollState === 'animating'" :src="scrollOpeningSrc" id="scroll_opening">
        <img src="@/assets/images/infographic/part1/insult1.webp" id="insult1" class="insults">
        <img src="@/assets/images/infographic/part1/insult2.webp" id="insult2" class="insults">
        <img src="@/assets/images/infographic/part1/insult3.webp" id="insult3" class="insults">
        <img src="@/assets/images/infographic/part1/insult4.webp" id="insult4" class="insults">
        <img src="@/assets/images/infographic/part1/insult5.webp" id="insult5" class="insults">
        <img src="@/assets/images/infographic/part1/insult6.webp" id="insult6" class="insults">
        <img src="@/assets/images/infographic/part1/insult7.webp" id="insult7" class="insults">
        <img src="@/assets/images/infographic/part1/insult8.webp" id="insult8" class="insults">
        <img src="@/assets/images/infographic/part1/insult9.webp" id="insult9" class="insults">
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
        mushroomBlinkingSrc: mushroomBlinking,

        currInsult: 1
      };
    },
  
    methods: {
        startAnimation() {
            if(this.currInsult < 9){
                setTimeout(() => {
                   this.showInsult(this.currInsult);
                }, 500);
                this.currInsult++;
                this.mushroomState = 'animating';
                setTimeout(() => {
                    this.mushroomState = 'blinking';
                }, 500);

                setTimeout(() => {
                    this.goToReverse();
                }, 1500);
            }else{
                const mushroom = this.$refs.mushroom;
                if (mushroom) {
                    if (mushroom && mushroom.classList.contains('mushroom_hover')) {
                        mushroom.classList.remove('mushroom_hover');
                    }
                    mushroom.classList.remove('shake');
                    void mushroom.offsetWidth;
                    mushroom.classList.add('shake');
                }
            }
        },
  
        goToReverse() {
            this.mushroomState = 'reverse';
            setTimeout(() => {
                this.mushroomState = 'static';
            }, 500);
        },

        showInsult(number) {
            const currentInsult = document.getElementById(`insult${number}`);
            if (currentInsult) {
                currentInsult.style.display = 'block';
                setTimeout(() => {
                   currentInsult.classList.add('hide');
                }, 1000);
            }
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
#closed_scroll,.big_mushroom{height:auto;transition:filter .3s,transform .3s}#closed_scroll:hover,.mushroom_hover:hover{filter:brightness(1.1) drop-shadow(0 0 .5vw rgba(255, 255, 255, .82));animation:none}.infographic_1{position:relative;width:100%;height:auto}#closed_scroll,#green_fade,#malbrush_sitting,#scroll_opening,#text1,#text2,#text3,.big_mushroom,.insults{position:absolute}#green_fade{top:-4vw;height:auto}#text1{top:76.6vw;left:25.6vw;width:48.4vw;height:auto}#text2{top:137.5vw;left:36vw;width:28vw;height:auto}#text3{top:171.5vw;left:24.5vw;width:54vw;height:auto}#malbrush_sitting{top:192.5vw;left:14vw;width:35vw;z-index:100;height:auto}#closed_scroll{top:205vw;left:43vw;width:18vw;cursor:pointer;animation:2.5s ease-in-out infinite glowfloat;z-index:100}#closed_scroll:hover{transform:scale(1.02)}#scroll_opening{top:203vw;left:43vw;width:30vw;height:auto;cursor:pointer}.big_mushroom{top:110vw;left:63vw;width:13vw;z-index:10;animation:2.5s ease-in-out infinite glowPulse}.mushroom_hover:hover{cursor:pointer}.big_mushroom:hover{transform:scale(1.02);pointer-events:auto}.insults{top:103vw;left:38vw;width:22vw;z-index:100;display:none;animation:.3s ease-out forwards scaleFadeIn}.hide{animation:.3s ease-out forwards scaleFadeOut}.shake{animation:.4s shake}@keyframes glowPulse{0%,100%{filter:drop-shadow(0 0 .3vw rgba(255, 255, 255, .5))}50%{filter:drop-shadow(0 0 .6vw rgba(255, 255, 255, .7))}}@keyframes shake{0%,100%{transform:translateX(0)}20%,60%{transform:translateX(-5px)}40%,80%{transform:translateX(5px)}}@keyframes glowfloat{0%,100%{transform:translateY(0);filter:drop-shadow(0 0 .3vw rgba(255, 255, 255, .5))}50%{transform:translateY(-8px);filter:drop-shadow(0 0 .8vw rgba(255, 255, 255, .7))}}@keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}@keyframes scaleFadeIn{0%{transform:scale(.5);opacity:0}100%{transform:scale(1);opacity:1}}@keyframes scaleFadeOut{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}
</style>