import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router";
import Builder from "./Pages/Builder";
import Builds from "./Pages/Builds";
import Guides from "./Pages/Guides";
import NavBar from "./Components/NavBar";
import Products from "./Pages/Products";
// import Header from "./Components/Header";
import Home from "./Pages/Home";
import axios from "axios";
import SwitchIndex from "./Pages/Switches/SwitchIndex";
import ShowSwitch from "./Pages/Switches/ShowSwitch";
import EditSwitch from "./Pages/Switches/EditSwitch";
import NewSwitch from "./Pages/Switches/NewSwitch";
import KeyboardIndex from "./Pages/Keyboards/KeyboardIndex";
import EditKeyboard from "./Pages/Keyboards/EditKeyboard";
import NewKeyboard from "./Pages/Keyboards/NewKeyboard";
import ShowKeyboard from "./Pages/Keyboards/ShowKeyboard";
import NewKeycap from "./Pages/Keycaps/NewKeycap";
import EditKeycap from "./Pages/Keycaps/EditKeycap";
import KeycapIndex from "./Pages/Keycaps/KeycapIndex";
import ShowKeycap from "./Pages/Keycaps/ShowKeycap";

const API = process.env.REACT_APP_API_URL;

export default function App() {
	const navigate = useNavigate();
	const [currentBuild, setCurrentBuild] = useState({
		keyboard: null,
		keycaps: null,
		switches: null,
	});
	const deleteItem = (id, type) => {
		axios
			.delete(`${API}/${type}/${id}`)
			.then(() => {
				navigate("/");
			})
			.catch((error) => {
				console.log(error);
			});
	};
	const removeFromCart = (key) => {
		delete currentBuild[key];
	};
	return (
		<div>
			{/* <Header /> */}
			<NavBar />
			{/* <Outlet /> */}
			<Routes>
				<Route path="/" element={<Home API={API} deleteItem={deleteItem} />} />
				<Route
					path="/list"
					element={
						<Builder
							API={API}
							currentBuild={currentBuild}
							setCurrentBuild={setCurrentBuild}
							removeFromCart={removeFromCart}
						/>
					}
				/>
				<Route path="/guides" element={<Guides API={API} />} />
				<Route path="/builds" element={<Builds API={API} />} />
				<Route path="/products" element={<Products API={API} />} />
				<Route path="/products/switches" element={<SwitchIndex />} />
				<Route path="/products/switches/new" element={<NewSwitch />} />
				<Route path="/products/switches/:id" element={<ShowSwitch />} />
				<Route path="/products/switches/:id/edit" element={<EditSwitch />} />

				<Route path="/products/keycaps" element={<KeycapIndex />} />
				<Route path="/products/keycaps/new" element={<NewKeycap />} />
				<Route path="/products/keycaps/:id" element={<ShowKeycap />} />
				<Route path="/products/keycaps/:id/edit" element={<EditKeycap />} />

				<Route path="/products/keyboards" element={<KeyboardIndex />} />
				<Route path="/products/keyboards/new" element={<NewKeyboard />} />
				<Route path="/products/keyboards/:id" element={<ShowKeyboard />} />
				<Route path="/products/keyboards/:id/edit" element={<EditKeyboard />} />
			</Routes>
		</div>
	);
}
