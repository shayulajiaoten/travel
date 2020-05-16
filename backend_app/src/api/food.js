import axios from 'axios'

export function fetchList() {
  return axios.get('/api/food/query')
}

export function newFood(data) {
  return axios.post('/api/food/new', data)
}
