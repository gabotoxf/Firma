<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const procesos = ref([])
const cargando = ref(true)
const error = ref('')
const nombreUsuario = ref('')

const API_URL = import.meta.env.VITE_API_URL
  ? `${import.meta.env.VITE_API_URL}/api/mis-procesos`
  : 'http://localhost:3000/api/mis-procesos'

const colorEstado = (estado) => {
  if (estado === 'Finalizado') return 'text-green-700 bg-green-50'
  if (estado === 'En espera') return 'text-amber-700 bg-amber-50'
  return 'text-primary bg-primary/5'
}

const cerrarSesion = () => {
  localStorage.removeItem('user_email')
  localStorage.removeItem('user_name')
  localStorage.removeItem('user_role')
  localStorage.removeItem('user_id')
  router.push('/login')
}

onMounted(async () => {
  const email = localStorage.getItem('user_email')
  nombreUsuario.value = localStorage.getItem('user_name') || ''

  if (!email) {
    router.push('/login')
    return
  }

  try {
    const res = await fetch(`${API_URL}?email=${encodeURIComponent(email)}`)
    if (!res.ok) throw new Error('No se pudieron cargar tus procesos')
    procesos.value = await res.json()
  } catch (err) {
    error.value = err.message
  } finally {
    cargando.value = false
  }
})
</script>

<template>
  <div class="min-h-screen bg-gray-50 px-6 py-12">
    <div class="max-w-3xl mx-auto">

      <div class="flex items-center justify-between mb-10">
        <div>
          <div class="flex items-center gap-2 mb-3">
            <div class="w-5 h-px bg-secondary"></div>
            <span class="font-label text-[9px] tracking-[0.3em] uppercase text-gray-400">Portal de clientes</span>
          </div>
          <h1 class="font-headline text-primary font-bold" style="font-size: 30px;">
            Hola{{ nombreUsuario ? `, ${nombreUsuario}` : '' }}
          </h1>
        </div>
        <button @click="cerrarSesion"
          class="font-label text-[10px] uppercase tracking-widest text-gray-400 hover:text-secondary transition-colors">
          Cerrar sesión
        </button>
      </div>

      <div v-if="cargando" class="text-center text-gray-400 font-label text-[13px] py-16">
        Cargando tus procesos...
      </div>

      <div v-else-if="error" class="text-center text-red-500 font-label text-[13px] py-16">
        {{ error }}
      </div>

      <div v-else-if="procesos.length === 0" class="text-center text-gray-400 font-label text-[13px] py-16">
        No tienes procesos registrados todavía. Si crees que esto es un error, contáctanos.
      </div>

      <div v-else class="flex flex-col gap-4">
        <div v-for="proceso in procesos" :key="proceso.id"
          class="bg-white border border-gray-200 p-6 flex items-start justify-between gap-4">
          <div>
            <p class="font-label text-[11px] uppercase tracking-[0.2em] text-gray-400 mb-1">
              {{ proceso.especialidad }}
            </p>
            <h2 class="font-headline text-primary font-semibold mb-2" style="font-size: 17px;">
              Radicado {{ proceso.numeroRadicado }}
            </h2>
            <p class="font-label text-[12px] text-gray-500">
              {{ proceso.despachoJudicial }} · {{ proceso.ciudad }}
            </p>
          </div>
          <span :class="colorEstado(proceso.estado)"
            class="font-label text-[10px] uppercase tracking-widest px-3 py-1.5 whitespace-nowrap">
            {{ proceso.estado }}
          </span>
        </div>
      </div>

    </div>
  </div>
</template>