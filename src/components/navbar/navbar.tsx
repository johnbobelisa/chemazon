import React, { useState } from "react";
import "./navbar.css";
// import amazonLogo from "../../assets/amazon_logo.png";
import { Link } from "react-router-dom";
import { Authenticator } from "@aws-amplify/ui-react";

const Navbar: React.FC = () => {
  const [isResponsive, setIsResponsive] = useState(false);

  const toggleResponsiveMenu = () => {
    setIsResponsive(!isResponsive);
  };

  return (
    <Authenticator>
      {({ signOut, user }) => (
        <nav className="navbar">
          <div className="navbar-logo">
            <Link to="/">
              <img src="" alt="Company Logo" />
            </Link>
          </div>

          <div className="search-bar">
            <input type="text" placeholder="Search for products..." />
            <button>Search</button>
          </div>

          <ul className={`navbar-links ${isResponsive ? "active" : ""}`}>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
            <li>
              {user ? (
                <button onClick={signOut}>Sign out</button>
              ) : (
                <button>Sign in</button>
              )}
            </li>
          </ul>
        </nav>
      )}
    </Authenticator>
  );
};

export default Navbar;
