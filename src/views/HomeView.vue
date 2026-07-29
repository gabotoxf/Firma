<script setup>
<<<<<<< Updated upstream
import PublicacionesHero from '../components/PublicacionesHero.vue'
import AboutUs from '../components/AboutUs.vue'
import PartnersSection from '../components/PartnersSection.vue'
import CaseStudies from '../components/CaseStudies.vue'
=======
import HeroSection from '../components/HeroSection.vue'
import StatsSection from '@/components/StatsSection.vue'
import AboutUs from '../components/AboutUs.vue'
import CaseStudies from '../components/CaseStudies.vue'
import PartnersSection from '../components/PartnersSection.vue'
import ServicesPortfolio from '../components/ServicesPortfolio.vue'
>>>>>>> Stashed changes
import ClientsSlider from '../components/ClientsSlider.vue'
</script>

<template>
  <main>
<<<<<<< Updated upstream
    <PublicacionesHero />
    <AboutUs />
    <PartnersSection />
=======
    <HeroSection videoSrc="/img/hero-background.mp4" posterSrc="/img/nosotros/hero.avif" />
    <!-- Experiencia y trayectoria primero -->
    <StatsSection />
    <AboutUs />
>>>>>>> Stashed changes
    <CaseStudies />
    <PartnersSection />
    <!-- Servicios después de autoridad y experiencia -->
    <ServicesPortfolio />
    <ClientsSlider />
  </main>
</template>
