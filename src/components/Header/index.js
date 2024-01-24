import {Link} from 'react-router-dom'
import './index.css'

const Header = () => {
  ;<nav className="nav-container">
    <div className="head-container">
      <img
        className="image"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
      />

      <ul>
        <Link to="/" className="nav-link">
          <li>Home</li>
        </Link>

        <Link to="/products" className="nav-link">
          <li>Products</li>
        </Link>

        <Link to="/cart" className="nav-link">
          <li>Cart</li>
        </Link>
      </ul>

      <button type="button" className="log-out-desktop-button">
        Logout
      </button>
      <button type="button" className="logout-mobile-btn">
        <img
          className="logout-icon"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
          alt="nav logout"
        />
      </button>
    </div>
  </nav>
}
export default Header
