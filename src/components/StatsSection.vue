<script setup>
import { ref, onMounted, onUnmounted } from 'vue'


const stats = ref([
  { label: 'Casos atendidos', target: 350, suffix: '+', current: 0 },
  { label: 'Años de experiencia', target: 15, suffix: '+', current: 0 },
  { label: 'Profesionales especializados', target: 12, suffix: '+', current: 0 },
  
])

const sectionRef = ref(null)
const hasAnimated = ref(false)
let observer = null

function animateCount(stat, duration = 1800) {
  const start = performance.now()
  function step(now) {
    const progress = Math.min((now - start) / duration, 1)
    // easeOutExpo: arranca rápido y frena suave, se siente más "profesional"
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
  if (sectionRef.value) observer.observe(sectionRef.value)
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})
</script>

<template>
  <section ref="sectionRef" class="bg-[#032848] py-20 sm:py-28 px-6 sm:px-12 lg:px-24">
    <div class="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

      <!-- Texto izquierda -->
      <div class="w-full lg:w-1/2">
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-light text-white leading-tight">
          ER Abogados, un equipo
          <span class="block font-bold">consolidado y comprometido</span>
        </h2>
      </div>

      <!-- Cifras derecha -->
      <div class="w-full lg:w-1/2 grid grid-cols-2 gap-x-8 gap-y-12">
        <div
          v-for="(stat, i) in stats"
          :key="i"
          class="border-l-2 border-[#2fa6d8] pl-5"
        >
          <p class="text-4xl sm:text-5xl font-light text-white tabular-nums">
            {{ stat.current }}{{ stat.suffix }}
          </p>
          <p class="mt-2 text-sm sm:text-base text-white/70">{{ stat.label }}</p>
        </div>
      </div>

    </div>
  </section>
</template>