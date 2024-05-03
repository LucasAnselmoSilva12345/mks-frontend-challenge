import '../scss/sidebar.scss';
import { X } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-cart-drawer-wrapper">
        <h4>Carrinho de compras</h4>
        <X onClick={onClose} />
      </div>

      {/* Conteúdo da barra lateral aqui */}
    </div>
  );
}
