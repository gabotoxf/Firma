<script setup>
import { useReveal } from '../composables/useReveal'

const { el, isVisible } = useReveal({ threshold: 0.15 })
</script>

<template>
    <section ref="el" class="relative bg-primary overflow-hidden">
        <div class="lg:grid lg:grid-cols-12">
            <div class="lg:col-span-6 relative min-h-[50vh] lg:min-h-[750px] overflow-hidden">
                <div class="absolute inset-0 lg:mr-16">
                    <img src="/img/nosotros/noso.jpg" alt="ER Abogados"
                        class="w-full h-full object-cover"
                        :class="isVisible ? 'scale-100 opacity-100' : 'scale-110 opacity-0'"
                        style="transition: all 1.2s cubic-bezier(0.16,1,0.3,1)">
                </div>
            </div>

            <div class="lg:col-span-6 flex flex-col justify-center px-6 sm:px-12 lg:px-0 lg:pr-24 xl:pr-32 py-20 lg:py-0">
                <div class="max-w-md">
                    <div class="flex items-center gap-4 mb-6"
                        :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
                        style="transition: all 0.7s cubic-bezier(0.16,1,0.3,1) 0.1s;">
                        <span class="w-8 h-px bg-secondary/40"></span>
                        <span class="font-label text-[8px] sm:text-[9px] tracking-[0.4em] uppercase text-secondary font-medium">Trayectoria</span>
                    </div>

                    <h2 class="font-headline text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-white/80 font-light leading-[1.2] mb-6"
                        :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
                        style="transition: all 0.7s cubic-bezier(0.16,1,0.3,1) 0.2s;">
                        Experiencia de primer nivel <span class="text-secondary font-light">en los sectores que impulsan el país</span>
                    </h2>

                    <p class="text-white/35 font-light leading-relaxed text-sm mb-8 max-w-sm"
                        :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
                        style="transition: all 0.7s cubic-bezier(0.16,1,0.3,1) 0.3s;">
                        Más de 25 años asesorando empresas y personas en los sectores minero, inmobiliario, hotelero, salud, seguros y energía. Litigios administrativos, estructuraciones corporativas y arbitrajes internacionales.
                    </p>

                    <div
                        :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
                        style="transition: all 0.7s cubic-bezier(0.16,1,0.3,1) 0.4s;">
                        <router-link to="/nosotros"
                            class="group inline-flex items-center gap-3 font-label text-[8px] sm:text-[9px] font-medium tracking-[0.25em] uppercase text-secondary/70 hover:text-secondary transition-colors duration-300 no-underline">
                            <span>Conoce nuestra trayectoria</span>
                            <span class="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
</style>
