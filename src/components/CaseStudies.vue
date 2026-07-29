<script setup>
import { ref, onMounted } from 'vue';
import { fetchCases } from '../data/casos';
import { useReveal } from '../composables/useReveal'

const cases = ref([]);
const { el, isVisible } = useReveal({ threshold: 0.1 })

onMounted(async () => {
    const allCases = await fetchCases();
    // Mostramos solo los primeros 2 casos en el resumen del home
    cases.value = allCases.slice(0, 2);

    cases.value = allCases;
});
</script>

<template>
    <section ref="el" class="relative bg-primary py-24 lg:py-32 overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/20 pointer-events-none"></div>

        <div class="relative z-10 px-6 sm:px-12 lg:px-24">
            <div class="max-w-[1920px] mx-auto">
                <div class="mb-16 lg:mb-20 max-w-3xl"
                    :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
                    style="transition: all 0.7s cubic-bezier(0.16,1,0.3,1) 0.1s;">
                    <p class="font-label text-[9px] sm:text-[10px] tracking-[0.4em] uppercase text-secondary font-bold mb-6 flex items-center gap-4">
                        <span class="inline-block w-10 h-px bg-secondary"></span>
                        Nuestra experiencia
                    </p>
                    <h2 class="font-headline text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white leading-tight">
                        Casos de éxito que <br>
                        <span class="text-secondary">respaldan</span> nuestra firma
                    </h2>
                    <p class="text-white/50 font-light text-base sm:text-lg max-w-2xl mt-6 leading-relaxed">
                        La verdadera medida de nuestra capacidad son los resultados que obtenemos para nuestros clientes en los desafíos más complejos.
                    </p>
                </div>

                <div class="grid lg:grid-cols-2 gap-6 lg:gap-8">
                    <div v-for="(item, i) in cases" :key="i"
                        class="group relative overflow-hidden min-h-[500px] lg:min-h-[580px]"
                        :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
                        :style="{ transition: `all 0.7s cubic-bezier(0.16,1,0.3,1) ${0.2 + i * 0.1}s` }">

                        <img :src="item.image" :alt="item.title"
                            class="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105">

                        <div class="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-primary/10"></div>

                        <div class="absolute inset-0 flex flex-col justify-end p-8 lg:p-12">
                            <span class="font-label text-[8px] sm:text-[9px] tracking-[0.3em] uppercase text-secondary font-bold mb-4 inline-block"
                                :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
                                :style="{ transition: `all 0.6s cubic-bezier(0.16,1,0.3,1) ${0.3 + i * 0.15}s` }">
                                {{ item.category }}
                            </span>

                            <h3 class="font-headline text-2xl sm:text-3xl lg:text-4xl text-white font-bold leading-tight mb-4 max-w-xl"
                                :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
                                :style="{ transition: `all 0.6s cubic-bezier(0.16,1,0.3,1) ${0.4 + i * 0.15}s` }">
                                {{ item.title }}
                            </h3>

                            <p class="text-white/60 text-sm sm:text-base font-light leading-relaxed max-w-lg mb-6 line-clamp-2"
                                :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
                                :style="{ transition: `all 0.6s cubic-bezier(0.16,1,0.3,1) ${0.5 + i * 0.15}s` }">
                                {{ item.challenge }}
                            </p>

                            <div class="border-l-2 border-secondary pl-5 py-1"
                                :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
                                :style="{ transition: `all 0.6s cubic-bezier(0.16,1,0.3,1) ${0.6 + i * 0.15}s` }">
                                <p class="font-label text-[8px] sm:text-[9px] tracking-[0.25em] uppercase text-secondary font-bold mb-1">Resultado</p>
                                <p class="text-white/80 text-sm sm:text-base font-light leading-relaxed">{{ item.result }}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="mt-16 lg:mt-20 text-center"
                    :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
                    style="transition: all 0.7s cubic-bezier(0.16,1,0.3,1) 0.6s;">
                    <router-link to="/casos-de-exito"
                        class="group inline-flex items-center gap-5 font-label text-[9px] sm:text-[10px] font-bold tracking-[0.25em] uppercase text-secondary hover:text-white transition-colors duration-300 no-underline border border-secondary/30 px-10 py-4 hover:border-white/30">
                        <span>Ver todos los casos de éxito</span>
                        <span class="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </router-link>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
</style>
