import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
	return (
		<header>
			<nav>
				<div>
					<div>
						<NavLink to={"/"}>
							<img src="./img/logo/logo.svg" alt="logo" />
						</NavLink>
					</div>
				</div>
				<ul>
					<li>
						<NavLink
							to={"/"}
							style={({ isActive }) => ({
								color: "#FF6060",
								textDecorationLine: isActive ? "underline" : "none",
							})}>
							Accueil
						</NavLink>
					</li>
					<li></li>
					<li>
						<NavLink
							to={"/about"}
							style={({ isActive }) => ({
								color: "#FF6060",
								textDecorationLine: isActive ? "underline" : "none",
							})}>
							À propos
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
