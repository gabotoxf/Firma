<script setup>
defineProps({
    loading: {
        type: Boolean,
        default: true
    }
})
</script>

<template>
    <Transition name="fade">
        <div v-if="loading" class="fixed inset-0 z-[301] flex items-center justify-center bg-primary">
            <div class="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/20 pointer-events-none"></div>

            <div class="relative flex flex-col items-center gap-14">
                <!-- Logo -->
                <div class="px-8 py-4 border border-white/10">
                    <img src="/img/logos/logoprin.png" alt="ER Abogados"
                        class="w-[320px] sm:w-[380px] h-auto brightness-0 invert"
                        style="display: block;" />
                </div>

                <!-- Gold shimmer line -->
                <div class="relative w-48 sm:w-64 overflow-hidden" style="height: 2px;">
                    <div class="absolute inset-0 bg-white/5"></div>
                    <div class="absolute top-0 left-0 h-full bg-secondary animate-shimmer shadow-[0_0_12px_rgba(197,160,89,0.5)]">
                    </div>
                </div>

                <!-- Tagline -->
                <p class="font-label text-[8px] sm:text-[9px] tracking-[0.35em] uppercase text-white/30">Excelencia jurídica · Compromiso humano</p>
            </div>
        </div>
    </Transition>
</template>

<style scoped>
.animate-shimmer {
    animation: shimmer 1.8s infinite cubic-bezier(0.16, 1, 0.3, 1);
    width: 25%;
}

@keyframes shimmer {
    0% {
        transform: translateX(-100%);
    }
    100% {
        transform: translateX(500%);
    }
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
