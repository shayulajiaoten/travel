import axios from 'axios'

export function fetchList() {
  return axios.get('/api/message/query')
}

export function newMessage(data) {
  return axios.post('/api/message/new', data)
}

export function deleteMessage(data) {
  return axios.post('/api/message/delete', data)
}

export function editMessage(data) {
  return axios.post('/api/message/edit', data)
}
