import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Amplify } from "aws-amplify";
import App from "./App";
import PageProducts from "./pages/page-products";
import "./index.css";
import outputs from "../amplify_outputs.json";

// Configure Amplify
Amplify.configure(outputs);

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="products" element={<PageProducts />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
