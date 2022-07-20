import ResponsiveAppBar from "../components/Navbar";
import BottomAppBar from "../components/Footer";
import Announcements from "../components/AnnouncementBar";

const MainPage = () => {
    return (  
      <div className="mainpage">
          <ResponsiveAppBar/>
          <Announcements/>
      </div>
    );
}
 
export default MainPage;