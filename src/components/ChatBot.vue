<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import { CHATBOT_SYSTEM_PROMPT, QUICK_QUESTIONS } from '../data/chatbotPrompt.js'

const apiKey = import.meta.env.VITE_OPENAI_API_KEY || ''
const OPENAI_URL = 'https://api.openai.com/v1/chat/completions'
const MODEL = 'gpt-5.4'

const isOpen = ref(false)
const messages = ref([])
const userInput = ref('')
const loading = ref(false)
const showSuggestions = ref(false)
const apiConfigured = ref(!!apiKey)
const chatInput = ref(null)

const escapeHtml = (text) => {
  const div = document.createElement('div')
  div.textContent = text
  return div.innerHTML
}

const renderMessage = (content) => {
  return escapeHtml(content)
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\n/g, '<br>')
}

const addGreeting = () => {
  if (messages.value.length > 0) return
  const greeting = apiConfigured.value
    ? '¡Hola! 👋 Soy el asistente virtual de **ER-Abogados.** Estoy aquí para ayudarte con información sobre nuestros servicios legales, nuestro equipo y cualquier consulta que tengas. ¿En qué puedo ayudarte hoy?'
    : '⚠️ El asistente virtual no está disponible en este momento porque falta configurar la clave de API. Por favor, contacta al administrador del sitio para activar esta funcionalidad.'
  messages.value.push({ role: 'assistant', content: greeting })
}

const handleKeydown = (e) => {
  if (e.key === 'Escape' && isOpen.value) {
    isOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
  setTimeout(() => {
    isOpen.value = true
    addGreeting()
    nextTick(() => chatInput.value?.focus())
  }, 5000)
})

const toggleChat = () => {
  isOpen.value = !isOpen.value
  if (isOpen.value) {
    addGreeting()
    nextTick(() => chatInput.value?.focus())
  } else {
    nextTick(() => document.querySelector('.fab-button')?.focus())
  }
}

const sendMessage = async (text = null) => {
  const messageText = text ?? userInput.value
  if (!messageText.trim() || loading.value) return
  if (!text) userInput.value = ''
  messages.value.push({ role: 'user', content: messageText })
  loading.value = true

  if (!apiConfigured.value) {
    messages.value.push({
      role: 'assistant',
      content: 'Lo siento, el asistente no está configurado correctamente. Por favor, contacta al administrador del sitio o escríbenos directamente al **+57 3242757680**.'
    })
    loading.value = false
    await scrollToBottom()
    return
  }

  const conversationHistory = [
    { role: 'system', content: CHATBOT_SYSTEM_PROMPT },
    ...messages.value.slice(-10).map(m => ({ role: m.role, content: m.content }))
  ]

  try {
    const response = await fetch(OPENAI_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: MODEL,
        messages: conversationHistory,
        temperature: 0.6,
        max_completion_tokens: 1200
      })
    })

    if (!response.ok) {
      const errData = await response.json().catch(() => ({}))
      throw new Error(errData.error?.message || `Error ${response.status}`)
    }

    const data = await response.json()
    const assistantMessage = data.choices[0].message.content
    if (assistantMessage) {
      messages.value.push({ role: 'assistant', content: assistantMessage })
    }
  } catch (err) {
    console.error('ChatBot error:', err)
    messages.value.push({
      role: 'assistant',
      content: 'Lo siento, estoy teniendo problemas para conectarme. Por favor intenta de nuevo más tarde o contáctanos directamente al **+57 3242757680**.'
    })
  } finally {
    loading.value = false
    await scrollToBottom()
  }
}

const scrollToBottom = async () => {
  await nextTick()
  const container = document.querySelector('.chat-messages')
  if (container) container.scrollTop = container.scrollHeight
}

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
})

const handleQuickQuestion = (question) => {
  sendMessage(question)
}
</script>

