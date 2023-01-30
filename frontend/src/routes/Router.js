import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../page/Home";
import About from "../page/About";
import Rent from "../page/Rent";
import NotFound from "../components/error/NotFound";

const Router = () => {
	return (
		<Routes>
			<Route path="/">
				<Route index element={<Home />} />
				<Route path="logement/:id" element={<Rent />} />
			</Route>
			<Route path="/about" element={<About />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
};

export default Router;
