import { BASE_URL, authHeaders, handleResponse } from './config.js'

export async function login(credentials) {
  const res = await fetch(`${BASE_URL}/auth/login`, {
    method: 'POST',
    headers: authHeaders(),
    body: JSON.stringify(credentials)
  })
  return handleResponse(res)
}

export async function fetchUsuarios() {
  const res = await fetch(`${BASE_URL}/usuarios`, { headers: authHeaders() })
  return handleResponse(res)
}

export async function fetchUsuario(id) {
  const res = await fetch(`${BASE_URL}/usuarios/${id}`, { headers: authHeaders() })
  return handleResponse(res)
}

export async function createUsuario(data) {
  const res = await fetch(`${BASE_URL}/usuarios`, {
    method: 'POST',
    headers: authHeaders(),
    body: JSON.stringify(data)
  })
  return handleResponse(res)
}

export async function updateUsuario(id, data) {
  const res = await fetch(`${BASE_URL}/usuarios/${id}`, {
    method: 'PUT',
    headers: authHeaders(),
    body: JSON.stringify(data)
  })
  return handleResponse(res)
}

export async function deleteUsuario(id) {
  const res = await fetch(`${BASE_URL}/usuarios/${id}`, {
    method: 'DELETE',
    headers: authHeaders()
  })
  return handleResponse(res)
}

export async function obtenerSocios() {
  const res = await fetch(`${BASE_URL}/usuarios/socios`, { headers: authHeaders() })
  return handleResponse(res)
}
