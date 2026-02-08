import { Link } from 'react-router-dom'
import { useCart } from '../contexts/CartContext'

export default function CartPage() {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    getTotalPrice,
  } = useCart()

  if (!Array.isArray(cartItems) || cartItems.length === 0) return (
    <div className="p-6 text-center">
      <p className="text-lg mb-4">Your cart is empty.</p>
      <Link to="/" className="underline text-blue-600">Continue shopping</Link>
    </div>
  )

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Your Cart</h2>

      <div className="space-y-4">
        {cartItems.map((it) => (
          <div key={it.id} className="flex gap-4 items-center border rounded-lg p-4 shadow-sm">
            <img
              src={it.image || it.images?.[0]}
              alt={it.title || it.name}
              className="w-24 h-24 object-cover rounded"
            />

            <div className="flex-1">
              <div className="font-medium text-sm">{it.title || it.name}</div>
              <div className="text-sm text-gray-500">₹{it.price.toFixed(2)}</div>
              <div className="mt-2 flex items-center gap-2">
                <button
                  onClick={() => updateQuantity(it.id, (it.qty || 1) - 1)}
                  className="px-2 py-1 bg-gray-200 rounded"
                >−</button>
                <span className="px-3 py-1 border rounded">{it.qty || 1}</span>
                <button
                  onClick={() => updateQuantity(it.id, (it.qty || 1) + 1)}
                  className="px-2 py-1 bg-gray-200 rounded"
                >+</button>
              </div>
            </div>

            <div className="text-right">
              <div className="font-semibold">₹{((it.price || 0) * (it.qty || 1)).toFixed(2)}</div>
              <button onClick={() => removeFromCart(it.id)} className="text-sm text-red-500 mt-2">Remove</button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div className="text-lg font-semibold">Total: ₹{getTotalPrice().toFixed(2)}</div>
        <div className="flex gap-2">
          <Link to="/checkout" className="px-4 py-2 bg-black text-white rounded">Proceed to Checkout</Link>
          <button onClick={() => {
            // clear cart by removing items one by one
            cartItems.forEach((it) => removeFromCart(it.id))
          }} className="px-4 py-2 bg-red-500 text-white rounded">Clear Cart</button>
        </div>
      </div>
    </div>
  )
}
