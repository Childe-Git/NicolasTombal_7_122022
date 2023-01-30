import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Banner from "../components/banner/Banner";
import RentList from "../components/rentsList/RentList";
import { logement } from "../data/logement";

const Home = () => {
	const [text, setText] = useState("");
	const imgPath = "./img/banner/banner.png";
	useEffect(() => {
		setText(
			<h1>
				Chez vous, <br className="back-to-line" /> partout et ailleurs
			</h1>
		);
	}, [setText]);
	return (
		<main className="home-page">
			<div className="home-banner">
				<Banner imgPath={imgPath} text={text} />
			</div>
			<section>
				<div className="home-container">
					{/* Map tous les logements pour les retourner
					dans le composant RentList en passant rents en props */}
					{logement[0] &&
						logement.map((rents) => {
							return <RentList rents={rents} key={rents.id} />;
						})}
				</div>
			</section>
		</main>
	);
};

export default Home;
