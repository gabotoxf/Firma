<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import services from '../data/services.js';
import { socios } from '../data/socios.js';
import { publicaciones } from '../data/publicaciones.js';

const router = useRouter();
const partners = ref([])
const publicacionesList = ref([])
const isScrolled = ref(false);
const isMenuOpen = ref(false);
const activeMegaMenu = ref(null);
const isMobileServicesOpen = ref(false);
const isMobileTeamOpen = ref(false);
const isMobilePublicacionesOpen = ref(false);
const isLangOpen = ref(false);
const lang = ref('es');
let megaMenuTimeout = null;
let langTimeout = null;

const isAuthenticated = ref(!!localStorage.getItem('auth_token'));

const handleLogout = () => {
  localStorage.removeItem('auth_token');
  isAuthenticated.value = false;
  router.push('/');
  isMenuOpen.value = false;
};

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20;
};

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  document.body.style.overflow = isMenuOpen.value ? 'hidden' : '';
};

const openMegaMenu = (menu) => {
  clearTimeout(megaMenuTimeout);
  activeMegaMenu.value = menu;
};

const closeMegaMenu = () => {
  megaMenuTimeout = setTimeout(() => {
    activeMegaMenu.value = null;
  }, 200);
};

const openLang = () => {
  clearTimeout(langTimeout);
  isLangOpen.value = true;
};

const closeLang = () => {
  langTimeout = setTimeout(() => {
    isLangOpen.value = false;
  }, 200);
};

