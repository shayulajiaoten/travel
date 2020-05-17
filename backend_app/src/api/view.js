import axios from 'axios'

export function fetchList() {
  return axios.get('/api/view/query')
}

export function newView(data) {
  return axios.post('/api/view/new', data)
}

export function deleteView(data) {
  return axios.post('/api/view/delete', data)
}

export function editView(data) {
  return axios.post('/api/view/edit', data)
}
