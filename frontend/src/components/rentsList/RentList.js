import React from "react";
import { NavLink } from "react-router-dom";

// récupère rents en props
const RentList = ({ rents }) => {
	console.log("---- Map de tous les logements ----", rents);
	return (
		<div className="card-container">
			<NavLink to={`/logement/${rents.id}`} className="link" state={rents}>
				<div className="card">
					<img src={rents.cover} alt="cover" />
					<div>
						<h2 id="title">{rents.title}</h2>
					</div>
				</div>
			</NavLink>
		</div>
	);
};

export default RentList;
