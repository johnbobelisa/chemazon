// main.jsx
import { AuthProvider} from "react-oidc-context";
import App from "./App";
import ReactDOM from "react-dom/client";
import React from "react";

const cognitoAuthConfig = {
  authority: "https://cognito-idp.ap-southeast-2.amazonaws.com/ap-southeast-2_IgxmRuZaF",
  client_id: "3434jm9fro5mf2c78iat4jcgap",
  redirect_uri: "https://staging.d3rhbniov1vc9d.amplifyapp.com/",
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
      <App />
    </AuthProvider>
  </React.StrictMode>
);