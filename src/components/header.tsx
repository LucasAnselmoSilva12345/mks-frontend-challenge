import '../scss/header.scss';
import CartDrawerIcon from './cart-drawer';

export function Header() {
  return (
    <header className="header-container">
      <div className="header-container-wrapper">
        <h1 className="header-container-wrapper-title">
          mks{' '}
          <span className="header-container-wrapper-subtitle">sistemas</span>
        </h1>

        <button className="header-container-wrapper-card-drawer">
          <CartDrawerIcon />
          <span>0</span>
        </button>
      </div>
    </header>
  );
}
