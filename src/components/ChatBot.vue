<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import { CHATBOT_SYSTEM_PROMPT, QUICK_QUESTIONS } from '../data/chatbotPrompt.js'

// Soporte para múltiples API Keys con fallback automático si se agota la cuota
const getApiKeys = () => {
  const keys = []
  
  // 1. Clave principal (permite múltiples separadas por comas)
  const mainKey = import.meta.env.VITE_OPENAI_API_KEY
  if (mainKey) {
    mainKey.split(',').forEach(k => {
      const trimmed = k.trim()
      if (trimmed && !keys.includes(trimmed)) keys.push(trimmed)
    })
  }

  // 2. Claves secundarias (VITE_GROQ_API_KEY_2, VITE_GROQ_API_KEY_3, etc.)
  for (let i = 2; i <= 10; i++) {
    const key = import.meta.env[`VITE_OPENAI_API_KEY_${i}`]?.trim()
    if (key && !keys.includes(key)) {
      keys.push(key)
    }
  }

  return keys
}

const apiKeys = getApiKeys()
const GROQ_URL = 'https://api.openai.com/v1/chat/completions'
const MODEL = 'gpt-5.4'

const isOpen = ref(false)
const messages = ref([])
const userInput = ref('')
const loading = ref(false)
const showSuggestions = ref(false)
const apiConfigured = ref(apiKeys.length > 0)
const chatInput = ref(null)

// Escapa HTML para prevenir XSS
const escapeHtml = (text) => {
  const div = document.createElement('div')
  div.textContent = text
  return div.innerHTML
}

