<script setup>
import socios from '../data/socios'
import { useRoute, useRouter } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()
const router = useRouter()
const partner = computed(() => socios.find(s => s.slug === route.params.slug))

if (!partner.value && route.params.slug) {
  router.push('/404')
}
</script>


<template>
  <div v-if="partner" class="pt-32 pb-24 px-6 sm:px-12 lg:px-24 min-h-screen">
    <div class="max-w-[1400px] mx-auto">
      <div class="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

        <!-- Columna de imagen y datos de contacto -->
        <div class="w-full lg:w-1/3 space-y-8">
          <div
            class="aspect-[3/4] bg-surface-container-low border border-primary/5 shadow-2xl overflow-hidden transition-all duration-700">
            <img :src="partner.image" :alt="partner.nombre"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 hover:scale-110">
          </div>

          <div class="flex flex-col gap-4">
            <h3 class="font-headline text-2xl text-primary mb-2 font-bold">Contacto Directo</h3>
            <a :href="`mailto:${partner.email}`"
              class="flex items-center gap-4 text-primary hover:text-secondary transition-colors group no-underline">
              <span
                class="material-symbols-outlined text-secondary group-hover:scale-110 transition-transform">mail</span>
              <span class="font-label text-sm tracking-widest uppercase font-semibold">Enviar Correo</span>
            </a>
            <a :href="partner.whatsapp" target="_blank"
              class="flex items-center gap-4 text-primary hover:text-[#25D366] transition-colors group no-underline">
              <svg class="w-5 h-5 fill-secondary group-hover:fill-[#25D366] transition-all group-hover:scale-110"
                viewBox="0 0 24 24">
                <path
                  d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span class="font-label text-sm tracking-widest uppercase font-semibold">WhatsApp Directo</span>
            </a>
            <a :href="partner.linkedin" target="_blank"
              class="flex items-center gap-4 text-primary hover:text-[#0077b5] transition-colors group no-underline">
              <svg class="w-5 h-5 fill-secondary group-hover:fill-[#0077b5] transition-all group-hover:scale-110"
                viewBox="0 0 24 24">
                <path
                  d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              <span class="font-label text-sm tracking-widest uppercase font-semibold">LinkedIn Perfil</span>
            </a>
          </div>
        </div>

        <!-- Columna de perfil y biografía -->
        <div class="w-full lg:w-2/3">
          <p
            class="font-label text-[11px] tracking-[0.35em] uppercase text-secondary font-bold flex items-center gap-4 mb-4">
            <span class="inline-block w-10 h-px bg-secondary"></span>
            Perfil Profesional
          </p>
          <h1 class="font-headline text-3xl sm:text-7xl lg:text-8xl text-primary leading-tight font-bold mb-4">
            {{ partner.nombre }}
          </h1>
          <p class="font-label text-sm tracking-[0.2em] text-primary/40 font-bold mb-12">{{ partner.roleLabel }}
          </p>

          <div class="prose prose-lg max-w-none text-primary/70 mb-16 font-light leading-relaxed">
            <p>{{ partner.description }}</p>
            <p>Con un enfoque centrado en la excelencia técnica y la visión estratégica, lidera la asesoría integral a
              clientes nacionales e internacionales, garantizando la protección de sus intereses y el cumplimiento de
              sus objetivos corporativos.</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-12 pt-0 border-t border-primary/5">
            <div>
              <h3 class="font-headline text-lg text-primary mb-6 font-bold">Especialidades</h3>
              <ul class="space-y-4 list-none p-0">
                <li v-for="spec in partner.specialties" :key="spec"
                  class="flex items-center gap-3 text-sm font-label uppercase tracking-widest text-primary/60">
                  <span class="w-1.5 h-1.5 bg-secondary rotate-45"></span>
                  {{ spec }}
                </li>
              </ul>
            </div>
            <div>
              <h3 class="font-headline text-lg text-primary mb-6 font-bold">Educación</h3>
              <ul class="space-y-4 list-none p-0">
                <li v-for="edu in partner.education" :key="edu"
                  class="flex items-center gap-3 text-sm font-label uppercase tracking-widest text-primary/60">
                  <span class="w-1.5 h-1.5 bg-secondary rotate-45"></span>
                  {{ edu }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
