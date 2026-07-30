<script setup>
import { computed, ref, onMounted } from 'vue'

const props = defineProps({
  videoSrc: {
    type: String,
    default: '/img/hero-background.mp4'
  },
  posterSrc: {
    type: String,
    default: '/img/nosotros/hero.avif'
  }
})

const videoType = computed(() => {
  const ext = props.videoSrc.split('.').pop().toLowerCase()
  const map = { mp4: 'video/mp4', webm: 'video/webm', mov: 'video/quicktime', avi: 'video/x-msvideo' }
  return map[ext] || 'video/mp4'
})

const isLoaded = ref(false)

onMounted(() => {
  setTimeout(() => { isLoaded.value = true }, 600)
})
</script>

<template>
  <section class="relative w-full h-[600px] md:h-[650px] lg:h-screen overflow-hidden bg-primary">
    <video autoplay muted loop playsinline :poster="posterSrc" class="absolute inset-0 w-full h-full object-cover">
      <source :src="videoSrc" :type="videoType" />
    </video>

    <div class="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/30 to-transparent"></div>

    <div class="absolute inset-0 flex items-center justify-center z-10 px-6 sm:px-12 lg:px-24 pt-[76px] lg:pt-[88px]">
      <div class="max-w-[1920px] mx-auto w-full text-center">
        <h1 class="font-body font-light text-white text-4xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight"
            :style="{
              transition: 'all 1.4s cubic-bezier(0.16,1,0.3,1)',
              transitionDelay: '100ms',
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? 'translateY(0)' : 'translateY(50px)'
            }">
          La experiencia que<br />
          <span class="text-secondary font-medium">protege sus intereses</span>
        </h1>

        <div class="flex justify-center mt-10 lg:mt-12"
            :style="{
              transition: 'all 1.2s cubic-bezier(0.16,1,0.3,1)',
              transitionDelay: '800ms',
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? 'translateY(0)' : 'translateY(40px)'
            }">
          <router-link to="/contacto"
            class="group inline-flex items-center gap-4 font-label text-[9px] sm:text-[10px] font-bold tracking-[0.25em] uppercase text-secondary border-2 border-secondary/80 px-10 py-4 hover:bg-secondary hover:text-white transition-all duration-500 no-underline">
            <span>Solicitar consulta</span>
            <span class="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </router-link>
        </div>
      </div>
    </div>

    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3"
        :style="{
          transition: 'all 0.8s cubic-bezier(0.16,1,0.3,1)',
          transitionDelay: '1.2s',
          opacity: isLoaded ? 1 : 0,
          transform: isLoaded ? 'translateY(0)' : 'translateY(16px)'
        }">
      <div class="w-px h-10 bg-gradient-to-b from-secondary to-transparent animate-scroll-line"></div>
      <span class="material-symbols-outlined text-secondary/60 text-lg animate-bounce">expand_more</span>
    </div>
  </section>
</template>

<style scoped>
@keyframes scroll-line {
  0% { transform: scaleY(0); transform-origin: top; }
  50% { transform: scaleY(1); transform-origin: top; }
  51% { transform: scaleY(1); transform-origin: bottom; }
  100% { transform: scaleY(0); transform-origin: bottom; }
}

.animate-scroll-line {
  animation: scroll-line 2s ease-in-out infinite;
}
</style>
