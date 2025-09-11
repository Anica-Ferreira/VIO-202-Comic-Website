<!--Anica Ferreira u24581802*-->
<template>
    <div class="comic5">
        <div class="infographic_content">
            <img src="@/assets/images/comic/part5/background.png" class="cover-anchor">
            <img src="@/assets/images/comic/part5/9.webp" class="nine">
            <img src="@/assets/images/comic/part5/10.webp" class="ten">
            <img src="@/assets/images/comic/part5/11.webp" class="eleven">
            <img ref="waaEl" src="@/assets/images/comic/part5/waa.gif" class="waa">
            <img ref="whisp15El" src="@/assets/images/comic/part5/whisp15.gif" class="w15">
            <img src="@/assets/images/comic/part5/whisp14.webp" class="w14 hover">
            <img ref="thudEl" src="@/assets/images/comic/part5/thud.webp" class="thud1">
            <img src="@/assets/images/comic/part5/whisp16.webp" class="hover w16">
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
    .comic5{position:relative;width:100%;height:auto}.nine{position:absolute;top:0;left:0;width:100vw;z-index:1000}.eleven,.ten{position:absolute;z-index:11;left:0;width:100vw}.ten{top:260vw}.eleven{top:732vw}.thud1,.w14,.w15,.w16,.waa{position:absolute;z-index:10001}.thud1{top:503vw;left:0;width:100vw}.w14{top:182vw;left:0;width:100vw}.w15{top:1033vw;left:-11vw;width:120vw}.w16{top:972vw;left:48vw;width:21vw}.waa{top:310vw;left:10vw;width:35vw}
</style>