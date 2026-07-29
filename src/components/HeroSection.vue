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
        <div class="max-w-full md:max-w-[75%] lg:max-w-[65%]">
          <!-- Trust badges -->
          <div class="flex flex-wrap gap-3 mb-8 opacity-0 animate-fade-in" style="animation-delay: 200ms; animation-fill-mode: forwards;">
            <span class="font-label text-[8px] sm:text-[9px] tracking-[0.2em] uppercase text-secondary font-bold border border-secondary/30 px-4 py-2 backdrop-blur-sm bg-primary/20">
              +15 Años de experiencia
            </span>
            <span class="font-label text-[8px] sm:text-[9px] tracking-[0.2em] uppercase text-secondary font-bold border border-secondary/30 px-4 py-2 backdrop-blur-sm bg-primary/20">
              +350 Casos exitosos
            </span>
            <span class="font-label text-[8px] sm:text-[9px] tracking-[0.2em] uppercase text-secondary font-bold border border-secondary/30 px-4 py-2 backdrop-blur-sm bg-primary/20">
              8 Áreas de práctica
            </span>
          </div>

          <h1 class="font-headline font-light text-white text-4xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight opacity-0 animate-slide-up" style="animation-delay: 400ms; animation-fill-mode: forwards;">
            La experiencia que<br />
            <span class="text-secondary font-medium">protege sus intereses</span>
          </h1>

          <p class="font-body font-light text-white/60 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl mt-6 lg:mt-8 opacity-0 animate-slide-up" style="animation-delay: 600ms; animation-fill-mode: forwards;">
            Más de 15 años de trayectoria en derecho corporativo, responsabilidad civil,
            seguros, litigio estratégico y asesoría integral para empresas y personas.
            Un equipo multidisciplinario comprometido con la excelencia jurídica.
          </p>

          <div class="flex flex-wrap gap-4 mt-10 lg:mt-12 opacity-0 animate-slide-up" style="animation-delay: 800ms; animation-fill-mode: forwards;">
            <router-link to="/contacto"
              class="group inline-flex items-center gap-3 font-label text-[9px] sm:text-[10px] font-bold tracking-[0.25em] uppercase text-white bg-secondary border border-secondary px-8 py-4 hover:bg-secondary/90 transition-all duration-500 no-underline">
              <span>Solicitar consulta</span>
              <span class="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </router-link>
            <router-link to="/nosotros"
              class="group inline-flex items-center gap-3 font-label text-[9px] sm:text-[10px] font-bold tracking-[0.25em] uppercase text-white/60 hover:text-white border border-white/20 px-8 py-4 hover:bg-white/5 transition-all duration-500 no-underline">
              <span>Conocer la firma</span>
              <span class="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">east</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
      <div class="w-px h-8 bg-white/20 animate-pulse"></div>
      <span class="material-symbols-outlined text-white/40 text-2xl animate-bounce">expand_more</span>
    </div>
  </section>
</template>
