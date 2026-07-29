<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isMenuOpen = ref(false)

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

const handleScroll = () => {
  isScrolled.value = window.scrollY > 80
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  document.body.style.overflow = isMenuOpen.value ? 'hidden' : ''
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<template>
  <!-- Fixed Nav -->
  <nav
    class="fixed top-0 left-0 w-full z-50 transition-all duration-500"
    :class="isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'"
  >
    <div
      class="px-6 sm:px-12 lg:px-24 transition-all duration-500"
      :class="isScrolled ? 'py-3' : 'py-5 lg:py-6'"
    >
      <div class="max-w-[1920px] mx-auto flex items-center justify-between">
        <router-link to="/" class="block shrink-0">
          <div
            class="overflow-hidden relative px-4 flex items-center justify-center transition-all duration-500"
            :class="[
              isScrolled ? 'bg-primary' : 'bg-white/10 backdrop-blur-sm',
              'w-[110px] sm:w-[140px] md:w-[180px]',
              'h-[40px] sm:h-[44px] md:h-[56px]'
            ]"
          >
            <img
              src="/img/logos/logoprin.png"
              alt="ER Abogados"
              class="w-full h-auto object-contain transition-all duration-500"
              :class="isScrolled ? '' : 'brightness-0 invert'"
            />
          </div>
        </router-link>

        <nav class="hidden lg:flex items-center gap-5">
          <a href="#"
            class="transition-colors duration-300 font-label text-[10px] tracking-[0.2em] uppercase no-underline"
            :class="isScrolled ? 'text-primary/60 hover:text-primary' : 'text-white/70 hover:text-white'">Chile</a>
          <span class="w-px h-3 transition-colors duration-300"
            :class="isScrolled ? 'bg-primary/10' : 'bg-white/20'"></span>
          <a href="#"
            class="transition-colors duration-300 font-label text-[10px] tracking-[0.2em] uppercase no-underline"
            :class="isScrolled ? 'text-primary/60 hover:text-primary' : 'text-white/70 hover:text-white'">Colombia</a>
          <span class="w-px h-3 transition-colors duration-300"
            :class="isScrolled ? 'bg-primary/10' : 'bg-white/20'"></span>
          <a href="#"
            class="transition-colors duration-300 font-label text-[10px] tracking-[0.2em] uppercase no-underline"
            :class="isScrolled ? 'text-primary/60 hover:text-primary' : 'text-white/70 hover:text-white'">Perú</a>
        </nav>

        <div class="flex items-center gap-3">
          <button
            class="hidden lg:flex items-center gap-2 rounded-full px-5 py-2.5 transition-all duration-300 cursor-pointer border-0 shadow-lg"
            :class="isScrolled
              ? 'bg-primary text-white hover:bg-primary/90 shadow-black/20'
              : 'bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 shadow-black/20'"
          >
            <span class="material-symbols-outlined text-lg">search</span>
            <span class="material-symbols-outlined text-lg">menu</span>
          </button>

          <button @click="toggleMenu" aria-label="Menú"
            class="lg:hidden flex flex-col gap-1.5 p-2 cursor-pointer border-0 bg-transparent relative z-[60]">
            <span class="w-6 h-0.5 transition-all duration-300 origin-center"
              :class="[isScrolled ? 'bg-primary' : 'bg-white', { 'rotate-45 translate-y-2': isMenuOpen }]"></span>
            <span class="w-4 h-0.5 transition-all duration-300 ml-auto"
              :class="[isScrolled ? 'bg-primary' : 'bg-white', { 'opacity-0': isMenuOpen }]"></span>
            <span class="w-6 h-0.5 transition-all duration-300 origin-center"
              :class="[isScrolled ? 'bg-primary' : 'bg-white', { '-rotate-45 -translate-y-2': isMenuOpen }]"></span>
          </button>
        </div>
      </div>
    </div>
  </nav>

  <section class="relative w-full h-[600px] md:h-[650px] lg:h-screen overflow-hidden bg-primary">
    <video autoplay muted loop playsinline :poster="posterSrc" class="absolute inset-0 w-full h-full object-cover">
      <source :src="videoSrc" :type="videoType" />
    </video>

    <div class="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>

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

  <!-- Mobile Drawer -->
  <Transition name="drawer">
    <div v-if="isMenuOpen" class="fixed inset-0 z-[60] lg:hidden">
      <div class="absolute inset-0 bg-black/40 backdrop-blur-sm" @click="toggleMenu"></div>
      <div class="drawer-inner absolute top-0 right-0 w-full sm:w-[85%] max-w-[380px] h-full bg-white flex flex-col overflow-y-auto">
        <div class="flex items-center justify-between px-6 pt-6 pb-5 border-b border-primary/5 shrink-0">
          <div class="w-[140px] h-[44px] overflow-hidden relative">
            <img src="/img/logos/logoprin.png" alt="ER Abogados" class="w-full h-auto object-contain" />
          </div>
          <button @click="toggleMenu" class="p-2 -mr-2 cursor-pointer border-0 bg-transparent">
            <span class="material-symbols-outlined text-[22px] text-primary/30">close</span>
          </button>
        </div>

        <nav class="flex-1 px-4 py-6">
          <div class="flex flex-col gap-1">
            <a href="#" @click="toggleMenu"
              class="block font-label text-sm font-bold tracking-[0.1em] uppercase text-primary/40 hover:text-primary transition-colors no-underline px-4 py-3">
              Chile
            </a>
            <a href="#" @click="toggleMenu"
              class="block font-label text-sm font-bold tracking-[0.1em] uppercase text-primary/40 hover:text-primary transition-colors no-underline px-4 py-3">
              Colombia
            </a>
            <a href="#" @click="toggleMenu"
              class="block font-label text-sm font-bold tracking-[0.1em] uppercase text-primary/40 hover:text-primary transition-colors no-underline px-4 py-3">
              Perú
            </a>
          </div>
        </nav>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.drawer-enter-active,
.drawer-leave-active {
  transition: opacity 0.3s ease;
}

.drawer-enter-from,
.drawer-leave-to {
  opacity: 0;
}

.drawer-enter-active .drawer-inner,
.drawer-leave-active .drawer-inner {
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.drawer-enter-from .drawer-inner,
.drawer-leave-to .drawer-inner {
  transform: translateX(100%);
}
</style>
