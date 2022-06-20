import { useState, useEffect, useMemo } from 'react';
import stayFitDataService from '../services/stayFitDataService';
import ResponsiveAppBar from './Navbar';
import { Stack, ImageList, ImageListItem, Card, Container, Box } from '@mui/material'

const ExerciseList = () => {
    const [exercises, setExercises] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState();
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

    function handleCategoryChange(event){
      setSelectedCategory(event.target.value);
    }
    
    function getFilteredList(){
      if(!selectedCategory){
        return exercises;
      }
      return exercises.filter((item) => item.category === selectedCategory)
    }
    var filteredList = useMemo(getFilteredList, [selectedCategory, exercises]);
    console.log(filteredList);
    return (
      <>
        <ResponsiveAppBar/>
        {/* <TemporaryDrawer/> */}
        <div className="filter-container">
        <div>Filter by Category:</div>
        <div>
            <select
              name="category-list"
              id="category-list"
              onChange={handleCategoryChange}
            >
              <option value="">All Workouts</option>
              <option value="FBW">Full Body Workout</option>
              <option value="COR">Core Exercises</option>
              <option value="AFE">Ankle and Foot Exercises</option>
              <option value="CRV">Cervical (Neck) Exercises</option>
              <option value="AWE">Arm and Wrist Workouts</option>
              <option value="HKE">Hip and Knee Exercises</option>
              <option value="SHD">Shoulder Exercises</option>
              <option value="BRE">Breathing Exercises</option>
            </select>
        </div>
      </div>
        <h1 style={{ mx: "auto", textAlign: "center" }}>Exercises:</h1>
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
              {!selectedCategory && exercises && exercises.map(exercise => (
                <>
                <Card
                  key={exercise._id}
                  sx={{
                    // position: "relative",
                    // width: "26vw",
                    // height: "26vw",
                    // paddingBottom: "100%",
                  }}>
                  <ImageListItem key={exercise.index}>
                    <img
                      id={exercise._id}
                      src={`${exercise.imageUrl}?w=164&h=164&fit=crop&auto=format&dpr=2`}
                      alt={exercise.imageUrl}
                      loading='lazy'
                      // sx={{ objectFit: "contain", overFlow: "hidden" }}
                    />
                  </ImageListItem>
                </Card>
                </>
              ))}
               {selectedCategory  && filteredList.map(exercise => (
                <>
                <Card
                  key={exercise._id}
                  sx={{
                    // position: "relative",
                    // width: "26vw",
                    // height: "26vw",
                    // paddingBottom: "100%",
                  }}>
                  <ImageListItem key={exercise.index}>
                    <img
                      id={exercise._id}
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