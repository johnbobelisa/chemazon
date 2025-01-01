import React from "react";
import Navbar from "../components/navbar/navbar";
import Sidebar from "../components/Sidebar/Sidebar";

import ProductListing from "../components/products/ProductListing";
import "./page-products.css";

const PageProducts = () => {
    return (
        <div>
            <Navbar />
            <div className="products-and-sidebar">
                <div className="sidebar-container">
                    <Sidebar />
                </div>
                <div className="products-container">
                    <ProductListing />
                </div>
            </div>
            <h1>Products</h1>
            <h1>Products</h1>
            <h1>Products</h1>
            <h1>Products</h1>
            <h1>Products</h1>
            <h1>Products</h1>
            <h1>Products</h1>
            <h1>Products</h1>
            <h1>Products</h1>
            <h1>Products</h1>
            <h1>Products</h1>
            <h1>Products</h1>
            <h1>Products</h1>
        </div>
    );
}

export default PageProducts;