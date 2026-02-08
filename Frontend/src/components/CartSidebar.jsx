import { useCart } from "../contexts/CartContext";
import { Link } from "react-router-dom";

export default function CartSidebar() {
  const {
    cartItems,
    removeFromCart,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    getTotalPrice,
    clearCart,
  } = useCart();

  return (
    <>
      {/* Backdrop */}
      {isCartOpen && (
        <div
          onClick={() => setIsCartOpen(false)}
          className="fixed inset-0 bg-black/40 z-40"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 right-0 h-full w-80 bg-white z-50
        transform transition-transform duration-300
        ${isCartOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header */}
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="font-bold text-lg">Your Cart</h2>
          <button onClick={() => setIsCartOpen(false)}>✕</button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {cartItems.length === 0 && (
            <p className="text-gray-500 text-sm">Cart is empty</p>
          )}

          {cartItems.map((item) => (
            <div key={item.id} className="flex gap-3">
              <img
                src={item.images?.[0]}
                className="w-16 h-16 object-cover rounded"
              />
              <div className="flex-1">
                <p className="text-sm font-medium">{item.title}</p>
                <p className="text-xs text-gray-500">
                  ₹{item.price} × {item.qty}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => updateQuantity(item.id, item.qty - 1)}
                  className="px-2 py-1 text-xs bg-gray-200 rounded"
                >
                  −
                </button>
                <span className="text-xs">{item.qty}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.qty + 1)}
                  className="px-2 py-1 text-xs bg-gray-200 rounded"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-xs text-red-500"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="p-4 border-t">
            <div className="flex justify-between font-semibold mb-3">
              <span>Total</span>
              <span>₹{getTotalPrice().toFixed(2)}</span>
            </div>

            <div className="flex gap-2">
              <Link
                to="/checkout"
                onClick={() => setIsCartOpen(false)}
                className="flex-1 text-center bg-black text-white py-2 rounded-lg"
              >
                Checkout
              </Link>
              <button
                onClick={clearCart}
                className="flex-1 text-center bg-red-500 text-white py-2 rounded-lg"
              >
                Clear Cart
              </button>
            </div>
          </div>
        )}
      </aside>
    </>
  );
}
