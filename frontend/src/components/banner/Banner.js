import React from "react";

const Banner = ({ imgPath, text }) => {
	return (
		<>
			<img src={imgPath} alt="banner" />
			<div className="text-container">
				<h1>{text}</h1>
			</div>
		</>
	);
};

export default Banner;
