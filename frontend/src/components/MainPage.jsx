import ResponsiveAppBar from "./Navbar";
import BottomAppBar from "./Footer";
import ExerciseList from "./Exercises";
import RegisterTrainer from "./RegisterTrainer";
import RegisterUser from "./RegisterUser";
import Announcements from "./AnnouncementBar";

const MainPage = () => {
    return (  
      <div className="mainpage">
          <ResponsiveAppBar/>
          <Announcements/>
      </div>
    );
}
 
export default MainPage;