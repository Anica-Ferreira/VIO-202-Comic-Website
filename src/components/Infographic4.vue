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
            <img src="@/assets/images/infographic/part4/creatures.png" id="creatures">

            <img src="@/assets/images/infographic/part4/green_circle.png" id="circle">
            <img src="@/assets/images/infographic/part4/darkness.png" id="darkness">

        </div>
    </div>
  </template>
  
<script>

    export default {
            data() {
                return {
          
                };
          },
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

    #creatures{
        position: absolute;
        top: 102.5vw;
        left: 0vw;
        width: 100vw;
        z-index: 1;
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
        left: 34vw;
        width: 34vw;
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
   
</style>