import ResponsiveAppBar from "./Navbar";
import BottomAppBar from "./Footer";
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