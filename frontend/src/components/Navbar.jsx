import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="premium-navbar">
      <Link to="/" className="nav-logo">
        <div className="logo-icon">🏠</div>
        <div>
          <h2>BoardingFinder</h2>
          <span>Find • Compare • Book</span>
        </div>
      </Link>

      <div className="premium-nav-links">
        <Link to="/">Home</Link>
        <Link to="/boardings">Boardings</Link>
        <Link to="/add-boarding">Add Boarding</Link>
        <Link to="/my-bookings">My Bookings</Link>
      </div>

      <div className="nav-auth-buttons">
        <Link to="/login" className="nav-login">
          Login
        </Link>
        <Link to="/register" className="nav-register">
          Register
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;