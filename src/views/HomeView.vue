<script setup>
import HeroSection from '../components/HeroSection.vue'
import AboutUs from '../components/AboutUs.vue'
import PartnersSection from '../components/PartnersSection.vue'
import CaseStudies from '../components/CaseStudies.vue'
import ClientsSlider from '../components/ClientsSlider.vue'
import StatsSection from '@/components/StatsSection.vue'
</script>

<template>
  <main>
    <HeroSection videoSrc="/img/hero-background.mp4" posterSrc="/img/nosotros/hero.avif" />
    <AboutUs />
    <PartnersSection />
    <StatsSection />
    <CaseStudies />
    <ClientsSlider />
  </main>
</template>
