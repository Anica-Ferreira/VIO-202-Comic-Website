<!--Anica Ferreira u24581802*-->
<template>
    <div class="comic3">
        <div class="infographic_content">
            <img src="@/assets/images/comic/part3/background.png" class="cover-anchor">

            <img src="@/assets/images/comic/part3/blue_fade.webp" class="blue">

            <img src="@/assets/images/comic/part3/5.webp" class="five">
            <img src="@/assets/images/comic/part3/6.webp" class="six">

            <img ref="whisp7El" src="@/assets/images/comic/part3/whisp7.gif" class="w7">
            <img src="@/assets/images/comic/part3/whisp8.webp" class="hover w8">
            <img src="@/assets/images/comic/part3/whisp9.webp" class="hover w9">
            <img src="@/assets/images/comic/part3/whisp10.webp" class="hover w10">

            <img src="@/assets/images/comic/part3/glow_eyes.gif" class="glow-eyes">
            <img ref="lostControlEl" src="@/assets/images/comic/part3/lost_control.gif" class="lost-control">
            <img src="@/assets/images/comic/part3/glow_eyes.gif" class="glow-eyes">
            <img ref="glowEyes2El" src="@/assets/images/comic/part3/glow_eyes2.gif" class="glow-eyes2">
            <img ref="ahaEl" src="@/assets/images/comic/part3/ahah.gif" class="aha">
            <img src="@/assets/images/comic/part3/branch.webp" class="branch">
            <img ref="pantEl" src="@/assets/images/comic/part3/pant.gif" class="pant">
        </div>
    </div>
  </template>
  
<script>
import { useSound } from "@vueuse/sound"
import ahahAudio from "@/assets/audio/ahah.mp3"
import runAudio from "@/assets/audio/run.mp3"
import regretAudio from "@/assets/audio/regret.mp3"
import shakeAudio from "@/assets/audio/shake.mp3"
import pantAudio from "@/assets/audio/pant.mp3"
import { useSoundStore } from "@/stores/sound"

export default {
  setup() {
    const store = useSoundStore()
    const { play: playAhah } = useSound(ahahAudio)
    const { play: playRun } = useSound(runAudio)
    const { play: playRegret } = useSound(regretAudio)
    const { play: playShake } = useSound(shakeAudio)
    const { play: playPant } = useSound(pantAudio)

    return { store, playAhah, playRun, playRegret, playShake, playPant }
  },
  mounted() {
    // Ahah observer
    if (this.$refs.ahaEl) {
      this.ahaObserver = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting && this.store.soundOn) {
              this.playAhah()
            }
          })
        },
        { threshold: 0.1 }
      )
      this.ahaObserver.observe(this.$refs.ahaEl)
    }

    // Whisp7 run observer
    if (this.$refs.whisp7El) {
      this.runObserver = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting && this.store.soundOn) {
              this.playRun()
            }
          })
        },
        { threshold: 0.1 }
      )
      this.runObserver.observe(this.$refs.whisp7El)
    }

    // Glow-eyes2 regret observer
    if (this.$refs.glowEyes2El) {
      this.regretObserver = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting && this.store.soundOn) {
              this.playRegret()
            }
          })
        },
        { threshold: 0.3 }
      )
      this.regretObserver.observe(this.$refs.glowEyes2El)
    }

    // Lost-control shake observer
    if (this.$refs.lostControlEl) {
      this.shakeObserver = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting && this.store.soundOn) {
              this.playShake()
            }
          })
        },
        { threshold: 0.2 }
      )
      this.shakeObserver.observe(this.$refs.lostControlEl)
    }

    // Pant observer <-- new
    if (this.$refs.pantEl) {
      this.pantObserver = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting && this.store.soundOn) {
              this.playPant()
            }
          })
        },
        { threshold: 0.1 }
      )
      this.pantObserver.observe(this.$refs.pantEl)
    }
  },
  beforeUnmount() {
    if (this.ahaObserver) this.ahaObserver.disconnect()
    if (this.runObserver) this.runObserver.disconnect()
    if (this.regretObserver) this.regretObserver.disconnect()
    if (this.shakeObserver) this.shakeObserver.disconnect()
    if (this.pantObserver) this.pantObserver.disconnect()
  }
}
</script>

<style scoped>
.aha,.five,.six,.w7,.w8,.w9{z-index:100}.comic3{position:relative;width:100%;height:auto}.blue,.five,.six{left:0;width:100vw;position:absolute}.five{top:-50vw}.six{top:460vw}.blue{top:0}.aha{position:absolute;top:20vw;left:35vw;width:46vw}.w7{position:absolute;top:330.5vw;left:0;width:100vw}.w8{position:absolute;top:465vw;left:-5vw;width:50vw}.w9{position:absolute;top:690vw;left:-1vw;width:40vw}.w10{position:absolute;top:893vw;left:35vw;width:45vw;z-index:100}.branch,.branch2,.glow-eyes,.glow-eyes2,.lost-control,.pant{position:absolute;width:100vw;z-index:100}.pant{top:899vw;left:0}.glow-eyes{top:15.3vw;left:0}.glow-eyes2{top:155.6vw;left:0}.branch,.branch2{top:423vw;transition:left .1s linear}.lost-control{top:244vw;left:0}
</style>