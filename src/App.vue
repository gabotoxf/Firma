<script setup>
import { ref, onMounted } from 'vue'
import { Toaster } from 'vue-sonner'
import Loader from './components/Loader.vue'
import ChatBot from './components/ChatBot.vue'
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
    <ChatBot />
  </div>
</template>
