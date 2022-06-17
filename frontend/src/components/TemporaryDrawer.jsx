import { useState, useEffect } from 'react';
import stayFitDataService from '../services/stayFitDataService';
import TemporaryDrawer from './TemporaryDrawer';
import ResponsiveAppBar from './Navbar';
import { Stack, ImageList, ImageListItem, Box } from '@mui/material'
// import ImageListExercises from './MuiImageList';

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
      <>
        <ResponsiveAppBar/>
        <TemporaryDrawer/>
        <h1>Exercises:</h1>
        <div className="container" sx={{mx: "auto", textAlign: "center"}}>
          <Stack spacing={4}>
          <ImageList sx={{ mx: "auto", width: "90%", height: "100%" }} cols={3} >
            {exercises && exercises.map(exercise => (
              <ImageListItem key={exercise.index}>
                <img
                  src={`${exercise.imageUrl}?w=164&h=164&fit=crop&auto=format&dpr=2`}
                  alt={exercise.imageUrl}
                  loading='lazy'
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Stack>
        </div>
      </>
    )
}

export default ExerciseList; 