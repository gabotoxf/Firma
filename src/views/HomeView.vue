<script setup>
import HeroSection from '../components/HeroSection.vue'
import AboutUs from '@/components/AboutUs.vue'
import StatsSection from '@/components/StatsSection.vue'
import CaseStudies from '@/components/CaseStudies.vue'
import PartnersSection from '@/components/PartnersSection.vue'
import ServicesPortfolio from '@/components/ServicesPortfolio.vue'
import ClientsSlider from '@/components/ClientsSlider.vue'
</script>

<template>
  <main>
    <HeroSection videoSrc="/img/hero-background.mp4" posterSrc="/img/nosotros/hero.avif" />
    <StatsSection />
    <AboutUs />
    <CaseStudies />
    <PartnersSection />
    <ServicesPortfolio />
    <ClientsSlider />
  </main>
</template>
