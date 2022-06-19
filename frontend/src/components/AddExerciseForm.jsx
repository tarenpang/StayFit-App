import { useState } from 'react';
import stayFitDataService from '../services/stayFitDataService';
import Button from "@mui/material/Button";
import ResponsiveAppBar from './Navbar';

const AddExerciseForm = () => {
    const initialExerciseState = {
        name: "",
        description: "",
        category: "",
        reps: 0,
        sets: 0,
        frequency: 0,
        imageUrl: "",
    }

    const [exercise, setExercise] = useState(initialExerciseState);
    
    const handleInputChange = event => {
        event.preventDefault(); 
        const {name, value} = event.target; 
        setExercise({...exercise, [name]: value})
    }
    const saveExercise = () => {
        var data = {
            name: exercise.name,
            description: exercise.description,
            category: exercise.category,
            reps: exercise.reps,
            sets: exercise.sets,
            frequency: exercise.frequency,
            imageUrl: exercise.imageUrl
        }
        stayFitDataService.create(data)
            .then(response => {
                setExercise(initialExerciseState); 
                // console.log(response.data)
            })
            .catch(e => {
                console.log(e)
            })
    }
    return (
        <> 
        <ResponsiveAppBar/>
        <div className="submit-form">
            <h1>Add New Exercise</h1>
            <div className="form-group">
            <label htmlFor='name'>Name</label>
            <input
                type="text"
                id="name"
                required
                value={exercise.name}
                onChange={handleInputChange}
                name="name"
            />
            </div>
            <div className="form-group">
            <label htmlFor='description'>Description</label>
            <input
                type="text"
                id="description"
                required
                value={exercise.description}
                onChange={handleInputChange}
                name="description"
            />
            </div>
            <div className="form-group">
            <label htmlFor='category'>Category</label>
            <input
                type="text"
                id="category"
                required
                value={exercise.category}
                onChange={handleInputChange}
                name="category"
            />
            <div className="form-group">
            <label htmlFor='reps'>Reps</label>
            <input
                type="number"
                id="reps"
                required
                value={exercise.reps}
                onChange={handleInputChange}
                name="reps"
            />
            </div>
            <div className="form-group">
            <label htmlFor='sets'>Sets</label>
            <input
                type="number"
                id="sets"
                required
                value={exercise.sets}
                onChange={handleInputChange}
                name="sets"
            />
            </div>
            </div>
            <div className="form-group">
            <label htmlFor='sets'>Frequency</label>
            <input
                type="number"
                id="frequency"
                required
                value={exercise.frequency}
                onChange={handleInputChange}
                name="frequency"
            />
            </div>
            <div className="form-group">
            <label htmlFor='imageUrl'>ImageUrl</label>
            <input
                type="text"
                id="imageUrl"
                required
                value={exercise.imageUrl}
                onChange={handleInputChange}
                name="imageUrl"
            />
            <br/>
            <Button onClick={saveExercise} className="CheckButton" variant="contained" style={{marginTop: "10px"}}>Submit</Button>
            </div>
        </div>
        </>
     );
}
 
export default AddExerciseForm;