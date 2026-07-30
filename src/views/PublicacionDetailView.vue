<script setup>
import { ref, computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { publicaciones } from '../data/publicaciones'

const route = useRoute()
const router = useRouter()
const slug = computed(() => route.params.slug)
const publicacion = computed(() => publicaciones.find(n => n.slug === slug.value))

const copied = ref(false)
const currentUrl = computed(() => window.location.href)

const copyUrl = async () => {
    await navigator.clipboard.writeText(currentUrl.value)
    copied.value = true
    setTimeout(() => copied.value = false, 2000)
}

watch(publicacion, (newVal) => {
    if (newVal) {
        document.title = `${newVal.title} — ER Abogados`
    }
}, { immediate: true })

watch(slug, () => {
    window.scrollTo({ top: 0, behavior: 'instant' })
    if (slug.value && !publicacion.value) router.push('/404')
}, { immediate: true })
</script>

<template>
    <!-- Contenido real -->
    <div class="min-h-screen bg-white selection:bg-secondary/20">
        <!-- Hero -->
        <header class="relative min-h-auto flex flex-col justify-center overflow-hidden">
            <div class="absolute inset-0">
                <img :src="publicacion.image" :alt="publicacion.title" loading="eager"
                    class="w-full h-full object-cover scale-105 transition-transform duration-[8000ms] ease-out"
                    style="transform-origin: center center;">
                <div
                    class="absolute inset-0 bg-gradient-to-t from-primary from-20% via-primary/60 via-60% to-primary/20">
                </div>
            </div>

            <div class="relative z-10 px-8 lg:px-24 pb-20 pt-38 max-w-[1400px] mx-auto w-full">
                <div class="flex items-center gap-4 mb-8">
                    <span
                        class="font-label text-[9px] font-bold tracking-[0.4em] uppercase text-white bg-secondary px-3 py-1.5">
                        {{ publicacion.category }}
                    </span>
                    <span class="text-white text-[10px] font-label tracking-widest uppercase">{{ publicacion.date }}</span>
                </div>

                <h1
                    class="font-headline text-4xl sm:text-6xl lg:text-7xl text-white font-bold leading-[1.05] tracking-tight max-w-5xl mb-10">
                    {{ publicacion.title }}
                </h1>

                <div class="flex items-center gap-6 pb-10 border-b border-white/30">
                    <div class="flex items-center gap-3">
                        <div class="w-12 h-12 rounded-full overflow-hidden ring-1 ring-white/60">
                            <img v-if="publicacion.authorImage" :src="publicacion.authorImage" :alt="publicacion.author"
                                class="w-full h-full object-cover">
                            <div v-else class="w-full h-full bg-secondary/20 flex items-center justify-center">
                                <span class="material-symbols-outlined text-white/40">person</span>
                            </div>
                        </div>
                        <div class="flex flex-col">
                            <span class="font-label text-[12px] font-bold tracking-widest uppercase text-white">{{
                                publicacion.author }}</span>
                            <span class="font-label text-[11px] text-secondary tracking-wider">{{ publicacion.authorRole
                                }}</span>
                        </div>
                    </div>
                    <div class="w-px h-6 bg-white/40"></div>
                    <p style="font-size: 9px;" class="font-label text-white/80 tracking-widest uppercase">
                        <span class="font-bold text-secondary">{{
                            publicacion.readingTime
                        }}</span> de lectura
                    </p>
                </div>
            </div>
        </header>

        <!-- Cuerpo -->
        <div class="bg-white relative z-10">
            <div class="max-w-[720px] mx-auto px-6 sm:px-8 py-16 lg:py-24">

                <p
                    class="font-headline text-2xl text-primary/80 font-normal leading-relaxed mb-10 pb-10 border-b border-primary/8 italic">
                    {{ publicacion.excerpt }}
                </p>

                <img :src="publicacion.image" :alt="publicacion.title" loading="eager"
                    class="w-full h-80 object-cover mb-10">

                <div class="prose-custom" v-html="publicacion.content"></div>

                <div class="mt-14 pt-8 border-t border-primary/8 flex items-center gap-3">
                    <span
                        class="font-label text-[9px] uppercase tracking-widest text-primary/30 font-bold">Categoría</span>
                    <span
                        class="font-label text-[9px] uppercase tracking-widest text-secondary font-bold border border-secondary/30 px-3 py-1">
                        {{ publicacion.category }}
                    </span>
                </div>

                <!-- Autor + Compartir -->
                <div
                    class="mt-12 pt-12 border-t border-primary/8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-10">
                    <div class="flex items-center gap-5">
                        <div class="w-14 h-14 rounded-full overflow-hidden ring-2 ring-primary/5 shrink-0">
                            <img v-if="publicacion.authorImage" :src="publicacion.authorImage" :alt="publicacion.author"
                                class="w-full h-full object-cover">
                            <div v-else class="w-full h-full bg-primary/10 flex items-center justify-center">
                                <span class="material-symbols-outlined text-primary/30">person</span>
                            </div>
                        </div>
                        <div>
                            <span
                                class="block font-label text-[8px] uppercase tracking-widest text-primary/30 mb-1">Escrito
                                por</span>
                            <span class="block font-headline text-lg text-primary font-bold leading-none">{{
                                publicacion.author }}</span>
                            <span class="block font-label text-[10px] text-secondary mt-1">{{ publicacion.authorRole
                                }}</span>
                        </div>
                    </div>

                    <div class="flex items-center gap-4">
                        <span
                            class="font-label text-[9px] uppercase tracking-widest text-primary/30 font-bold">Compartir</span>
                        <div class="flex gap-2">
                            <a :href="`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`"
                                target="_blank"
                                class="w-9 h-9 border border-primary/10 flex items-center justify-center text-primary/40 hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] transition-all duration-300 no-underline"
                                aria-label="Compartir en LinkedIn">
                                <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                                    <path
                                        d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                            </a>
                            <button @click="copyUrl"
                                class="w-9 h-9 border border-primary/10 flex items-center justify-center text-primary/40 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                                :class="{ 'bg-primary text-white border-primary': copied }"
                                aria-label="Copiar enlace">
                                <span class="material-symbols-outlined" style="font-size: 14px;">{{ copied ? 'check' :
                                    'content_copy' }}</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Relacionados -->
        <section class="py-24 px-8 lg:px-24 bg-primary/[0.02] border-t border-primary/5">
            <div class="max-w-[1400px] mx-auto">
                <div class="flex items-baseline justify-between mb-12 pb-4 border-b border-primary/8">
                    <h2 class="font-headline text-2xl text-primary font-bold">Análisis <em
                            class="text-secondary not-italic">Relacionados</em></h2>
                    <router-link to="/publicaciones"
                        class="text-[9px] font-label font-bold tracking-widest uppercase text-primary/30 hover:text-secondary transition-colors no-underline">Ver
                        todas</router-link>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-primary/8">
                    <div v-for="rel in publicaciones.filter(n => n.slug !== publicacion.slug).slice(0, 3)" :key="rel.slug"
                        class="group">
                        <router-link :to="`/publicaciones/${rel.slug}`"
                            class="no-underline flex flex-col gap-5 p-8 hover:bg-white transition-colors duration-300">
                            <div class="aspect-[16/9] overflow-hidden">
                                <img :src="rel.image" :alt="rel.title"
                                    class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
                            </div>
                            <div class="flex flex-col gap-2">
                                <span
                                    class="font-label text-[8px] font-bold tracking-[0.35em] uppercase text-secondary">{{
                                        rel.category }}</span>
                                <h4
                                    class="font-headline text-lg text-primary font-bold leading-snug group-hover:text-secondary transition-colors duration-300">
                                    {{ rel.title }}</h4>
                                <span class="font-label text-[9px] text-primary/30 tracking-widest uppercase">{{
                                    rel.date }}</span>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped>
.prose-custom :deep(p) {
    font-family: var(--font-body);
    font-size: 1.0625rem;
    line-height: 1.8;
    color: color-mix(in srgb, var(--color-primary) 65%, transparent);
    font-weight: 300;
    margin-bottom: 1.25rem;
}

.prose-custom :deep(h3) {
    font-family: var(--font-headline);
    font-size: 1.5rem;
    color: var(--color-primary);
    font-weight: 700;
    margin-top: 2.5rem;
    margin-bottom: 0.75rem;
    letter-spacing: -0.02em;
    line-height: 1.2;
}

.prose-custom :deep(blockquote) {
    font-family: var(--font-headline);
    font-style: italic;
    font-size: 1.25rem;
    color: var(--color-secondary);
    border-left: 2px solid var(--color-secondary);
    padding: 0.25rem 0 0.25rem 1.5rem;
    margin: 2rem 0;
    line-height: 1.5;
}

.prose-custom :deep(strong) {
    font-weight: 600;
    color: var(--color-primary);
}

.prose-custom :deep(ul) {
    margin: 1rem 0 1.5rem;
    padding-left: 0;
    list-style: none;
}

.prose-custom :deep(ul li) {
    font-family: var(--font-body);
    font-size: 1rem;
    font-weight: 300;
    color: color-mix(in srgb, var(--color-primary) 65%, transparent);
    padding: 0.375rem 0 0.375rem 1.5rem;
    border-bottom: 1px solid color-mix(in srgb, var(--color-primary) 5%, transparent);
    position: relative;
    line-height: 1.6;
}

.prose-custom :deep(ul li::before) {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%) rotate(45deg);
    width: 5px;
    height: 5px;
    background: var(--color-secondary);
}

@media (max-width: 1024px) {
    .prose-custom :deep(p) {
        font-size: 0.9375rem;
    }

    .prose-custom :deep(h3) {
        font-size: 1.25rem;
    }

    .prose-custom :deep(blockquote) {
        font-size: 1.1rem;
    }
}
</style>
