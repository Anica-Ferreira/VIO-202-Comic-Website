<!--Anica Ferreira u24581802*-->
<template>
    <div class="comic4">
        <div class="infographic_content">
            <img src="@/assets/images/comic/part4/background.png" class="cover-anchor">
            <img src="@/assets/images/comic/part4/7.webp" class="seven">
            <img src="@/assets/images/comic/part4/8.webp" class="eight">
            <img src="@/assets/images/comic/part4/whisp11.webp" class="hover w11">
            <img ref="whisp12El" src="@/assets/images/comic/part4/whisp12.gif" class="hover w12">
            <img src="@/assets/images/comic/part4/whisp13.webp" class="hover w13">
            <img ref="crrEl" src="@/assets/images/comic/part4/crrr.gif" class="crr">
            <img src="@/assets/images/comic/part4/shock.gif" class="shock">
            <img src="@/assets/images/comic/part4/shwoop.gif" class="shwoop">
            <img ref="ahhhEl" src="@/assets/images/comic/part4/ahhh.gif" class="ahhh">
            <img src="@/assets/images/comic/part4/glow_eyes3.gif" class="glow_eyes3">
            <img src="@/assets/images/comic/part4/glow_eyes4.gif" class="glow_eyes4">
            <img ref="crackEl" src="@/assets/images/comic/part4/crack.gif" class="crack">
            <img ref="glowEl" src="@/assets/images/comic/part4/please.gif" class="please">
            <img src="@/assets/images/comic/part4/bubble.webp" class="bubble"></img>
        </div>
    </div>
  </template>
  
<script>
import { useSound } from "@vueuse/sound"
import crackAudio from "@/assets/audio/crack.mp3"
import ahhAudio from "@/assets/audio/ahh.mp3"
import doomAudio from "@/assets/audio/doom.mp3"
import crrkAudio from "@/assets/audio/crrk.mp3"
import angryWhispAudio from "@/assets/audio/angry-whisp.mp3"
import { useSoundStore } from "@/stores/sound"

export default {
  setup() {
    const store = useSoundStore()
    const { play: playCrack } = useSound(crackAudio)
    const { play: playAhh } = useSound(ahhAudio)
    const { play: playDoom } = useSound(doomAudio)
    const { play: playCrrk } = useSound(crrkAudio)
    const { play: playAngryWhisp } = useSound(angryWhispAudio)

    return { store, playCrack, playAhh, playDoom, playCrrk, playAngryWhisp }
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

    // crrk observer
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

    // angry-whisp observer <-- new
    if (this.$refs.whisp12El) {
      this.angryWhispObserver = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting && this.store.soundOn) {
              this.playAngryWhisp()
            }
          })
        },
        { threshold: 0.1 }
      )
      this.angryWhispObserver.observe(this.$refs.whisp12El)
    }
  },
  beforeUnmount() {
    if (this.crackObserver) this.crackObserver.disconnect()
    if (this.ahhhObserver) this.ahhhObserver.disconnect()
    if (this.doomObserver) this.doomObserver.disconnect()
    if (this.crrkObserver) this.crrkObserver.disconnect()
    if (this.angryWhispObserver) this.angryWhispObserver.disconnect()
  }
}
</script>

<style scoped>
    .comic4{position:relative;width:100%;height:auto}.seven{position:absolute;top:15vw;left:0;width:100vw;z-index:9}.blue1,.eight{top:800vw;left:0;width:100vw;position:absolute}.eight{z-index:11}.blue1{z-index:10}.w11{position:absolute;top:86vw;left:49vw;width:13vw;z-index:100}.w12{position:absolute;top:280vw;left:22vw;width:35vw;z-index:100}.bubble,.crr,.glow_eyes3,.glow_eyes4,.shock,.shwoop{left:0;width:100vw;position:absolute;z-index:100}.crr{top:480vw}.shock{top:524vw}.bubble{top:525.3vw}.shwoop{top:660vw}.glow_eyes3{top:890vw}.glow_eyes4{top:1258vw}.please{position:absolute;top:1120vw;left:20vw;width:80vw;z-index:100}.crack{position:absolute;top:1325vw;left:15vw;width:70vw;z-index:100}.ahhh{position:absolute;top:870vw;left:3vw;width:53vw;z-index:100}.w13{position:absolute;top:690vw;left:68vw;width:35vw;z-index:100}
</style>