const setLang = (l) => {
  lang.value = l;
  isLangOpen.value = false;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  partners.value = socios.slice(0, 2)
  publicacionesList.value = publicaciones.slice(0, 3)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <nav class="sticky top-0 left-0 w-full z-50 transition-all duration-500 border-b" :class="[
    isScrolled || activeMegaMenu ? 'bg-white/95 backdrop-blur-md shadow-sm border-primary/5' : 'bg-white/80 backdrop-blur-md border-transparent',
    isScrolled ? 'py-1' : 'py-2'
  ]">
    <div class="px-3 md:px-6 lg:px-12 flex items-center justify-between max-w-[1920px] mx-auto">

      <!-- Brand / Logo -->
        <router-link to="/" class="flex items-center no-underline relative z-[60]">
          <div class="w-[110px] sm:w-[140px] md:w-[180px] h-[40px] sm:h-[44px] md:h-[56px] overflow-hidden relative bg-primary rounded-sm px-4 flex items-center justify-center">
            <img src="/img/logos/logoprin.png" alt="ER Abogados" class="max-w-full max-h-full w-auto h-auto" />
          </div>
        </router-link>

      <!-- Desktop Links -->
      <div class="hidden xl:flex items-center gap-6 xl:gap-10">
        <router-link to="/" class="nav-link" exact-active-class="active">
          Inicio
        </router-link>
        <router-link to="/nosotros" class="nav-link" active-class="active">Nosotros</router-link>

        <!-- Servicios -->
        <div @mouseenter="openMegaMenu('services')" @mouseleave="closeMegaMenu" class="h-full flex items-center">
          <router-link to="/servicios" class="nav-link flex items-center gap-1" active-class="active"
            :class="{ active: activeMegaMenu === 'services' }">
            Servicios
            <span class="material-symbols-outlined text-[13px] transition-transform duration-300"
              :class="{ 'rotate-180': activeMegaMenu === 'services' }">expand_more</span>
          </router-link>

          <Transition name="mega">
            <div v-if="activeMegaMenu === 'services'" class="mega-menu" @mouseenter="openMegaMenu('services')"
              @mouseleave="closeMegaMenu">
              <div class="absolute top-0 left-0 w-full h-[2px] bg-secondary"></div>
              <div class="mega-menu-container">
                <div class="grid grid-cols-4 gap-12">
                  <div class="col-span-1 border-r border-primary/5 pr-12">
                    <p class="font-label text-[9px] tracking-[0.3em] uppercase text-secondary font-semibold mb-2">
                      Nuestras Áreas</p>
                    <h3 class="font-headline text-2xl text-primary font-bold mb-4">Servicios Jurídicos</h3>
                    <p class="text-xs text-primary/50 font-light leading-relaxed mb-6">Soluciones legales sofisticadas
                      para desafíos corporativos complejos.</p>
                    <router-link to="/servicios"
                      class="text-primary font-label text-[9px] font-bold tracking-widest uppercase no-underline flex items-center gap-2 group/link hover:text-secondary transition-colors"
                      @click="activeMegaMenu = null">
                      Ver todos
                      <span
                        class="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">east</span>
                    </router-link>
                  </div>
                  <div class="col-span-3 grid grid-cols-3 gap-x-6 gap-y-8">
                    <router-link v-for="service in services.slice(0, 6)" :key="service.slug"
                      :to="`/servicios/${service.slug}`"
                      class="group/item no-underline p-4 hover:bg-[#f5efed] transition-all duration-500 border border-transparent hover:border-primary/5 rounded-sm"
                      @click="activeMegaMenu = null">
                      <div class="flex flex-col gap-3">
                        <span
                          class="material-symbols-outlined text-secondary text-xl group-hover/item:scale-110 transition-transform duration-500">{{
                            service.icon }}</span>
                        <h4
                          class="font-headline text-sm text-primary font-bold group-hover/item:text-secondary transition-colors">
                          {{ service.title }}</h4>
                        <p class="text-[10px] text-primary/40 font-light leading-relaxed line-clamp-2">{{
                          service.description }}</p>
                      </div>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>

        <!-- Equipo -->
        <div @mouseenter="openMegaMenu('team')" @mouseleave="closeMegaMenu" class="h-full flex items-center">
          <router-link to="/equipo" class="nav-link flex items-center gap-1" active-class="active"
            :class="{ active: activeMegaMenu === 'team' }">
            Equipo
            <span class="material-symbols-outlined text-[13px] transition-transform duration-300"
              :class="{ 'rotate-180': activeMegaMenu === 'team' }">expand_more</span>
          </router-link>

          <Transition name="mega">
            <div v-if="activeMegaMenu === 'team'" class="mega-menu" @mouseenter="openMegaMenu('team')"
              @mouseleave="closeMegaMenu">
              <div class="absolute top-0 left-0 w-full h-[2px] bg-secondary"></div>
              <div class="mega-menu-container">
                <div class="grid grid-cols-4 gap-12">
                  <div class="col-span-1 border-r border-primary/5 pr-12">
                    <p class="font-label text-[9px] tracking-[0.3em] uppercase text-secondary font-semibold mb-2">
                      Directorio</p>
                    <h3 class="font-headline text-2xl text-primary font-bold mb-4">Nuestro Equipo</h3>
                    <p class="text-xs text-primary/50 font-light leading-relaxed mb-6">Liderazgo y experiencia técnica
                      al servicio de su organización.</p>
                    <router-link to="/equipo"
                      class="text-primary font-label text-[9px] font-bold tracking-widest uppercase no-underline flex items-center gap-2 group/link hover:text-secondary transition-colors"
                      @click="activeMegaMenu = null">
                      Ver todo el equipo
                      <span
                        class="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">east</span>
                    </router-link>
                  </div>
                  <div class="col-span-3 grid grid-cols-2 gap-6">
                    <router-link v-for="partner in partners" :key="partner.slug" :to="`/equipo/${partner.slug}`"
                      class="group/partner flex items-center gap-6 p-4 hover:bg-[#f5efed] transition-all duration-500 border border-transparent hover:border-primary/5 rounded-sm no-underline"
                      @click="activeMegaMenu = null">
                      <div class="w-34 h-45 overflow-hidden shadow-md">
                        <img :src="partner.image" :alt="partner.nombre"
                          class="w-full h-full object-cover object-[center_25%] group-hover/partner:scale-110 transition-transform duration-700">
                      </div>
                      <div class="flex-1 py-1">
                        <p style="font-size: 14px;"
                          class="font-label text-[8px] text-secondary font-bold tracking-widest mb-1">{{
                            partner.roleLabel }}</p>
                        <h3 class="font-headline text-lg text-primary font-bold mb-1">{{ partner.nombre }}</h3>
                        <p style="font-size: 14px;" class="text-[8px] text-primary/60 font-light italic mb-2">{{
                          partner.specialty }}</p>
                        <p style="font-size: 14px;"
                          class="text-[8px] text-primary/60 font-light leading-relaxed line-clamp-2">{{
                            partner.description }}</p>
                      </div>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>

        <!-- Publicaciones -->
        <div @mouseenter="openMegaMenu('publicaciones')" @mouseleave="closeMegaMenu" class="h-full flex items-center">
          <router-link to="/publicaciones" class="nav-link flex items-center gap-1" active-class="active"
            :class="{ active: activeMegaMenu === 'publicaciones' }">
            Publicaciones
            <span class="material-symbols-outlined text-[13px] transition-transform duration-300"
              :class="{ 'rotate-180': activeMegaMenu === 'publicaciones' }">expand_more</span>
          </router-link>

          <Transition name="mega">
            <div v-if="activeMegaMenu === 'publicaciones'" class="mega-menu" @mouseenter="openMegaMenu('publicaciones')"
              @mouseleave="closeMegaMenu">
              <div class="absolute top-0 left-0 w-full h-[2px] bg-secondary"></div>
              <div class="mega-menu-container">
                <div class="grid grid-cols-4 gap-12">
                  <div class="col-span-1 border-r border-primary/5 pr-12">
                    <p class="font-label text-[9px] tracking-[0.3em] uppercase text-secondary font-semibold mb-2">
                      Publicaciones</p>
                    <h3 class="font-headline text-2xl text-primary font-bold mb-4">Actualidad</h3>
                    <p class="text-xs text-primary/50 font-light leading-relaxed mb-6">Análisis y publicaciones estratégicas
                      sobre el panorama legal.</p>
                    <router-link to="/publicaciones"
                      class="text-primary font-label text-[9px] font-bold tracking-widest uppercase no-underline flex items-center gap-2 group/link hover:text-secondary transition-colors"
                      @click="activeMegaMenu = null">
                      Ver todas
                      <span
                        class="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">east</span>
                    </router-link>
                  </div>
                  <div class="col-span-3 grid grid-cols-3 gap-6">
                    <router-link v-for="item in publicacionesList.slice(0, 3)" :key="item.slug" :to="`/publicaciones/${item.slug}`"
                      class="group/publicaciones no-underline flex flex-col gap-3 p-2 hover:bg-[#f5efed] transition-all duration-500"
                      @click="activeMegaMenu = null">
                      <div class="aspect-video overflow-hidden shadow-sm">
                        <img :src="item.image" :alt="item.title"
                          class="w-full h-full object-cover group-hover/publicaciones:scale-110 transition-transform duration-700">
                      </div>
                      <div>
                        <div class="flex items-center gap-2 mb-1">
                          <span class="text-[7px] font-label font-bold text-secondary tracking-widest uppercase">{{
                            item.category }}</span>
                          <span class="w-0.5 h-0.5 bg-primary/10 rounded-full"></span>
                          <span class="text-[7px] font-label font-medium text-primary/30 uppercase tracking-widest">{{
                            item.date }}</span>
                        </div>
                        <h4
                          class="font-headline text-[11px] text-primary font-bold group-hover/publicaciones:text-secondary transition-colors leading-snug line-clamp-2">
                          {{ item.title }}</h4>
                      </div>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>

        <router-link to="/contacto" class="nav-link" active-class="active">Contacto</router-link>
      </div>

      <!-- CTA & Flags -->
      <div class="flex items-center gap-1.5 sm:gap-4 xl:gap-6 relative z-[60]">
        <div class="flex items-center gap-1.5 sm:gap-4">
          <div class="relative group/lang" @mouseenter="openLang" @mouseleave="closeLang">
            <button class="flex items-center gap-1 cursor-pointer border-0 bg-transparent p-0 group">
              <img :src="`https://flagcdn.com/w40/${lang === 'es' ? 'es' : 'gb'}.png`" :alt="lang"
                class="h-3 md:h-3.5 w-auto rounded-[1px]" />
              <span
                class="hidden sm:inline font-label text-[9px] md:text-[10px] font-medium tracking-[0.12em] uppercase text-primary/60 group-hover:text-primary transition-colors duration-300">{{
                  lang.toUpperCase() }}</span>
              <span
                class="material-symbols-outlined text-[10px] md:text-[11px] text-primary/30 transition-transform duration-300"
                :class="{ 'rotate-180': isLangOpen }">expand_more</span>
            </button>
            <Transition name="lang-drop">
              <div v-if="isLangOpen"
                class="lang-dropdown absolute top-full right-0 lg:left-0 mt-0 pt-3 bg-transparent z-50"
                @mouseenter="openLang" @mouseleave="closeLang">
                <div class="bg-white border border-primary/8 shadow-sm py-1 min-w-[80px] md:min-w-[90px]">
                  <button @click="setLang('es')"
                    class="flex items-center gap-2 w-full px-2 md:px-3 py-2 cursor-pointer border-0 bg-transparent hover:bg-primary/3 transition-colors"
                    :class="lang === 'es' ? 'opacity-100' : 'opacity-50 hover:opacity-100'">
                    <img src="https://flagcdn.com/w40/es.png" alt="ES" class="h-3 md:h-3.5 w-auto rounded-[2px]" />
                    <span
                      class="font-label text-[9px] md:text-[10px] font-medium tracking-[0.12em] uppercase text-primary">ES</span>
                  </button>
                  <button @click="setLang('en')"
                    class="flex items-center gap-2 w-full px-2 md:px-3 py-2 cursor-pointer border-0 bg-transparent hover:bg-primary/3 transition-colors"
                    :class="lang === 'en' ? 'opacity-100' : 'opacity-50 hover:opacity-100'">
                    <img src="https://flagcdn.com/w40/gb.png" alt="EN" class="h-3 md:h-3.5 w-auto rounded-[2px]" />
                    <span
                      class="font-label text-[9px] md:text-[10px] font-medium tracking-[0.12em] uppercase text-primary">EN</span>
                  </button>
                </div>
              </div>
            </Transition>
          </div>
          <div class="hidden xl:flex items-center gap-4">
            <div class="w-px h-3 md:h-4 bg-primary/10"></div>

            <!-- Botón Admin / Login -->
            <router-link v-if="!isAuthenticated" to="/login"
              class="text-primary/40 hover:text-secondary transition-colors flex items-center"
              title="Acceso Administrativo">
              <span class="material-symbols-outlined text-[16px] md:text-[18px]">admin_panel_settings</span>
            </router-link>

            <div v-else class="flex items-center gap-2 md:gap-3">
              <router-link to="/admin/publicaciones"
                class="hidden sm:inline text-[9px] md:text-[10px] font-label font-bold uppercase tracking-widest text-secondary hover:text-primary transition-colors">
                Panel
              </router-link>
              <button @click="handleLogout" class="text-primary/40 hover:text-red-500 transition-colors"
                title="Cerrar Sesión">
                <span class="material-symbols-outlined text-[16px] md:text-[18px]">logout</span>
              </button>
            </div>
          </div>
        </div>

        <router-link to="/contacto" class="no-underline">
          <button
            class="font-label text-[9px] md:text-[10px] lg:text-[11px] font-semibold tracking-[0.05em] sm:tracking-[0.16em] uppercase text-white bg-primary px-2 sm:px-5 lg:px-7 py-2 md:py-3 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 transition-all duration-500 cursor-pointer border-0 whitespace-nowrap">
            <span class="sm:hidden">Consulta</span>
            <span class="hidden sm:inline">Consulta Inicial</span>
          </button>
        </router-link>

        <!-- Hamburger (Mobile) -->
        <button @click="toggleMenu" aria-label="Abrir menú"
          class="xl:hidden flex flex-col gap-1.5 p-2 focus:outline-none relative z-[210]">
          <span class="w-5 md:w-6 h-0.5 bg-primary transition-all duration-300 origin-center"
            :class="{ 'rotate-45 translate-y-2': isMenuOpen }"></span>
          <span class="w-3 md:w-4 h-0.5 bg-primary transition-all duration-300 ml-auto"
            :class="{ 'opacity-0': isMenuOpen }"></span>
          <span class="w-5 md:w-6 h-0.5 bg-primary transition-all duration-300 origin-center"
            :class="{ '-rotate-45 -translate-y-2': isMenuOpen }"></span>
        </button>
      </div>
    </div>

 
