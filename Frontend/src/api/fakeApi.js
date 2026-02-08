import axios from 'axios'

const BASE = 'http://localhost:3000/product'

const api = axios.create({
  baseURL: BASE,
  headers: {
    'Content-Type': 'application/json',
  },
})

export async function fetchProducts() {
  const token=localStorage.getItem('token')
  const res = await api.get('/all',{
    headers: { Authorization: `Bearer ${token}` },
})
  return res.data
}

export async function fetchProduct(id) {
  const token=localStorage.getItem('token')
  const res = await api.get(`/${id}`,{
    headers: { Authorization: `Bearer ${token}` },
})
  return res.data
}

export async function fetchCategories() {
  const token=localStorage.getItem('token')
  const res = await api.get('/categories',{
    headers: { Authorization: `Bearer ${token}` },
})
  return res.data
}

export async function fetchProductsByCategory(categoryId) {
  const token=localStorage.getItem('token')
  const res = await api.get(`/categories/${categoryId}`,{
    headers: { Authorization: `Bearer ${token}` },
})
  return res.data
}

export default api
