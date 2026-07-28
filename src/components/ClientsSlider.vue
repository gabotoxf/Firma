<script setup>
const brands = [
    { name: 'Arconca', domain: '/img/confiado/arconca-1.png' },
    { name: 'Bonanza Construcciones', domain: '/img/confiado/bonanza-construcciones.png' },
    { name: 'CEA Moderna', domain: '/img/confiado/cea-moderna.png' },
    { name: 'Concretos Industriales', domain: '/img/confiado/concretos-industriales.png' },
    { name: 'Estrella Grupo Empresarial', domain: '/img/confiado/estrella-grupo-empresarial.png' },
    { name: 'Expreso La Sabana', domain: '/img/confiado/expreso-la-sabana.png' },
    { name: 'Grupo Cometa', domain: '/img/confiado/grupo-cometa.png' },
    { name: 'Habita Grupo Inmobiliario', domain: '/img/confiado/habita-grupo-inmobiliario.png' },
    { name: 'Hotel Los Hermanos', domain: '/img/confiado/hotel-los-hermanos.png' },
    { name: 'Incolmedin', domain: '/img/confiado/incolmedin.webp' },
    { name: 'IPS Tolosalud', domain: '/img/confiado/ips_tolusalud.webp' },
    { name: 'JAB Ltda', domain: '/img/confiado/jab-ltda.png' },
    { name: 'Logística Construcciones del Caribe', domain: '/img/confiado/logistica-constucciones-del-caribe-1.png' },
    { name: 'Veolia', domain: '/img/confiado/veolia.png' },
]
</script>

<template>
    <section class="bg-white border-y border-primary/5 pt-20 pb-50 overflow-hidden">
        <div class="container mx-auto px-12 mb-16">
            <p class="font-label text-[11px] tracking-[0.4em] uppercase text-secondary font-bold flex items-center justify-center gap-4 text-center">
                <span class="inline-block w-10 h-px bg-secondary/30"></span>
                Clientes que confían en nuestra excelencia
                <span class="inline-block w-10 h-px bg-secondary/30"></span>
            </p>
        </div>

        <div class="relative">
            <div class="absolute left-0 top-0 bottom-0 w-48 z-10 pointer-events-none bg-gradient-to-r from-white via-white/80 to-transparent"></div>
            <div class="absolute right-0 top-0 bottom-0 w-48 z-10 pointer-events-none bg-gradient-to-l from-white via-white/80 to-transparent"></div>

            <div class="flex items-center w-max animate-marquee gap-24 px-12">
                <template v-for="copy in 2" :key="copy">
                    <div 
                        v-for="brand in brands" 
                        :key="`${copy}-${brand.name}`"
                        class="flex items-center justify-center grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-700 cursor-default shrink-0"
                    >
                        <img 
                            :src="brand.domain" 
                            :alt="brand.name" 
                            class="h-16 md:h-20 w-auto object-contain max-w-[200px]"
                            decoding="async"
                        >
                    </div>
                </template>
            </div>
        </div>
    </section>
</template>

<style scoped>
@keyframes marquee {
    from { transform: translateX(0); }
    to { transform: translateX(-50%); }
}

.animate-marquee {
    animation: marquee 35s linear infinite;
}

.animate-marquee:hover {
    animation-play-state: paused;
}
</style>
