import axios from 'axios'


export function fetchFoodList() {
  return axios.get('/api/food/query')
}

export function fetchViewList() {
  return axios.get('/api/view/query')
}

export function fetchHotelList() {
  return axios.get('/api/hotel/query')
}

export function fetchMessageList() {
  return axios.get('/api/message/query')
}

export function fetchRouteList() {
  return axios.get('/api/route/query')
}


export function fetchDetail(data) {
  return axios.post(`/api/${data.sort}/detail`,data)
}
