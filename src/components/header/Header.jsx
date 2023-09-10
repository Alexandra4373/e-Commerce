import React from "react";
import "./header.css";
import header from "../../assets/header.png";

const Header = () => {
	return (
		// Header image
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
	);
};

export default Header;
