<!--Anica Ferreira u24581802*-->
<template>
    <div class="comic2">
        <div class="infographic_content">
            <img src="@/assets/images/comic/part2/background.png" class="cover-anchor">

            <img src="@/assets/images/comic/part2/3.png" class="three">
            <img src="@/assets/images/comic/part2/4.png" class="four">

            <img src="@/assets/images/comic/part2/sky.png" class="sky">

            <img src="@/assets/images/comic/part2/cloud1.png" class="cloud1">
            <img src="@/assets/images/comic/part2/cloud2.png" class="cloud2">
            <img src="@/assets/images/comic/part2/cloud3.png" class="cloud3">
            
            <img src="@/assets/images/comic/part2/evil_animation.gif" class="evil">
            <img src="@/assets/images/comic/part2/whisp4.png" class="hover w4">

        </div>
    </div>
  </template>
  
<script>


</script>

<style scoped>
    .comic2 {
        position: relative;
        width: 100%;
        height: auto;
    }

    .three{
        position: absolute;
        top: 0vw;
        left: 0vw;
        width: 100vw;
        z-index: 100;
    }

    .sky{
        position: absolute;
        top: 0vw;
        left: 0vw;
        width: 100vw;
        z-index: 0;
        opacity: 0.9;
    }

    .four{
        position: absolute;
        top: 420vw;
        left: 0vw;
        width: 100vw;
        z-index: 100;
    }

    .evil{
        position: absolute;
        top: 318vw;
        left: 0vw;
        width: 100vw;
        z-index: 100;
    }

    .w4{
        position: absolute;
        top: 318vw;
        left: 0vw;
        width: 45vw;
        z-index: 100;
    }

    .cloud1{
        position: absolute;
        top: 90vw;
        left: -29vw;
        width: 30vw;
        z-index: 50;
        animation: floatRight 180s ease infinite;
    }

    .cloud2{
        position: absolute;
        top: 110vw;
        left: 100vw;
        width: 20vw;
        z-index: 50;
        animation: floatLeft 150s ease infinite;
    }

    .cloud3{
        position: absolute;
        top: 130vw;
        left: 30vw;
        width: 25vw;
        z-index: 50;
        animation: floatLeft 80s ease infinite;
    }

    
   
</style>