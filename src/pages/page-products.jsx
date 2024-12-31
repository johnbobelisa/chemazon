import React from "react";
import Navbar from "../components/navbar/navbar";
import Sidebar from "../components/Sidebar/Sidebar";

import ProductCard from "../components/products/ProductCard";
import ProductListing from "../components/products/ProductListing";

const PageProducts = () => {
    return (
        <div>
            <Navbar />
            <Sidebar />
            <h1>Products</h1>
        </div>
    );
}

export default PageProducts;