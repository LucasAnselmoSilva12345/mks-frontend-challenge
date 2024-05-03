'use client';

import { useState } from 'react';
import '../scss/header.scss';
import CartDrawerIcon from './cart-drawer';
import { Sidebar } from './sidebar';

export function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
          <span>0</span>
        </button>

        <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />
      </div>
    </header>
  );
}
