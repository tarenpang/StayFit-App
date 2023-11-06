import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import stayFitDataService from "../services/stayFitDataService";
import ResponsiveAppBar from "./Navbar";
const TrainerDetail = () => {
	const { id } = useParams();
	const [trainer, setTrainer] = useState([]);

	const retrieveTrainers = async () => {
		await stayFitDataService
			.getTrainer(id)
			.then(response => {
				console.log(response.data);
				setTrainer(response.data);
				console.log("exercise is");
				console.log(trainer);
			})
			.catch(e => {
				console.log("error is: ");
				console.log(e);
			});
	};
	useEffect(() => {
		retrieveTrainers();
	}, []);

	return (
		<>
			<ResponsiveAppBar />
			<h1 style={{ mx: "auto", textAlign: "center" }}>Trainer Details</h1>
			<p style={{ fontSize: "1.8em", mx: "auto", textAlign: "center" }}>
				Trainer Name: {trainer.firstName} {trainer.lastName}
			</p>
			<br />
			<div style={{ mx: "auto", textAlign: "center" }}>
				<img alt="Execise Img" src={trainer.imageUrl}></img>
			</div>
			<br />
			<p
				style={{
					fontSize: "1.4em",
					marginLeft: "20%",
					marginRight: "20%",
					textAlign: "center",
				}}
			>
				{trainer.bio}
			</p>
			<br />
		</>
	);
};
export default TrainerDetail;
