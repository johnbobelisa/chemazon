import React, { useState } from "react";
import "./navbar.css";
import amazonLogo from "../../assets/amazon_logo.png";
import { useAuth } from "react-oidc-context";

import { Link } from "react-router";

const Navbar = () => {
  const auth = useAuth();

  const signOut = async () => {
    await auth.removeUser();
    const clientId = "3434jm9fro5mf2c78iat4jcgap";
    const logoutUri = `${window.location.origin}/`;
    const cognitoDomain = "https://ap-southeast-2igxmruzaf.auth.ap-southeast-2.amazoncognito.com";

    window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`;
  };

  switch (auth.activeNavigator) {
    case "signinSilent":
      return <div>Signing you in...</div>;
    case "signoutRedirect":
      return <div>Signing you out...</div>;
  }

  if (auth.isLoading) {
    return <div>Loading...</div>;
  }

  if (auth.error) {
    return <div>Oops... {auth.error.message}</div>;
  }

  const [isResponsive, setIsResponsive] = useState(false);


  const toggleResponsiveMenu = () => {
    setIsResponsive(!isResponsive);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
      <Link to="/">
        <img src={amazonLogo} alt="Company Logo" />
      </Link>
      </div>

      <div className="search-bar">
        <input type="text" placeholder="Search for products..." />
        <button>Search</button>
      </div>

      <ul className={`navbar-links ${isResponsive ? "active" : ""}`}>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/cart">Cart</Link></li>
        <li>
          {auth.isAuthenticated ? (
            <button onClick={signOut}>Sign out</button>
          ) : (
            <button onClick={() => auth.signinRedirect()}>Sign in</button>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
