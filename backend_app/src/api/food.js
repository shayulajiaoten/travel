import axios from 'axios'

export function fetchList() {
  return axios.get('/api/food/query')
}

export function newFood(data) {
  return axios.post('/api/food/new', data)
}

export function deleteFood(data) {
  return axios.post('/api/food/delete', data)
}

export function editFood(data) {
  return axios.post('/api/food/edit', data)
}
