import { BASE_URL, authHeaders, handleResponse } from './config.js'

export async function fetchPublicaciones() {
  const res = await fetch(`${BASE_URL}/publicaciones`, { headers: authHeaders() })
  return handleResponse(res)
}

export async function fetchPublicacion(id) {
  const res = await fetch(`${BASE_URL}/publicaciones/${id}`, { headers: authHeaders() })
  return handleResponse(res)
}

export async function createPublicacion(data) {
  const res = await fetch(`${BASE_URL}/publicaciones`, {
    method: 'POST',
    headers: authHeaders(),
    body: JSON.stringify(data)
  })
  return handleResponse(res)
}

export async function updatePublicacion(id, data) {
  const res = await fetch(`${BASE_URL}/publicaciones/${id}`, {
    method: 'PUT',
    headers: authHeaders(),
    body: JSON.stringify(data)
  })
  return handleResponse(res)
}

export async function deletePublicacion(id) {
  const res = await fetch(`${BASE_URL}/publicaciones/${id}`, {
    method: 'DELETE',
    headers: authHeaders()
  })
  return handleResponse(res)
}
