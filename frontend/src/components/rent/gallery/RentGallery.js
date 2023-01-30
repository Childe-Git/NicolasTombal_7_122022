import React, { useState } from "react";

const RentGallery = ({ rent }) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const previousSlide = () => {
		// Si l'index est === 0 alors, rent.picture.length - 1,
		// sinon l'index recule de 1
		setCurrentIndex(
			currentIndex === 0 ? rent.pictures.length - 1 : currentIndex - 1
		);
	};

	const nextSlide = () => {
		setCurrentIndex(
			// Si l'index arrive à picture.length - 1 donc qu'il est le même nombre
			// Alors reviens à 0 sinon index + 1 à chaque clique
			currentIndex === rent.pictures.length - 1 ? 0 : currentIndex + 1
		);
	};

	console.log("current index", currentIndex);
	console.log("picture length", rent.pictures.length);
	console.log(rent.pictures);
	return (
		<>
			{/* L'img prends en path l'index de l'array rent.picture */}
			<img
				className="gallery-img"
				src={rent.pictures[currentIndex]}
				alt="rent-pict"
			/>
			{/* Vérifie si il y + d'une img, si non, affiche pas les flèches */}
			{rent.pictures.length <= 1 ? null : (
				// si oui, affiche les flèches,
				<div className="sliders-container">
					<button onClick={previousSlide}>
						<img src="./img/left-arrow.svg" alt="arrow" />
					</button>
					<button onClick={nextSlide}>
						<img src="./img/right-arrow.svg" alt="arrow" />
					</button>
				</div>
			)}
			<div className="index">
				{/* Affiche l'index de rents.picture, + 1 car l'index commence à 0 */}
				{currentIndex + 1} / {rent.pictures.length}
			</div>
		</>
	);
};

export default RentGallery;
