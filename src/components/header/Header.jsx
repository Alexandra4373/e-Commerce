import React from "react";
import "./header.css";
import header from "../../assets/header.png";

const Header = () => {
	return (
		<div className="header">
			{/* <div className='header-logo'>
      <img src={header} alt="header-logo" />
      <div className='box'>
        <h3 className='text'>New Arrival</h3>
        <h1 className='text-'>Discover our new Collection</h1>
        <p className='text--'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
        <button className='buy'>BUY NOW</button>
      </div>
      </div> */}

			{/* <div className='box'>
        <h3 className='text'>New Arrival</h3>
        <h1 className='text-'>Discover our new Collection</h1>
        <p className='text--'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
        <button className='buy'>BUY NOW</button>
      </div> */}

			<div className="header-image">
				<div className="header-left"></div>
				<div className="header-right">
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
		</div>
	);
};

export default Header;
