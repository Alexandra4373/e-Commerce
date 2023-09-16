import React from "react";
import "./explore.css";
import Crendenza from "../../assets/Credenza.png";
import ChaiseLounge from "../../assets/Chaise Lounge.png";
import ChinaCabinet from "../../assets/China Cabinet.png";
import RightArrowIcon from "../../assets/right arrow.png";
import Indicator from '../../assets/Indicator.png';

const Explore = () => {
	return (
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
	);
};

export default Explore;
