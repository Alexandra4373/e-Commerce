import React from "react";
import "./products.css";
import HomeImagesData from "../Data/HomeData";

const Browse = () => {
  return (
    <div className="container my-20">
      <div className="header-products">
        <h1 className="products">Our Products</h1>
      </div>
      <div className="md:grid md:grid-cols-4 sm:flex sm:flex-wrap justify-center gap-5">
        {HomeImagesData.map((product) => (
          <div className="product-item" key={product.id}>
            {/* Product Image */}
            <div className="product-image">
              <img src={product.image} alt={product.name} />
            </div>

            {/* Product Information */}
            <div className="product-info">
              {/* Product Name */}
              <p className="product-name">{product.name}</p>

              {/* Product Details */}
              <p className="product-details">{product.details}</p>

              {/* Price Section */}
              <div className="price-section">
                {/* Selling Price */}
                <p className="selling-price">{product.sellingprice}</p>

                {/* Initial Price (with strikethrough) */}
                <p className="initial-price">
                  <span className="strikethrough">{product.initialprice}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="showmore">
        <button className="showmore-button">Show More</button>
      </div>
    </div>
  );
};

export default Browse;
