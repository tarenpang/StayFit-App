import ResponsiveAppBar from "./Navbar";
import BottomAppBar from "./Footer";
import ExerciseList from "./Exercises";
import AddExerciseForm from "./AddExerciseForm";
import RegisterTrainer from "./RegisterTrainer";
import RegisterUser from "./RegisterUser";
import Announcements from "./AnnouncementBar";

const MainPage = () => {
    return (  
      <div className="mainpage">
          <ResponsiveAppBar/>
          {/* <BottomAppBar/> */}
          {/* <ExerciseList/> */}
          <AddExerciseForm/>
          <RegisterTrainer/>
          <RegisterUser/>
      </div>
    );
}
 
export default MainPage;