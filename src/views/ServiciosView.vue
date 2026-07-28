<script setup>
import { services } from '../data/services'
</script>

<template>
    <div class="h-auto selection:bg-secondary/20 bg-white">
        <!-- Header con Imagen, Gradiente y Altura Optimizada -->
        <header
            class="relative h-auto flex items-start pt-28 sm:pt-18 pb-16 sm:pb-20 px-6 sm:px-12 lg:px-24 overflow-hidden bg-primary">
            <!-- Fondo con Imagen y Gradientes -->

            <div class="absolute inset-0 opacity-20">
                <img src="/img/noticias/noticia4.avif"
                    alt="ER Abogados Background" class="w-full h-full object-cover">
                <div class="absolute inset-0 bg-gradient-to-b from-primary via-transparent to-primary"></div>
            </div>

            <!-- Contenido Superior -->
            <div class="max-w-[1400px] mx-auto w-full relative z-10 mt-0 sm:mt-16">
                <div class="max-w-3xl flex flex-col gap-4 sm:gap-6">
                    <p class="font-label text-[9px] sm:text-[10px] tracking-[0.5em] uppercase text-secondary font-bold opacity-0 animate-slide-up"
                        :style="{ animationDelay: '200ms', animationFillMode: 'forwards' }">Experticia Jurídica</p>
                    <h1 class="font-headline text-3xl sm:text-7xl lg:text-8xl text-white font-light leading-[1.1] tracking-tight opacity-0 animate-slide-up" :style="{ animationDelay: '400ms', animationFillMode: 'forwards' }">
                    Nuestras áreas de <br class="hidden sm:block">
                    <em class="text-secondary italic not-italic font-medium">práctica</em>
                </h1>
                    <p class="text-sm sm:text-lg text-white/60 font-light max-w-xl leading-relaxed border-l border-secondary/30 pl-6 sm:pl-8 mt-2 opacity-0 animate-slide-up"
                        :style="{ animationDelay: '600ms', animationFillMode: 'forwards' }">
                        Soluciones legales sofisticadas diseñadas para proteger y potenciar los intereses de nuestros
                        clientes en un entorno global complejo.
                    </p>
                </div>
            </div>

            <!-- Scroll Indicator -->
            <div class="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 animate-bounce hidden sm:block">
                <div class="flex flex-col items-center gap-2">
                    <span class="text-white/20 text-[10px] tracking-[0.3em] uppercase font-label">Scroll</span>
                    <span class="material-symbols-outlined text-white/20 text-2xl font-light">expand_more</span>
                </div>
            </div>
        </header>



        <!-- Grid de Servicios: Estructura Refinada con Dimensiones Preservadas -->
        <section class="py-24 px-8 lg:px-24">
            <div class="max-w-[1400px] mx-auto">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-20 items-stretch">
                    <div v-for="(service, index) in services" :key="index" class="group flex flex-col h-full ">
                        <router-link :to="`/servicios/${service.slug}`"
                            class="no-underline flex flex-col h-full p-8 bg-white border border-primary/10 border-l-[3px] border-l-secondary/50 hover:border-l-secondary transition-all duration-500 rounded-sm">
                            <!-- Línea Superior -->
                            <div class="flex items-center gap-6 mb-10">
                                <span
                                    class="font-headline text-2xl text-primary/30 group-hover:text-secondary transition-colors duration-500 font-bold">0{{
                                        index + 1 }}</span>
                                <div
                                    class="h-px flex-1 bg-primary/5 group-hover:bg-secondary/30 transition-all duration-500">
                                </div>
                            </div>

                            <!-- Contenido -->
                            <div class="flex flex-col gap-6 flex-grow">
                                <div
                                    class="flex items-center gap-4 text-primary group-hover:text-secondary transition-colors duration-300">
                                    <span class="material-symbols-outlined text-3xl">{{ service.icon }}</span>
                                    <h3 class="font-headline text-2xl font-bold tracking-tight">{{ service.title }}</h3>
                                </div>
                                <p class="text-primary/50 font-light leading-relaxed text-sm">
                                    {{ service.description }}
                                </p>

                                <!-- Features -->
                                <div class="flex flex-wrap gap-x-4 gap-y-2 mt-auto pt-6 border-t border-primary/5">
                                    <span v-for="tag in service.features" :key="tag"
                                        class="text-[8px] uppercase tracking-widest font-bold text-primary/30 group-hover:text-secondary transition-all duration-500">
                                        / {{ tag }}
                                    </span>
                                </div>

                                <!-- Link Acción -->
                                <div
                                    class="mt-8 flex items-center gap-3 text-primary/30 group-hover:text-secondary transition-all duration-300">
                                    <span class="text-[9px] font-label font-bold tracking-[0.3em] uppercase">Detalle del
                                        Servicio</span>
                                    <span
                                        class="material-symbols-outlined text-xs group-hover:translate-x-2 transition-transform">east</span>
                                </div>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA Minimalista -->
        <section class="pt-14 pb-32 px-8 lg:px-24">
            <div class="max-w-4xl mx-auto text-center border-t border-primary/5 pt-24">
                <h2 class="font-headline text-3xl text-primary font-bold mb-10 leading-tight">
                    ¿Su organización requiere una estrategia legal a medida?
                </h2>
                <router-link to="/contacto"
                    class="text-[10px] font-label font-bold tracking-[0.4em] uppercase text-primary border-b border-secondary pb-2 hover:text-secondary transition-colors no-underline">
                    Agendar Sesión Privada
                </router-link>
            </div>
        </section>
    </div>
</template>
