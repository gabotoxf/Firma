<script setup>
import { ref, onMounted } from 'vue';
import { socios } from '../data/socios.js';

const partners = ref([]);

onMounted(() => {
  partners.value = socios.slice(0, 3);
});
</script>

<template>
  <section id="partners" class="py-24 px-12 bg-surface">
    <div class="container mx-auto">
      <div class="flex flex-col gap-4 mb-16 text-center">
        <p class="font-label text-[11px] tracking-[0.35em] uppercase text-secondary font-bold flex items-center justify-center gap-4">
          <span class="inline-block w-10 h-px bg-secondary"></span>
          Liderazgo legal
        </p>
        <h2 class="font-headline text-4xl lg:text-5xl text-primary leading-tight font-bold">
          Los socios <em class="text-secondary italic not-italic">de la firma</em>
        </h2>
        <p class="text-primary/60 font-light leading-relaxed text-lg max-w-2xl mx-auto">
          Visión estratégica y respaldo jurídico liderado por profesionales con trayectoria excepcional.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <div v-for="partner in partners" :key="partner.slug" class="flex flex-col md:flex-row gap-8 bg-white p-8 border border-primary/5 shadow-2xl shadow-primary/5 transition-all duration-700 hover:-translate-y-2 group h-full">
          <div class="w-full md:w-1/2 aspect-[3/4] overflow-hidden transition-all duration-700">
            <img :src="partner.image" :alt="partner.nombre" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
          </div>
          <div class="w-full md:w-1/2 flex flex-col gap-4">
            <h3 class="font-headline text-2xl text-primary font-bold">{{ partner.nombre }}</h3>
            <p class="font-label text-[10px] tracking-widest uppercase text-secondary font-bold">{{ partner.roleLabel }}</p>
            <p class="text-primary/60 text-sm leading-relaxed font-light mt-2 mb-6 line-clamp-5">
              {{ partner.description }}
            </p>
            
            <div class="mt-auto flex flex-col gap-3">
              <router-link :to="`/equipo/${partner.slug}`" class="font-label text-[10px] font-bold tracking-[0.2em] uppercase text-primary hover:text-secondary transition-colors no-underline flex items-center gap-2">
                Ver perfil completo
                <span class="material-symbols-outlined text-sm">arrow_forward</span>
              </router-link>
              <div class="flex items-center gap-4 mt-4 pt-4 border-t border-primary/5">
                <a :href="partner.linkedin" target="_blank" class="flex items-center gap-2 text-primary hover:text-[#0077b5] transition-colors group/li no-underline">
                  <svg class="w-4 h-4 fill-current transition-transform group-hover/li:scale-110" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  <span class="font-label text-[9px] font-bold tracking-widest uppercase">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