<Transition name="fullmenu">
  <div v-if="isMenuOpen" class="fixed inset-0 z-[200] bg-[#1e3032] flex flex-col lg:flex-row">

    <!-- Botón cerrar -->
    <button @click="toggleMenu" aria-label="Cerrar menú"
      class="absolute top-6 right-6 sm:top-8 sm:right-10 z-20 flex items-center gap-2 text-white/70 hover:text-white transition-colors border-0 bg-transparent cursor-pointer">
      <span class="font-label text-[10px] tracking-widest uppercase hidden sm:inline">Cerrar</span>
      <span class="material-symbols-outlined text-2xl">close</span>
    </button>

    <!-- Logo arriba a la izquierda -->
    <div class="absolute top-6 left-6 sm:top-8 sm:left-10 z-20">
      <img src="/img/logos/logoprin.png" alt="ER Abogados" class="h-8 sm:h-10 w-auto brightness-0 invert" />
    </div>

    <!-- Columna links -->
    <div class="flex-1 flex flex-col justify-center px-8 sm:px-16 lg:px-24 py-32">
      <nav class="flex flex-col gap-6 sm:gap-8">
        <router-link to="/" @click="toggleMenu"
          class="text-3xl sm:text-4xl lg:text-5xl font-light text-white/60 hover:text-white transition-colors no-underline"
          active-class="!text-white !font-normal">
          Inicio
        </router-link>
        <router-link to="/nosotros" @click="toggleMenu"
          class="text-3xl sm:text-4xl lg:text-5xl font-light text-white/60 hover:text-white transition-colors no-underline"
          active-class="!text-white !font-normal">
          Nosotros
        </router-link>
        <router-link to="/equipo" @click="toggleMenu"
          class="text-3xl sm:text-4xl lg:text-5xl font-light text-white/60 hover:text-white transition-colors no-underline border-l-2 border-[#aa8d79] pl-4 -ml-4"
          active-class="!text-white !font-normal">
          Equipo Jurídico
        </router-link>
        <router-link to="/servicios" @click="toggleMenu"
          class="text-3xl sm:text-4xl lg:text-5xl font-light text-white/60 hover:text-white transition-colors no-underline"
          active-class="!text-white !font-normal">
          Servicios Legales
        </router-link>
        <router-link to="/publicaciones" @click="toggleMenu"
          class="text-3xl sm:text-4xl lg:text-5xl font-light text-white/60 hover:text-white transition-colors no-underline flex items-center gap-3">
          Publicaciones
          <span class="material-symbols-outlined text-2xl text-white/40">add</span>
        </router-link>
        <router-link to="/contacto" @click="toggleMenu"
          class="text-3xl sm:text-4xl lg:text-5xl font-light text-white/60 hover:text-white transition-colors no-underline"
          active-class="!text-white !font-normal">
          Contacto
        </router-link>
      </nav>

      <!-- Redes sociales abajo -->
      <div class="mt-16 flex items-center gap-6">
        <a href="#" target="_blank" class="text-white/50 hover:text-white transition-colors">
          <span class="material-symbols-outlined text-xl">alternate_email</span>
        </a>
        <a href="#" target="_blank" class="text-white/50 hover:text-white transition-colors">
          <span class="material-symbols-outlined text-xl">share</span>
        </a>
      </div>
    </div>

    <!-- Imagen lateral (solo desktop/tablet) -->
    <div class="hidden lg:block lg:w-[35%] relative overflow-hidden">
      <img src="/img/nosotros/hero.avif" alt="ER Abogados oficina"
        class="absolute inset-0 w-full h-full object-cover" />
      <div class="absolute inset-0 bg-[#1e3032]/20"></div>
    </div>

  </div>
