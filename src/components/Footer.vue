<script setup>
import { socios } from '../data/socios.js'

const currentYear = new Date().getFullYear();

</script>

<template>
    <footer class="bg-primary pt-10 pb-6 px-12 text-white overflow-hidden relative">
        <!-- Elemento decorativo -->
        <div class="absolute top-0 right-0 w-1/2 h-full bg-white/[0.02] -skew-x-12 translate-x-1/4 pointer-events-none">
        </div>

        <div class="container mx-auto relative z-10">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10 mb-5">

                <!-- Brand & Bio -->
                <div class="flex flex-col gap-3 col-span-1 lg:col-span-1">
                    <router-link to="/" class="no-underline">
                        <img src="/img/logos/logoprin.png" alt="ER Abogados" style="width: 150px; height: auto;" />
                    </router-link>
                </div>

                <!-- Nuestros Socios -->
                <div class="flex flex-col gap-4">
                    <h4 class="font-headline text-md font-bold text-secondary tracking-widest">Nuestros Socios
                    </h4>
                    <div class="flex flex-col gap-2">
                        <a v-for="socio in socios.slice(0, 3)" :key="socio.id" :href="socio.linkedin" target="_blank"
                            class="flex items-center justify-between gap-4 py-2 px-3 border border-white/10 rounded hover:border-white/20 transition-all duration-300 no-underline group">
                            <div class="flex flex-col">
                                <span
                                    style="font-size: 14px;"  class="font-bold tracking-wider text-white group-hover:text-secondary transition-colors">{{
                                    socio.name }}</span>
                                <span style="font-size: 12px;" class="text-[9px] text-white/30 font-light">{{ socio.role }}</span>
                            </div>
                            <svg class="w-3.5 h-3.5 fill-current text-white/30 group-hover:text-[#0077b5] transition-colors shrink-0"
                                viewBox="0 0 24 24">
                                <path
                                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                        </a>
                    </div>
                </div>

                <!-- Oficinas -->
                <div class="flex flex-col gap-4">
                    <h4 class="font-headline text-md font-bold text-secondary tracking-widest">Oficinas</h4>
                    <div class="flex flex-col gap-4">
                        <div class="flex items-start gap-3">
                            <span class="material-symbols-outlined text-secondary"
                                style="font-size: 16px;">location_on</span>
                            <div class="flex flex-col gap-0.5">
                                <span class="text-xs font-bold tracking-wider">Sincelejo, Sucre</span>
                                <p style="font-size: 14px;" class="text-white/50 font-light leading-relaxed">Carrera 19A # 13A – 46 <br>
                                    Edificio Branjy, Oficina 101<br>Barrió La Ford</p>
                            </div>
                        </div>
                        <div class="flex items-start gap-3">
                            <span class="material-symbols-outlined text-secondary" style="font-size: 16px;">call</span>
                            <div class="flex flex-col gap-0.5">
                                <span class="text-xs font-bold tracking-wider">Móvil</span>
                                <p style="font-size: 14px;" class="text-white/50 font-light leading-relaxed">+57 324-275-7680</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Atención -->
                <div class="flex flex-col gap-4">
                    <h4 class="font-headline text-md font-bold text-secondary tracking-widest">Atención</h4>
                    <div class="flex flex-col gap-4">
                        <div class="flex items-start gap-3">
                            <span class="material-symbols-outlined text-secondary"
                                style="font-size: 16px;">schedule</span>
                            <div class="flex flex-col gap-0.5">
                                <span class="text-xs font-bold tracking-wider">Horario Comercial</span>
                                <p style="font-size: 14px;" class="text-white/50 font-light leading-relaxed">Lunes a Viernes <br>
                                    8:00 AM — 6:00 PM</p>
                            </div>
                        </div>
                        <div class="mt-1">
                            <span class="text-[9px] uppercase tracking-[0.2em] text-white/30 font-bold mb-3 block">Firma
                                autorizada por:</span>
                            <div class="w-24 h-8 bg-white/5 flex items-center justify-center grayscale opacity-30">
                                <span class="font-label text-[8px] tracking-widest font-bold">MINJUSTICIA</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <!-- Bottom Footer -->
            <div class="pt-4 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
                <p style="font-size: 10px;"
                    class="uppercase tracking-[0.2em] text-white/30 font-medium text-center md:text-left">
                    &copy; {{ currentYear }} ER Abogados Abogados. Todos los derechos reservados.
                </p>
                <!-- Créditos desarrollador -->
                <div class="flex justify-center">
                    <span style="font-size: 10px;" class="text-[9px] uppercase tracking-[0.2em] text-white/30 text-center">Desarrollado por
                        <a href="https://gabotoxf.vercel.app/" target="_blank"
                            class="text-secondary/60 hover:text-secondary transition-colors font-bold">Gabriel Meza</a>
                    </span>
                </div>
            </div>
        </div>


    </footer>
</template>

<style scoped>
.font-headline {
    font-family: 'Noto Serif', serif;
}

.font-label {
    font-family: 'Manrope', sans-serif;
}
</style>