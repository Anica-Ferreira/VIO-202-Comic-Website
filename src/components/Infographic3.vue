<!--Anica Ferreira u24581802*-->
<template>
    <div class="infographic_3">
        <div class="infographic_content">
            <img src="@/assets/images/infographic/part3/background.png" class="cover-anchor">
            
            <img src="@/assets/images/infographic/part3/flame1.png" id="flame1" class="scroll">
            <img src="@/assets/images/infographic/part3/flame2.png" id="flame2" class="scroll">
            <img src="@/assets/images/infographic/part3/flame3.png" id="flame3" class="scroll">

            <img src="@/assets/images/infographic/part3/cliffs.png" id="cliff">

            <img src="@/assets/images/infographic/part3/flame1.png" id="flame4" class="scroll">
            <img src="@/assets/images/infographic/part3/flame3.png" id="flame5" class="scroll">
            <img src="@/assets/images/infographic/part3/flame2.png" id="flame6" class="scroll">
            <img src="@/assets/images/infographic/part3/flame1.png" id="flame7" class="scroll">
            <img src="@/assets/images/infographic/part3/flame3.png" id="flame8" class="scroll">

            <img src="@/assets/images/infographic/part3/text10.png" id="text10" class="text scroll_reveal">
            <img src="@/assets/images/infographic/part3/text11.png" id="text11" class="text scroll_reveal">
            <img src="@/assets/images/infographic/part3/text12.png" id="text12" class="text scroll_reveal">

            <img src="@/assets/videos/whisp_waving.gif" id = "whisp1" >
            <img src="@/assets/videos/whisp_happy.gif" id = "whisp2" @click="revealAllBubbles">

            <img src="@/assets/images/infographic/part3/bubble1.png" id="bubble_back1" class="bubble"  @click="bubbleReveal1">
            <img src="@/assets/images/infographic/part3/bubble2.png" id="bubble_back2" class="bubble"  @click="bubbleReveal2">
            <img src="@/assets/images/infographic/part3/bubble3.png" id="bubble_back3" class="bubble"  @click="bubbleReveal3">
            <img src="@/assets/images/infographic/part3/bubble4.png" id="bubble_back4" class="bubble"  @click="bubbleReveal4">
            <img src="@/assets/images/infographic/part3/bubble5.png" id="bubble_back5" class="bubble"  @click="bubbleReveal5">

            <img v-show="bubble1Visible" :src="bubble1Src" id="bubble1">
            <img v-show="bubble2Visible" :src="bubble2Src" id="bubble2">
            <img v-show="bubble3Visible" :src="bubble3Src" id="bubble3">
            <img v-show="bubble4Visible" :src="bubble4Src" id="bubble4">
            <img v-show="bubble5Visible" :src="bubble5Src" id="bubble5">

            <img src="@/assets/images/infographic/part3/river.png" id="river">

            <img v-show="scrollState === 'closed' "src="@/assets/images/infographic/part3/scroll.png" id="closed_scroll_whisp"  @click="openScroll">
            <img v-show="scrollState === 'animating'" :src="scrollOpeningSrc" id="scroll_opening_whisp">
        </div>
    </div>
  </template>
  
  <script>
    
  import scrollOpening from '@/assets/videos/scroll_opening_whisp.gif';
  import bubble1 from '@/assets/videos/bubble1.gif';
  import bubble2 from '@/assets/videos/bubble2.gif';
  import bubble3 from '@/assets/videos/bubble3.gif';
  import bubble4 from '@/assets/videos/bubble4.gif';
  import bubble5 from '@/assets/videos/bubble5.gif';
    
    export default {
        data() {
            return {
                scrollState: 'closed',
                scrollOpeningSrc: scrollOpening,
                selectedBubble: null,

                bubble1Src: bubble1,
                bubble2Src: bubble2,
                bubble3Src: bubble3,
                bubble4Src: bubble4,
                bubble5Src: bubble5,

                bubble1Visible: false,
                bubble2Visible: false,
                bubble3Visible: false,
                bubble4Visible: false,
                bubble5Visible: false,
            };
        },
    
            methods: {
            openScroll() {
                this.scrollState = 'animating';
                setTimeout(() => {
                    const scrollElement = document.getElementById('scroll_opening_whisp');
                    if (scrollElement) {
                        scrollElement.style.animation = 'float 3s ease-in-out infinite';
                    }   
                }, 1000);
            },

            bubbleReveal1() {this.bubble1Visible = !this.bubble1Visible;},
            bubbleReveal2() {this.bubble2Visible = !this.bubble2Visible;},
            bubbleReveal3() {this.bubble3Visible = !this.bubble3Visible;},
            bubbleReveal4() {this.bubble4Visible = !this.bubble4Visible;},
            bubbleReveal5() {this.bubble5Visible = !this.bubble5Visible;},
            revealAllBubbles() {
                this.bubble1Visible = true;
                this.bubble2Visible = true;
                this.bubble3Visible = true;
                this.bubble4Visible = true;
                this.bubble5Visible = true;
            }
        }
    }
    
  
  </script>

