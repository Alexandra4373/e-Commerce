import React from "react";
import "./browse.css";
import BrowseHomeData from "../Data/BrowseData";

const Browse = () => {
  return (
	
    <div className="container my-20">
		<div className="header-products">
			<h1 className="products">Browse that range</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

		</div>
      <div className="md:grid md:grid-cols-4 sm:flex sm:flex-wrap justify-center gap-5">
        {BrowseHomeData.map((product) => (
          <div className="product-item" key={product.id}>
            {/* Product Image */}
            <div className="product-image">
              <img src={product.image} alt={product.name} />
            </div>

            {/* Product Information */}
            <div className="product-info">
              {/* Product Name */}
              <p className="product-name">{product.name}</p>

            </div>
          </div>
        ))}
      </div>
    </div>
	
  );
};

export default Browse;
