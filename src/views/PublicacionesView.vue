<script setup>
import { ref, computed } from 'vue'
import { publicaciones } from '../data/publicaciones'

const paginaActual = ref(1)
const porPagina = 6
const total = computed(() => publicaciones.length)
const totalPaginas = computed(() => Math.ceil(total.value / porPagina))
const publicacionesPagina = computed(() => {
  const inicio = (paginaActual.value - 1) * porPagina
  return publicaciones.slice(inicio, inicio + porPagina)
})

const irAPagina = (page) => {
  if (page < 1 || page > totalPaginas.value) return
  paginaActual.value = page
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <div class="min-h-screen bg-white selection:bg-secondary/20">
    <!-- Header con Imagen, Gradiente y Altura Optimizada -->
    <header
      class="relative min-h-[40vh] sm:min-h-[50vh] flex items-start pt-28 sm:pt-18 pb-16 sm:pb-20 px-6 sm:px-12 lg:px-24 overflow-hidden bg-primary">
      <!-- Fondo con Imagen y Gradientes -->
      <div class="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070&auto=format&fit=crop"
          alt="Publicaciones y Actualidad" class="w-full h-full object-cover opacity-30 grayscale">
        <!-- Gradiente de profundidad -->
        <div class="absolute inset-0 bg-gradient-to-r from-primary via-primary/85 to-transparent"></div>
        <div class="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent"></div>
      </div>

      <!-- Contenido Superior -->
      <div class="max-w-[1400px] mx-auto w-full relative z-10 mt-0 sm:mt-16">
        <div class="max-w-3xl flex flex-col gap-4 sm:gap-6">
          <p class="font-label text-[9px] sm:text-[10px] tracking-[0.5em] uppercase text-secondary font-bold opacity-0 animate-slide-up"
            :style="{ animationDelay: '200ms', animationFillMode: 'forwards' }">
            Publicaciones y Actualidad</p>
          <h1
            class="font-headline text-3xl sm:text-7xl lg:text-8xl text-white font-light leading-[1.1] tracking-tight opacity-0 animate-slide-up"
            :style="{ animationDelay: '400ms', animationFillMode: 'forwards' }">
            Publicaciones
            <em class="text-secondary italic not-italic font-medium">estratégicas</em>
          </h1>
          <p class="text-sm sm:text-lg text-white/60 font-light max-w-xl leading-relaxed border-l border-secondary/30 pl-6 sm:pl-8 mt-2 opacity-0 animate-slide-up"
            :style="{ animationDelay: '600ms', animationFillMode: 'forwards' }">
            Análisis profundo y actualizaciones sobre el panorama legal contemporáneo, diseñados para mantener a su
            organización a la vanguardia.
          </p>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 animate-bounce hidden sm:block">
        <div class="flex flex-col items-center gap-2">
          <span class="text-white/20 text-[10px] tracking-[0.3em] uppercase font-label">Scroll</span>
          <span class="material-symbols-outlined text-white/20 text-2xl font-light">expand_more</span>
        </div>
      </div>
    </header>

    <!-- Grid de Publicaciones — Editorial -->
    <section class="py-24 px-8 lg:px-24">
      <div class="max-w-[1400px] mx-auto">

        <!-- Encabezado de sección -->
        <div class="flex items-baseline justify-between mb-12 pb-4 border-b border-primary/10">
          <span class="text-[10px] font-label font-bold tracking-[0.35em] uppercase text-primary">Publicaciones</span>
          <span class="text-[10px] font-label tracking-[0.2em] uppercase text-primary font-bold">
            {{ total.toString().padStart(2, '0') }} artículos
          </span>
        </div>

        <!-- Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y divide-primary/10 md:divide-y-0">
          <article v-for="(publicacion, index) in publicacionesPagina" :key="publicacion.slug"
            class="group p-8 border-primary/10 hover:bg-primary/[0.02] transition-colors duration-300" :class="{
              'lg:border-r': index % 2 === 0,
              'lg:border-b': index < publicaciones.length - 2,
              'border-b': index < publicaciones.length - 1
            }">
            <router-link :to="`/publicaciones/${publicacion.slug}`" class="no-underline block">

              <!-- Imagen con índice -->
              <div class="relative mb-6 overflow-hidden">
                <div class="aspect-[16/9] overflow-hidden">
                  <img :src="publicacion.image" :alt="publicacion.title"
                    class="w-full h-full object-cover transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04] group-hover:contrast-105">
                </div>
                <!-- Número de índice -->
                <div class="absolute top-0 left-0 w-7 h-7 bg-secondary flex items-center justify-center rounded-br-md">
                  <span class="text-[9px] font-label tracking-[0.2em] text-white font-medium">
                    {{ (index + 1).toString().padStart(2, '0') }}
                  </span>
                </div>
              </div>

              <!-- Metadata -->
              <div class="flex items-center gap-0 mb-4">
                <span class="text-[9px] font-label uppercase tracking-[0.35em] text-primary font-medium">{{
                  publicacion.category }}</span>
                <div class="w-[3px] h-[3px] rounded-full bg-primary/20 mx-2.5 flex-shrink-0"></div>
                <span class="text-[9px] font-label uppercase tracking-[0.2em] text-primary/35">{{ publicacion.date }}</span>
              </div>

              <!-- Título -->
              <h3
                class="font-headline text-xl leading-snug text-primary font-medium mb-3 tracking-[-0.01em] transition-colors duration-300 group-hover:text-primary/50">
                {{ publicacion.title }}
              </h3>

              <!-- Extracto -->
              <p class="text-[13px] text-primary/45 font-light leading-relaxed line-clamp-2 mb-5">
                {{ publicacion.excerpt }}
              </p>

              <!-- CTA con línea animada -->
              <div class="flex items-center gap-2">
                <div
                  class="h-px bg-primary w-5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-9">
                </div>
                <span class="text-[9px] font-label font-medium tracking-[0.3em] uppercase text-primary">Leer
                  artículo</span>
              </div>

            </router-link>
          </article>
        </div>

      </div>

      <!-- Paginación -->
      <div v-if="totalPaginas > 1" class="flex justify-center items-center gap-2 mt-16 pt-8 border-t border-primary/10">
        <button @click="irAPagina(paginaActual - 1)" :disabled="paginaActual === 1"
          class="w-10 h-10 flex items-center justify-center text-primary disabled:opacity-20 hover:text-secondary transition-colors">
          <span class="material-symbols-outlined text-sm">chevron_left</span>
        </button>

        <button v-for="page in totalPaginas" :key="page" @click="irAPagina(page)"
          class="w-10 h-10 font-label text-[10px] font-bold tracking-widest uppercase transition-all" :class="page === paginaActual
            ? 'text-secondary border-b border-secondary'
            : 'text-primary/40 hover:text-primary'">
          {{ page.toString().padStart(2, '0') }}
        </button>

        <button @click="irAPagina(paginaActual + 1)" :disabled="paginaActual === totalPaginas"
          class="w-10 h-10 flex items-center justify-center text-primary disabled:opacity-20 hover:text-secondary transition-colors">
          <span class="material-symbols-outlined text-sm">chevron_right</span>
        </button>
      </div>
    </section>

    <!-- Newsletter Minimalista -->
    <section class="py-32 px-8 lg:px-24 bg-[#FAFAFA]">
      <div class="max-w-2xl mx-auto text-center">
        <h2 class="font-headline text-2xl text-primary font-bold mb-10">Reciba nuestro análisis legal directamente en su
          correo.</h2>
        <div class="flex flex-col sm:flex-row gap-0 border-b border-primary/10">
          <input type="email" placeholder="Correo electrónico"
            class="flex-1 bg-transparent py-4 font-label text-sm outline-none">
          <button
            class="py-4 px-8 text-[10px] font-label font-bold tracking-[0.3em] uppercase text-primary hover:text-secondary transition-colors">
            Suscribirse
          </button>
        </div>
      </div>
    </section>
  </div>
</template>
