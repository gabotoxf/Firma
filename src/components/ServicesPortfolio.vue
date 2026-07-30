<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Navigation } from 'swiper/modules'
import 'swiper/css'

import services from '../data/services.js'
import { useReveal } from '../composables/useReveal'

const { el, isVisible } = useReveal({ threshold: 0.1 })
const swiperRef = ref(null)

const swiperParams = {
    modules: [Autoplay, Navigation],
    navigation: {
        nextEl: '.services-next',
        prevEl: '.services-prev',
    },
    centeredSlides: true,
    slidesPerView: 1.15,
    spaceBetween: 20,
    grabCursor: true,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
            slidesPerView: 1.3,
            spaceBetween: 24,
        },
        1024: {
            slidesPerView: 1.8,
            spaceBetween: 32,
        },
        1440: {
            slidesPerView: 2.2,
            spaceBetween: 40,
        },
    },
}

function onSwiper(swiper) {
    swiperRef.value = swiper
}
</script>

<template>
    <section ref="el" class="relative bg-primary py-24 lg:py-32 overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/5 pointer-events-none"></div>
        <div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/20 to-transparent"></div>

        <div class="relative z-10 px-6 sm:px-12 lg:px-24">
            <div class="max-w-[1920px] mx-auto">
                <div class="mb-14 lg:mb-16 max-w-3xl"
                    :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
                    style="transition: all 0.7s cubic-bezier(0.16,1,0.3,1) 0.1s;">
                    <p class="font-label text-[9px] sm:text-[10px] tracking-[0.4em] uppercase text-secondary font-bold mb-6 flex items-center gap-4">
                        <span class="inline-block w-10 h-px bg-secondary"></span>
                        Nuestras áreas
                    </p>
                    <h2 class="font-headline text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white leading-tight">
                        Servicios <span class="text-secondary">jurídicos</span>
                    </h2>
                    <p class="text-white/40 font-light text-base sm:text-lg max-w-2xl mt-6 leading-relaxed">
                        Soluciones legales sofisticadas para desafíos corporativos complejos, con un enfoque multidisciplinario y altamente especializado.
                    </p>
                </div>

                <div class="relative services-wrapper"
                    :class="isVisible ? 'opacity-100' : 'opacity-0'"
                    style="transition: opacity 0.8s cubic-bezier(0.16,1,0.3,1) 0.3s;">
                    <Swiper v-bind="swiperParams" @swiper="onSwiper" class="services-swiper">
                        <SwiperSlide v-for="(service, i) in services" :key="service.id" class="services-slide">
                            <div class="group relative overflow-hidden cursor-pointer select-none services-card">

                                <img :src="service.heroImage" :alt="service.title"
                                    class="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105">

                                <div class="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-primary/10"></div>
                                <div class="absolute inset-0 group-hover:bg-black/5 transition-colors duration-500"></div>

                                <div class="absolute top-0 left-0 w-0 h-[2px] bg-secondary group-hover:w-full transition-all duration-700"></div>

                                <div class="absolute inset-0 flex flex-col justify-end p-8 lg:p-10">
                                    <h3 class="font-headline text-xl sm:text-2xl lg:text-3xl text-white font-bold leading-tight mb-3 max-w-lg group-hover:text-secondary transition-colors duration-500">
                                        {{ service.title }}
                                    </h3>
                                    <p class="text-white/40 text-sm sm:text-base font-light leading-relaxed max-w-lg mb-6 line-clamp-2">
                                        {{ service.description }}
                                    </p>
                                    <router-link :to="`/servicios/${service.slug}`"
                                        class="group/link inline-flex items-center gap-3 font-label text-[8px] sm:text-[9px] font-bold tracking-[0.25em] uppercase text-white/30 hover:text-secondary transition-colors no-underline">
                                        <span>Explorar área</span>
                                        <span class="material-symbols-outlined text-base group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
                                    </router-link>
                                </div>
                            </div>
                        </SwiperSlide>

                        <template #container-end>
                            <button class="services-prev absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-secondary hover:border-secondary transition-all duration-300 cursor-pointer">
                                <span class="material-symbols-outlined text-xl">chevron_left</span>
                            </button>
                            <button class="services-next absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-secondary hover:border-secondary transition-all duration-300 cursor-pointer">
                                <span class="material-symbols-outlined text-xl">chevron_right</span>
                            </button>
                        </template>
                    </Swiper>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.services-wrapper {
    overflow: visible;
}

.services-swiper {
    padding: 1.5rem 0;
    overflow: visible;
    position: relative;
}

.services-slide {
    width: 420px;
    transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
    opacity: 0.5;
}

.services-slide.swiper-slide-active {
    opacity: 1;
    transform: scale(1.08);
}

.services-slide.swiper-slide-next,
.services-slide.swiper-slide-prev {
    opacity: 0.75;
}

.services-card {
    height: 420px;
    transition: box-shadow 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.swiper-slide-active .services-card {
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.services-prev,
.services-next {
    opacity: 0;
    pointer-events: none;
}

.services-wrapper:hover .services-prev,
.services-wrapper:hover .services-next {
    opacity: 1;
    pointer-events: auto;
}

@media (max-width: 639px) {
    .services-slide {
        width: 280px;
    }
    .services-slide.swiper-slide-active {
        transform: scale(1.05);
    }
    .services-card {
        height: 360px;
    }
}
</style>
