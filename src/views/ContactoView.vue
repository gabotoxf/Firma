<script setup>
import { ref } from 'vue'
import { toast } from 'vue-sonner'

const form = ref({ name: '', email: '', phone: '', subject: '', message: '' })
const sending = ref(false)

function handleSubmit() {
  sending.value = true
  setTimeout(() => {
    toast.success('Mensaje enviado correctamente. Nos pondremos en contacto pronto.')
    form.value = { name: '', email: '', phone: '', subject: '', message: '' }
    sending.value = false
  }, 1500)
}
</script>

<template>
  <div class="min-h-screen bg-white selection:bg-secondary/20">
    <!-- Hero -->
    <header class="relative min-h-[40vh] sm:min-h-[50vh] flex items-start py-20 sm:py-24 px-6 sm:px-10 lg:px-16 overflow-hidden bg-primary">
      <div class="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1600&q=80"
          alt="Contacto" class="w-full h-full object-cover opacity-30 grayscale">
        <div class="absolute inset-0 bg-gradient-to-r from-primary via-primary/85 to-transparent"></div>
        <div class="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent"></div>
      </div>

      <div class="max-w-[1400px] mx-auto w-full relative z-10 mt-0 sm:mt-16">
        <div class="max-w-3xl flex flex-col gap-4 sm:gap-6">
          <p class="font-label text-[9px] sm:text-[10px] tracking-[0.5em] uppercase text-secondary font-bold">Contacto</p>
          <h1 class="font-headline text-4xl sm:text-6xl lg:text-7xl text-white font-light leading-[1.1] tracking-tight">
            Hablemos de su <em class="text-secondary italic not-italic font-medium whitespace-nowrap">próximo paso estratégico</em>
          </h1>
          <p class="text-sm sm:text-lg text-white/60 font-light max-w-xl leading-relaxed border-l border-secondary/30 pl-6 sm:pl-8 mt-2">
            Estamos a su disposición para cualquier consulta legal que su organización requiera.
          </p>
        </div>
      </div>

      <div class="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 animate-bounce hidden sm:block">
        <div class="flex flex-col items-center gap-2">
          <span class="text-white/20 text-[10px] tracking-[0.3em] uppercase font-label">Scroll</span>
          <span class="material-symbols-outlined text-white/20 text-2xl font-light">expand_more</span>
        </div>
      </div>
    </header>

    <!-- Contact Section -->
    <div class="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-24 py-24">
      <div class="grid grid-cols-1 lg:grid-cols-5 gap-16">

        <!-- Form (3/5) -->
        <div class="lg:col-span-3">
          <h2 class="font-headline text-2xl font-bold text-primary mb-2">Envíanos tu consulta</h2>
          <p class="text-primary/50 text-sm mb-8">Complete el formulario y nos pondremos en contacto a la brevedad.</p>

          <form @submit.prevent="handleSubmit" class="flex flex-col gap-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input v-model="form.name" type="text" placeholder="Nombre completo"
                class="w-full border-b-2 border-primary/10 focus:border-secondary bg-transparent py-3 text-sm outline-none transition-colors placeholder:text-primary/30" required>
              <input v-model="form.email" type="email" placeholder="Correo electrónico"
                class="w-full border-b-2 border-primary/10 focus:border-secondary bg-transparent py-3 text-sm outline-none transition-colors placeholder:text-primary/30" required>
              <input v-model="form.phone" type="tel" placeholder="Teléfono"
                class="w-full border-b-2 border-primary/10 focus:border-secondary bg-transparent py-3 text-sm outline-none transition-colors placeholder:text-primary/30">
              <select v-model="form.subject"
                class="w-full border-b-2 border-primary/10 focus:border-secondary bg-transparent py-3 text-sm outline-none transition-colors text-primary/70">
                <option value="" disabled>Asunto</option>
                <option value="general">Consulta general</option>
                <option value="reunion">Agendar reunión</option>
                <option value="asesoria">Asesoría legal</option>
                <option value="otro">Otro</option>
              </select>
            </div>
            <textarea v-model="form.message" rows="5" placeholder="Describa su consulta"
              class="w-full border-b-2 border-primary/10 focus:border-secondary bg-transparent py-3 text-sm outline-none transition-colors resize-none placeholder:text-primary/30" required></textarea>

            <button type="submit" :disabled="sending"
              class="self-start bg-primary text-white font-label text-[10px] font-bold tracking-[0.2em] uppercase px-10 py-4 hover:bg-secondary transition-colors disabled:opacity-50">
              {{ sending ? 'Enviando...' : 'Enviar mensaje' }}
            </button>
          </form>
        </div>

        <!-- Info (2/5) -->
        <div class="lg:col-span-2">
          <h3 class="font-headline text-xl font-bold text-primary mb-8">Información de contacto</h3>

          <div class="flex flex-col gap-8">
            <div class="flex items-start gap-4">
              <span class="material-symbols-outlined text-secondary text-xl">location_on</span>
              <div>
                <p class="text-xs font-bold tracking-wider uppercase text-primary mb-1">Oficina principal</p>
                <p class="text-sm text-primary/50 font-light leading-relaxed">Carrera 19A # 13A – 46<br>Edificio Branjy, Oficina 101<br>Barrió La Ford – Sincelejo – Sucre</p>
              </div>
            </div>
            <div class="flex items-start gap-4">
              <span class="material-symbols-outlined text-secondary text-xl">call</span>
              <div>
                <p class="text-xs font-bold tracking-wider uppercase text-primary mb-1">Móvil</p>
                <p class="text-sm text-primary/50 font-light">+57 324-275-7680</p>
              </div>
            </div>
            <div class="flex items-start gap-4">
              <span class="material-symbols-outlined text-secondary text-xl">email</span>
              <div>
                <p class="text-xs font-bold tracking-wider uppercase text-primary mb-1">Correo</p>
                <p class="text-sm text-primary/50 font-light">info@erabogados.co</p>
              </div>
            </div>
            <div class="flex items-start gap-4">
              <span class="material-symbols-outlined text-secondary text-xl">schedule</span>
              <div>
                <p class="text-xs font-bold tracking-wider uppercase text-primary mb-1">Horario</p>
                <p class="text-sm text-primary/50 font-light">Lunes a Viernes<br>8:00 AM — 6:00 PM</p>
              </div>
            </div>
          </div>

          <!-- Map placeholder -->
          <div class="mt-10 w-full h-56 bg-surface-container flex items-center justify-center rounded-sm">
            <span class="material-symbols-outlined text-primary/20 text-4xl">map</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
