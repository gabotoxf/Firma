<script setup>
</script>

<template>
    <main class="bg-white">
        <!-- Hero Section -->
        <section class="relative pt-32 pb-20 lg:pt-36 lg:pb-32 px-6 overflow-hidden bg-primary">
            <div class="absolute inset-0 opacity-20">
                <img src="/img/nosotros/hero.avif"
                    alt="ER Abogados Background" class="w-full h-full object-cover">
                <div class="absolute inset-0 bg-gradient-to-b from-primary via-transparent to-primary"></div>
            </div>

            <div class="container mx-auto max-w-[1400px] relative z-10 px-6 sm:px-12 lg:px-24">
                <div class="max-w-3xl">
                    <p class="font-label text-[10px] sm:text-[11px] tracking-[0.4em] uppercase text-secondary font-bold mb-6 opacity-0 animate-slide-up"
                        :style="{ animationDelay: '200ms', animationFillMode: 'forwards' }">
                        Nuestra Identidad
                    </p>
                    <h1 class="font-headline text-3xl sm:text-7xl lg:text-8xl text-white font-light leading-tight mb-8 opacity-0 animate-slide-up" :style="{ animationDelay: '400ms', animationFillMode: 'forwards' }">
                        Compromiso con la <br>
                        <em class="text-secondary italic not-italic font-medium">excelencia jurídica</em>
                    </h1>
                    <p class="text-lg sm:text-xl text-white/70 font-light leading-relaxed max-w-2xl border-l border-secondary/30 pl-8 opacity-0 animate-slide-up"
                        :style="{ animationDelay: '600ms', animationFillMode: 'forwards' }">
                        ER Abogados y Asociados S.A.S. es una firma de abogados dedicada a brindar asesoría y
                        representación legal de alta calidad en las áreas de mayor complejidad del derecho colombiano.
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
        </section>

        <!-- Historia & Filosofía -->
        <section class="py-24 lg:py-24 px-6">
            <div class="container mx-auto max-w-[1400px] px-6 sm:px-12 lg:px-24">
                <div class="grid lg:grid-cols-2 gap-20 items-center">
                    <div class="relative">
                        <div class="absolute -top-10 -left-10 w-40 h-40 bg-secondary/5 -z-10 rounded-full blur-3xl">
                        </div>
                        <h2 class="font-headline text-3xl sm:text-4xl lg:text-5xl text-primary mb-10 leading-tight">
                            Un equipo que combina <br>
                            <span class="text-secondary">experiencia y visión.</span>
                        </h2>
                        <div class="space-y-8 text-dark/70 text-lg font-light leading-relaxed">
                            <p>
                                La firma está liderada por el abogado Eduardo Ramos Kléber y como socios el abogado
                                Eloy Pérez Paternina, consolidando el área de Derecho Laboral, Seguridad Social y
                                Derecho Tributario, y la socia Liceth Carolina Villalba García, para liderar el área
                                de Derecho Civil, Responsabilidad Civil y Seguros.
                            </p>
                            <p>
                                Hacen parte del equipo la abogada Ana Lucía Rivera Betín, quien se desempeña en el
                                campo de Derecho Comercial y Societario, y Fernando Pinzón, quien cumple las funciones
                                de dependiente judicial. En conjunto, ofrecemos una asesoría integral que responde a
                                las necesidades más complejas de nuestros clientes.
                            </p>
                        </div>
                    </div>
                    <div class="grid grid-cols-2 gap-4">
                        <div class="space-y-4">
                            <div class="relative overflow-hidden group">
                                <img src="/img/nosotros/bogota.avif"
                                    alt="Legal"
                                    class="w-full h-64 object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                                    style="object-position: center 30%;">
                                <div
                                    class="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/10 to-transparent">
                                </div>
                            </div>
                            <div class="bg-primary p-8 text-white">
                                <span class="block font-headline text-4xl text-secondary mb-2">5</span>
                                <span class="font-label text-[10px] tracking-widest uppercase opacity-60">Miembros
                                    del Equipo</span>
                            </div>
                        </div>
                        <div class="space-y-4 pt-12">
                            <div class="bg-secondary p-8 text-primary">
                                <span class="block font-headline text-4xl mb-2">8</span>
                                <span class="font-label text-[10px] tracking-widest uppercase opacity-80">Áreas de
                                    Práctica</span>
                            </div>
                            <div class="relative overflow-hidden group">
                                <img src="/img/nosotros/nosotros2.avif"
                                    alt="Consulting"
                                    class="w-full h-64 object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                                    style="object-position: center 30%;">
                                <div
                                    class="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/10 to-transparent">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Misión, Visión, Valores -->
        <section class="pb-24 lg:py-25">
            <div class="container mx-auto max-w-[1400px] px-6 sm:px-12 lg:px-24">
                <div class="grid md:grid-cols-3 gap-12 lg:gap-20">
                    <!-- Misión -->
                    <div class="group">
                        <div
                            class="w-12 h-12 border border-secondary/30 flex items-center justify-center mb-8 group-hover:bg-secondary group-hover:border-secondary transition-all duration-500">
                            <span
                                class="material-symbols-outlined text-secondary group-hover:text-primary transition-colors">target</span>
                        </div>
                        <h3 class="font-headline text-2xl text-primary mb-6">Misión</h3>
                        <p class="text-dark/60 font-light leading-relaxed">
                            Nuestra misión es ofrecer asesoría y representación legal de alta calidad, 
                            orientada a la protección de los derechos humanos y laborales, 
                            mediante estrategias jurídicas efectivas, acompañamiento permanente 
                            a nuestros clientes y una actuación basada en la ética, 
                            la buena fe y el debido proceso.
                        </p>
                    </div>

                    <!-- Visión -->
                    <div class="group">
                        <div
                            class="w-12 h-12 border border-secondary/30 flex items-center justify-center mb-8 group-hover:bg-secondary group-hover:border-secondary transition-all duration-500">
                            <span
                                class="material-symbols-outlined text-secondary group-hover:text-primary transition-colors">visibility</span>
                        </div>
                        <h3 class="font-headline text-2xl text-primary mb-6">Visión</h3>
                        <p class="text-dark/60 font-light leading-relaxed">
                            Ser una firma de abogados reconocida a nivel nacional por su excelencia jurídica, 
                            compromiso social y liderazgo en la defensa de los derechos de las personas, 
                            especialmente en la lucha contra cualquier forma de violencia y discriminación.
                        </p>
                    </div>

                    <!-- Valores -->
                    <div class="group">
                        <div
                            class="w-12 h-12 border border-secondary/30 flex items-center justify-center mb-8 group-hover:bg-secondary group-hover:border-secondary transition-all duration-500">
                            <span
                                class="material-symbols-outlined text-secondary group-hover:text-primary transition-colors">balance</span>
                        </div>
                        <h3 class="font-headline text-2xl text-primary mb-6">Valores</h3>
                        <ul class="space-y-4 text-dark/60 font-light">
                            <li class="flex items-center gap-3">
                                <span class="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                                Integridad y Ética Profesional
                            </li>
                            <li class="flex items-center gap-3">
                                <span class="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                                Responsabilidad social
                            </li>
                            <li class="flex items-center gap-3">
                                <span class="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                                Innovación Continua
                            </li>
                            <li class="flex items-center gap-3">
                                <span class="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                                Empatía y Servicio al Cliente
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<style scoped></style>
