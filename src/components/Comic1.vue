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
            <img ref="pokeEl" src="@/assets/images/comic/part1/poke_animation.gif" class="poke">

            <img ref="rawrImg" src="@/assets/images/comic/part1/rawr_animation.gif" class="rawr">

            <img ref="fungarhEl" src="@/assets/images/comic/part1/fungarh_animation.gif" class="fungarh">

            <img ref="confusedEl" src="@/assets/images/comic/part1/confused.gif" class="confused">

            <img src="@/assets/images/comic/part1/whisp1.png" class="hover w1">
            <img src="@/assets/images/comic/part1/whisp2.png" class="hover w2">
            <img src="@/assets/images/comic/part1/whisp3.png" class="hover w3">

            <img 
                :src="store.soundOn ? soundOnImg : soundOffImg" 
                class="sound"
                :class="{ 'sound-on': store.soundOn, 'sound-off': !store.soundOn }"
                @click="toggleSound"
            >
        </div>
    </div>
  </template>
  
<script>
import soundOnImg from "@/assets/images/comic/part1/soundOn.png";
import soundOffImg from "@/assets/images/comic/part1/soundOff.png";

import { useSound } from "@vueuse/sound";
import soundOnAudio from "@/assets/audio/on.mp3";
import rawrAudio from "@/assets/audio/rawr.mp3";
import pokeAudio from "@/assets/audio/poke.mp3";
import fungarhAudio from "@/assets/audio/fungarh.mp3";
import waitAudio from "@/assets/audio/wait.mp3";

import { useSoundStore } from "@/stores/sound";

export default {
  setup() {
    const store = useSoundStore();

    const { play: playOn } = useSound(soundOnAudio);
    const { play: playRawr } = useSound(rawrAudio);
    const { play: playPoke } = useSound(pokeAudio);
    const { play: playFungarh } = useSound(fungarhAudio);
    const { play: playWait } = useSound(waitAudio); // new

    function toggleSound() {
      store.toggleSound();
      if (store.soundOn) {
        playOn();
      }
    }

    return {
      store,
      playOn,
      playRawr,
      playPoke,
      playFungarh,
      playWait,
      toggleSound,
      soundOnImg,
      soundOffImg,
    };
  },
  mounted() {
    // Rawr observer
    if (this.$refs.rawrImg) {
      this.rawrObserver = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting && this.store.soundOn) {
              this.playRawr();
            }
          });
        },
        { threshold: 0.5 }
      );
      this.rawrObserver.observe(this.$refs.rawrImg);
    }

    // Poke observer
    if (this.$refs.pokeEl) {
      this.pokeObserver = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting && this.store.soundOn) {
              this.playPoke();
            }
          });
        },
        { threshold: 0.5 }
      );
      this.pokeObserver.observe(this.$refs.pokeEl);
    }

    // Fungarh observer
    if (this.$refs.fungarhEl) {
      this.fungarhObserver = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting && this.store.soundOn) {
              this.playFungarh();
            }
          });
        },
        { threshold: 0.5 }
      );
      this.fungarhObserver.observe(this.$refs.fungarhEl);
    }

    // Confused observer
    if (this.$refs.confusedEl) {
      this.confusedObserver = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting && this.store.soundOn) {
              this.playWait();
            }
          });
        },
        { threshold: 0.5 }
      );
      this.confusedObserver.observe(this.$refs.confusedEl);
    }
  },
  beforeUnmount() {
    if (this.rawrObserver) this.rawrObserver.disconnect();
    if (this.pokeObserver) this.pokeObserver.disconnect();
    if (this.fungarhObserver) this.fungarhObserver.disconnect();
    if (this.confusedObserver) this.confusedObserver.disconnect();
  },
};
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

    .fungarh{
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

    .sound {
        position: absolute;
        top: 40vw;
        left: 35vw;
        width: 30vw;
        z-index: 100;
        transition: opacity 0.3s ease, transform 0.2s ease;
        cursor: pointer;
    }

    .sound-on {
        opacity: 1;
    }

    .sound-off {
        opacity: 0.6;
    }

    .sound:hover {
        transform: scale(1.05);
    }
   
</style>