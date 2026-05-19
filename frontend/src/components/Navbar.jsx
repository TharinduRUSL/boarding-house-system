import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Boarding House Finder</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/boardings">Boardings</Link>
        <Link to="/add-boarding">Add Boarding</Link>
        <Link to="/my-bookings">My Bookings</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </nav>
  );
}

export default Navbar;