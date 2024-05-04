import { useState, useEffect } from 'react';
import { useCart } from '@/context/CartContext';
import '../scss/sidebar.scss';
import { Minus, Plus, X } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ItemQuantity {
  [key: number]: number;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const { cartItems, removeFromCart } = useCart();
  const [quantities, setQuantities] = useState<ItemQuantity>({});

  useEffect(() => {
    const initialQuantities = cartItems.reduce((acc: ItemQuantity, item) => {
      acc[item.id] = 1;
      return acc;
    }, {});
    setQuantities(initialQuantities);
  }, [cartItems]);

  const increaseQuantity = (productId: number) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: prevQuantities[productId] + 1
    }));
  };

  const decreaseQuantity = (productId: number) => {
    if (quantities[productId] > 1) {
      setQuantities((prevQuantities) => ({
        ...prevQuantities,
        [productId]: prevQuantities[productId] - 1
      }));
    }
  };

  const calculateTotalPrice = () => {
    const totalPrice = cartItems.reduce(
      (total, item) => total + item.price * quantities[item.id],
      0
    );
    return totalPrice.toFixed(2);
  };

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
