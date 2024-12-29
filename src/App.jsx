import React from "react";
import { useAuth } from "react-oidc-context";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  const auth = useAuth();

  if (auth.isLoading) {
    return <div>Loading...</div>;
  }

  if (auth.error) {
    return <div>Encountered error: {auth.error.message}</div>;
  }

  // Always show Navbar + Sidebar; conditionally show token info only if authenticated.
  return (
    <div>
      <Navbar />
      <Sidebar />

    </div>
  );
}

export default App;
