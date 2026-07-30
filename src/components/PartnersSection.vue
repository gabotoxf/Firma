<script setup>
import { ref, onMounted } from 'vue';
import { socios } from '../data/socios.js';
import { useReveal } from '../composables/useReveal'

const partners = ref([]);
const { el, isVisible } = useReveal({ threshold: 0.1 })

onMounted(() => {
    partners.value = socios.slice(0, 3);
});
</script>

<template>
    <section ref="el" class="relative bg-white py-24 lg:py-32 px-6 overflow-hidden">
        <div class="container mx-auto max-w-[1400px]">
            <div class="text-center mb-16 lg:mb-20"
                :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
                style="transition: all 0.7s cubic-bezier(0.16,1,0.3,1) 0.1s;">
                <p class="font-label text-[9px] sm:text-[10px] tracking-[0.4em] uppercase text-secondary font-bold mb-6 flex items-center justify-center gap-4">
                    <span class="inline-block w-8 h-px bg-secondary"></span>
                    Liderazgo legal
                    <span class="inline-block w-8 h-px bg-secondary"></span>
                </p>
                <h2 class="font-headline text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-primary leading-tight">
                    Los socios <span class="text-secondary">de la firma</span>
                </h2>
                <p class="text-dark/40 font-light text-base sm:text-lg max-w-2xl mx-auto mt-6">
                    Visión estratégica y respaldo jurídico liderado por profesionales con trayectoria excepcional.
                </p>
            </div>

            <div class="grid md:grid-cols-3 gap-6 lg:gap-8">
                <div v-for="(partner, i) in partners" :key="partner.slug"
                    class="group relative bg-white overflow-hidden border border-primary/5 hover:border-primary/10 transition-all duration-500"
                    :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
                    :style="{ transition: `all 0.7s cubic-bezier(0.16,1,0.3,1) ${0.2 + i * 0.1}s` }">

                    <div class="relative overflow-hidden h-[380px] lg:h-[420px]">
                        <img :src="partner.image" :alt="partner.nombre"
                            class="w-full h-full object-cover transition-all duration-[1s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105">
                        <div class="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        <div class="absolute inset-0 flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                            <p class="font-label text-[9px] tracking-[0.3em] uppercase text-secondary font-bold mb-2">{{ partner.roleLabel }}</p>
                            <p class="text-white/80 text-sm font-light leading-relaxed line-clamp-3">{{ partner.shortBio }}</p>
                        </div>
                    </div>

                    <div class="p-6 lg:p-8">
                        <h3 class="font-headline text-xl lg:text-2xl text-primary font-bold leading-tight mb-2">{{ partner.nombre }}</h3>
                        <p class="text-dark/40 text-sm font-light mb-6">{{ partner.specialty }}</p>

                        <router-link :to="`/equipo/${partner.slug}`"
                            class="group/link inline-flex items-center gap-3 font-label text-[9px] font-bold tracking-[0.2em] uppercase text-primary hover:text-secondary transition-colors no-underline">
                            <span>Ver perfil</span>
                            <span class="material-symbols-outlined text-base group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
</style>
