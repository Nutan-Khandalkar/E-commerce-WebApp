import axios from 'axios'

const BASE = 'https://api.escuelajs.co/api/v1/'

const api = axios.create({
  baseURL: BASE,
  headers: {
    'Content-Type': 'application/json',
  },
})

export async function fetchProducts() {
  const res = await api.get('/products')
  return res.data
}

export async function fetchProduct(id) {
  const res = await api.get(`/products/${id}`)
  return res.data
}

export async function fetchCategories() {
  const res = await api.get('/categories')
  return res.data
}

export async function fetchProductsByCategory(categoryId) {
  const res = await api.get(`/products?categoryId=${categoryId}`)
  return res.data
}

export default api
