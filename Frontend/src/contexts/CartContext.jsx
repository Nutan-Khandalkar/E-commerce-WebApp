import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  function addToCart(product, qty = 1) {
    setCartItems((prev) => {
      const existing = prev.find((p) => p.id === product.id);
      if (existing) {
        return prev.map((p) =>
          p.id === product.id ? { ...p, qty: p.qty + qty } : p
        );
      }
      return [...prev, { ...product, qty }];
    });
  }

  function removeFromCart(id) {
    setCartItems((prev) => prev.filter((p) => p.id !== id));
  }

  function updateQuantity(id, qty) {
    setCartItems((prev) => {
      if (qty <= 0) return prev.filter((p) => p.id !== id);
      return prev.map((p) => (p.id === id ? { ...p, qty } : p));
    });
  }

  function clearCart() {
    setCartItems([]);
  }

  function getTotalPrice() {
    return cartItems.reduce((sum, it) => sum + (it.price || 0) * (it.qty || 0), 0);
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getTotalPrice,
        isCartOpen,
        setIsCartOpen,
        // backward-compatible aliases expected by some pages
        items: cartItems,
        total: getTotalPrice(),
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
