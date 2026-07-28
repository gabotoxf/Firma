<script setup>
import ImgBogota from "/img/nosotros/noso.jpg"
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

                        <div
                            class="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/10 to-transparent z-20">
                        </div>

                        <div class="absolute bottom-0 left-0 right-0 p-6 sm:p-10 z-30">
                            <p class="font-label text-[9px] tracking-[0.4em] uppercase text-secondary font-bold mb-2">
                                Desde 1999</p>
                            <p class="font-headline text-white text-xl sm:text-2xl font-bold leading-tight">Rigor
                                jurídico.<br>Visión estratégica.</p>
                        </div>
                    </div> -->

                    <!-- Badge de experiencia -->
                    <div
                        class="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-8 bg-primary p-6 sm:p-8 hidden xs:block shadow-xl z-20">
                        <div class="flex flex-col items-center">
                            <span
                                class="font-headline text-3xl sm:text-4xl font-bold text-secondary leading-none">25</span>
                            <span
                                class="font-label text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-white/60 text-center mt-2">Años
                                de<br>excelencia</span>
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

                    <div
                        class="flex flex-col gap-5 sm:gap-6 text-dark/70 font-light leading-relaxed text-base sm:text-lg">
                        <p>
                            En <strong class="text-primary font-semibold">ER Abogados</strong>, somos una firma
                            jurídica
                            comprometida con la defensa integral de los derechos fundamentales, especialmente en casos
                            relacionados con violencia de género, acoso laboral y vulneraciones a la dignidad humana.
                        </p>
                        <p>
                            Contamos con un equipo de profesionales que actúa con rigor jurídico,
                            ética y sensibilidad social, brindando acompañamiento cercano a nuestros representados
                            y promoviendo el acceso efectivo a la justicia. Nuestra labor se enfoca en generar
                            confianza,
                            respaldo legal sólido y resultados que garanticen la protección de nuestros clientes.
                        </p>
                    </div>

                    <!-- Puntos clave -->
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 mt-2">
                        <div class="flex items-start gap-4">
                            <div class="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                                <span class="material-symbols-outlined text-secondary text-sm">verified</span>
                            </div>
                            <div>
                                <h4
                                    class="font-label text-xs sm:text-sm font-bold text-primary uppercase tracking-wider">
                                    Excelencia ética</h4>
                                <p class="text-[11px] sm:text-xs text-dark/60 mt-1">Transparencia total en cada proceso
                                    legal.</p>
                            </div>
                        </div>
                        <div class="flex items-start gap-4">
                            <div class="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                                <span class="material-symbols-outlined text-secondary text-sm">auto_graph</span>
                            </div>
                            <div>
                                <h4
                                    class="font-label text-xs sm:text-sm font-bold text-primary uppercase tracking-wider">
                                    Resultados Reales</h4>
                                <p class="text-[11px] sm:text-xs text-dark/60 mt-1">Enfoque orientado a objetivos
                                    estratégicos.</p>
                            </div>
                        </div>
                    </div>

                    <!-- Botón -->
                    <div class="mt-4 sm:mt-6">
                        <router-link to="/nosotros"
                            class="group flex items-center gap-5 sm:gap-6 font-label text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase text-primary hover:text-secondary transition-colors duration-300 no-underline">
                            Conoce nuestra historia
                            <div
                                class="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-primary/10 flex items-center justify-center group-hover:border-secondary transition-all duration-300">
                                <span
                                    class="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </div>
                        </router-link>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<style scoped>
.font-headline {
    font-family: 'Noto Serif', serif;
}

.font-label {
    font-family: 'Manrope', sans-serif;
}

.img-parallax {
    transform: scale(1.15) translateY(0px);
    animation: float-bg 8s ease-in-out infinite;
}

@keyframes float-bg {
    0% {
        transform: scale(1.15) translateY(0px);
    }

    50% {
        transform: scale(1.15) translateY(-20px);
    }

    100% {
        transform: scale(1.15) translateY(0px);
    }
}




/* ANIMACIÓN DEL VIDEO */
/* .video-loop {
    animation: video-fade 18s ease-in-out infinite;
}

@keyframes video-fade {
    0%   { opacity: 0; }
    5%   { opacity: 1; }
    85%  { opacity: 1; }
    95%  { opacity: 0; }
    100% { opacity: 0; }
} */
</style>
