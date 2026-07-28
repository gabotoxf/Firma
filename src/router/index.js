import { createRouter, createWebHistory } from 'vue-router'
import PublicLayout from '@/layouts/PublicLayout.vue'
import HomeView from '@/views/HomeView.vue'
import NosotrosView from '@/views/NosotrosView.vue'
import ServiciosView from '@/views/ServiciosView.vue'
import ServicioDetailView from '@/views/ServicioDetailView.vue'
import EquipoView from '@/views/EquipoView.vue'
import EquipoDetailView from '@/views/EquipoDetailView.vue'
import NoticiasView from '@/views/NoticiasView.vue'
import NoticiaDetailView from '@/views/NoticiaDetailView.vue'
import ContactoView from '@/views/ContactoView.vue'
import LoginView from '@/views/LoginView.vue'

const routes = [
  {
    path: '/',
    component: PublicLayout,
    children: [
      { path: '', name: 'home', component: HomeView },
      { path: 'nosotros', name: 'nosotros', component: NosotrosView },
      { path: 'servicios', name: 'servicios', component: ServiciosView },
      { path: 'servicios/:slug', name: 'servicio-detail', component: ServicioDetailView },
      { path: 'equipo', name: 'equipo', component: EquipoView },
      { path: 'equipo/:slug', name: 'equipo-detail', component: EquipoDetailView },
      { path: 'noticias', name: 'noticias', component: NoticiasView },
      { path: 'noticias/:slug', name: 'noticia-detail', component: NoticiaDetailView },
      { path: 'contacto', name: 'contacto', component: ContactoView }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
