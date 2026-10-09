import { Link } from 'react-router-dom';
import './Header.css';

function Header({ cartCount }) {
  return (
    <header className="header">
      <h1 className="logo">
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
          JohnBoard Store
        </Link>
      </h1>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart</Link>
      </nav>

      <div className="cart-container">
        <Link to="/cart" className="cart-link">
          <span className="cart-icon">🛒</span>
          <span className="cart-badge">{cartCount}</span>
        </Link>
      </div>
    </header>
  );
}

export default Header;