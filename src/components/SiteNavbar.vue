<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  startScrolled: {
    type: Boolean,
    default: false
  }
})

const isScrolled = ref(props.startScrolled)
const isMenuOpen = ref(false)
const navbarLoaded = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 80
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  document.body.style.overflow = isMenuOpen.value ? 'hidden' : ''
}

const mouseX = ref(50)
const mouseY = ref(50)

const handleMenuMouseMove = (e) => {
  const rect = e.currentTarget.getBoundingClientRect()
  mouseX.value = ((e.clientX - rect.left) / rect.width) * 100
  mouseY.value = ((e.clientY - rect.top) / rect.height) * 100
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  setTimeout(() => { navbarLoaded.value = true }, 100)
})
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<template>
  <!-- Fixed Nav -->
  <nav
    class="fixed top-0 left-0 w-full z-50 transition-all duration-500"
    :class="isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'"
    :style="{
      transition: 'all 0.6s cubic-bezier(0.16,1,0.3,1)',
      transitionDelay: '200ms',
      opacity: navbarLoaded ? 1 : 0,
      transform: navbarLoaded ? 'translateY(0)' : 'translateY(-20px)'
    }"
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
              class="max-w-full max-h-full w-auto h-auto transition-all duration-500"
              :class="isScrolled ? '' : 'brightness-0 invert'"
            />
          </div>
        </router-link>

        <nav class="hidden lg:flex items-center gap-5">
          <router-link to="/servicios"
            class="transition-colors duration-300 font-label text-[10px] tracking-[0.2em] uppercase no-underline"
            :class="isScrolled ? 'text-primary/60 hover:text-primary' : 'text-white/70 hover:text-white'">Penal</router-link>
          <span class="w-px h-3 transition-colors duration-300"
            :class="isScrolled ? 'bg-primary/10' : 'bg-white/20'"></span>
          <router-link to="/servicios/derecho-laboral"
            class="transition-colors duration-300 font-label text-[10px] tracking-[0.2em] uppercase no-underline"
            :class="isScrolled ? 'text-primary/60 hover:text-primary' : 'text-white/70 hover:text-white'">Laboral</router-link>
          <span class="w-px h-3 transition-colors duration-300"
            :class="isScrolled ? 'bg-primary/10' : 'bg-white/20'"></span>
          <router-link to="/servicios/responsabilidad-civil"
            class="transition-colors duration-300 font-label text-[10px] tracking-[0.2em] uppercase no-underline"
            :class="isScrolled ? 'text-primary/60 hover:text-primary' : 'text-white/70 hover:text-white'">Civil</router-link>
          <span class="w-px h-3 transition-colors duration-300"
            :class="isScrolled ? 'bg-primary/10' : 'bg-white/20'"></span>
          <router-link to="/servicios/derecho-tributario"
            class="transition-colors duration-300 font-label text-[10px] tracking-[0.2em] uppercase no-underline"
            :class="isScrolled ? 'text-primary/60 hover:text-primary' : 'text-white/70 hover:text-white'">Tributario</router-link>
          <span class="w-px h-3 transition-colors duration-300"
            :class="isScrolled ? 'bg-primary/10' : 'bg-white/20'"></span>
          <router-link to="/servicios"
            class="transition-colors duration-300 font-label text-[10px] tracking-[0.2em] uppercase no-underline"
            :class="isScrolled ? 'text-primary/60 hover:text-primary' : 'text-white/70 hover:text-white'">Administrativo</router-link>
        </nav>

        <div class="flex items-center gap-3">
          
          <button @click="toggleMenu"
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

  <!-- Menú Full-Screen -->
  <Teleport to="body">
    <Transition name="fullmenu">
      <div v-if="isMenuOpen" @mousemove="handleMenuMouseMove"
        class="fixed inset-0 z-[200] bg-[#1e3032] flex flex-col lg:flex-row overflow-y-auto">

        <div class="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
          :style="{
            background: `radial-gradient(600px circle at ${mouseX}% ${mouseY}%, rgba(47,166,216,0.12), transparent 40%)`
          }">
        </div>

        <button @click="toggleMenu" aria-label="Cerrar menú"
          class="absolute top-6 right-6 sm:top-8 sm:right-10 z-20 flex items-center gap-2 text-white/60 hover:text-white transition-colors duration-300 border-0 bg-transparent cursor-pointer group">
          <span class="text-[10px] tracking-[0.2em] uppercase hidden sm:inline">Cerrar</span>
          <span class="material-symbols-outlined text-2xl group-hover:rotate-90 transition-transform duration-300">close</span>
        </button>

        <div class="flex-1 flex flex-col justify-center px-8 sm:px-16 lg:px-24 py-28 sm:py-32">

          <nav class="flex flex-col">
            <router-link
              v-for="(item, i) in [
                { to: '/', label: 'Inicio', icon: 'home' },
                { to: '/nosotros', label: 'Nosotros', icon: 'groups' },
                { to: '/equipo', label: 'Equipo Jurídico', icon: 'gavel' },
                { to: '/servicios', label: 'Servicios Legales', icon: 'balance' },
                { to: '/publicaciones', label: 'Publicaciones', icon: 'article' },
                { to: '/contacto', label: 'Contacto', icon: 'mail' },
              ]"
              :key="item.to"
              :to="item.to"
              @click="toggleMenu"
              class="menu-item group relative flex items-center py-3 sm:py-4 border-b border-white/[0.06] no-underline overflow-hidden"
              :style="{ animationDelay: (i * 0.06 + 0.1) + 's' }"
            >
              <span class="material-symbols-outlined absolute -left-2 text-7xl sm:text-8xl text-white/0 group-hover:text-white/[0.06] scale-75 group-hover:scale-100 transition-all duration-500 pointer-events-none">
                {{ item.icon }}
              </span>
              <span class="relative text-2xl sm:text-3xl lg:text-4xl font-light text-white/55 group-hover:text-white group-hover:translate-x-3 transition-all duration-300">
                {{ item.label }}
              </span>
              <span class="material-symbols-outlined ml-auto relative text-white/0 group-hover:text-[#aa8d79] -translate-x-3 group-hover:translate-x-0 transition-all duration-300 text-2xl hidden sm:inline">
                arrow_outward
              </span>
            </router-link>
          </nav>

          <div class="menu-footer mt-14 sm:mt-16 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8">
            <div class="flex flex-col gap-1.5">
              <a href="mailto:contacto@erabogados.com" class="text-sm text-white/50 hover:text-white transition-colors no-underline">
                contacto@erabogados.com
              </a>
              <a href="tel:+576000000000" class="text-sm text-white/50 hover:text-white transition-colors no-underline">
                +57 (601) 000 0000
              </a>
            </div>
            <div class="flex items-center gap-5">
              <a href="#" target="_blank" aria-label="LinkedIn" class="text-white/40 hover:text-white transition-colors">
                <svg viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z"/></svg>
              </a>
              <a href="#" target="_blank" aria-label="X" class="text-white/40 hover:text-white transition-colors">
                <svg viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5"><path d="M18.9 2H22l-7.6 8.7L23.3 22h-7l-5.5-7.2L4.5 22H1.4l8.1-9.3L1 2h7.2l5 6.6L18.9 2zm-1.2 18h1.7L7.4 3.9H5.6L17.7 20z"/></svg>
              </a>
              <a href="#" target="_blank" aria-label="Facebook" class="text-white/40 hover:text-white transition-colors">
                <svg viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5"><path d="M22 12a10 10 0 1 0-11.56 9.87v-6.98H7.9V12h2.54V9.8c0-2.5 1.5-3.9 3.78-3.9 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.98A10 10 0 0 0 22 12z"/></svg>
              </a>
              <a href="#" target="_blank" aria-label="YouTube" class="text-white/40 hover:text-white transition-colors">
                <svg viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5"><path d="M23.5 6.5a3 3 0 0 0-2.1-2.1C19.5 4 12 4 12 4s-7.5 0-9.4.4A3 3 0 0 0 .5 6.5 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.5 3 3 0 0 0 2.1 2.1C4.5 20 12 20 12 20s7.5 0 9.4-.4a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.5zM9.6 15.5v-7l6.3 3.5-6.3 3.5z"/></svg>
              </a>
            </div>
          </div>
        </div>

        <div class="hidden lg:flex lg:w-[32%] relative overflow-hidden bg-[#0d1b1c] items-end p-12">
          <div class="blob blob-1"></div>
          <div class="blob blob-2"></div>
          <div class="relative z-10 menu-panel-content">
            <p class="text-[10px] tracking-[0.25em] uppercase text-[#aa8d79] mb-3">Consulta inicial</p>
            <p class="text-xl text-white/80 font-light leading-relaxed mb-6">
              ¿Necesitas asesoría legal? Estamos para acompañarte.
            </p>
            <router-link to="/contacto" @click="toggleMenu"
              class="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-white border border-white/30 rounded-md px-5 py-3 hover:bg-white hover:text-[#1e3032] transition-all duration-300 no-underline">
              Escríbenos
              <span class="material-symbols-outlined text-base">east</span>
            </router-link>
          </div>
        </div>

      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.fullmenu-enter-active {
  transition: clip-path 0.7s cubic-bezier(0.76, 0, 0.24, 1);
}
.fullmenu-leave-active {
  transition: clip-path 0.5s cubic-bezier(0.76, 0, 0.24, 1);
}
.fullmenu-enter-from,
.fullmenu-leave-to {
  clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
}
.fullmenu-enter-to,
.fullmenu-leave-from {
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
}

.fullmenu-enter-active .menu-item {
  animation: menuItemIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) backwards;
}
.fullmenu-enter-active .menu-footer {
  animation: menuItemIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.55s backwards;
}
.fullmenu-enter-active .menu-panel-content {
  animation: menuItemIn 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.4s backwards;
}

@keyframes menuItemIn {
  from {
    opacity: 0;
    transform: translateY(24px);
    filter: blur(6px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0);
  }
}

.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.35;
  pointer-events: none;
}
.blob-1 {
  width: 280px; height: 280px;
  background: #aa8d79;
  top: -60px; right: -60px;
  animation: blobFloat1 9s ease-in-out infinite;
}
.blob-2 {
  width: 220px; height: 220px;
  background: #3a4f51;
  bottom: 40px; left: -60px;
  animation: blobFloat2 11s ease-in-out infinite;
}
@keyframes blobFloat1 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(-30px, 40px) scale(1.15); }
}
@keyframes blobFloat2 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(30px, -30px) scale(1.1); }
}
</style>
