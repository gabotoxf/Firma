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
                                class="w-9 h-9 border border-primary/10 flex items-center justify-center text-primary/40 hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] transition-all duration-300 no-underline">
                                <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                                    <path
                                        d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                            </a>
                            <a :href="`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`"
                                target="_blank"
                                class="w-9 h-9 border border-primary/10 flex items-center justify-center text-primary/40 hover:bg-[#1877f2] hover:text-white hover:border-[#1877f2] transition-all duration-300 no-underline">
                                <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                                    <path
                                        d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </a>
                            <a :href="`https://t.me/share/url?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(publicacion.title)}`"
                                target="_blank"
                                class="w-9 h-9 border border-primary/10 flex items-center justify-center text-primary/40 hover:bg-[#229ED9] hover:text-white hover:border-[#229ED9] transition-all duration-300 no-underline">
                                <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                                    <path
                                        d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                                </svg>
                            </a>
                            <a :href="`https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(publicacion.title)}`"
                                target="_blank"
                                class="w-9 h-9 border border-primary/10 flex items-center justify-center text-primary/40 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 no-underline">
                                <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                                    <path
                                        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>
                            <a :href="`https://wa.me/?text=${encodeURIComponent(publicacion.title + ' ' + currentUrl)}`"
                                target="_blank"
                                class="w-9 h-9 border border-primary/10 flex items-center justify-center text-primary/40 hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-all duration-300 no-underline">
                                <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                                    <path
                                        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                            </a>
                            <button @click="copyUrl"
                                class="w-9 h-9 border border-primary/10 flex items-center justify-center text-primary/40 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                                :class="{ 'bg-primary text-white border-primary': copied }">
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
    font-family: 'Manrope', sans-serif;
    font-size: 1.0625rem;
    line-height: 1.8;
    color: color-mix(in srgb, var(--color-primary) 65%, transparent);
    font-weight: 300;
    margin-bottom: 1.25rem;
}

.prose-custom :deep(h3) {
    font-family: 'Noto Serif', serif;
    font-size: 1.5rem;
    color: var(--color-primary);
    font-weight: 700;
    margin-top: 2.5rem;
    margin-bottom: 0.75rem;
    letter-spacing: -0.02em;
    line-height: 1.2;
}

.prose-custom :deep(blockquote) {
    font-family: 'Noto Serif', serif;
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
    font-family: 'Manrope', sans-serif;
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
