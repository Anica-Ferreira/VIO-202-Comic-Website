<!--Anica Ferreira u24581802*-->
<template>
    <div class="infographic_2">
        <div class="infographic_content">
            <img src="@/assets/images/infographic/part2/background.png" class="cover-anchor">
            <img src="@/assets/images/infographic/part2/log1.png" id="log1">
            <img src="@/assets/videos/malbrush_blinking2.gif" id="malbrush_blinking2">
            <img src="@/assets/images/infographic/part2/cliffs.png" id="cliffs">
            
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
            <img src="@/assets/images/infographic/part2/brush1.png" id="brush2">
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

#swirls{
    position: absolute;
    top: 120vw;
    left: 0vw;
    width: 100vw;
    animation: swirlPulse 4s ease-in-out infinite;
    pointer-events: none;
    mix-blend-mode: screen;
}

#brush1 {
    position: absolute;
    top: 20vw;
    left: 60vw;
    width: 4vw;
    cursor: grab;
    z-index: 999;
    animation: glowfloat 3s ease-in-out infinite;
    transition: transform 0.8s ease-in-out !important;  
}

#brush2 {
    position: absolute;
    top: 307vw;
    left: 47.5vw;
    width: 5.5vw;
    animation: float 3s ease-in-out infinite;
}

#brush_light{
    position: absolute;
    top: 240vw;
    left: 0vw;
    width: 100vw;
    opacity: 0.7;
    mix-blend-mode: color-dodge;
}


#brush1:hover {
    animation: none;
    transform: scale(1.02) !important;
    filter: brightness(1.1) drop-shadow(0 0 0.5vw rgba(255, 255, 255, 0.82));
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
    top: 144.5vw;
    left: 34.5vw;
    width: 35vw;
    height: auto;
}

#text5{
    position: absolute;
    top: 188.5vw;
    left: 37vw;
    width: 34vw;
    height: auto;
}

#text6{
    position: absolute;
    top: 249vw;
    left: 40.5vw;
    width: 21vw;
    height: auto;
}

#text7{
    position: absolute;
    top: 286vw;
    left: 37vw;
    width: 29vw;
    height: auto;
}

#text8{
    position: absolute;
    top: 352vw;
    left: 35vw;
    width: 30vw;
    height: auto;
}

#text9{
    position: absolute;
    top: 366vw;
    left: 32.5vw;
    width: 35vw;
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

@keyframes swirlPulse {
    0% {
        filter: drop-shadow(0 0 0.2vw rgba(146, 65, 187, 0.3));
        opacity: 0.6;
    }
    50% {
        filter: drop-shadow(0 0 0.8vw rgba(165, 77, 209, 0.9));
        opacity: 1;
    }
    100% {
        filter: drop-shadow(0 0 0.2vw rgba(146, 65, 187, 0.3));
        opacity: 0.6;
    }
}
    


</style>