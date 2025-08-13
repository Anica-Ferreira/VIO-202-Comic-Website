<!--Anica Ferreira u24581802*-->
<template>
    <div class="comic1">
        <div class="infographic_content">
            <img src="@/assets/images/comic/part1/background.png" class="cover-anchor">
            <img src="@/assets/images/comic/part1/blue_fade.png" class="blue_fade">
            <img src="@/assets/images/comic/part1/green_fade.png" class="green_fade">
            <img src="@/assets/images/comic/part1/1.png" class="one">
            <img src="@/assets/images/comic/part1/2.png" class="two">
            <img src="@/assets/images/comic/part1/brush.png" class="paralx_brush">
            <img src="@/assets/images/comic/part1/poke_animation.gif" class="poke">
            <img src="@/assets/images/comic/part1/rawr_animation.gif" class="rawr">
            <img src="@/assets/images/comic/part1/fungarh_animation.gif" class="fugnarh">

            <img src="@/assets/images/comic/part1/confused.gif" class="confused">

            <img src="@/assets/images/comic/part1/whisp1.png" class="hover w1">
            <img src="@/assets/images/comic/part1/whisp2.png" class="hover w2">
            <img src="@/assets/images/comic/part1/whisp3.png" class="hover w3">

        </div>
    </div>
  </template>
  
<script>
</script>

<style scoped>
    .comic1 {
        position: relative;
        width: 100%;
        height: auto;
    }

    .blue_fade{
        position: absolute;
        top: -30vw;
        left: 0vw;
        width: 100vw;
        z-index: 100;
    }

    .green_fade{
        position: absolute;
        top: 600vw;
        left: 0vw;
        width: 100vw;
        z-index: 1000;
        mix-blend-mode: multiply;
    }

    .one{
        position: absolute;
        top: 120vw;
        left: 0vw;
        width: 100vw;
        z-index: 100;
    }

    .poke{
        position: absolute;
        top: 206.5vw;
        left: 0vw;
        width: 100vw;
        z-index: 100;
    }

    .confused{
        position: absolute;
        top: 1065vw;
        left: 12vw;
        width: 61vw;
        z-index: 100;
    }

    .paralx_brush{
        position: absolute;
        top: 349vw;
        left: 35vw;
        width: 100vw;
        z-index: 200;
        transition: left 0.1s linear;
    }

    .rawr{
        position: absolute;
        top: 407vw;
        left: 0vw;
        width: 100vw;
        z-index: 100;
    }

    .fugnarh{
        position: absolute;
        top: 570vw;
        left: 6vw;
        width: 85vw;
        z-index: 100;
    }

    .w1{
        position: absolute;
        top: 515vw;
        left: -2vw;
        width: 45vw;
        z-index: 100;
    }

    .w2{
        position: absolute;
        top: 875vw;
        left: 0vw;
        width: 35vw;
        z-index: 100;
    }

    .w3{
        position: absolute;
        top: 1058vw;
        left: 0vw;
        width: 53vw;
        z-index: 100;
    }

    .two{
        position: absolute;
        top: 510vw;
        left: 0vw;
        width: 100vw;
        z-index: 100;
    }
   
</style>