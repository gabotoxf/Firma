<script setup>
import SiteNavbar from '../components/SiteNavbar.vue'
import Footer from '../components/Footer.vue'
</script>

<template>
  <SiteNavbar startScrolled />
  <div class="min-h-screen bg-background">
    <router-view />
  </div>
  <Footer />
</template>
