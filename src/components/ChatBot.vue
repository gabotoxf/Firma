<script setup>
import { ref, nextTick } from 'vue'

// Cambia esto por la URL real de tu backend en producción
const API_URL = import.meta.env.VITE_API_URL
  ? `${import.meta.env.VITE_API_URL}/api/chat-firma`
  : 'http://localhost:3000/api/chat-firma'

const abierto = ref(false)
const mensajes = ref([
  { role: 'assistant', content: 'Hola, soy el asistente virtual de ER Abogados. ¿En qué puedo ayudarte?' }
])
const textoInput = ref('')
const enviando = ref(false)
const contenedorMensajes = ref(null)

const toggleChat = () => {
  abierto.value = !abierto.value
}

const scrollAbajo = async () => {
  await nextTick()
  if (contenedorMensajes.value) {
    contenedorMensajes.value.scrollTop = contenedorMensajes.value.scrollHeight
  }
}

const enviarMensaje = async () => {
  const texto = textoInput.value.trim()
  if (!texto || enviando.value) return

  mensajes.value.push({ role: 'user', content: texto })
  textoInput.value = ''
  enviando.value = true
  scrollAbajo()

  try {
    // historial sin el mensaje que se acaba de agregar (el backend lo añade aparte)
    const historial = mensajes.value.slice(0, -1).map(m => ({ role: m.role, content: m.content }))

    const res = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ mensaje: texto, historial })
    })

    if (!res.ok) throw new Error('Error de red')

    const data = await res.json()
    mensajes.value.push({ role: 'assistant', content: data.respuesta })
  } catch (err) {
    mensajes.value.push({
      role: 'assistant',
      content: 'Lo siento, hubo un problema al procesar tu mensaje. Intenta de nuevo en un momento.'
    })
  } finally {
    enviando.value = false
    scrollAbajo()
  }
}
</script>

<template>
  <!-- Botón flotante -->
  <button
    @click="toggleChat"
    class="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary text-white shadow-lg flex items-center justify-center hover:bg-primary/90 transition-colors duration-300"
    aria-label="Abrir chat"
  >
    <span v-if="!abierto" class="material-symbols-outlined text-[26px]">chat</span>
    <span v-else class="material-symbols-outlined text-[26px]">close</span>
  </button>

  <!-- Ventana de chat -->
  <transition name="fade-up">
    <div
      v-if="abierto"
      class="fixed bottom-24 right-6 z-50 w-[340px] max-w-[90vw] h-[460px] max-h-[70vh] bg-white shadow-2xl flex flex-col overflow-hidden"
    >
      <!-- Header -->
      <div class="bg-primary px-5 py-4 flex items-center gap-2">
        <div class="w-5 h-px bg-secondary"></div>
        <span class="font-label text-[10px] tracking-[0.3em] uppercase text-secondary">ER Abogados</span>
      </div>

      <!-- Mensajes -->
      <div ref="contenedorMensajes" class="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3 bg-gray-50">
        <div
          v-for="(msg, i) in mensajes"
          :key="i"
          :class="msg.role === 'user' ? 'self-end bg-primary text-white' : 'self-start bg-white text-primary border border-gray-200'"
          class="max-w-[85%] px-3.5 py-2.5 text-[13px] leading-relaxed rounded-sm"
        >
          {{ msg.content }}
        </div>
        <div v-if="enviando" class="self-start bg-white text-gray-400 border border-gray-200 px-3.5 py-2.5 text-[13px] rounded-sm">
          Escribiendo...
        </div>
      </div>

      <!-- Input -->
      <form @submit.prevent="enviarMensaje" class="flex items-center border-t border-gray-200 bg-white">
        <input
          v-model="textoInput"
          type="text"
          placeholder="Escribe tu pregunta..."
          class="flex-1 px-4 py-3 text-[13px] outline-none font-label"
          :disabled="enviando"
        />
        <button
          type="submit"
          :disabled="enviando || !textoInput.trim()"
          class="px-4 py-3 text-primary disabled:opacity-30 hover:text-secondary transition-colors"
          aria-label="Enviar mensaje"
        >
          <span class="material-symbols-outlined text-[20px]">send</span>
        </button>
      </form>
    </div>
  </transition>
</template>

<style scoped>
.fade-up-enter-active,
.fade-up-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.fade-up-enter-from,
.fade-up-leave-to {
  opacity: 0;
  transform: translateY(12px);
}
</style>