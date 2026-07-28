<script setup>
import { useRoute, useRouter } from 'vue-router'
import { computed, watch } from 'vue'
import services from '../data/services'

const route = useRoute()
const service = computed(() => services.find(s => s.slug === route.params.slug))
</script>

<template>
  <div v-if="service" class="min-h-screen bg-white">
    <!-- Header Refinado (Similar a las otras vistas) -->
    <header class="relative min-h-[40vh] sm:min-h-[50vh] flex items-start pt-28 sm:pt-18 pb-16 sm:pb-20 px-6 sm:px-12 lg:px-24 overflow-hidden bg-primary">
        <div class="absolute inset-0 opacity-20">
            <img 
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop" 
                alt="Background" 
                class="w-full h-full object-cover"
            >
            <div class="absolute inset-0 bg-gradient-to-b from-primary via-transparent to-primary"></div>
        </div>

        <div class="max-w-[1400px] mx-auto w-full relative z-10 mt-0 sm:mt-16">
            <div class="max-w-3xl flex flex-col gap-4 sm:gap-6">
                <p class="font-label text-[9px] sm:text-[10px] tracking-[0.5em] uppercase text-secondary font-bold animate-fade-in">Detalle de Servicio</p>
                <h1 class="font-headline text-3xl sm:text-7xl lg:text-8xl text-white font-light leading-[1.1] tracking-tight">
                    {{ service.title.split(' ')[0] }}
                    <em class="text-secondary italic not-italic font-medium">{{ service.title.split(' ').slice(1).join(' ') }}</em>
                </h1>
                <p class="text-sm sm:text-lg text-white/60 font-light max-w-xl leading-relaxed border-l border-secondary/30 pl-6 sm:pl-8 mt-2">
                    {{ service.description }}
                </p>
            </div>
        </div>
    </header>

    <div class="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-24 py-24">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div class="lg:col-span-2 space-y-12">
          <div class="prose prose-lg max-w-none text-primary/70 font-light leading-relaxed">
            <p class="text-xl text-primary font-medium mb-8">{{ service.fullDescription }}</p>
            
            <h3 class="font-headline text-3xl text-primary font-bold mb-6">Beneficios Estratégicos</h3>
            <ul class="space-y-4">
              <li v-for="benefit in service.benefits" :key="benefit" class="flex items-start gap-4">
                <span class="material-symbols-outlined text-secondary mt-1">check_circle</span>
                <span>{{ benefit }}</span>
              </li>
            </ul>
          </div>

          <div class="pt-12 border-t border-primary/5">
            <h4 class="font-label text-[11px] tracking-[0.3em] uppercase text-primary/30 font-bold mb-8">Áreas de Especialidad</h4>
            <div class="flex flex-wrap gap-3">
              <span v-for="feature in service.features" :key="feature" class="px-6 py-3 bg-primary/5 text-primary text-[10px] font-label font-bold tracking-widest uppercase rounded-sm">
                {{ feature }}
              </span>
            </div>
          </div>
        </div>
        
        <aside class="space-y-8">
          <div class="bg-primary p-10 text-white shadow-2xl relative overflow-hidden group">
            <div class="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full -mr-16 -mt-16 transition-transform duration-700 group-hover:scale-150"></div>
            <div class="relative z-10">
              <h3 class="font-headline text-2xl mb-6">¿Requiere una solución a medida?</h3>
              <p class="text-white/60 font-light mb-10 leading-relaxed">
                Nuestros socios expertos están disponibles para analizar los desafíos específicos de su organización.
              </p>
              <router-link to="/contacto" class="block w-full bg-secondary text-white text-center font-label text-[11px] font-bold tracking-[0.2em] uppercase py-5 hover:bg-white hover:text-primary transition-all duration-500 no-underline">
                Agendar Consulta
              </router-link>
            </div>
          </div>

          <div class="p-8 border border-primary/5">
            <h4 class="font-headline text-xl text-primary font-bold mb-6">Otros Servicios</h4>
            <div class="space-y-4">
              <router-link 
                v-for="other in services.filter(s => s.slug !== service.slug).slice(0, 3)" 
                :key="other.slug" 
                :to="`/servicios/${other.slug}`"
                class="flex items-center justify-between group no-underline py-2 border-b border-transparent hover:border-secondary/20 transition-all"
              >
                <span class="text-sm text-primary/60 group-hover:text-primary transition-colors">{{ other.title }}</span>
                <span class="material-symbols-outlined text-sm text-primary/20 group-hover:text-secondary group-hover:translate-x-1 transition-all">east</span>
              </router-link>
            </div>
          </div>
        </aside>
      </div>
    </div>
  </div>
</template>
