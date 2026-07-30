<script setup>
import { useReveal } from '../composables/useReveal'

const { el, isVisible } = useReveal({ threshold: 0.15 })
</script>

<template>
    <section ref="el" class="relative bg-primary overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/10 pointer-events-none"></div>

        <div class="relative z-10 lg:grid lg:grid-cols-12">
            <div class="lg:col-span-6 relative min-h-[50vh] lg:min-h-[750px] overflow-hidden">
                <div class="absolute inset-0 lg:mr-16">
                    <img src="/img/nosotros/noso.jpg" alt="ER Abogados"
                        class="w-full h-full object-cover"
                        :class="isVisible ? 'scale-100 opacity-100' : 'scale-110 opacity-0'"
                        style="transition: all 1.2s cubic-bezier(0.16,1,0.3,1)">
                    <div class="absolute inset-0 bg-gradient-to-r from-primary/40 via-primary/10 to-transparent"></div>
                </div>

            </div>

            <div class="lg:col-span-6 flex flex-col justify-center px-6 sm:px-12 lg:px-0 lg:pr-24 xl:pr-32 py-20 lg:py-0">
                <div class="max-w-lg">
                    <div class="flex items-center gap-4 mb-8"
                        :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
                        style="transition: all 0.7s cubic-bezier(0.16,1,0.3,1) 0.1s;">
                        <span class="w-10 h-px bg-secondary/40"></span>
                        <span class="font-label text-[9px] sm:text-[10px] tracking-[0.4em] uppercase text-secondary font-bold">Trayectoria</span>
                    </div>

                    <h2 class="font-headline text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white/90 font-light leading-[1.2] mb-8"
                        :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
                        style="transition: all 0.7s cubic-bezier(0.16,1,0.3,1) 0.2s;">
                        Experiencia de primer nivel <span class="text-secondary font-normal">en los sectores que impulsan el país</span>
                    </h2>

                    <div class="space-y-4 text-white/40 font-light leading-relaxed text-sm sm:text-base mb-10 max-w-md"
                        :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
                        style="transition: all 0.7s cubic-bezier(0.16,1,0.3,1) 0.3s;">
                        <p>
                            En ER Abogados acumulamos más de 25 años asesorando a empresas y personas en los sectores minero, inmobiliario, hotelero, salud, seguros y energía. Nuestra experiencia abarca desde litigios administrativos de alta complejidad hasta estructuraciones corporativas y defensa en arbitrajes internacionales.
                        </p>
                        <p>
                            Liderados por Eduardo Ramos Kléber y un equipo multidisciplinario de socios y abogados sénior, combinamos el rigor técnico con una visión estratégica que anticipa riesgos y protege intereses.
                        </p>
                    </div>

                    <div class="grid grid-cols-2 gap-4 mb-10 max-w-md"
                        :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
                        style="transition: all 0.7s cubic-bezier(0.16,1,0.3,1) 0.4s;">
                        <div class="border-l-2 border-secondary/30 pl-4">
                            <span class="block font-headline text-secondary text-xl font-bold">Minería</span>
                            <span class="block font-label text-[9px] tracking-wider uppercase text-white/40">Derecho minero y ambiental</span>
                        </div>
                        <div class="border-l-2 border-secondary/30 pl-4">
                            <span class="block font-headline text-secondary text-xl font-bold">Inmobiliario</span>
                            <span class="block font-label text-[9px] tracking-wider uppercase text-white/40">Hotelero y construcción</span>
                        </div>
                        <div class="border-l-2 border-secondary/30 pl-4">
                            <span class="block font-headline text-secondary text-xl font-bold">Seguros</span>
                            <span class="block font-label text-[9px] tracking-wider uppercase text-white/40">Responsabilidad civil y reaseguros</span>
                        </div>
                        <div class="border-l-2 border-secondary/30 pl-4">
                            <span class="block font-headline text-secondary text-xl font-bold">Salud</span>
                            <span class="block font-label text-[9px] tracking-wider uppercase text-white/40">Litigios y cumplimiento</span>
                        </div>
                    </div>

                    <div
                        :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
                        style="transition: all 0.7s cubic-bezier(0.16,1,0.3,1) 0.5s;">
                        <router-link to="/nosotros"
                            class="group inline-flex items-center gap-5 font-label text-[9px] sm:text-[10px] font-bold tracking-[0.25em] uppercase text-secondary hover:text-white transition-colors duration-300 no-underline">
                            <span>Conoce nuestra trayectoria</span>
                            <span class="w-12 h-12 border border-secondary/20 flex items-center justify-center group-hover:border-white/30 transition-all duration-300">
                                <span class="material-symbols-outlined text-lg text-secondary group-hover:text-white group-hover:translate-x-1 transition-all">arrow_forward</span>
                            </span>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
</style>
