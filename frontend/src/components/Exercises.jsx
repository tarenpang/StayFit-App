import { useState, useEffect } from 'react';
import stayFitDataService from '../services/stayFitDataService';

const ExerciseList = () => {
    const [exercises, setExercises] = useState([]);
    console.log(exercises); 
    useEffect(() => {
        retrieveExercises();
    }, []);
    
    const retrieveExercises = () => {
        stayFitDataService.getAll()
        .then(response => {
            setExercises(response.data);
            console.log("response data is: ")
            console.log(response.data);
        })
        .catch(e => {
            console.log(e)
        })
    }
    
    return (
        <div className="exerciselist">
            <h1>Exercises:</h1>
            <ul className="exercise" style={{listStyle:"none"}}>
            {exercises && exercises.map((exercise, index) => {
               return (
                <div key={index}>
               <li style={{fontWeight: "bold"}}>{exercise.name}</li>
               <li>{exercise.description}</li>
               <li><img src={exercise.imageUrl} style={{height: "220px"}}/></li> 
               </div>
               )
            })}   
            </ul>
        </div>
    )
}

export default ExerciseList; 