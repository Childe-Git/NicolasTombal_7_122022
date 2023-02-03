import React from "react";
import { useLocation, useParams } from "react-router-dom";
import Rating from "../rating/Rating";
import RentGallery from "../gallery/RentGallery";
import Dropdown from "../../dropdown/Dropdown";

const GetRent = () => {
	const location = useLocation();
	const rent = location.state;

	// const { id } = useParams();
	console.log(rent);

	return (
		<div className="rent-container">
			<div>
				<RentGallery rent={rent} />
			</div>
			<div className="rent-information">
				<div className="flex">
					<div className="rent-info">
						<h1>{rent.title}</h1>
						<p className="location">{rent.location}</p>
					</div>
					<div className="user-info-desktop">
						<div>
							<p>{rent.host.name}</p>
							<img className="user-pict" src={rent.host.picture} alt="" />
						</div>
					</div>
				</div>
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
					<div className="rating">
						<Rating rating={rent.rating} />
					</div>
				</div>
				<div className="user-info-mobile">
					<div>
						<p>{rent.host.name}</p>
						<img className="user-pict" src={rent.host.picture} alt="" />
					</div>
					<div className="rating">
						<Rating rating={rent.rating} />
					</div>
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
