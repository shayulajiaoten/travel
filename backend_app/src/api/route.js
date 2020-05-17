import axios from 'axios'

export function fetchList() {
  return axios.get('/api/route/query')
}

export function newRoute(data) {
  return axios.post('/api/route/new', data)
}

export function deleteRoute(data) {
  return axios.post('/api/route/delete', data)
}

export function editRoute(data) {
  return axios.post('/api/route/edit', data)
}
