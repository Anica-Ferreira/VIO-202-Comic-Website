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
            <img ref="evilEl" src="@/assets/images/comic/part2/evil_animation.gif" class="evil">
            <img src="@/assets/images/comic/part2/whisp4.png" class="hover w4">
            <img src="@/assets/images/comic/part2/whisp5.png" class="hover w5">
            <img src="@/assets/images/comic/part2/whisp6.png" class="hover w6">
            <img src="@/assets/images/comic/part2/open_eyes.gif" class="open-eyes">
            <img src="@/assets/images/comic/part2/brush.png" class="paralx_brush2">
            <img src="@/assets/images/comic/part2/thud.png" class="thud">
            <img ref="fshhkEl" src="@/assets/images/comic/part2/fshhhk.gif" class="fshhk">
        </div>
    </div>
  </template>
  
<script>
import { useSound } from "@vueuse/sound"
import hahaAudio from "@/assets/audio/haha.mp3"
import fsskAudio from "@/assets/audio/fssk.mp3"
import { useSoundStore } from "@/stores/sound"

export default {
  setup() {
    const store = useSoundStore()

    const { play: playHaha } = useSound(hahaAudio)
    const { play: playFssk } = useSound(fsskAudio)

    return {
      store,
      playHaha,
      playFssk, // expose
    }
  },
  mounted() {
    // Evil (haha)
    const evilEl = this.$refs.evilEl
    if (evilEl) {
      this.hahaObserver = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting && this.store.soundOn) {
              this.playHaha()
            }
          })
        },
        { threshold: 0.5 }
      )
      this.hahaObserver.observe(evilEl)
    }

    // Fshhk (fssk sound)
    const fshhkEl = this.$refs.fshhkEl
    if (fshhkEl) {
      this.fshhkObserver = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting && this.store.soundOn) {
              this.playFssk()
            }
          })
        },
        { threshold: 0.5 }
      )
      this.fshhkObserver.observe(fshhkEl)
    }
  },
  beforeUnmount() {
    if (this.hahaObserver) this.hahaObserver.disconnect()
    if (this.fshhkObserver) this.fshhkObserver.disconnect()
  },
}
</script>

<style scoped>
    
@keyframes shake {
    0%   { transform: rotate(0deg); }
    25%  { transform: rotate(-4deg); }
    50%  { transform: rotate(3.5deg); }
    75%  { transform: rotate(-4deg); }
    100% { transform: rotate(0deg); }
}

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

    .w5{
        position: absolute;
        top: 463vw;
        left: 25vw;
        width: 30vw;
        z-index: 100;
    }

    .w6{
        position: absolute;
        top: 630vw;
        left: 3vw;
        width: 30vw;
        z-index: 100;
    }

    .thud{
        position: absolute;
        top: 623vw;
        left: 3vw;
        width: 17vw;
        z-index: 100;
        animation: shake 0.55s ease-in-out infinite;
    }

    .fshhk{
        position: absolute;
        top: 722vw;
        left: 49vw;
        width: 15vw;
        z-index: 100;
    }

    .open-eyes{
        position: absolute;
        top: 839.5vw;
        left: 0vw;
        width: 100vw;
        z-index: 100;
    }

    .paralx_brush2{
        position: absolute;
        top: 797vw;
        left: 10vw;
        width: 100vw;
        z-index: 200;
        transition: left 0.1s linear;
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