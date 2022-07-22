import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom';
import stayFitDataService from '../services/stayFitDataService';
import ResponsiveAppBar from '../components/Navbar';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

const ExerciseDetail = () =>{
    const {id} = useParams();
    const [exercise, setExercise] = useState([]);
    useEffect(() => {
      retrieveExercises();
    }, []);
    const retrieveExercises = async () => {
      await stayFitDataService
        .getExercise(id)
        .then((response) => {
          console.log(response.data);
          setExercise(response.data);
          console.log('exercise is')
          console.log(exercise)
        })
        .catch((e) => {
          console.log("error is: ");
          console.log(e);
        });
    }
    return(
      <>
      <ResponsiveAppBar/>
      <Card sx={{ marginTop: "40px", mx: "auto", textAlign: "center", width: 600, maxWidth: "85%" }}>
        <h1  style={{ mx: "auto", textAlign: "center", color:"#0B4C8A" }}>{exercise.name}</h1>
        <div ></div>
        {/* <p style={{fontSize: "1.8em", mx: "auto", textAlign: "center" }}>Exercise Name: {exercise.name}</p> */}
        <br/>
        <div style={{ mx: "auto", textAlign: "center" }}>
        <img  alt="Execise Img" src={exercise.imageUrl}></img>
        </div>
        <br/>
        <div style={{ mx: "auto", textAlign: "center", width: "100%"}}>
          <p style={{fontSize: "1.4em", marginLeft: "20%", marginRight: "20%", textAlign: "left"}}>
            {exercise.description}</p>
          <br/>
        </div>
        <h3 style={{marginLeft: "20%", marginRight: "20%", textAlign: "center" }}>
          <label>Reps: {exercise.reps}  &nbsp;&nbsp;&nbsp;&nbsp;</label>
          <label>Sets: {exercise.sets} &nbsp;&nbsp;&nbsp;&nbsp;</label>  
          <label>Frequency: {exercise.frequency}</label>     
        </h3>
        <br/>
        <Link style={{ color:"#0B4C8A", textDecoration: 'none' }} to="/exercises">
          <Typography textAlign="center">Back to Exercises</Typography>
        </Link>
      </Card>
      </>
    )
}
export default ExerciseDetail;
