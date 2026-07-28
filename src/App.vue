<script setup>
import { ref, onMounted } from 'vue'
import { Toaster } from 'vue-sonner'
import Loader from './components/Loader.vue'

const loading = ref(true)

onMounted(() => {
  setTimeout(() => {
    loading.value = false
  }, 1500)
})
</script>

<template>
  <Loader v-if="loading" />
  <div v-else>
    <RouterView />
    <Toaster />
  </div>
</template>
