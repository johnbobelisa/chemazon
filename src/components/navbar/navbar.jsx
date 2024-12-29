import React, { useState } from "react";
import "./navbar.css";
import amazonLogo from "../../assets/amazon_logo.png";
import { useAuth } from "react-oidc-context";

const Navbar = () => {
  const [isResponsive, setIsResponsive] = useState(false);
  const auth = useAuth();

  // (Optional) One combined sign-out function:
  //  1) Remove tokens from local storage
  //  2) Redirect to Cognito's logout endpoint
  //
  // This ensures you do a full sign-out from Cognito AND from the local OIDC session.
  const signOut = async () => {
    // Remove the user from local session
    await auth.removeUser();
    // Then redirect to Cognito’s logout endpoint
    const clientId = "3434jm9fro5mf2c78iat4jcgap";
    const logoutUri = "http://localhost:5175/";
    const cognitoDomain = "https://ap-southeast-2igxmruzaf.auth.ap-southeast-2.amazoncognito.com";
    window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`;
  };

  const toggleResponsiveMenu = () => {
    setIsResponsive(!isResponsive);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={amazonLogo} alt="Company Logo" />
      </div>

      <div className="search-bar">
        <input type="text" placeholder="Search for products..." />
        <button>Search</button>
      </div>

      <ul className={`navbar-links ${isResponsive ? "active" : ""}`}>
        <li><a href="#">Products</a></li>
        <li><a href="#">Cart</a></li>

        {/* Single place for sign in/out */}
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
