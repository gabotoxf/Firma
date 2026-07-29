<script setup>
import { computed } from 'vue'
import SiteNavbar from './SiteNavbar.vue'

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
</script>

<template>
  <SiteNavbar />

  <section class="relative w-full h-[600px] md:h-[650px] lg:h-screen overflow-hidden bg-primary">
    <video autoplay muted loop playsinline :poster="posterSrc" class="absolute inset-0 w-full h-full object-cover">
      <source :src="videoSrc" :type="videoType" />
    </video>

    <div class="absolute inset-0 bg-gradient-to-r from-primary via-primary/40 to-transparent"></div>

    <div class="absolute inset-0 flex items-center z-10 px-6 sm:px-12 lg:px-24 pt-[76px] lg:pt-[88px]">
      <div class="max-w-[1920px] mx-auto w-full">
        <div class="max-w-full md:max-w-[70%] lg:max-w-[60%]">
          <h1 class="font-body font-light text-white text-3xl md:text-5xl lg:text-7xl leading-tight">
            Excelencia jurídica<br />
            para tu tranquilidad
          </h1>
        </div>
      </div>
    </div>

    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
      <div class="w-px h-8 bg-white/20 animate-pulse"></div>
      <span class="material-symbols-outlined text-white/40 text-2xl animate-bounce">expand_more</span>
    </div>
  </section>
</template>
