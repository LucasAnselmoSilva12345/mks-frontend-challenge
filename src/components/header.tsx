import { useState, useEffect } from 'react';
import '../scss/header.scss';
import CartDrawerIcon from './cart-drawer';
import { Sidebar } from './sidebar';
import { useCart } from '../context/CartContext';

export function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { cartItems } = useCart();

  const [cartItemCount, setCartItemCount] = useState(0);

  useEffect(() => {
    setCartItemCount(cartItems.length);
  }, [cartItems]);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <header className="header-container">
      <div className="header-container-wrapper">
        <h1 className="header-container-wrapper-title">
          mks{' '}
          <span className="header-container-wrapper-subtitle">sistemas</span>
        </h1>

        <button
          className="header-container-wrapper-card-drawer"
          onClick={toggleSidebar}
        >
          <CartDrawerIcon />
          <span>{cartItemCount}</span>
        </button>

        <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />
      </div>
    </header>
  );
}
