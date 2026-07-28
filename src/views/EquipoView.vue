<script setup>
import socios from '../data/socios'

const partners = socios
</script>

<template>
    <div class="min-h-screen bg-white selection:bg-secondary/20">
        <!-- Header con Imagen, Gradiente y Altura Optimizada -->
        <header
            class="relative min-h-[40vh] sm:min-h-[50vh] flex items-start pt-28 sm:pt-18 pb-16 sm:pb-20 px-6 sm:px-12 lg:px-24 overflow-hidden bg-primary">
            <!-- Fondo con Imagen y Gradientes -->
            <div class="absolute inset-0 opacity-20">
                <img src="/img/publicaciones/5.webp" alt="ER Abogados Background"
                    class="w-full h-full object-cover">
                <div class="absolute inset-0 bg-gradient-to-b from-primary via-transparent to-primary"></div>
            </div>
            <!-- Contenido Superior -->
            <div class="max-w-[1400px] mx-auto w-full relative z-10 mt-0 sm:mt-16">
                <div class="max-w-3xl flex flex-col gap-4 sm:gap-6">
                    <p class="font-label text-[9px] sm:text-[10px] tracking-[0.5em] uppercase text-secondary font-bold opacity-0 animate-slide-up"
                        :style="{ animationDelay: '200ms', animationFillMode: 'forwards' }">
                        Directorio Profesional</p>
                    <h1 class="font-headline text-3xl sm:text-7xl lg:text-8xl text-white font-light leading-[1.1] tracking-tight opacity-0 animate-slide-up"
                        :style="{ animationDelay: '400ms', animationFillMode: 'forwards' }">
                        Nuestro <em class="text-secondary italic not-italic font-medium">equipo</em>
                    </h1>
                    <p class="text-sm sm:text-lg text-white/60 font-light max-w-xl leading-relaxed border-l border-secondary/30 pl-6 sm:pl-8 mt-2 opacity-0 animate-slide-up"
                        :style="{ animationDelay: '600ms', animationFillMode: 'forwards' }">
                        Excelencia jurídica fundamentada en la trayectoria, la integridad y una visión estratégica de
                        los negocios.
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

        <section class="py-24 px-8 lg:px-24">
            <div class="max-w-[1400px] mx-auto">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
                    <router-link v-for="partner in partners" :key="partner.slug" :to="`/equipo/${partner.slug}`"
                        class="group no-underline block h-full flex flex-col">
                        <div class="relative aspect-[16/10] overflow-hidden bg-primary/5 mb-6">
                            <img :src="partner.image" :alt="partner.nombre"
                                class="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105 group-hover:opacity-90">
                        </div>
                        <div class="flex flex-col gap-3 px-2 flex-1">
                            <div class="flex items-center justify-between">
                                <h3
                                    class="font-headline text-xl text-primary font-bold group-hover:text-secondary transition-colors duration-500">
                                    {{ partner.nombre }}</h3>
                                <span
                                    class="material-symbols-outlined text-primary/20 group-hover:translate-x-2 transition-transform duration-500">east</span>
                            </div>

                            <div class="text-primary/60 text-sm line-clamp-5">
                                {{ partner.description }}
                            </div>

                            <div class="flex items-center gap-4">
                                <span
                                    class="text-[10px] font-label uppercase tracking-[0.3em] text-secondary font-bold">{{
                                    partner.roleLabel }}</span>
                                <div class="h-px w-8 bg-primary/10"></div>
                                <span
                                    class="text-[10px] font-label uppercase tracking-[0.3em] text-primary/50 font-bold">{{
                                    partner.specialty }}</span>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
        </section>


        <!-- Footer Simple -->
        <footer class="pt-0 pb-24 px-8 lg:px-24 bg-white text-center">
            <div class="max-w-2xl mx-auto border-t border-primary/5 pt-20">
                <p class="text-sm text-primary/50 font-light mb-8 tracking-[0.4em]">ER Abogados</p>
                <h2 class="font-headline text-2xl text-primary font-bold mb-12">Comprometidos con la defensa integral de
                    sus intereses.</h2>
                <router-link to="/contacto"
                    class="text-[10px] font-label font-bold tracking-[0.4em] uppercase text-primary border-b border-secondary pb-2 hover:text-secondary transition-colors no-underline">
                    Iniciar Contacto
                </router-link>
            </div>
        </footer>
    </div>
</template>
