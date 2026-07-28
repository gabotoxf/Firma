import { BASE_URL, authHeaders, handleResponse } from './config.js'

export async function fetchNoticias() {
  const res = await fetch(`${BASE_URL}/noticias`, { headers: authHeaders() })
  return handleResponse(res)
}

export async function fetchNoticia(id) {
  const res = await fetch(`${BASE_URL}/noticias/${id}`, { headers: authHeaders() })
  return handleResponse(res)
}

export async function createNoticia(data) {
  const res = await fetch(`${BASE_URL}/noticias`, {
    method: 'POST',
    headers: authHeaders(),
    body: JSON.stringify(data)
  })
  return handleResponse(res)
}

export async function updateNoticia(id, data) {
  const res = await fetch(`${BASE_URL}/noticias/${id}`, {
    method: 'PUT',
    headers: authHeaders(),
    body: JSON.stringify(data)
  })
  return handleResponse(res)
}

export async function deleteNoticia(id) {
  const res = await fetch(`${BASE_URL}/noticias/${id}`, {
    method: 'DELETE',
    headers: authHeaders()
  })
  return handleResponse(res)
}
