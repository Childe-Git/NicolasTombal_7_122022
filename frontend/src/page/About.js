import React, { useEffect, useState } from "react";
import AboutList from "../components/aboutList/AboutList";
import Banner from "../components/banner/Banner";

const About = () => {
	const [imgPath, setImgPath] = useState("./img/banner/about-banner.png");
	useEffect(() => {
		// Change le path de l'image en fonction de la taille de l'écran
		window.addEventListener("resize", function (e) {
			e.preventDefault();
			if (window.innerWidth <= 425) {
				setImgPath("./img/banner/about-banner-phone.png");
			} else {
				setImgPath("./img/banner/about-banner.png");
			}
		});
	}, [setImgPath]);

	return (
		<main>
			<div className="about-banner">
				<Banner imgPath={imgPath} />
			</div>
			<section className="about-list">
				<AboutList />
			</section>
		</main>
	);
};

export default About;
