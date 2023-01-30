import React, { useEffect, useState } from "react";

const Dropdown = ({ title, content }) => {
	const [isOpen, setIsOpen] = useState(false);
	useEffect(() => {
		// cache l'animation des dropdown pendant 0.8s

		setInterval(() => {
			const dropdown = document.getElementsByClassName("dropdown-content");
			for (let i = 0; i < dropdown.length; i++) {
				dropdown[i].style.visibility = "visible";
			}
		}, 800);
	});

	return (
		<>
			<div className="dropdown-container">
				<div className="dropdown-wrapper" onClick={(e) => setIsOpen(!isOpen)}>
					<h1>{title}</h1>
					{/* Ajout de class dynamique, si open, ajoute "open" sinon "hide" */}
					<img
						className={"dropdown-img " + (isOpen ? "open" : "close")}
						src="./img/collapse-close.svg"
						alt="open"
					/>
				</div>
				<div
					className={"dropdown-content " + (isOpen ? "show" : "hide")}
					id="content">
					{content}
				</div>
			</div>
			{/* Ajoute un espace entre chaque dropdown */}
			<br />
			<br />
		</>
	);
};

export default Dropdown;
