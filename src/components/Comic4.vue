<!--Anica Ferreira u24581802*-->
<template>
    <div class="comic4">
        <div class="infographic_content">
            <img src="@/assets/images/comic/part4/background.png" class="cover-anchor">

            

            <img src="@/assets/images/comic/part4/7.png" class="seven">
            <img src="@/assets/images/comic/part4/8.png" class="eight">

            <img src="@/assets/images/comic/part4/whisp11.png" class="hover w11">
            <img src="@/assets/images/comic/part4/whisp12.gif" class="hover w12">
            <img src="@/assets/images/comic/part4/whisp13.png" class="hover w13">
            <img ref="crrEl" src="@/assets/images/comic/part4/crrr.gif" class="crr">
            <img src="@/assets/images/comic/part4/shock.gif" class="shock">
            <img src="@/assets/images/comic/part4/shwoop.gif" class="shwoop">
            <img ref="ahhhEl" src="@/assets/images/comic/part4/ahhh.gif" class="ahhh">
            <img src="@/assets/images/comic/part4/glow_eyes3.gif" class="glow_eyes3">
            <img src="@/assets/images/comic/part4/glow_eyes4.gif" class="glow_eyes4">
            <img ref="crackEl" src="@/assets/images/comic/part4/crack.gif" class="crack">
            <img ref="glowEl" src="@/assets/images/comic/part4/please.gif" class="please">
            <img src="@/assets/images/comic/part4/bubble.png" class="bubble"></img>
            

        </div>
    </div>
  </template>
  
<script>
import { useSound } from "@vueuse/sound"
import crackAudio from "@/assets/audio/crack.mp3"
import ahhAudio from "@/assets/audio/ahh.mp3"
import doomAudio from "@/assets/audio/doom.mp3"
import crrkAudio from "@/assets/audio/crrk.mp3" // new sound
import { useSoundStore } from "@/stores/sound"

export default {
  setup() {
    const store = useSoundStore()
    const { play: playCrack } = useSound(crackAudio)
    const { play: playAhh } = useSound(ahhAudio)
    const { play: playDoom } = useSound(doomAudio)
    const { play: playCrrk } = useSound(crrkAudio) // new

    return { store, playCrack, playAhh, playDoom, playCrrk }
  },
  mounted() {
    // crack observer
    if (this.$refs.crackEl) {
      this.crackObserver = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting && this.store.soundOn) {
              this.playCrack()
            }
          })
        },
        { threshold: 0.7 }
      )
      this.crackObserver.observe(this.$refs.crackEl)
    }

    // ahhh observer
    if (this.$refs.ahhhEl) {
      this.ahhhObserver = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting && this.store.soundOn) {
              this.playAhh()
            }
          })
        },
        { threshold: 0.5 }
      )
      this.ahhhObserver.observe(this.$refs.ahhhEl)
    }

    // doom observer
    if (this.$refs.glowEl) {
      this.doomObserver = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting && this.store.soundOn) {
              this.playDoom()
            }
          })
        },
        { threshold: 0.9 }
      )
      this.doomObserver.observe(this.$refs.glowEl)
    }

    // crrk observer (new)
    if (this.$refs.crrEl) {
      this.crrkObserver = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting && this.store.soundOn) {
              this.playCrrk()
            }
          })
        },
        { threshold: 0.4 }
      )
      this.crrkObserver.observe(this.$refs.crrEl)
    }
  },
  beforeUnmount() {
    if (this.crackObserver) this.crackObserver.disconnect()
    if (this.ahhhObserver) this.ahhhObserver.disconnect()
    if (this.doomObserver) this.doomObserver.disconnect()
    if (this.crrkObserver) this.crrkObserver.disconnect()
  }
}
</script>

<style scoped>
    .comic4 {
        position: relative;
        width: 100%;
        height: auto;
    }

    .seven{
        position: absolute;
        top: 15vw;
        left: 0vw;
        width: 100vw;
        z-index: 9;
    }

    .eight{
        position: absolute;
        top: 800vw;
        left: 0vw;
        width: 100vw;
        z-index: 11; 
    }

    .blue1{
        position: absolute;
        top: 800vw;
        left: 0vw;
        width: 100vw;
        z-index: 10;
    }

    .w11{
        position: absolute;
        top: 86vw;
        left: 49vw;
        width: 13vw;
        z-index: 100;
    }

    .w12{
        position: absolute;
        top: 280vw;
        left: 22vw;
        width: 35vw;
        z-index: 100;
    }

    .crr{
        position: absolute;
        top: 480vw;
        left: 0vw;
        width: 100vw;
        z-index: 100;
    }

    .shock{
        position: absolute;
        top: 524vw;
        left: 0vw;
        width: 100vw;
        z-index: 100;
    }

    .bubble{
        position: absolute;
        top: 525.3vw;
        left: 0vw;
        width: 100vw;
        z-index: 100;
    }

    .shwoop{
        position: absolute;
        top: 660vw;
        left: 0vw;
        width: 100vw;
        z-index: 100;
    }

    .glow_eyes3{
        position: absolute;
        top: 890vw;
        left: 0vw;
        width: 100vw;
        z-index: 100;
    }

    .glow_eyes4{
        position: absolute;
        top: 1258vw;
        left: 0vw;
        width: 100vw;
        z-index: 100;
    }

    .glow_eyes4{
        position: absolute;
        top: 1258vw;
        left: 0vw;
        width: 100vw;
        z-index: 100;
    }

    .please{
        position: absolute;
        top: 1120vw;
        left: 20vw;
        width: 80vw;
        z-index: 100
    }

    .crack{
        position: absolute;
        top: 1325vw;
        left: 15vw;
        width: 70vw;
        z-index: 100;
    }

    .ahhh{
        position: absolute;
        top: 870vw;
        left: 3vw;
        width: 53vw;
        z-index: 100;
    }

    .w13{
        position: absolute;
        top: 690vw;
        left: 68vw;
        width: 35vw;
        z-index: 100; 
    }



    
   
</style>