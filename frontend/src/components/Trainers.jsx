import { useState, useEffect } from 'react';
import { Stack, ImageList, ImageListItem, Card, Container, Box } from '@mui/material'
import stayFitDataService from '../services/stayFitDataService';

const TrainerList = () => {
    const [trainers, setTrainers] = useState([]);
    // console.log(exercises); 
    useEffect(() => {
        retreieveTrainers();
    }, []);
    
    const retreieveTrainers = async () => {
        await stayFitDataService.getAllTrainers()
        .then(response => {
            setTrainers(response.data);
        })
        .catch(e => {
            console.log("error is: ")
            console.log(e)
        })
    }
    
    return (
      <>
        <h1>Trainers:</h1>
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
              {trainers && trainers.map(trainer => (
                <>
                <Card 
                  sx={{
                    // position: "relative",
                    width: "26vw",
                    height: "26vw",
                    // paddingBottom: "100%",
                  }}>
                    <p>{trainer.firstName}, {trainer.lastName}</p>
                    <p>"{trainer.bio}"</p>        
                  <ImageListItem id={trainer._id}>
                    <img 
                      src={trainer.imageUrl}
                      alt={trainer.imageUrl}
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

export default TrainerList; 









