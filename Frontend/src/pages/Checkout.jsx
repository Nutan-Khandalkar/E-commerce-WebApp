import { useState } from 'react'
import { useCart } from '../contexts/CartContext'

export default function Checkout() {
  const { items, total, clearCart } = useCart()
  const [processing, setProcessing] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setProcessing(true)
    setTimeout(() => {
      setProcessing(false)
      clearCart()
      alert('Mock purchase complete. Thank you!')
    }, 1200)
  }

  if (!items || items.length === 0) return (
    <div className="max-w-3xl mx-auto p-6 text-center">
      <p className="text-lg">Your cart is empty.</p>
    </div>
  )

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Checkout</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <label className="flex flex-col">
              <span className="text-sm font-medium">First name</span>
              <input name="firstName" required className="mt-1 p-2 border rounded" />
            </label>
            <label className="flex flex-col">
              <span className="text-sm font-medium">Last name</span>
              <input name="lastName" className="mt-1 p-2 border rounded" />
            </label>
          </div>

          <label className="flex flex-col">
            <span className="text-sm font-medium">Email</span>
            <input name="email" type="email" required className="mt-1 p-2 border rounded" />
          </label>

          <label className="flex flex-col">
            <span className="text-sm font-medium">Address</span>
            <input name="address" required className="mt-1 p-2 border rounded" />
          </label>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <label className="flex flex-col">
              <span className="text-sm font-medium">City</span>
              <input name="city" className="mt-1 p-2 border rounded" />
            </label>
            <label className="flex flex-col">
              <span className="text-sm font-medium">Postal code</span>
              <input name="postal" className="mt-1 p-2 border rounded" />
            </label>
            <label className="flex flex-col">
              <span className="text-sm font-medium">Country</span>
              <input name="country" className="mt-1 p-2 border rounded" />
            </label>
          </div>

          <label className="flex flex-col">
            <span className="text-sm font-medium">Card details (mock)</span>
            <input name="card" placeholder="4242 4242 4242 4242" className="mt-1 p-2 border rounded" />
          </label>

          <div className="flex justify-between items-center pt-4">
            <div className="text-lg font-semibold">Total: ₹{total.toFixed(2)}</div>
            <button type="submit" disabled={processing} className="px-4 py-2 bg-black text-white rounded">
              {processing ? 'Processing...' : 'Pay now'}
            </button>
          </div>
        </form>

        <aside className="bg-white p-6 rounded shadow">
          <h3 className="font-semibold mb-4">Order Summary</h3>
          <ul className="space-y-4 max-h-72 overflow-auto">
            {items.map((it) => (
              <li key={it.id} className="flex items-center gap-3">
                <img src={it.image || it.images?.[0]} className="w-14 h-14 object-cover rounded" />
                <div className="flex-1">
                  <div className="text-sm font-medium">{it.title || it.name}</div>
                  <div className="text-xs text-gray-500">Qty: {it.qty}</div>
                </div>
                <div className="font-semibold">₹{((it.price || 0) * (it.qty || 1)).toFixed(2)}</div>
              </li>
            ))}
          </ul>

          <div className="mt-6 border-t pt-4">
            <div className="flex justify-between items-center font-semibold">
              <span>Subtotal</span>
              <span>₹{total.toFixed(2)}</span>
            </div>
            <div className="text-sm text-gray-500 mt-2">Shipping and taxes calculated at checkout (mock)</div>
            <button onClick={() => { clearCart(); alert('Cart cleared'); }} className="mt-4 w-full bg-red-500 text-white py-2 rounded">Clear Cart</button>
          </div>
        </aside>
      </div>
    </div>
  )
}
