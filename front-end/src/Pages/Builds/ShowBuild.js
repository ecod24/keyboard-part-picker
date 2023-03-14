import axios from "axios";
import React from "react";
import { useParams } from "react-router";

function ShowBuild({ API }) {
	const { id } = useParams();
	useEffect(() => {
		axios.get(`${API}/builds/${id}`).then((response) => {
			console.log(response.data.payload);
		});
	});
	return <div>ShowBuild</div>;
}

export default ShowBuild;