<template>
  <Teleport to="body">
    <!-- FAB button -->
    <Transition
      enter-active-class="transition-all duration-500 ease-out"
      enter-from-class="opacity-0 scale-0"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-50"
    >
      <button
        v-if="!isOpen"
        @click="toggleChat"
        class="fab-button fixed bottom-6 right-6 z-50 flex items-center gap-2 pl-5 pr-6 h-14 cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95 bg-primary border border-secondary/40 shadow-xl shadow-primary/20 rounded-full"
        aria-label="Abrir chat"
      >
        <span class="material-symbols-outlined text-secondary text-2xl">gavel</span>
        <span class="font-label text-[10px] tracking-[0.15em] uppercase text-white font-semibold">JurisBot</span>
      </button>
    </Transition>

    <!-- Chat Window -->
    <Transition
      enter-active-class="transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
      enter-from-class="opacity-0 scale-75 translate-y-8"
      enter-to-class="opacity-100 scale-100 translate-y-0"
      leave-active-class="transition-all duration-300 ease-in"
      leave-from-class="opacity-100 scale-100 translate-y-0"
      leave-to-class="opacity-0 scale-90 translate-y-4"
    >
      <div
        v-if="isOpen"
        class="fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-2rem)] h-[560px] max-h-[calc(100vh-6rem)] bg-white flex flex-col overflow-hidden border border-primary/10 shadow-2xl shadow-primary/15"
        style="transform-origin: bottom right;"
      >
        <!-- Header -->
        <div class="flex-shrink-0 bg-primary px-6 py-5 flex items-center justify-between border-b border-secondary/20">
          <div class="flex items-center gap-4">
            <div class="w-10 h-10 border border-secondary/40 flex items-center justify-center">
              <span class="material-symbols-outlined text-secondary text-xl">gavel</span>
            </div>
            <div>
              <h3 class="font-headline text-white text-base leading-tight">ER-Abogados</h3>
              <p class="font-label text-[9px] tracking-[0.2em] uppercase text-secondary/70 mt-0.5">Asistente Virtual</p>
            </div>
          </div>
          <button
            @click="toggleChat"
            class="w-8 h-8 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer border-0"
            aria-label="Cerrar chat"
          >
            <span class="material-symbols-outlined text-white/60 hover:text-white text-lg transition-colors">close</span>
          </button>
        </div>

        <!-- Messages -->
        <div class="flex-1 overflow-y-auto p-5 space-y-4 chat-messages bg-white">
          <div v-for="(msg, index) in messages" :key="index" class="flex" :class="msg.role === 'user' ? 'justify-end' : 'justify-start'">
            <div
              class="max-w-[85%] px-4 py-3 text-sm leading-relaxed"
              :class="msg.role === 'user'
                ? 'bg-primary text-white'
                : 'bg-primary/5 text-primary/80 border border-primary/10'"
            >
              <div v-if="msg.role === 'assistant'" class="flex items-start gap-3">
                <div class="w-6 h-6 border border-secondary/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span class="material-symbols-outlined text-secondary text-xs">gavel</span>
                </div>
                <div v-html="renderMessage(msg.content)"></div>
              </div>
              <p v-else class="font-light">{{ msg.content }}</p>
            </div>
          </div>

          <!-- Loading -->
          <div v-if="loading" class="flex justify-start">
            <div class="bg-primary/5 border border-primary/10 px-4 py-3">
              <div class="flex items-center gap-3">
                <div class="w-6 h-6 border border-secondary/30 flex items-center justify-center">
                  <span class="material-symbols-outlined text-secondary text-xs">gavel</span>
                </div>
                <div class="flex gap-1.5">
                  <span class="w-2 h-2 bg-secondary/60 rounded-full animate-bounce" style="animation-delay:0ms"></span>
                  <span class="w-2 h-2 bg-secondary/60 rounded-full animate-bounce" style="animation-delay:150ms"></span>
                  <span class="w-2 h-2 bg-secondary/60 rounded-full animate-bounce" style="animation-delay:300ms"></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Quick questions -->
        <div v-if="!loading" class="flex-shrink-0 bg-white border-t border-primary/5">
          <button
            @click="showSuggestions = !showSuggestions"
            class="w-full flex items-center justify-between px-5 py-2.5 font-label text-[9px] tracking-[0.2em] uppercase text-primary/40 hover:text-secondary transition-colors cursor-pointer border-0"
          >
            <span class="flex items-center gap-2">
              <span class="material-symbols-outlined text-sm text-secondary">lightbulb</span>
              Sugerencias
            </span>
            <span
              class="material-symbols-outlined text-sm transition-transform duration-300"
              :class="showSuggestions ? 'rotate-180' : ''"
            >expand_more</span>
          </button>
          <Transition
            enter-active-class="transition-all duration-300 ease-out"
            enter-from-class="opacity-0 max-h-0"
            enter-to-class="opacity-100 max-h-40"
            leave-active-class="transition-all duration-200 ease-in"
            leave-from-class="opacity-100 max-h-40"
            leave-to-class="opacity-0 max-h-0"
          >
            <div v-if="showSuggestions" class="overflow-hidden">
              <div class="flex flex-wrap gap-1.5 px-5 pb-4">
                <button
                  v-for="(q, i) in QUICK_QUESTIONS"
                  :key="i"
                  @click="handleQuickQuestion(q)"
                  class="font-label text-[9px] tracking-[0.1em] px-3 py-1.5 border border-secondary/30 text-secondary hover:bg-secondary hover:text-white transition-all duration-200 cursor-pointer"
                >
                  {{ q }}
                </button>
              </div>
            </div>
          </Transition>
        </div>

        <!-- Input -->
        <div class="flex-shrink-0 px-5 py-4 bg-white border-t border-primary/5">
          <form @submit.prevent="sendMessage()" class="flex items-center gap-3">
            <input
              ref="chatInput"
              v-model="userInput"
              type="text"
              placeholder="Escribe tu mensaje..."
              class="flex-1 px-4 py-2.5 font-body text-sm text-primary border border-primary/10 focus:outline-none focus:border-secondary/50 bg-primary/[0.02] transition-all placeholder:text-primary/20"
              :disabled="loading"
            />
            <button
              type="submit"
              :disabled="loading || !userInput.trim()"
              class="w-10 h-10 flex items-center justify-center transition-all duration-200 cursor-pointer border-0"
              :class="loading || !userInput.trim()
                ? 'bg-primary/5 text-primary/20'
                : 'bg-primary text-secondary hover:bg-primary/90'"
              aria-label="Enviar mensaje"
            >
              <span class="material-symbols-outlined text-lg">arrow_forward</span>
            </button>
          </form>
        </div>

        <!-- Badge -->
        <div class="flex-shrink-0 bg-primary/[0.02] px-5 py-2 text-center border-t border-primary/5">
          <span class="font-label text-[8px] tracking-[0.2em] uppercase text-primary/30">Asistente con IA · ER-Abogados 2026</span>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.chat-messages::-webkit-scrollbar {
  width: 4px;
}
.chat-messages::-webkit-scrollbar-track {
  background: transparent;
}
.chat-messages::-webkit-scrollbar-thumb {
  background: rgba(197, 160, 89, 0.3);
}
.chat-messages::-webkit-scrollbar-thumb:hover {
  background: rgba(197, 160, 89, 0.5);
}
</style>
