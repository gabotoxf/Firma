let router = null

export const setRouter = (r) => {
  router = r
}

export const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000'

export const authHeaders = (withContent = false) => {
  const token = localStorage.getItem('auth_token')
  return {
    ...(withContent && { 'Content-Type': 'application/json' }),
    ...(token ? { Authorization: `Bearer ${token}` } : {})
  }
}

export const handleResponse = async (response) => {
  
  if (response.status === 401) {
    const token = localStorage.getItem('auth_token')
  
    // Limpiar sesión
    localStorage.removeItem('auth_token')
    localStorage.removeItem('user_name')
    localStorage.removeItem('user_role')
    localStorage.removeItem('user_image')
    localStorage.removeItem('user_id')
    
    // Redirigir a login
    if (router) {
      router.push('/login')
    }
    
    throw new Error('Sesión expirada')
  }
  
  if (!response.ok) {
    const error = await response.text()
    throw new Error(`Error ${response.status}: ${error}`)
  }
  
  return await response.json()
}