// Renderiza markdown simple (**bold**) y saltos de línea de forma segura
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
    // Focus vuelve al FAB después de cerrar
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
    let assistantMessage = null
    let lastError = null

    for (let i = 0; i < apiKeys.length; i++) {
      const key = apiKeys[i]
      try {
        const response = await fetch(GROQ_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${key}`
          },
          body: JSON.stringify({
            model: MODEL,
            messages: conversationHistory,
            temperature: 0.6,
            max_completion_tokens: 512
          })
        })

        if (!response.ok) {
          const errData = await response.json().catch(() => ({}))
          const errorMsg = errData.error?.message || `Error ${response.status}`
          console.warn(`Groq API key (${i + 1}/${apiKeys.length}) falló: ${errorMsg}`)
          lastError = new Error(errorMsg)

          // Si hay más claves disponibles, continuamos con la siguiente
          if (i < apiKeys.length - 1) {
            continue
          }
          throw lastError
        }

        const data = await response.json()
        assistantMessage = data.choices[0].message.content
        break
      } catch (err) {
        lastError = err
        if (i === apiKeys.length - 1) {
          throw err
        }
      }
    }

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
    <!-- FAB button to reopen when chat is closed -->
    <Transition
      enter-active-class="transition-all duration-500 ease-out"
      enter-from-class="opacity-0 scale-0"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition-all duration-300 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-0"
    >
      <button
        v-if="!isOpen"
        @click="toggleChat"
        class="fab-button fixed bottom-6 right-6 z-50 flex items-center justify-center w-12 h-12 rounded-full shadow-2xl cursor-pointer transition-all duration-300 hover:scale-110 active:scale-95 bg-[var(--color-secondary)]"
        aria-label="Abrir chat"
      >
        <span class="material-symbols-outlined text-white">chat</span>
      </button>
    </Transition>

    <!-- Chat Window -->
    <Transition
      enter-active-class="transition-all duration-400 ease-out"
      enter-from-class="opacity-0 translate-y-6 scale-95"
      enter-to-class="opacity-100 translate-y-0 scale-100"
      leave-active-class="transition-all duration-300 ease-in"
      leave-from-class="opacity-100 translate-y-0 scale-100"
      leave-to-class="opacity-0 translate-y-6 scale-95"
    >
      <div
        v-if="isOpen"
        class="fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-2rem)] h-[560px] max-h-[calc(100vh-6rem)] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-100"
        style="box-shadow: 0 25px 60px rgba(0,0,0,0.15);"
      >
        <!-- Header -->
        <div class="flex-shrink-0 bg-[var(--color-primary)] px-5 py-4 flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="w-9 h-9 rounded-full bg-[var(--color-secondary)] flex items-center justify-center">
              <span class="material-symbols-outlined text-white text-lg">gavel</span>
            </div>
            <div>
              <h3 class="text-white text-sm font-semibold leading-tight">ER-Abogados</h3>
              <p class="text-[var(--color-on-primary-container)] text-xs">Asistente Virtual</p>
            </div>
          </div>
          <button
            @click="toggleChat"
            class="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Cerrar chat"
          >
            <span class="material-symbols-outlined text-white text-lg">close</span>
          </button>
        </div>

        <!-- Messages -->
        <div class="flex-1 overflow-y-auto p-4 space-y-3 chat-messages bg-gray-50/50">
          <div v-for="(msg, index) in messages" :key="index" class="flex" :class="msg.role === 'user' ? 'justify-end' : 'justify-start'">
            <div
              class="max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed"
              :class="msg.role === 'user'
                ? 'bg-[var(--color-secondary)] text-white rounded-br-md'
                : 'bg-white text-[var(--color-on-surface)] shadow-sm border border-gray-100 rounded-bl-md'"
            >
              <div v-if="msg.role === 'assistant'" class="flex items-start gap-2.5">
                <div class="w-6 h-6 rounded-full bg-[var(--color-primary)] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span class="material-symbols-outlined text-white text-xs">gavel</span>
                </div>
                <div v-html="renderMessage(msg.content)"></div>
              </div>
              <p v-else>{{ msg.content }}</p>
            </div>
          </div>

          <!-- Loading indicator -->
          <div v-if="loading" class="flex justify-start">
            <div class="bg-white rounded-2xl rounded-bl-md px-4 py-3 shadow-sm border border-gray-100">
              <div class="flex items-center gap-2">
                <div class="w-6 h-6 rounded-full bg-[var(--color-primary)] flex items-center justify-center">
                  <span class="material-symbols-outlined text-white text-xs">gavel</span>
                </div>
                <div class="flex gap-1">
                  <span class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay:0ms"></span>
                  <span class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay:150ms"></span>
                  <span class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay:300ms"></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Quick questions (collapsible) -->
        <div v-if="!loading" class="flex-shrink-0 bg-white border-t border-gray-100">
          <button
            @click="showSuggestions = !showSuggestions"
            class="w-full flex items-center justify-between px-4 py-2 text-xs text-gray-400 hover:text-[var(--color-secondary)] transition-colors cursor-pointer"
          >
            <span class="flex items-center gap-1.5">
              <span class="material-symbols-outlined text-sm">lightbulb</span>
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
              <div class="flex flex-wrap gap-1.5 px-4 pb-3">
                <button
                  v-for="(q, i) in QUICK_QUESTIONS"
                  :key="i"
                  @click="handleQuickQuestion(q)"
                  class="text-xs px-2.5 py-1 rounded-full border border-[var(--color-secondary)] text-[var(--color-secondary)] hover:bg-[var(--color-secondary)] hover:text-white transition-all duration-200 cursor-pointer"
                >
                  {{ q }}
                </button>
              </div>
            </div>
          </Transition>
        </div>

        <!-- Input area -->
        <div class="flex-shrink-0 px-4 py-3 bg-white border-t border-gray-100">
          <form @submit.prevent="sendMessage()" class="flex items-center gap-2">
            <input
              ref="chatInput"
              v-model="userInput"
              type="text"
              placeholder="Escribe tu mensaje..."
              class="flex-1 px-4 py-2.5 text-sm border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)] focus:border-transparent bg-gray-50/80 transition-all"
              :disabled="loading"
            />
            <button
              type="submit"
              :disabled="loading || !userInput.trim()"
              class="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer"
              :class="loading || !userInput.trim()
                ? 'bg-gray-200 text-gray-400'
                : 'bg-[var(--color-secondary)] text-white hover:scale-105 active:scale-95 shadow-md'"
              aria-label="Enviar mensaje"
            >
              <span class="material-symbols-outlined text-lg">send</span>
            </button>
          </form>
        </div>

        <!-- Powered by badge -->
        <div class="flex-shrink-0 bg-gray-50 px-4 py-1.5 text-center border-t border-gray-100">
          <span class="text-[10px] text-gray-400">Asistente con IA · ER-Abogados 2026</span>
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
  border-radius: 10px;
}
.chat-messages::-webkit-scrollbar-thumb:hover {
  background: rgba(197, 160, 89, 0.5);
}
</style>
