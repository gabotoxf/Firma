import { ref, onMounted, onUnmounted } from 'vue'

export function useReveal(options = {}) {
    const el = ref(null)
    const isVisible = ref(false)
    let observer = null

    const {
        threshold = 0.15,
        once = true,
        direction = 'up',
        distance = 40,
        rootMargin = '0px 0px -80px 0px',
    } = options

    onMounted(() => {
        if (!el.value) return

        observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    isVisible.value = true
                    if (once) observer.disconnect()
                } else if (!once) {
                    isVisible.value = false
                }
            },
            { threshold, rootMargin }
        )
        observer.observe(el.value)
    })

    onUnmounted(() => {
        if (observer) observer.disconnect()
    })

    return { el, isVisible }
}
