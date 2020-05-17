import axios from 'axios'

export function fetchList() {
  return axios.get('/api/hotel/query')
}

export function newHotel(data) {
  return axios.post('/api/hotel/new', data)
}

export function deleteHotel(data) {
  return axios.post('/api/hotel/delete', data)
}

export function editHotel(data) {
  return axios.post('/api/hotel/edit', data)
}
