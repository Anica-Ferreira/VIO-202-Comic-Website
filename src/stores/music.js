import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useSound } from '@vueuse/sound'

export const useMusicStore = defineStore('music', () => {
  const currentSong = ref('')
  const audioInstance = ref(null) 
  const isPlaying = ref(false)

  function playSong(songPath, fadeDuration = 1000) {
    if (currentSong.value === songPath) return

    // Fade out current audio
    if (audioInstance.value) {
      const oldAudio = audioInstance.value
      const fadeOut = setInterval(() => {
        oldAudio.volume.value = Math.max(0, oldAudio.volume.value - 0.05)
        if (oldAudio.volume.value <= 0) {
          oldAudio.stop()
          clearInterval(fadeOut)
        }
      }, fadeDuration / 20)
    }

    // Create new audio instance
    audioInstance.value = useSound(songPath, { volume: 0, loop: true })
    currentSong.value = songPath
    isPlaying.value = true

    audioInstance.value.play()

    // Fade in
    const fadeIn = setInterval(() => {
      audioInstance.value.volume.value = Math.min(1, audioInstance.value.volume.value + 0.05)
      if (audioInstance.value.volume.value >= 1) clearInterval(fadeIn)
    }, fadeDuration / 20)
  }

  function stopSong(fadeDuration = 1000) {
    if (!audioInstance.value) return

    const audio = audioInstance.value
    const fadeOut = setInterval(() => {
      audio.volume.value = Math.max(0, audio.volume.value - 0.05)
      if (audio.volume.value <= 0) {
        audio.stop()
        audioInstance.value = null
        currentSong.value = ''
        isPlaying.value = false
        clearInterval(fadeOut)
      }
    }, fadeDuration / 20)
  }

  function toggleMute(soundOn) {
    if (!audioInstance.value) return
    audioInstance.value.volume.value = soundOn ? 1 : 0
  }

  return { currentSong, audioInstance, isPlaying, playSong, stopSong, toggleMute }
})