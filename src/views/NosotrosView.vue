<script setup>
import { ref, onMounted } from 'vue'

const videoEl = ref(null)

onMounted(() => {
  const v = videoEl.value
  if (v) {
    const attemptPlay = () => {
      const p = v.play()
      if (p !== undefined) {
        p.catch(() => {
          const playOnce = () => {
            v.play()
            document.removeEventListener('click', playOnce)
            document.removeEventListener('touchstart', playOnce)
          }
          document.addEventListener('click', playOnce)
          document.addEventListener('touchstart', playOnce)
        })
      }
    }
    attemptPlay()
    v.addEventListener('pause', () => attemptPlay())
  }
})
</script>

<template>
    <main class="bg-white">
        <!-- Hero Section - Full screen con video -->
        <section class="relative min-h-[90vh] md:min-h-screen overflow-hidden bg-primary">
            <div class="absolute inset-0">
                <video ref="videoEl" autoplay muted loop playsinline preload="auto" poster="/img/nosotros/hero.avif" class="absolute inset-0 w-full h-full object-cover">
                    <source src="/img/hero-background.mp4" type="video/mp4" />
                </video>
                <div class="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent"></div>
            </div>

            <div class="relative z-10 flex items-center min-h-[90vh] md:min-h-screen px-6 sm:px-12 lg:px-24">
                <div class="max-w-[1920px] mx-auto w-full">
                    <div class="max-w-3xl">
                        <p class="font-label text-[10px] sm:text-[11px] tracking-[0.4em] uppercase text-secondary font-bold mb-6 opacity-0 animate-slide-up"
                            :style="{ animationDelay: '200ms', animationFillMode: 'forwards' }">
                            Nuestra Identidad
                        </p>
                        <h1 class="font-headline text-4xl sm:text-6xl lg:text-7xl xl:text-8xl text-white font-light leading-tight mb-8 opacity-0 animate-slide-up"
                            :style="{ animationDelay: '400ms', animationFillMode: 'forwards' }">
                            Compromiso con la <br>
                            <em class="text-secondary italic not-italic font-medium">excelencia jurídica</em>
                        </h1>
                        <p class="text-base sm:text-lg lg:text-xl text-white/70 font-light leading-relaxed max-w-2xl border-l border-secondary/30 pl-8 opacity-0 animate-slide-up"
                            :style="{ animationDelay: '600ms', animationFillMode: 'forwards' }">
                            Somos una firma de abogados que entiende la importancia de contar con un respaldo confiable en cada decisión legal. Por eso ofrecemos un acompañamiento integral que previene riesgos, resuelve conflictos y garantiza tranquilidad a nuestros clientes.
                        </p>
                    </div>
                </div>
            </div>

            <div class="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
                <div class="w-px h-8 bg-white/20 animate-pulse"></div>
                <span class="material-symbols-outlined text-white/40 text-2xl animate-bounce">expand_more</span>
            </div>
        </section>

        <!-- Historia & Filosofía -->
        <section class="py-24 lg:py-32 px-6">
            <div class="container mx-auto max-w-[1400px] px-6 sm:px-12 lg:px-24">
                <div class="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    <div class="relative">
                        <div class="absolute -top-12 -left-12 w-48 h-48 bg-secondary/5 -z-10 rounded-full blur-3xl"></div>
                        <div class="absolute -bottom-8 -right-8 w-32 h-32 bg-primary/5 -z-10 rounded-full blur-3xl"></div>

                        <p class="font-label text-[10px] sm:text-[11px] tracking-[0.4em] uppercase text-secondary font-bold mb-6 flex items-center gap-4">
                            <span class="inline-block w-10 h-px bg-secondary"></span>
                            Nuestra Historia
                        </p>
                        <h2 class="font-headline text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-primary leading-tight mb-10">
                            Un equipo que combina <br>
                            <span class="text-secondary">experiencia y visión.</span>
                        </h2>
                        <div class="space-y-6 text-dark/70 text-lg font-light leading-relaxed">
                            <p>
                                Nuestra firma reúne a un equipo multidisciplinario de profesionales del derecho con
                                amplia trayectoria en litigio estratégico, asesoría corporativa y defensa legal.
                                Liderados por Eduardo Ramos Kléber, y con un cuerpo de socios especializados en
                                áreas como derecho laboral, tributario, civil, responsabilidad civil y seguros,
                                ofrecemos una cobertura jurídica integral.
                            </p>
                            <p>
                                Cada miembro de nuestro equipo aporta una visión profunda y actualizada del derecho,
                                permitiéndonos abordar los desafíos legales más complejos con una perspectiva
                                multidisciplinaria que garantiza soluciones sólidas y eficaces.
                            </p>
                        </div>
                    </div>
                    <div class="grid grid-cols-2 gap-4">
                        <div class="space-y-4">
                            <div class="relative overflow-hidden group shadow-2xl shadow-primary/20">
                                <img src="/img/nosotros/bogota.avif"
                                    alt="Legal"
                                    class="w-full h-64 object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                                    style="object-position: center 30%;">
                                <div class="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/10 to-transparent"></div>
                                <div class="absolute bottom-0 left-0 right-0 p-6">
                                    <p class="font-label text-[9px] tracking-[0.3em] uppercase text-secondary font-bold">Oficina Principal</p>
                                </div>
                            </div>
                            <div class="bg-primary p-8 text-white shadow-xl">
                                <span class="block font-headline text-5xl text-secondary mb-2">5</span>
                                <span class="font-label text-[10px] tracking-widest uppercase opacity-60">Miembros del Equipo</span>
                            </div>
                        </div>
                        <div class="space-y-4 pt-12">
                            <div class="bg-secondary p-8 text-primary shadow-xl">
                                <span class="block font-headline text-5xl mb-2">8</span>
                                <span class="font-label text-[10px] tracking-widest uppercase opacity-80">Áreas de Práctica</span>
                            </div>
                            <div class="relative overflow-hidden group shadow-2xl shadow-primary/20">
                                <img src="/img/nosotros/nosotros2.avif"
                                    alt="Consulting"
                                    class="w-full h-64 object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                                    style="object-position: center 30%;">
                                <div class="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/10 to-transparent"></div>
                                <div class="absolute bottom-0 left-0 right-0 p-6">
                                    <p class="font-label text-[9px] tracking-[0.3em] uppercase text-secondary font-bold">Nuestro Equipo</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Filosofía -->
        <section class="pb-24 lg:pb-32 px-6">
            <div class="container mx-auto max-w-[1400px] px-6 sm:px-12 lg:px-24">
                <div class="text-center mb-16 lg:mb-20">
                    <p class="font-label text-[10px] sm:text-[11px] tracking-[0.4em] uppercase text-secondary font-bold mb-6 flex items-center justify-center gap-4">
                        <span class="inline-block w-10 h-px bg-secondary"></span>
                        Nuestra Filosofía
                        <span class="inline-block w-10 h-px bg-secondary"></span>
                    </p>
                    <h2 class="font-headline text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-primary leading-tight">
                        Tres pilares que nos <span class="text-secondary">distinguen</span>
                    </h2>
                </div>
                <div class="grid md:grid-cols-3 gap-8 lg:gap-12">
                    <div class="group relative bg-white border border-primary/10 p-10 lg:p-12 hover:border-secondary/30 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500">
                        <div class="absolute top-0 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-700"></div>
                        <div class="w-14 h-14 border border-secondary/30 flex items-center justify-center mb-8 group-hover:bg-secondary group-hover:border-secondary transition-all duration-500">
                            <span class="material-symbols-outlined text-secondary text-2xl group-hover:text-primary transition-colors">gavel</span>
                        </div>
                        <h3 class="font-headline text-2xl text-primary mb-4">Rigor Técnico</h3>
                        <p class="text-dark/60 font-light leading-relaxed">
                            Nuestra misión es proteger lo que más valoras, convirtiédonos en un aliado estratégico 
                            que te acompaña en cada decisón importante
                        </p>
                    </div>

                    <div class="group relative bg-white border border-primary/10 p-10 lg:p-12 hover:border-secondary/30 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500">
                        <div class="absolute top-0 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-700"></div>
                        <div class="w-14 h-14 border border-secondary/30 flex items-center justify-center mb-8 group-hover:bg-secondary group-hover:border-secondary transition-all duration-500">
                            <span class="material-symbols-outlined text-secondary text-2xl group-hover:text-primary transition-colors">visibility</span>
                        </div>
                        <h3 class="font-headline text-2xl text-primary mb-4">Visión Estratégica</h3>
                        <p class="text-dark/60 font-light leading-relaxed">
                            Miramos más allá del caso inmediato. Cada recomendación legal está diseñada para alinearse con los objetivos de negocio y la proyección a largo plazo de quienes confían en nosotros.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<style scoped>
video::-webkit-media-controls,
video::-webkit-media-controls-play-button,
video::-webkit-media-controls-start-playback-button,
video::-webkit-media-controls-panel {
  display: none !important;
  opacity: 0 !important;
  pointer-events: none !important;
}
</style>
