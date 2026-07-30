<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useReveal } from '../composables/useReveal'

const stats = ref([
    { label: 'Casos estratégicos', target: 350, suffix: '+', current: 0 },
    { label: 'Años de experiencia', target: 25, suffix: '+', current: 0 },
    { label: 'Sectores de práctica', target: 8, suffix: '', current: 0 },
])

const hasAnimated = ref(false)
let observer = null
const counterEl = ref(null)

const { el, isVisible } = useReveal({ threshold: 0.3 })

function animateCount(stat, duration = 1800) {
    const start = performance.now()
    function step(now) {
        const progress = Math.min((now - start) / duration, 1)
        const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
        stat.current = Math.floor(eased * stat.target)
        if (progress < 1) {
            requestAnimationFrame(step)
        } else {
            stat.current = stat.target
        }
    }
    requestAnimationFrame(step)
}

onMounted(() => {
    observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && !hasAnimated.value) {
                    hasAnimated.value = true
                    stats.value.forEach((stat) => animateCount(stat))
                    observer.disconnect()
                }
            })
        },
        { threshold: 0.3 }
    )
    if (counterEl.value) observer.observe(counterEl.value)
})

onUnmounted(() => {
    if (observer) observer.disconnect()
})
</script>

<template>
    <section ref="el" class="relative bg-primary py-24 lg:py-32 overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/10 pointer-events-none"></div>

        <div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/20 to-transparent"></div>
        <div class="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/20 to-transparent"></div>

        <div ref="counterEl" class="relative z-10 px-6 sm:px-12 lg:px-24">
            <div class="max-w-[1920px] mx-auto">
                <div class="mb-16 lg:mb-20 max-w-3xl"
                    :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
                    style="transition: all 0.7s cubic-bezier(0.16,1,0.3,1) 0.1s;">
                    <p class="font-label text-[9px] sm:text-[10px] tracking-[0.4em] uppercase text-secondary font-bold mb-6 flex items-center gap-4">
                        <span class="inline-block w-10 h-px bg-secondary"></span>
                        Nuestro impacto
                    </p>
                    <h2 class="font-headline text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white leading-tight">
                        ER Abogados, un equipo
                        <span class="text-secondary block mt-2">consolidado y comprometido</span>
                    </h2>
                </div>

                <div class="grid md:grid-cols-3 gap-12 lg:gap-16">
                    <div v-for="(stat, i) in stats" :key="i"
                        class="relative"
                        :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
                        :style="{ transition: `all 0.7s cubic-bezier(0.16,1,0.3,1) ${0.2 + i * 0.1}s` }">
                        <div class="relative pt-10">
                            <div class="absolute top-0 left-0 w-16 h-px bg-secondary/40"></div>
                            <span class="font-headline text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-secondary font-bold leading-none tabular-nums">
                                {{ stat.current }}<span class="text-secondary">{{ stat.suffix }}</span>
                            </span>
                            <p class="font-label text-[8px] sm:text-[9px] tracking-[0.25em] uppercase text-white/50 mt-5">{{ stat.label }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
</style>