<style scoped>

    .infographic_3 {
        position: relative;
        width: 100%;
        height: auto;
    }

    #flame1{
        position: absolute;
        top: 10vw;
        left: 16vw;
        width: 10vw;
    }

    #flame2{
        position: absolute;
        top: 42vw;
        left: 73vw;
        width: 16vw;
    }

    #flame3{
        position: absolute;
        top: 90vw;
        left: 15vw;
        width: 13vw;
    }

    #flame4{
        position: absolute;
        top: 252vw;
        left: 10vw;
        width: 5vw;
        z-index: 10;
    }

    #flame5{
        position: absolute;
        top: 278vw;
        left: 26vw;
        width: 5vw;
        z-index: 10;
    }

    #flame6{
        position: absolute;
        top: 251vw;
        left: 90vw;
        width: 5vw;
        z-index: 10;
    }

    #flame7{
        position: absolute;
        top: 278vw;
        left: 80vw;
        width: 4vw;
        z-index: 10;
    }

    #flame8{
        position: absolute;
        top: 265vw;
        left: 70vw;
        width: 3vw;
        z-index: 10;
    }

    #flame9{
        position: absolute;
        top: 288vw;
        left: 7vw;
        width: 2.5vw;
        z-index: 10;
    }

    #text10{
        position: absolute;
        top: 30vw;
        left: 34vw;
        width: 34vw;
    }

    #text11{
        position: absolute;
        top: 67vw;
        left: 34vw;
        width: 34vw;
    }

    #text12{
        position: absolute;
        top: 115vw;
        left: 34vw;
        width: 34vw;
    }

    .scroll {
        opacity: 0;
        transform: translateY(60px);
        transition: all 1.5s ease-out;
        will-change: opacity, transform;
        position: relative;

    }

    .scroll.visible {
        opacity: 1;
        transform: translateY(0);
        animation: glowFloat 2s ease-in-out infinite alternate;
    }

    
    #closed_scroll_whisp{
        position: absolute;
        top: 148.5vw;
        left: 40.5vw;
        width: 17.5vw;
        height: auto;
        cursor: pointer;
        animation: glowFloat 2.5s ease-in-out infinite;
        transition: filter 0.3s ease, transform 0.3s ease;
        z-index: 500;
    }

    #closed_scroll_whisp:hover{
        filter: brightness(1.1) drop-shadow(0 0 0.5vw rgba(255, 255, 255, 0.82));
        animation: none;
        transform: scale(1.02);
    }

    #scroll_opening_whisp{
        position: absolute;
        top: 140vw;
        left: 25vw;
        width: 35vw;
        height: auto;
    }

    #whisp1{
        position: absolute;
        top: 135vw;
        left: 52vw;
        width: 30vw; 
        animation: glowFloat 2.8s ease-in-out infinite alternate; 
    }

    #whisp2{
        position: absolute;
        top: 237vw;
        left: 41vw;
        width: 20vw;   
        animation: glowFloat 2.8s ease-in-out infinite alternate; 
    }

    #river{
        position: absolute;
        top: 255vw;
        left: 0vw;
        width: 100vw;
    }

    #cliff{
        position: absolute;
        top: 100vw;
        left: 0vw;
        width: 100vw;
    }

    .bubble{
        animation: glow 2.8s ease-in-out infinite alternate;
        cursor: pointer;
    }

    #bubble_back1{
        position: absolute;
        top: 237vw;
        left: 22.5vw;
        width: 18vw;
    }

    #bubble_back2{
        position: absolute;
        top: 218vw;
        left: 28vw;
        width: 15.5vw;    
    }

    #bubble_back3{
        position: absolute;
        top: 205vw;
        left: 45vw;
        width: 14vw;
    }

    #bubble_back4{
        position: absolute;
        top: 219vw;
        left: 57vw;
        width: 16.5vw;
    }

    #bubble_back5{
        position: absolute;
        top: 237vw;
        left: 60vw;
        width: 19.5vw;
    }

    .bubble:hover, #whisp2:hover{
        filter: brightness(1) drop-shadow(0 0 0.5vw rgba(123, 199, 247, 1));
        animation: none;
        transform: scale(1.02);
    }

    #whisp2:hover{
        filter: brightness(1) drop-shadow(0 0 0.5vw rgba(123, 199, 247, 0.));
        animation: none;
        transform: scale(1.02);
    }

    #bubble1{
        position: absolute;
        top: 237vw;
        left: 22.5vw;
        width: 18vw;   
    }

    #bubble2{
        position: absolute;
        top: 218vw;
        left: 28vw;
        width: 15.5vw;      
    }

    #bubble3{
        position: absolute;
        top: 205vw;
        left: 45vw;
        width: 14vw;    
    }

    #bubble4{
        position: absolute;
        top: 219vw;
        left: 57vw;
        width: 16.5vw;    
    }

    #bubble5{
        position: absolute;
        top: 237vw;
        left: 60vw;
        width: 19.5vw;    
    }


    @keyframes glow {
        0% {
            filter: drop-shadow(0 0 5px rgba(101, 197, 255, 0.5));
        }
        100% {
            filter: drop-shadow(0 0 20px rgba(123, 199, 247, 0.8));
        }
    }

    @keyframes glowFloat {
        0% {
            transform: translateY(0);
            filter: drop-shadow(0 0 10px rgba(101, 197, 255, 0.3));
        }

        50% {
            transform: translateY(-6px);
            filter: drop-shadow(0 0 15px rgba(123, 199, 247, 0.5));
        }

        100% {
            transform: translateY(0);
            filter: drop-shadow(0 0 10px rgba(101, 197, 255, 0.3));
        }  
    }

    @keyframes glowPulse {
        0%, 100% {
            filter: drop-shadow(0 0 0.3vw rgba(255, 255, 255, 0.5));
        }
        50% {
            filter: drop-shadow(0 0 0.6vw rgba(255, 255, 255, 0.7));
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