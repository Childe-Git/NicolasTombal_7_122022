import React from "react";

const Banner = ({ imgPath, text }) => {
	return (
		<>
			<img src={imgPath} alt="banner" />
			<div className="text-container">{text}</div>
		</>
	);
};

export default Banner;
