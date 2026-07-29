<script setup>
import { useRoute } from 'vue-router'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'

const route = useRoute()
const isHome = () => route.name === 'home'
</script>

<template>
  <Navbar v-if="!isHome()" />
  <div class="min-h-screen bg-background">
    <router-view />
  </div>
  <Footer />
</template>
