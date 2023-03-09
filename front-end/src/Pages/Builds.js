import axios from "axios";
import React, { useEffect, useState } from "react";
import CompletedBuild from "../Components/CompletedBuild/CompletedBuild";
import "./Builds.scss";

export default function Builds({ API }) {
	const [builds, setBuilds] = useState([]);
	useEffect(() => {
		axios
			.get(`${API}/builds`)
			.then((response) => setBuilds(response.data.payload))
			.catch((error) => console.log(error));
	});
	return (
		<div className="completedBuilds">
			{builds.map((build) => {
				return <CompletedBuild buildInfo={build} API={API} />;
			})}
		</div>
	);
}
