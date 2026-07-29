<script setup>
import { useReveal } from '../composables/useReveal'

const { el, isVisible } = useReveal({ threshold: 0.15 })
</script>

<template>
    <section ref="el" class="relative bg-primary overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/30 pointer-events-none"></div>

        <div class="absolute top-0 right-0 w-1/3 h-full opacity-[0.03]">
            <div class="absolute inset-0 bg-gradient-to-l from-white to-transparent"></div>
        </div>

        <div class="relative z-10 lg:grid lg:grid-cols-12">
            <div class="lg:col-span-6 relative min-h-[50vh] lg:min-h-[750px] overflow-hidden">
                <div class="absolute inset-0 lg:mr-16">
                    <img src="/img/nosotros/noso.jpg" alt="ER Abogados"
                        class="w-full h-full object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)]"
                        :class="isVisible ? 'scale-100' : 'scale-110'">
                    <div class="absolute inset-0 bg-gradient-to-r from-primary/60 via-primary/20 to-transparent"></div>
                </div>
                <div class="absolute bottom-8 left-8 w-28 h-28 border border-white/20 flex items-center justify-center backdrop-blur-sm bg-white/5 z-10"
                    :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
                    style="transition: all 0.8s cubic-bezier(0.16,1,0.3,1) 0.4s;">
                    <div class="text-center">
                        <span class="block font-headline text-3xl text-secondary font-bold leading-none">25</span>
                        <span class="block font-label text-[7px] tracking-[0.25em] uppercase text-white/60 mt-1">Años</span>
                    </div>
                </div>
            </div>

            <div class="lg:col-span-6 flex flex-col justify-center px-6 sm:px-12 lg:px-0 lg:pr-24 xl:pr-32 py-20 lg:py-0">
                <div class="max-w-lg py-15">
                    <div class="flex items-center gap-4 mb-8"
                        :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
                        style="transition: all 0.7s cubic-bezier(0.16,1,0.3,1) 0.1s;">
                        <span class="w-10 h-px bg-secondary/60"></span>
                        <span class="font-label text-[9px] sm:text-[10px] tracking-[0.4em] uppercase text-secondary font-bold">Trayectoria</span>
                    </div>

                    <h2 class="font-headline text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white leading-[1.1] mb-10"
                        :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
                        style="transition: all 0.7s cubic-bezier(0.16,1,0.3,1) 0.2s;">
                        Experiencia de primer nivel
                        <br>
                        <span class="text-secondary">en los sectores</span>
                        <br>
                        <span class="text-secondary">que impulsan el país</span>
                    </h2>

                    <div class="space-y-5 text-white/60 font-light leading-relaxed text-base sm:text-lg mb-10 max-w-md"
                        :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
                        style="transition: all 0.7s cubic-bezier(0.16,1,0.3,1) 0.3s;">
                        <p>
                            En <strong class="text-white font-semibold">ER Abogados</strong> acumulamos más de 25 años asesorando a empresas y personas en los sectores <strong class="text-white/80">minero, inmobiliario, hotelero, salud, seguros y energía</strong>. Nuestra experiencia abarca desde litigios administrativos de alta complejidad hasta estructuraciones corporativas y defensa en arbitrajes internacionales.
                        </p>
                        <p>
                            Liderados por Eduardo Ramos Kléber y un equipo multidisciplinario de socios y abogados sénior, combinamos el rigor técnico con una visión estratégica que anticipa riesgos y protege intereses.
                        </p>
                    </div>

                    <div class="grid grid-cols-2 gap-4 mb-10 max-w-md"
                        :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
                        style="transition: all 0.7s cubic-bezier(0.16,1,0.3,1) 0.4s;">
                        <div class="border-l-2 border-secondary/40 pl-4">
                            <span class="block font-headline text-secondary text-xl font-bold">Minería</span>
                            <span class="block font-label text-[9px] tracking-wider uppercase text-white/40">Derecho minero y ambiental</span>
                        </div>
                        <div class="border-l-2 border-secondary/40 pl-4">
                            <span class="block font-headline text-secondary text-xl font-bold">Inmobiliario</span>
                            <span class="block font-label text-[9px] tracking-wider uppercase text-white/40">Hotelero y construcción</span>
                        </div>
                        <div class="border-l-2 border-secondary/40 pl-4">
                            <span class="block font-headline text-secondary text-xl font-bold">Seguros</span>
                            <span class="block font-label text-[9px] tracking-wider uppercase text-white/40">Responsabilidad civil y reaseguros</span>
                        </div>
                        <div class="border-l-2 border-secondary/40 pl-4">
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
                            <span class="w-12 h-12 border border-secondary/30 flex items-center justify-center group-hover:border-white transition-all duration-300">
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
