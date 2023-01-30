import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
	const [count, setCount] = useState(5);
	const navigate = useNavigate();

	useEffect(() => {
		const countDown = setInterval(() => {
			setCount(count - 1);
			if (count <= 0) {
				setCount(0);
				navigate("/");
			}
			clearInterval(countDown);
		}, 1000);
	}, [navigate, count]);

	return (
		<main>
			<div className="error-page">
				<h1>404</h1>
				<p>Oops ! La page que vous demandez n'existe pas...</p>

				<a href={"/"}>
					Redirection sur la page d'acceuil dans {count}{" "}
					{/* Si le nombre est inférieur à 1 alors affiche seconde au singulier */}
					{count > 1 ? "secondes" : "seconde"}...
				</a>
			</div>
		</main>
	);
};

export default NotFound;
