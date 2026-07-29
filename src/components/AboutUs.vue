<script setup>
import { useReveal } from '../composables/useReveal'

const { el, isVisible } = useReveal({ threshold: 0.15 })
</script>

<template>
    <section class="py-20 sm:py-32 px-6 sm:px-12 bg-white relative overflow-hidden">
        <!-- Elementos decorativos de fondo -->
        <div class="absolute top-0 right-0 w-1/3 h-full bg-primary/[0.02] -skew-x-12 translate-x-1/2"></div>

        <div class="container mx-auto max-w-7xl">
            <div class="flex flex-col lg:flex-row items-center gap-12 sm:gap-16 lg:gap-24">

                <!-- Columna de Imagen -->
                <div class="w-full lg:w-1/2 relative group">
                    <!-- Marco dorado decorativo -->
                    <div
                        class="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-16 sm:w-24 h-16 sm:h-24 border-t-2 border-l-2 border-secondary/40 z-0 transition-all duration-500 group-hover:-top-2 group-hover:-left-3">
                    </div>
                    <div
                        class="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 w-16 sm:w-24 h-16 sm:h-24 border-b-2 border-r-2 border-secondary/40 z-0 transition-all duration-500 group-hover:-bottom-2 group-hover:-right-3">
                    </div>

                    <!-- Contenedor con Parallax -->
                    <div
                        class="relative z-10 overflow-hidden shadow-2xl shadow-primary/10 rounded-sm h-[350px] sm:h-[500px]">
                        <div class="absolute inset-0 img-parallax" :style="{
                            backgroundImage: `url(${ImgBogota})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }">
                        </div>
                        <!-- Overlay degradado -->
                        <div class="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/10 to-transparent">
                        </div>
                        <!-- Texto flotante inferior -->
                        <div class="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
                            <p class="font-label text-[9px] tracking-[0.4em] uppercase text-secondary font-bold mb-2">
                                Desde 1999</p>
                            <p class="font-headline text-white text-xl sm:text-2xl font-bold leading-tight">Rigor
                                jurídico.<br>Visión estratégica.</p>
                        </div>
                    </div>

                    <!-- Contenedor con Parallax (VIDEO) -->
                    <!-- <div
                        class="relative z-10 overflow-hidden shadow-2xl shadow-primary/10 rounded-sm h-[350px] sm:h-[500px]">

                        <div class="absolute inset-0 img-parallax"
                            :style="{ backgroundImage: `url(${ImgBogota})`, backgroundSize: 'cover', backgroundPosition: 'center' }">
                        </div>

                        <video class="absolute inset-0 w-full h-full object-cover scale-105 video-loop z-10" autoplay
                            muted loop playsinline>
                            <source src="https://www.pexels.com/download/video/27099385/" type="video/mp4" />
                        </video>

                        <div class="absolute inset-0 bg-primary/20 z-20"></div>

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

                <!-- Columna de texto -->
                <div class="w-full lg:w-1/2 flex flex-col gap-6 sm:gap-8 mt-6 sm:mt-0">
                    <div class="flex flex-col gap-3 sm:gap-4">
                        <p
                            class="font-label text-[10px] sm:text-[11px] tracking-[0.3em] sm:tracking-[0.35em] uppercase text-secondary font-bold flex items-center gap-3 sm:gap-4">
                            <span class="inline-block w-8 sm:w-10 h-px bg-secondary"></span>
                            Sobre nosotros
                        </p>
                        <h2 class="font-headline text-3xl sm:text-4xl lg:text-5xl text-primary leading-tight font-bold">
                            ¿Quiénes
                            <em class="text-secondary italic not-italic">somos?</em>
                        </h2>
                    </div>

                    <!-- Sectores de práctica -->
                    <div class="mb-12"
                        :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
                        style="transition: all 0.7s cubic-bezier(0.16,1,0.3,1) 0.35s;">
                        <p class="font-label text-[8px] sm:text-[9px] tracking-[0.3em] uppercase text-secondary font-bold mb-5 flex items-center gap-3">
                            <span class="inline-block w-6 h-px bg-secondary/40"></span>
                            Áreas de especialización
                        </p>
                        <div class="flex flex-wrap gap-2">
                            <span class="font-label text-[8px] tracking-[0.15em] uppercase text-white/70 border border-white/10 px-3 py-1.5 hover:border-secondary/40 hover:text-secondary transition-all duration-300">Derecho Corporativo</span>
                            <span class="font-label text-[8px] tracking-[0.15em] uppercase text-white/70 border border-white/10 px-3 py-1.5 hover:border-secondary/40 hover:text-secondary transition-all duration-300">Responsabilidad Civil</span>
                            <span class="font-label text-[8px] tracking-[0.15em] uppercase text-white/70 border border-white/10 px-3 py-1.5 hover:border-secondary/40 hover:text-secondary transition-all duration-300">Seguros</span>
                            <span class="font-label text-[8px] tracking-[0.15em] uppercase text-white/70 border border-white/10 px-3 py-1.5 hover:border-secondary/40 hover:text-secondary transition-all duration-300">Litigio Estratégico</span>
                            <span class="font-label text-[8px] tracking-[0.15em] uppercase text-white/70 border border-white/10 px-3 py-1.5 hover:border-secondary/40 hover:text-secondary transition-all duration-300">Derecho Laboral</span>
                            <span class="font-label text-[8px] tracking-[0.15em] uppercase text-white/70 border border-white/10 px-3 py-1.5 hover:border-secondary/40 hover:text-secondary transition-all duration-300">Derecho Tributario</span>
                            <span class="font-label text-[8px] tracking-[0.15em] uppercase text-white/70 border border-white/10 px-3 py-1.5 hover:border-secondary/40 hover:text-secondary transition-all duration-300">Derecho Minero</span>
                            <span class="font-label text-[8px] tracking-[0.15em] uppercase text-white/70 border border-white/10 px-3 py-1.5 hover:border-secondary/40 hover:text-secondary transition-all duration-300">Derecho Inmobiliario</span>
                        </div>
                    </div>

                    <div
                        class="flex flex-col gap-5 sm:gap-6 text-dark/70 font-light leading-relaxed text-base sm:text-lg">

            <div class="lg:col-span-6 flex flex-col justify-center px-6 sm:px-12 lg:px-0 lg:pr-24 xl:pr-32 py-20 lg:py-0">
                <div class="max-w-lg py-15">
                    <div class="flex items-center gap-4 mb-8"
                        :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
                        style="transition: all 0.7s cubic-bezier(0.16,1,0.3,1) 0.1s;">
                        <span class="w-10 h-px bg-secondary/60"></span>
                        <span class="font-label text-[9px] sm:text-[10px] tracking-[0.4em] uppercase text-secondary font-bold">Nuestra Firma</span>
                    </div>

                    <h2 class="font-headline text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white leading-[1.1] mb-10"
                        :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
                        style="transition: all 0.7s cubic-bezier(0.16,1,0.3,1) 0.2s;">
                        Donde el rigor legal
                        <br>
                        <span class="text-secondary">encuentra su</span>
                        <br>
                        <span class="text-secondary">propósito humano</span>
                    </h2>

                    <div class="space-y-5 text-white/60 font-light leading-relaxed text-base sm:text-lg mb-14 max-w-md"
                        :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
                        style="transition: all 0.7s cubic-bezier(0.16,1,0.3,1) 0.3s;">
                        <p>
                            En <strong class="text-white font-semibold">ER Abogados</strong> convertimos la experiencia jurídica en tranquilidad para nuestros clientes. Cada caso lo abordamos con el rigor técnico que exige la ley y la sensibilidad que merecen las personas.
                        </p>
                        <p>
                            Nuestro equipo multidisciplinario combina décadas de práctica legal con una visión moderna del derecho, ofreciendo soluciones estratégicas en las áreas más complejas del ámbito jurídico.
                        </p>
                    </div>

                    <div
                        :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
                        style="transition: all 0.7s cubic-bezier(0.16,1,0.3,1) 0.4s;">
                        <router-link to="/nosotros"
                            class="group inline-flex items-center gap-5 font-label text-[9px] sm:text-[10px] font-bold tracking-[0.25em] uppercase text-secondary hover:text-white transition-colors duration-300 no-underline">
                            <span>Conoce nuestra historia</span>
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
