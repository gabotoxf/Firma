<script setup>
import { ref, onMounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import publicacionesData from '../data/publicaciones.js'

const publicaciones = ref([])
const loading = ref(true)

const truncate = (text, max = 80) => text && text.length > max ? text.slice(0, max).trimEnd() + '…' : text

const modules = [Autoplay, Navigation, Pagination]

onMounted(() => {
  setTimeout(() => {
    publicaciones.value = publicacionesData.filter(n => n.featured)
    loading.value = false
  }, 300)
})
</script>

<template>
  <section class="relative h-screen w-full overflow-hidden bg-primary">
    <!-- Skeleton -->
    <div v-if="loading" class="absolute inset-0 flex items-center justify-center bg-surface-container">
      <div class="flex flex-col items-center gap-6 animate-pulse">
        <div class="w-28 h-3 bg-gray-300 rounded"></div>
        <div class="w-96 h-10 bg-gray-300 rounded"></div>
        <div class="w-72 h-4 bg-gray-300 rounded"></div>
      </div>
    </div>

    <!-- Slider -->
    <Swiper
      v-else-if="publicaciones.length > 0"
      :modules="modules"
      :autoplay="{ delay: 6000, disableOnInteraction: false }"
      :pagination="{ clickable: true }"
      :loop="true"
      effect="fade"
      :fadeEffect="{ crossFade: true }"
      class="h-full"
    >
      <SwiperSlide v-for="(publicacion, i) in publicaciones" :key="publicacion.slug">
        <div class="relative h-screen w-full">
          <!-- Imagen de fondo -->
          <div
            class="absolute inset-0 bg-cover bg-center transition-transform duration-[2000ms]"
            :style="{ backgroundImage: `url(${publicacion.image})` }"
          ></div>
          <!-- Overlay gradiente de marca -->
          <div class="absolute inset-0" style="background: linear-gradient(45deg, rgba(37,52,57,0.92) 0%, rgba(58,80,89,0.78) 50%, rgba(37,52,57,0.45) 100%);"></div>

          <!-- Contenido -->
          <div class="absolute inset-0 flex items-center">
            <div class="max-w-7xl mx-auto px-6 sm:px-12 w-full">
              <div class="max-w-2xl">
                <span
                  class="inline-block bg-secondary text-white text-[9px] font-bold uppercase tracking-[0.3em] px-4 py-1.5 mb-5"
                >
                  {{ publicacion.category }}
                </span>

                <p class="text-white/60 text-sm font-light mb-4 flex items-center gap-2">
                  <span class="material-symbols-outlined text-[15px]">calendar_today</span>
                  {{ publicacion.date }}
                </p>

                <h1
                  class="font-headline text-white text-3xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6 line-clamp-3"
                  style="font-family: 'Noto Serif', serif;"
                >
                  {{ truncate(publicacion.title, 80) }}
                </h1>

                <p class="text-white/70 text-lg font-light leading-relaxed border-l-2 border-secondary pl-5 mb-10 max-w-xl">
                  {{ publicacion.excerpt }}
                </p>

                <router-link
                  :to="`/publicaciones/${publicacion.slug}`"
                  class="group inline-flex items-center gap-4 text-secondary hover:text-white transition-colors duration-300 no-underline"
                >
                  <span class="font-label text-[10px] font-bold tracking-[0.2em] uppercase" style="font-family: 'Manrope', sans-serif;">
                    Explorar publicación
                  </span>
                  <span
                    class="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center group-hover:bg-secondary/40 transition-colors duration-300"
                  >
                    <span class="material-symbols-outlined text-sm">arrow_forward</span>
                  </span>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>

    <!-- Fallback si no hay publicaciones -->
    <div v-else class="absolute inset-0 flex items-center justify-center bg-primary">
      <div class="text-center text-white px-6">
        <h1 class="font-headline text-4xl md:text-6xl font-bold mb-4" style="font-family: 'Noto Serif', serif;">
          Bienvenidos a nuestra firma
        </h1>
        <p class="text-white/60 text-lg font-light max-w-xl mx-auto">
          Excelencia jurídica al servicio de su organización.
        </p>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
      <div class="w-px h-8 bg-white/20 animate-pulse"></div>
      <span class="material-symbols-outlined text-white/40 text-2xl animate-bounce">expand_more</span>
    </div>
  </section>
</template>

<style scoped>
:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  color: white;
  width: 48px;
  height: 48px;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(4px);
  transition: background 0.3s;
}
:deep(.swiper-button-next:hover),
:deep(.swiper-button-prev:hover) {
  background: rgba(0, 0, 0, 0.6);
}
:deep(.swiper-button-next::after),
:deep(.swiper-button-prev::after) {
  font-size: 18px;
}
:deep(.swiper-pagination-bullet) {
  width: 10px;
  height: 10px;
  background: #7c5b46;
  opacity: 0.3;
  transition: opacity 0.3s;
}
:deep(.swiper-pagination-bullet-active) {
  opacity: 1;
}
</style>
