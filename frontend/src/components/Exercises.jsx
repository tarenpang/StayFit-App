import { useState, useEffect } from 'react';
import stayFitDataService from '../services/stayFitDataService';
// import TemporaryDrawer from './TemporaryDrawer';
import ResponsiveAppBar from './Navbar';
import { Stack, ImageList, ImageListItem, Card, Container, Box } from '@mui/material'
// import { ModalHover } from 'react-modal-hover' //install react-modal-hover

const ExerciseList = () => {
    const [exercises, setExercises] = useState([]);
    // console.log(exercises); 
    useEffect(() => {
        retrieveExercises();
    }, []);
    
    const retrieveExercises = async () => {
        await stayFitDataService.getAll()
        .then(response => {
            console.log(response.data)
            setExercises(response.data);
        })
        .catch(e => {
            console.log("error is: ")
            console.log(e)
        })
    }
    
    return (
      <>
        <ResponsiveAppBar/>
        {/* <TemporaryDrawer/> */}
        <h1>Exercises:</h1>
        <Container className="container" sx={{ mx: "auto", textAlign: "center" }}>
          <Stack spacing={8}>
          <ImageList 
            variant="standard"
            // gap={12} 
            sx={{ 
              mx: "auto", 
              width: "90%", 
              height: "100%" 
            }} 
            cols={3} 
            // rowHeight={164}
            >
              {exercises && exercises.map(exercise => (
                <>
                <Card 
                  key={exercise._id} 
                  sx={{
                    // position: "relative",
                    width: "26vw",
                    height: "26vw",
                    // paddingBottom: "100%",
                  }}>     
                   {/* <ModalHover onHover={<Hover/>} legendPos="left" legendMsg="Exercises">
  <div>{exercises}</div>
<ModalHover/> */}         
                  <ImageListItem key={exercise.index}>
                    <img
                      src={`${exercise.imageUrl}?w=164&h=164&fit=crop&auto=format&dpr=2`}
                      alt={exercise.imageUrl}
                      loading='lazy'
                      // sx={{ objectFit: "contain", overFlow: "hidden" }}
                    />
                  </ImageListItem>
                </Card>
                </>
              ))}
          </ImageList>
        </Stack>
        </Container>       
      </>
    )
}

export default ExerciseList; 
