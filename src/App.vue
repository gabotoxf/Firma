<script setup>
import { Toaster } from 'vue-sonner'
import ChatBot from './components/ChatBot.vue'
</script>

<template>
  <RouterView />
  <Toaster />
  <ChatBot />
</template>
