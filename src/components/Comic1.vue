<!--Anica Ferreira u24581802*-->
<template>
    <div class="comic1">
        <div class="infographic_content">
            <img src="@/assets/images/comic/part1/background.png" class="cover-anchor">

            <img src="@/assets/images/comic/part1/blue_fade.png" class="blue_fade">
            <img src="@/assets/images/comic/part1/green_fade.png" class="green_fade">

            <img src="@/assets/images/comic/part1/1.png" class="one">
            <img src="@/assets/images/comic/part1/2.png" class="two">
            

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

    .two{
        position: absolute;
        top: 510vw;
        left: 0vw;
        width: 100vw;
        z-index: 100;
    }
   
</style>