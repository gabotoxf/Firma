<script setup>
import { ref, nextTick } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const credentials = ref({
  email: '',
  password: ''
})
const error = ref('')
const loading = ref(false)

const API_URL = import.meta.env.VITE_API_URL
  ? `${import.meta.env.VITE_API_URL}/api/auth/login`
  : 'http://localhost:3000/api/auth/login'

const handleLogin = async () => {
  loading.value = true
  error.value = ''

  try {
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: credentials.value.email,
        password: credentials.value.password
      })
    })

    const data = await res.json()

    if (!res.ok) {
      throw new Error(data.mensaje || 'Credenciales inválidas')
    }

    localStorage.setItem('user_email', data.email)
    localStorage.setItem('user_name', data.nombre)
    localStorage.setItem('user_role', data.rol)
    localStorage.setItem('user_id', data._id)

    await nextTick()
    router.push('/mis-procesos')
  } catch (err) {
    error.value = err.message === 'Credenciales inválidas'
      ? 'Email o contraseña incorrectos. Intente de nuevo.'
      : 'Error al iniciar sesión: ' + err.message
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="min-h-screen flex bg-gray-50">

    <!-- Panel izquierdo -->
    <div class="hidden lg:flex w-[45%] flex-col justify-between bg-primary p-14 relative overflow-hidden">
      <div class="absolute -top-16 -right-16 w-52 h-52 rounded-full border border-secondary/15"></div>
      <div class="absolute -top-8 -right-8 w-32 h-32 rounded-full border border-secondary/10"></div>
      <div class="absolute bottom-24 -left-10 w-36 h-36 rounded-full border border-white/[0.04]"></div>
      <div class="absolute right-10 top-1/2 -translate-y-1/2 w-px h-20"
        style="background: linear-gradient(to bottom, transparent, rgba(201,169,110,0.4), transparent)"></div>

      <div>
        <div class="flex items-center gap-2 mb-12">
          <div class="w-5 h-px bg-secondary"></div>
          <span class="font-label text-[9px] tracking-[0.35em] uppercase text-secondary">Área privada</span>
        </div>
        <div class="font-headline text-[88px] font-bold text-white/[0.03] leading-none select-none">M-M</div>
      </div>

      <div class="relative z-10">
        <div class="w-8 h-0.5 bg-secondary mb-6"></div>
        <p class="font-headline text-[18px] text-white/80 leading-relaxed font-light mb-3">
          Consulta el estado de
          <span class="text-secondary font-semibold">tu proceso</span>
        </p>
        <p class="font-label text-[11px] text-white/30 tracking-[0.15em] uppercase">Portal de clientes</p>
      </div>

      <div class="border-t border-white/[0.08] pt-6">
        <p class="font-label text-[11px] tracking-[0.2em] uppercase text-white/25">ER Abogados</p>
        <p class="font-label text-[10px] text-white/15 tracking-wider mt-1">Abogados</p>
      </div>
    </div>

    <!-- Panel derecho -->
    <div class="flex-1 flex items-center justify-center px-8 py-12">
      <div class="w-full max-w-[340px]">

        <div class="mb-10">
          <div class="flex items-center gap-2 mb-6">
            <div class="w-5 h-px bg-secondary"></div>
            <span class="font-label text-[9px] tracking-[0.3em] uppercase text-gray-400">Acceso restringido</span>
          </div>
          <h1 class="font-headline text-primary font-bold leading-snug mb-2" style="font-size: 36px;">
            Portal de clientes
          </h1>
          <p class="font-label text-[12px] text-gray-400 tracking-wide">Consulta tu proceso · ER Abogados</p>
        </div>

        <form @submit.prevent="handleLogin" class="flex flex-col gap-6">
          <div>
            <label class="block font-label text-[11px] uppercase tracking-[0.25em] text-primary font-bold mb-2">
              Correo electrónico
            </label>
            <input v-model="credentials.email" type="email" required placeholder="tu@email.com"
              class="w-full border-0 border-b border-gray-300 focus:border-secondary bg-white py-2.5 px-0 outline-none font-label text-[13px] text-primary placeholder:text-primary/50 transition-colors rounded-none">
          </div>

          <div>
            <label class="block font-label text-[11px] uppercase tracking-[0.25em] text-primary font-bold mb-2">
              Contraseña
            </label>
            <input v-model="credentials.password" type="password" required placeholder="••••••••"
              class="w-full border-0 border-b border-gray-300 focus:border-secondary bg-white py-2.5 px-0 outline-none font-label text-[13px] text-primary placeholder:text-primary/50 transition-colors rounded-none">
          </div>

          <div v-if="error"
            class="text-red-500 text-[11px] font-label uppercase tracking-wider text-center bg-red-50 py-2">
            {{ error }}
          </div>

          <button type="submit" :disabled="loading"
            class="w-full bg-primary text-white py-3.5 font-label text-[10px] font-semibold uppercase tracking-[0.28em] hover:bg-primary/90 transition-colors duration-300 disabled:opacity-50 border-0 cursor-pointer mt-1">
            {{ loading ? 'Ingresando...' : 'Iniciar sesión' }}
          </button>
        </form>

        <div class="mt-6 text-center">
          <router-link to="/"
            class="font-label text-[10px] uppercase tracking-widest text-gray-400 hover:text-secondary transition-colors">
            ← Volver al sitio
          </router-link>
        </div>

      </div>
    </div>
  </div>
</template>