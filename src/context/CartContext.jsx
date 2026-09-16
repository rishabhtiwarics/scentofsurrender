import React, { createContext, useContext, useState } from "react";
import { img } from "../data/assets.js";

const CartContext = createContext(null);

const initialCart = [
  {
    id: "prod-1",
    name: "Liquid Gold Eau de Parfum",
    price: "Rs. 1,999",
    priceNumber: 1999,
    src: img("product/product1.webp"),
    quantity: 1,
    size: "100ml / 3.4 FL. OZ.",
  },
  {
    id: "prod-2",
    name: "Noir Surrender",
    price: "Rs. 1,799",
    priceNumber: 1799,
    src: img("product/product2.webp"),
    quantity: 1,
    size: "100ml / 3.4 FL. OZ.",
  },
];

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(initialCart);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);
  const toggleCart = () => setIsCartOpen((v) => !v);

  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);
  const toggleMenu = () => setIsMenuOpen((v) => !v);

  const updateQuantity = (id, nextQty) => {
    if (nextQty <= 0) {
      removeFromCart(id);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: nextQty } : item))
    );
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id || item.name === product.name);
      if (existing) {
        return prev.map((item) =>
          item === existing ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      const rawPrice =
        typeof product.price === "number"
          ? product.price
          : parseInt(String(product.price).replace(/[^0-9]/g, ""), 10) || 1999;
      return [
        ...prev,
        {
          id: product.id || `prod-${Date.now()}`,
          name: product.name,
          price: product.price || `Rs. ${rawPrice.toLocaleString()}`,
          priceNumber: rawPrice,
          src: product.src,
          quantity: 1,
          size: product.size || "100ml / 3.4 FL. OZ.",
        },
      ];
    });
    setIsCartOpen(true);
  };

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const cartSubtotal = cartItems.reduce(
    (acc, item) => acc + item.priceNumber * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        isCartOpen,
        openCart,
        closeCart,
        toggleCart,
        isMenuOpen,
        openMenu,
        closeMenu,
        toggleMenu,
        updateQuantity,
        removeFromCart,
        addToCart,
        cartCount,
        cartSubtotal,
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
