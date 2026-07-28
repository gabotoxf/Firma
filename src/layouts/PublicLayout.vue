<script setup>
// Layout para el sitio público con Navbar y Footer
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
</script>

<template>
  <Navbar />
  <div class="min-h-screen bg-background">
    <router-view />
  </div>
  <Footer />
</template>
