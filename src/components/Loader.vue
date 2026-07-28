<script setup>
import { watch } from 'vue'

defineProps({
    loading: {
        type: Boolean,
        default: true
    }
})
</script>

<template>
    <Transition name="fade">
        <div v-if="loading" class="fixed inset-0 z-[301] flex items-center justify-center bg-white">
            <div class="flex flex-col items-center gap-12">
                <!-- Brand Logo -->
                <div class="bg-primary rounded-sm px-8 py-4">
                    <img 
                        src="/img/logos/logoprin.png" 
                        alt="ER Abogados" 
                        style="width: 380px; height: auto; display: block;"
                    />
                </div>

                <!-- Gold Progress Line -->
                <div class="relative w-64 overflow-hidden" style="height: 2px;">
                    <div class="absolute top-0 left-0 h-full bg-secondary animate-shimmer shadow-[0_0_8px_rgba(197,160,89,0.6)]">
                    </div>
                </div>
            </div>
        </div>
    </Transition>
</template>
<style scoped>
.animate-shimmer {
    animation: shimmer 1.5s infinite linear;
    width: 30%;
}

@keyframes shimmer {
    0% {
        transform: translateX(-100%);
    }

    100% {
        transform: translateX(400%);
    }
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
