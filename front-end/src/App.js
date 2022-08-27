import React from "react";
import { Routes, Route, useNavigate, Outlet } from "react-router";
import Builder from "./Pages/Builder";
import Builds from "./Pages/Builds";
import Guides from "./Pages/Guides";
import NavBar from "./Components/NavBar";
import Products from "./Pages/Products";
import Header from "./Components/Header";
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

const API = process.env.REACT_APP_API_URL;

export default function App() {
	const navigate = useNavigate();
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
	return (
		<div>
			{/* <Header /> */}
			<NavBar />
			{/* <Outlet /> */}
			<Routes>
				<Route path="/" element={<Home API={API} />} />
				<Route path="list" element={<Builder API={API} />} />
				<Route path="guides" element={<Guides API={API} />} />
				<Route path="builds" element={<Builds API={API} />} />
				<Route path="products" element={<Products API={API} />}>
					<Route path="switches" element={<SwitchIndex />}>
						<Route path=":id" element={<ShowSwitch />}>
							<Route path="edit" element={<EditSwitch />} />
						</Route>
						<Route path="new" element={<NewSwitch />} />
					</Route>
					<Route path="keyboards" element={<KeyboardIndex />}>
						<Route path=":id" element={<ShowKeyboard />}>
							<Route path="edit" element={<EditKeyboard />} />
						</Route>
						<Route path="new" element={<NewKeyboard />} />
					</Route>
					<Route path="keycaps" element={<KeycapIndex />}>
						<Route path=":id" element={<NewKeycap />}>
							<Route path="edit" element={<EditKeycap />} />
						</Route>
						<Route path="new" element={<NewKeycap />} />
					</Route>
				</Route>
			</Routes>
		</div>
	);
}