</Transition>
  </nav>
</template>

<style scoped>
.nav-link {
  font-family: var(--font-label);
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: color-mix(in srgb, var(--color-primary) 60%, transparent);
  text-decoration: none;
  border-bottom: 1px solid transparent;
  padding-bottom: 0.25rem;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.nav-link:hover,
.nav-link.active {
  color: var(--color-primary);
  border-bottom-color: var(--color-secondary);
}

.mega-menu {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: white;
  border-top: 1px solid color-mix(in srgb, var(--color-primary) 7%, transparent);
  box-shadow: 0 20px 50px -10px color-mix(in srgb, var(--color-primary) 15%, transparent);
  z-index: 200;
}

.mega-menu-container {
  max-width: 1600px;
  margin: 0 auto;
  padding: 3rem 5rem;
}

.mega-menu::before {
  content: '';
  position: absolute;
  top: -20px;
  left: 0;
  width: 100%;
  height: 20px;
}

.mobile-nav-link {
  display: block;
  font-family: var(--font-label);
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: color-mix(in srgb, var(--color-primary) 40%, transparent);
  text-decoration: none;
  padding: 0.75rem 1rem;
  transition: all 0.25s ease;
  background: transparent;
  border: none;
  cursor: pointer;
  width: 100%;
  text-align: left;
}

.mobile-nav-link:hover,
.mobile-nav-link.active {
  color: var(--color-primary);
}

.mega-enter-active,
.mega-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.mega-enter-from,
.mega-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

.lang-drop-enter-active,
.lang-drop-leave-active {
  transition: opacity 0.15s ease, transform 0.15s ease;
}

.lang-drop-enter-from,
.lang-drop-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}

.drawer-enter-active,
.drawer-leave-active {
  transition: opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.drawer-enter-from,
.drawer-leave-to {
  opacity: 0;
}

.drawer-enter-active .drawer-inner,
.drawer-leave-active .drawer-inner {
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.drawer-enter-from .drawer-inner,
.drawer-leave-to .drawer-inner {
  transform: translateX(100%);
}

.accordion-enter-active,
.accordion-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.accordion-enter-from,
.accordion-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}

.line-clamp-1 {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
