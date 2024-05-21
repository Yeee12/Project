import './navbar.css'; // Standard CSS import

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>Agrivista Farm Ltd</h1>
      <div className="nav-links">
        <ul>
          <a href="/">Home</a>
          <a href="/">About Us</a>
          <a href="/">Pages</a>
          <a className="nav-button" href="/login">Login</a>
          <a className="nav-button" href="/signup">Sign Up</a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
