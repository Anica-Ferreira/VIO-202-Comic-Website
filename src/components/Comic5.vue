<!--Anica Ferreira u24581802*-->
<template>
    <div class="comic5">
        <div class="infographic_content">
            <img src="@/assets/images/comic/part5/background.png" class="cover-anchor">

            <img src="@/assets/images/comic/part5/9.png" class="nine">
            <img src="@/assets/images/comic/part5/10.png" class="ten">
            <img src="@/assets/images/comic/part5/11.png" class="eleven">
            <img ref="waaEl" src="@/assets/images/comic/part5/waa.gif" class="waa">
            <img ref="whisp15El" src="@/assets/images/comic/part5/whisp15.gif" class="w15">
            <img src="@/assets/images/comic/part5/whisp14.png" class="w14 hover">
            <img ref="thudEl" src="@/assets/images/comic/part5/thud.png" class="thud1">
            <img src="@/assets/images/comic/part5/whisp16.png" class="hover w16">
        </div>
    </div>
  </template>
  
<script>
import { useSound } from "@vueuse/sound"
import thudAudio from "@/assets/audio/thud.mp3"
import waaAudio from "@/assets/audio/waa.mp3"
import twinkleAudio from "@/assets/audio/twinkle.mp3"
import { useSoundStore } from "@/stores/sound"

export default {
  setup() {
    const store = useSoundStore()
    const { play: playThud } = useSound(thudAudio)
    const { play: playWaa } = useSound(waaAudio)
    const { play: playTwinkle } = useSound(twinkleAudio)

    return { store, playThud, playWaa, playTwinkle }
  },
  mounted() {
    if (this.$refs.thudEl) {
      this.thudObserver = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting && this.store.soundOn) {
              this.playThud()
            }
          })
        },
        { threshold: 0.5 }
      )
      this.thudObserver.observe(this.$refs.thudEl)
    }

    if (this.$refs.waaEl) {
      this.waaObserver = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting && this.store.soundOn) {
              this.playWaa()
            }
          })
        },
        { threshold: 0.5 }
      )
      this.waaObserver.observe(this.$refs.waaEl)
    }

    if (this.$refs.whisp15El) {
      this.twinkleObserver = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting && this.store.soundOn) {
              this.playTwinkle()
            }
          })
        },
        { threshold: 0.5 }
      )
      this.twinkleObserver.observe(this.$refs.whisp15El)
    }
  },
  beforeUnmount() {
    if (this.thudObserver) this.thudObserver.disconnect()
    if (this.waaObserver) this.waaObserver.disconnect()
    if (this.twinkleObserver) this.twinkleObserver.disconnect()
  }
}
</script>


<style scoped>

    .comic5 {
        position: relative;
        width: 100%;
        height: auto;
    }

    .nine{
        position: absolute;
        top: 0vw;
        left: 0vw;
        width: 100vw;
        z-index: 1000;
    }

    .ten{
        position: absolute;
        top: 260vw;
        left: 0vw;
        width: 100vw;
        z-index: 11; 
    }

    .eleven{
        position: absolute;
        top: 732vw;
        left: 0vw;
        width: 100vw;
        z-index: 11; 
    }

    .thud1{
        position: absolute;
        top: 503vw;
        left: 0vw;
        width: 100vw;
        z-index: 10001;
    }

    .w14{
        position: absolute;
        top: 182vw;
        left: 0vw;
        width: 100vw;
        z-index: 10001;
    }

    .w15{
        position: absolute;
        top: 1033vw;
        left: -11vw;
        width: 120vw;
        z-index: 10001;
    }

    .w16{
        position: absolute;
        top: 972vw;
        left: 48vw;
        width: 21vw;
        z-index: 10001;
    }

    .waa{
        position: absolute;
        top: 310vw;
        left: 10vw;
        width: 35vw;
        z-index: 10001;
    }

</style>