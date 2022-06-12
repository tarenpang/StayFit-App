import ResponsiveAppBar from "./Navbar";
import BottomAppBar from "./Footer";
import ExerciseList from "./Exercises";
import AddExerciseForm from "./AddExerciseForm";
import RegisterTrainer from "./RegisterTrainer";
import RegisterUser from "./RegisterUser";

const MainPage = () => {
    return (  
      <div className="mainpage">
          <ResponsiveAppBar/>
          <h1 style={{textAlign: 'center'}}>Announcements</h1>
          {/* <BottomAppBar/> */}
          <ExerciseList/>
          <AddExerciseForm/>
          <RegisterTrainer/>
          <RegisterUser/>
      </div>
    );
}
 
export default MainPage;