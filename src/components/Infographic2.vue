<!--Anica Ferreira u24581802*-->
<template>
    <div class="infographic_2">
        <div class="infographic_content">
            <img src="@/assets/images/infographic/part2/background.png" class="cover-anchor">
            <img src="@/assets/images/infographic/part2/log1.png" id="log1">
            <img src="@/assets/videos/malbrush_blinking2.gif" id="malbrush_blinking2">
            <img src="@/assets/images/infographic/part2/cliffs.png" id="cliffs">
            <img src="@/assets/images/infographic/part2/Infographic_Section_2.png" id="temp">

            
            
            <img src="@/assets/images/infographic/part2/darkness.png" id="darkness">


            <img src="@/assets/images/infographic/part2/brush1.png" id="brush1" draggable="true" @dragstart="handleDragStart">
            <img src="@/assets/images/infographic/part2/canvas.png" class="canvas">
            <img src="@/assets/images/infographic/part2/canvas_surface.png" draggable="false" class="canvas" @dragover.prevent @drop="handleDrop" id="canvas_surface">
            <img src="@/assets/videos/canvas_animation.gif" v-show="showAnimation" class="canvas">

            <img src="@/assets/images/infographic/part2/text4.png" id="text4" class="text scroll_reveal">
            <img src="@/assets/images/infographic/part2/text5.png" id="text5" class="text scroll_reveal">
            <img src="@/assets/images/infographic/part2/text6.png" id="text6" class="text scroll_reveal">
            <img src="@/assets/images/infographic/part2/text7.png" id="text7" class="text scroll_reveal">
            <img src="@/assets/images/infographic/part2/text8.png" id="text8" class="text scroll_reveal">
            <img src="@/assets/images/infographic/part2/text9.png" id="text9" class="text scroll_reveal">

            <img src="@/assets/images/infographic/part2/brush_light.png" id="brush_light">
            <img src="@/assets/images/infographic/part2/brush2.png" id="brush2">
            <img src="@/assets/images/infographic/part2/light_swirls.png" id="swirls">
            
        </div>
    </div>
</template>
  
<script>
  
export default {

    data() {
        return {
            showAnimation: false,
        };
    },
  
    methods: {
        handleDragStart(event) {
            event.dataTransfer.setData("text/plain", "brush");
        },

        handleDrop(event) {
            const brush = document.getElementById("brush1");
            brush.style.display = "none";
            this.showAnimation = true;
        },
    },
};

</script>

<style scoped>

.infographic_2 {
    position: relative;
    width: 100%;
    height: auto;
}

#log1{
    position: absolute;
    top: 54vw;
    left: 0vw;
    width: 100vw;
}

#cliffs{
    position: absolute;
    top: 110vw;
    left: 0vw;
    width: 100vw;
}

#darkness{
    position: absolute;
    top: 0vw;
    left: 0vw;
    width: 100vw;
    mix-blend-mode:  multiply;
    
}

#temp{
    position: absolute;
    top: 505vw;
    left: 0vw;
    width: 100vw;  
}

#swirls{
    position: absolute;
    top: 147vw;
    left: 0vw;
    width: 100vw;
}

#brush1 {
    position: absolute;
    top: 20vw;
    left: 60vw;
    width: 4vw;
    cursor: grab;
    animation: glowfloat 3s ease-in-out infinite;
    z-index: 999;
    transition: transform 0.3s ease-in-out !important;
}

#brush2 {
    position: absolute;
    top: 317vw;
    left: 44.5vw;
    width: 8vw;
    animation: float 3s ease-in-out infinite;
}

#brush_light{
    position: absolute;
    top: 260vw;
    left: 0vw;
    width: 100vw;
    opacity: 0.7;
    mix-blend-mode:  color-dodge;
}


#brush1:hover {
    animation-play-state: paused;
    transform: scale(1.01) !important;
}

#malbrush_blinking2{
    position: absolute;
    top: 0vw;
    left: 0vw;
    width: 100vw;
}

#canvas_surface{
    opacity: 0;
    z-index: 999;
    top: 21vw;
    left: 23vw;
    width: 23vw;
    transform: rotate(-3deg);
}

.canvas{
    position: absolute;
    top: 7vw;
    left: 6.3vw;
    width: 56vw;
}

#text4{
    position: absolute;
    top: 144vw;
    left: 31vw;
    width: 38vw;
    height: auto;
}

#text5{
    position: absolute;
    top: 198vw;
    left: 31.2vw;
    width: 39vw;
    height: auto;
}

#text6{
    position: absolute;
    top: 255vw;
    left: 38.2vw;
    width: 24vw;
    height: auto;
}

#text7{
    position: absolute;
    top: 298vw;
    left: 34vw;
    width: 32vw;
    height: auto;
}

#text8{
    position: absolute;
    top: 400vw;
    left: 28vw;
    width: 44vw;
    height: auto;
}

#text9{
    position: absolute;
    top: 432vw;
    left: 24vw;
    width: 52vw;
    height: auto;
}

@keyframes glowfloat {
    0% {
        transform: translateY(0);
        filter: drop-shadow(0 0 0.3vw rgba(255, 255, 255, 0.438));
    }

    50% {
        transform: translateY(-8px);
        filter: drop-shadow(0 0 0.5vw rgba(255, 255, 255, 0.7));
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
        transform: translateY(-8px);
        filter: drop-shadow(0 0 0.8vw rgba(229, 55, 235, 0.5));
    }

    100% {
        transform: translateY(0);
    }
}
    


</style>