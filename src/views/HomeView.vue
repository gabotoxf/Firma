<script setup>
import PublicacionesHero from '../components/PublicacionesHero.vue'
import AboutUs from '../components/AboutUs.vue'
import ServicesPortfolio from '../components/ServicesPortfolio.vue'
import PartnersSection from '../components/PartnersSection.vue'
import CaseStudies from '../components/CaseStudies.vue'

import HeroSection from '../components/HeroSection.vue'
import StatsSection from '@/components/StatsSection.vue'
import AboutUs from '../components/AboutUs.vue'
import CaseStudies from '../components/CaseStudies.vue'
import PartnersSection from '../components/PartnersSection.vue'
import ServicesPortfolio from '../components/ServicesPortfolio.vue'
import ClientsSlider from '../components/ClientsSlider.vue'
import StatsSection from '@/components/StatsSection.vue'
</script>

<template>
  <main>
    <PublicacionesHero />
    <AboutUs />
    <ServicesPortfolio />
    <PartnersSection />
    <StatsSection />
    <CaseStudies />
    <PartnersSection />
    <!-- Servicios después de autoridad y experiencia -->
    <ServicesPortfolio />
    <ClientsSlider />
  </main>
</template>
