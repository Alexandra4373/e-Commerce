import React from "react";
import "./footer.css";

const Footer = () => {
	return (
		// This contains the division and copyright
		<div className="footer">
			{/* This container contains only the divisions */}
			<div className="footer-container">
				{/* Footer 1st */}
				<div className="footer-heading__name">
				<hr/>
					<h1>Funiro.</h1>
					<p>400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
				</div>

				{/* Footer 2nd */}
				<div className="footer-links_container">
					<p className="footer--header">Links</p>
					<p>
						<a href="#home">Home</a>
					</p>
					<p>
						<a href="Shop.jsx">Shop</a>
					</p>
					<p>
						<a href="#About">About</a>
					</p>
					<p>
						<a href="#Contact">Contact</a>
					</p>
				</div>

				{/* Footer 3rd */}
				<div className="footer-heading-help">
					<p className="footer--help">Help</p>
					<p>
						<a href="#home">Payment Options</a>
					</p>
					<p>
						<a href="Shop.jsx">Returns</a>
					</p>
					<p>
						<a href="#About">Privacy Policies</a>
					</p>
				</div>

				{/* Footer 4th */}
				<div className="footer-heading-newsletter">
					<div className="newsletter-center">
						<p>Newsletter</p>
					</div>

					<div className="newsletter-container">
						<input type="text" placeholder="Enter Your Email Address"></input>
						<button type="button">SUBSCRIBE</button>
					</div>
				</div>
			</div>


			{/* Since copyright down, it doesn't form part of the division */}

			<div className="footer-copyright">
			<hr/>
				<p>2023 furino. All rights reserved</p>
			</div>
		</div>
	);
};

export default Footer;
