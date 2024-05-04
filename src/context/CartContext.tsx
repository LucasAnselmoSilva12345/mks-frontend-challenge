import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Toaster, toast } from 'sonner';

interface Product {
  id: number;
  name: string;
  description: string;
  photo: string;
  price: number;
}

interface CartContextType {
  cartItems: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
}

const CartContext = createContext<CartContextType>({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {}
});

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCartItems([...cartItems, product]);
    toast.success('Produto adicionado ao carrinho');
  };

  const removeFromCart = (productId: number) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
    toast.warning('Produto removido do carrinho');
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      <Toaster richColors position="top-center" />
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
