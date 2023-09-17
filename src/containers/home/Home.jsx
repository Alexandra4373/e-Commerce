import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import "./home.css";
// import BrowseHomeData from "../Data/BrowseData";
// import HomeImagesData from "../Data/HomeData";
import Crendenza from "../../assets/Credenza.png";
import ChaiseLounge from "../../assets/Chaise Lounge.png";
import ChinaCabinet from "../../assets/China Cabinet.png";
import RightArrowIcon from "../../assets/right arrow.png";
// import Indicator from "../../assets/Indicator.png";
import Divan from "../../assets/Divan.png";
import EamesChair from "../../assets/Eames Chair.png";
import Futon from "../../assets/Futon.png";
import MurphyBed from "../../assets/Murphy Bed.png";
import Ottoman from "../../assets/Ottoman.png";
import Pouf from "../../assets/Pouf.png";
import TrestleTable from "../../assets/Trestle Table.png";
import Tuffet from "../../assets/Tuffet.png";
import BuffetTable from "../../assets/Buffet Table.png";

const Home = () => {
  return (
    <div className="">
      {/* Navbar */}
      <Navbar />

      <div className="container my-20">
        <div className="browse-header__center">
          <h1>Browse that range</h1>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="grid-container">
          {BrowseHomeData.map((product) => (
            <div className="product--item" key={product.id}>
              {/* Product Image */}
              <div className="product--image">
                <img src={product.image} alt={product.name} />
              </div>

              {/* Product Information */}
              <div className="product--info">
                {/* Product Name */}
                <p className="product--name">{product.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="header-image">
        {/* Two divisons */}

        {/* Left division is empty */}
        <div className="header-left"></div>

        {/* Right division */}
        <div className="header-right">
          {/* Box, align items center */}
          <div className="box">
            <h3 className="text">New Arrival</h3>
            <h1 className="text-">Discover our new Collection</h1>
            <p className="text--">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis.
            </p>
            <button className="buy">BUY NOW</button>
          </div>
        </div>
      </div>

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
                    <span className="strikethrough">
                      {product.initialprice}
                    </span>
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

      <div className="explore_container">
        <div className="explore_content">
          <h1>50+ Beautiful rooms inspiration</h1>
          <p>
            Our designer already made a lot of beautiful prototipe of rooms that
            inspire you
          </p>

          <button type="button" className="explore__button">
            Explore more
          </button>
        </div>

        <div className="content">
          <div className="content-inner">
            <div className="content-innerpeace">
              <div className="content-top">
                <p>01</p>
                <hr />
                <p>Bed Room</p>
              </div>
              <h2>Inner Peace</h2>
            </div>
            <img className="rightarrow" src={RightArrowIcon} alt="logo" />
          </div>
        </div>

        <div className="explore__gallery-images">
          {/* <img src={Crendenza} alt='logo' /> */}
          {/* <img src={RightArrowIcon} alt='logo'  className="arrow-bottom"/> */}
          <img src={ChaiseLounge} alt="logo" />
          {/* <img src={Indicator} alt="logo" className="indicator"/> */}
          <img src={ChinaCabinet} alt="logo" />
        </div>
      </div>

      <div className="share-content">
        <div className="content__center">
          <p>Share your setup with us</p>
          <h1>#FuniroFurniture</h1>
        </div>

        <div className="share-gallery">
          <img src={Ottoman} alt="logo" />
          <img src={EamesChair} alt="logo" />
          <img src={Divan} alt="logo" />
          <img src={TrestleTable} alt="logo" />
          <img src={BuffetTable} alt="logo" />
          <img src={MurphyBed} alt="logo" />
          <img src={Pouf} alt="logo" />
          <img src={Tuffet} alt="logo" />
          <img src={Futon} alt="logo" />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
