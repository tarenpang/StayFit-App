import { useState } from 'react';
import stayFitDataService from '../services/stayFitDataService';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { VStack } from "@chakra-ui/layout";
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
        <VStack spacing="12px">
            <h2 style={{color: "gray"}}>Add New Exercise</h2>
            <FormControl id="userName" isRequired sx={{mt: "30px"}}>
            <FormLabel>Exercise Name</FormLabel>
            <input
                type="text"
                id="name"
                required
                value={exercise.name}
                onChange={handleInputChange}
                name="name"
                placeholder="Enter Exercise Name"
            />
            </FormControl>
            <FormControl id="description" isRequired>
            <FormLabel>Description</FormLabel>
            <input
                type="text"
                id="description"
                required
                value={exercise.description}
                onChange={handleInputChange}
                name="description"
                placeholder="Enter Description"
            />
            </FormControl>
            <FormControl id="category" isRequired>
            <FormLabel>Category</FormLabel>
            <input
                type="text"
                id="category"
                required
                value={exercise.category}
                onChange={handleInputChange}
                name="category"
                placeholder="Enter Category"
            />
            </FormControl>
            <FormControl id="reps" isRequired>
            <FormLabel>Reps</FormLabel>
            <input
                type="number"
                id="reps"
                required
                value={exercise.reps}
                onChange={handleInputChange}
                name="reps"
            />
            </FormControl>
            <FormControl id="sets" isRequired>
            <FormLabel>Sets</FormLabel>
            <input
                type="number"
                id="sets"
                required
                value={exercise.sets}
                onChange={handleInputChange}
                name="sets"
            />
            </FormControl>
            <FormControl id="frequency" isRequired>
            <FormLabel>Frequency</FormLabel>
            <input
                type="number"
                id="frequency"
                required
                value={exercise.frequency}
                onChange={handleInputChange}
                name="frequency"
            />
            </FormControl>
            <FormControl id="imageUrl" isRequired>
            <FormLabel>ImageURL</FormLabel>
            <input
                type="text"
                id="imageUrl"
                required
                value={exercise.imageUrl}
                onChange={handleInputChange}
                name="imageUrl"
                placeholder="Enter Image URL"
            />
            </FormControl>
            <p style={{textAlign: "center", color:"gray", fontSize: ".8em"}}>* Required Fields</p>
            <Button onClick={saveExercise} className="CheckButton" variant="contained" size="small" style={{marginTop: "10px"}}>Submit</Button>
        </VStack>
        </>
     );
}
 
export default AddExerciseForm;