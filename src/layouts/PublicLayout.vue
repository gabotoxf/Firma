<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import SiteNavbar from '../components/SiteNavbar.vue'
import Footer from '../components/Footer.vue'

const route = useRoute()
const isHome = computed(() => route.path === '/')
</script>

<template>
  <SiteNavbar :startScrolled="!isHome" />
  <div class="min-h-screen bg-background">
    <router-view />
  </div>
  <Footer />
</template>
