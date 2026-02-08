import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchProduct } from '../api/fakeApi'
import { useCart } from '../contexts/CartContext'

export default function ProductDetails() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const { addToCart, setIsCartOpen } = useCart()

  useEffect(() => {
    fetchProduct(id).then((data) => setProduct(data)).catch(() => {}).finally(() => setLoading(false))
  }, [id])

  if (loading) return <p>Loading...</p>
  if (!product) return <p>Product not found</p>

  return (
    <div className="product-detail">
      <img src={product.image || product.images?.[0]} alt={product.title || product.name} />
      <div className="detail-body">
        <h2>{product.title || product.name}</h2>
        <p>{product.description}</p>
        <div className="price">${product.price}</div>
        <div className="actions">
          <button
            onClick={() => {
              addToCart(product, 1)
              setIsCartOpen(true)
            }}
            className="px-4 py-2 bg-black text-white rounded hover:opacity-90"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  )
}
