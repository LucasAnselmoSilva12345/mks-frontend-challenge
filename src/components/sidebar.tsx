import { useState, useEffect } from 'react';
import { useCart } from '@/context/CartContext';
import '../scss/sidebar.scss';
import { Minus, Plus, X } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const { cartItems, removeFromCart } = useCart();

  // Estado para controlar a quantidade de cada produto no carrinho
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({});

  useEffect(() => {
    // Inicializa as quantidades com base nos itens do carrinho
    const initialQuantities = cartItems.reduce((acc, item) => {
      acc[item.id] = 1;
      return acc;
    }, {});
    setQuantities(initialQuantities);
  }, [cartItems]);

  // Função para aumentar a quantidade de um produto
  const increaseQuantity = (productId: number) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: prevQuantities[productId] + 1
    }));
  };

  // Função para diminuir a quantidade de um produto
  const decreaseQuantity = (productId: number) => {
    if (quantities[productId] > 1) {
      setQuantities((prevQuantities) => ({
        ...prevQuantities,
        [productId]: prevQuantities[productId] - 1
      }));
    }
  };

  // Função para calcular o total dos preços dos produtos no carrinho
  const calculateTotalPrice = () => {
    const totalPrice = cartItems.reduce(
      (total, item) => total + item.price * quantities[item.id],
      0
    );
    return totalPrice.toFixed(2);
  };

  // Função para calcular o preço de um item com base na quantidade
  const calculateItemPrice = (itemPrice: number, quantity: number) => {
    return (itemPrice * quantity).toFixed(2);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-cart-drawer-wrapper">
        <h4>Carrinho de compras</h4>
        <X onClick={onClose} />
      </div>

      <div className="sidebar-cart-drawer-wrapper-item">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-drawer-wrapper-item">
            <div className="cart-drawer-wrapper-item-icon">
              <X onClick={() => removeFromCart(item.id)} />
            </div>

            <div className="cart-drawer-wrapper-item-content">
              <img src={item.photo} alt={item.name} />

              <h3>{item.name}</h3>

              <div className="cart-drawer-wrapper-item-set-quantity">
                <Minus size={12} onClick={() => decreaseQuantity(item.id)} />
                {quantities[item.id]}
                <Plus size={12} onClick={() => increaseQuantity(item.id)} />
              </div>
              <span>
                R${calculateItemPrice(item.price, quantities[item.id])}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="sidebar-footer-finish-order">
        <div>
          <h3>Total:</h3>
          <span>R${calculateTotalPrice()}</span>
        </div>

        <a href="#">Finalizar Compra</a>
      </div>
    </div>
  );
}
