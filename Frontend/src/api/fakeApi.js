import axios from 'axios'

const BASE = 'https://api.escuelajs.co/api/v1/'

const api = axios.create({
  baseURL: BASE,
  headers: {
    'Content-Type': 'application/json',
  },
})

export async function fetchProducts() {
  const token = localStorage.getItem("token");
  const res = await api.get('http://localhost:3000/product/all', {
    headers: { Authorization: `Bearer ${token}` },
  })

  return res.data
}

export async function fetchProduct(id) {
  const res = await api.get(`/products/${id}`)
  return res.data
}

export async function fetchCategories() {
  const token = localStorage.getItem("token");
  const res = await api.get('http://localhost:3000/product/categories', {
    headers: { Authorization: `Bearer ${token}` },
  })

  return res.data
}

export async function fetchProductsByCategory(categoryId) {
  const res = await api.get(`/products?categoryId=${categoryId}`)
  return res.data
}

export default api
