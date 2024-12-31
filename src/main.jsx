// main.jsx
import { AuthProvider} from "react-oidc-context";
import App from "./App";
import ReactDOM from "react-dom/client";
import React from "react";

import PageProducts from "./pages/page-products";

import { BrowserRouter, Routes, Route } from "react-router";
const isLocalhost = window.location.hostname === "localhost";
const cognitoAuthConfig = {
  authority: "https://cognito-idp.ap-southeast-2.amazonaws.com/ap-southeast-2_IgxmRuZaF",
  client_id: "3434jm9fro5mf2c78iat4jcgap",
  redirect_uri: isLocalhost
    ? "http://localhost:5173/"
    : "https://staging.d3rhbniov1vc9d.amplifyapp.com/",
  response_type: "code",
  scope: "email openid profile",
  onSigninCallback: (_user) => {
    window.history.replaceState({}, document.title, window.location.pathname);
  },
};

const root = ReactDOM.createRoot(document.getElementById("root"));

// wrap the application with AuthProvider
root.render(
  <React.StrictMode>
    <AuthProvider {...cognitoAuthConfig}>
      <BrowserRouter>
        <Routes>
          <Route index element={<App />} /> 
          <Route path="products" element={<PageProducts />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);