import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSoundStore = defineStore('sound', () => {
    const soundOn = ref(false)

    function toggleSound() {
        soundOn.value = !soundOn.value
    }

    return { soundOn, toggleSound }
});