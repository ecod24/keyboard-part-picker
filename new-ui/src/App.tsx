import React from 'react';
import './App.css';
import { Route, Routes } from "react-router";
import Home from "./Pages/Home/Home";

function App() {
  return (
		<div className="App">
			{/* <img src={logo} className="App-logo" alt="logo" />
			<p>
				Edit <code>src/App.tsx</code> and save to reload.
			</p>
			<a
				className="App-link"
				href="https://reactjs.org"
				target="_blank"
				rel="noopener noreferrer"
			>
				Learn React
			</a> */}
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</div>
  );
}

export default App;
