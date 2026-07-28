<script setup>
import { ref, onMounted } from 'vue';
import { fetchCases } from '../data/casos';

const cases = ref([]);

onMounted(async () => {
    const allCases = await fetchCases();
    // Mostramos solo los primeros 2 casos en el resumen del home
    cases.value = allCases.slice(0, 2);
});
</script>

<template>
    <section class="py-24 px-12 bg-[#F9FAFB] relative overflow-hidden">
        <!-- Decoración de fondo -->
        <div class="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div class="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        <div class="container mx-auto relative z-10">
            <!-- Encabezado -->
            <div class="flex flex-col items-center text-center mb-16 gap-4">
                <p class="font-label text-[11px] tracking-[0.4em] uppercase text-secondary font-bold flex items-center gap-4">
                    <span class="inline-block w-8 h-px bg-secondary/40"></span>
                    Nuestra experiencia
                    <span class="inline-block w-8 h-px bg-secondary/40"></span>
                </p>
                <h2 class="font-headline text-4xl lg:text-5xl text-primary font-bold leading-tight">
                    Casos de éxito que <br>
                    <em class="text-secondary italic not-italic">respaldan</em> nuestra firma
                </h2>
                <p class="text-dark/50 font-light max-w-2xl mt-4 leading-relaxed">
                    La verdadera medida de nuestra capacidad son los resultados que obtenemos para nuestros clientes en los desafíos más complejos.
                </p>
            </div>

            <!-- Grid de Casos -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div 
                    v-for="(item, index) in cases" 
                    :key="index"
                    class="group bg-white border border-primary/5 hover:border-secondary/20 transition-all duration-500 overflow-hidden flex flex-col md:flex-row"
                >
                    <!-- Icono Lateral -->
                    <div class="md:w-24 bg-primary/5 flex items-center justify-center p-6 md:p-0 group-hover:bg-primary transition-colors duration-500">
                        <span class="material-symbols-outlined text-primary group-hover:text-secondary text-4xl transition-colors duration-500">
                            {{ item.icon }}
                        </span>
                    </div>

                    <!-- Contenido -->
                    <div class="p-8 flex flex-col gap-4 flex-1">
                        <div class="flex justify-between items-start">
                            <span class="font-label text-[10px] tracking-[0.2em] uppercase text-secondary font-bold">
                                {{ item.category }}
                            </span>
                        </div>
                        
                        <h3 class="font-headline text-xl font-bold text-primary leading-tight">
                            {{ item.title }}
                        </h3>
                        
                        <div class="flex flex-col gap-4 mt-2">
                            <div>
                                <p class="text-[11px] uppercase tracking-wider text-dark/40 font-bold mb-1">El desafío:</p>
                                <p class="text-dark/60 text-sm font-light leading-relaxed">
                                    {{ item.challenge }}
                                </p>
                            </div>
                            
                            <div class="bg-secondary/5 p-4 border-l-2 border-secondary">
                                <p class="text-[11px] uppercase tracking-wider text-secondary font-bold mb-1">Resultado final:</p>
                                <p class="text-primary font-medium text-sm leading-relaxed">
                                    {{ item.result }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- CTA Final -->
            <div class="mt-20 text-center">
                <router-link to="/casos-de-exito" class="inline-block bg-primary text-white font-label text-[11px] font-bold tracking-[0.2em] uppercase px-12 py-5 hover:bg-secondary transition-all duration-500 shadow-xl shadow-primary/10 no-underline">
                    Ver todos los casos de éxito
                </router-link>
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
</style>
