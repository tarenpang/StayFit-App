import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import stayFitDataService from '../services/stayFitDataService';
import ResponsiveAppBar from '../components/Navbar';
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
      <h1  style={{ mx: "auto", textAlign: "center", color:"#0B4C8A" }}>Exercise Details</h1>
      <p style={{fontSize: "1.8em", mx: "auto", textAlign: "center" }}>Exercise Name: {exercise.name}</p>
      <br/>
      <div style={{ mx: "auto", textAlign: "center" }}>
      <img  alt="Execise Img" src={exercise.imageUrl}></img>
      </div>
      <br/>
      <p style={{fontSize: "1.4em", marginLeft: "20%", marginRight: "20%", textAlign: "center" }}>
        {exercise.description}</p>
      <br/>
      <p style={{fontSize: "1.4em", marginLeft: "20%", marginRight: "20%", textAlign: "center" }}>
       Reps: {exercise.reps}  &nbsp;&nbsp;&nbsp;&nbsp;  Sets: {exercise.sets} &nbsp;&nbsp;&nbsp;&nbsp; Frequency: {exercise.frequency}
      </p>
      </>
    )
}
export default ExerciseDetail;