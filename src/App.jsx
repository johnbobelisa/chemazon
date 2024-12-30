import React from "react";
import { useAuth } from "react-oidc-context";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  const auth = useAuth();

  const signOut = async () => {
    // Remove the user from local session
    await auth.removeUser();
    
    // Then redirect to Cognito’s logout endpoint
    const clientId = "3434jm9fro5mf2c78iat4jcgap";
    const logoutUri = "http://localhost:5173/";
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

  // Pass signOut to Navbar
  return (
    <div>
      <Navbar signOut={signOut} />
      <Sidebar />
    </div>
  );
}

export default App;
