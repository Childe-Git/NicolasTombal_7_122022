import React from "react";
import { useLocation, useParams } from "react-router-dom";
import Rating from "../rating/Rating";
import RentGallery from "../gallery/RentGallery";
import Dropdown from "../../dropdown/Dropdown";

const GetRent = () => {
	const location = useLocation();
	const rent = location.state;

	const { id } = useParams();
	console.log(rent);

	return (
		<div className="rent-container">
			<div>
				<RentGallery rent={rent} />
			</div>
			<div className="rent-information">
				<div className="flex">
					<h1>{rent.title}</h1>
					<div className="user-info">
						<p>{rent.host.name}</p>
						<img src={rent.host.picture} alt="" />
					</div>
				</div>
				<p className="location">{rent.location}</p>
				<div className="flex">
					<div className="tags">
						{rent.tags.map((tag) => {
							return (
								<ul key={tag}>
									<li>{tag}</li>
								</ul>
							);
						})}
					</div>
					<Rating rating={rent.rating} />
				</div>
			</div>
			<div className="collapse-container">
				<div className="rents-dropdown">
					{/* <RentDescription rents={rents} /> */}
					<Dropdown title={"Description"} content={<p>{rent.description}</p>} />
				</div>
				<div className="rents-dropdown">
					<Dropdown
						title={"Équipements"}
						content={
							<ul>
								{rent.equipments.map((equip, i) => {
									return <li key={i}>{equip}</li>;
								})}
							</ul>
						}
					/>
				</div>
			</div>
		</div>
	);
};

export default GetRent;
