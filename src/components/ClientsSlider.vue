<script setup>
import { useReveal } from '../composables/useReveal'

const brands = [
    { name: 'Veolia', domain: '/img/confiado/veolia.png' },
    { name: 'Grupo Cometa', domain: '/img/confiado/grupo-cometa.png' },
    { name: 'Habita Grupo Inmobiliario', domain: '/img/confiado/habita-grupo-inmobiliario.png' },
    { name: 'Estrella Grupo Empresarial', domain: '/img/confiado/estrella-grupo-empresarial.png' },
    { name: 'Bonanza Construcciones', domain: '/img/confiado/bonanza-construcciones.png' },
    { name: 'CEA Moderna', domain: '/img/confiado/cea-moderna.png' },
    { name: 'Expreso La Sabana', domain: '/img/confiado/expreso-la-sabana.png' },
    { name: 'Concretos Industriales', domain: '/img/confiado/concretos-industriales.png' },
]

const { el, isVisible } = useReveal({ threshold: 0.1 })
</script>

<template>
    <section ref="el" class="relative bg-white overflow-hidden">
        <div class="py-20 lg:py-24 px-6 sm:px-12 lg:px-24">
            <div class="max-w-[1920px] mx-auto">
                <div class="mb-14 lg:mb-16"
                    :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
                    style="transition: all 0.7s cubic-bezier(0.16,1,0.3,1) 0.1s;">
                    <p class="font-label text-[9px] sm:text-[10px] tracking-[0.4em] uppercase text-secondary font-bold flex items-center gap-4 justify-center">
                        <span class="inline-block w-8 h-px bg-secondary"></span>
                        Clientes que confían en nuestra excelencia
                        <span class="inline-block w-8 h-px bg-secondary"></span>
                    </p>
                </div>

                <div class="relative overflow-hidden"
                    :class="isVisible ? 'opacity-100' : 'opacity-0'"
                    style="transition: opacity 0.8s cubic-bezier(0.16,1,0.3,1) 0.3s;">
                    <div class="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none bg-gradient-to-r from-white via-white/80 to-transparent"></div>
                    <div class="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none bg-gradient-to-l from-white via-white/80 to-transparent"></div>

                    <div class="flex items-center w-max animate-marquee gap-20 lg:gap-24">
                        <template v-for="copy in 2" :key="copy">
                            <div v-for="brand in brands"
                                :key="`${copy}-${brand.name}`"
                                class="flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-700 cursor-default shrink-0">
                                <img :src="brand.domain" :alt="brand.name"
                                    class="h-20 md:h-24 w-auto object-contain max-w-[260px]"
                                    decoding="async"
                                    loading="lazy">
                            </div>
                        </template>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
@keyframes marquee {
    from { transform: translateX(0); }
    to { transform: translateX(-50%); }
}

.animate-marquee {
    animation: marquee 30s linear infinite;
}

.animate-marquee:hover {
    animation-play-state: paused;
}
</style>
