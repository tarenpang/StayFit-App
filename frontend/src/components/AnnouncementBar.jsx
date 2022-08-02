import { Paper } from "@mui/material";
import newPersonalTrainer from '../assets/images/newPersonalTrainer.jpg'
import rowGirl2 from '../assets/images/rowGirl2.jpg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
function Announcements(props) {
    var items = [
      {
        name: "Current top workout: Rowing",
        description: "Rowing is this weeks most popular workout",
        image: rowGirl2,
    },
<<<<<<< HEAD
      {
        name: "Welcome new trainer Steve!",
        description: "Steve has been a personal trainer for 8 years and specializes in core strength",
        image: newPersonalTrainer
      },
=======
        {
            name: "Welcome new trainer Steve!",
            description: "Steve has been a personal trainer for 8 years and specializes in core strength",
            image: newPersonalTrainer
        },
>>>>>>> 21ce7f1c812cbba6b14db2119d50d187c23e3126
    ]
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      lazyLoad: 'progressive'
    };
<<<<<<< HEAD
    
    return (
      <>
        <h1 style={{textAlign: "center", color:"#0B4C8A"}}>Announcements</h1>
=======
    return (
>>>>>>> 21ce7f1c812cbba6b14db2119d50d187c23e3126
        <Slider {...settings}>
        {
            items.map( (item, i) => <><Item key={i} item={item} /></> )
        }
<<<<<<< HEAD
        </Slider>    
      </>
=======
        </Slider>
>>>>>>> 21ce7f1c812cbba6b14db2119d50d187c23e3126
    )
}
    function Item(props) {
        return (
          <>
        <div className="landingPage">
          <div style={{position: 'relative'}}>
<<<<<<< HEAD
            {/* <h1 style={{textAlign: "center", color:"#0B4C8A"}}>Announcements</h1> */}
            <Paper style={{marginRight: '15%', marginLeft: '15%'}}>
            <h3 style={{
=======
            <h1 style={{textAlign: "center", color:"#0B4C8A"}}>Announcements</h1>
            <Paper style={{marginRight: '15%', marginLeft: '15%'}}>
            <h2 style={{
>>>>>>> 21ce7f1c812cbba6b14db2119d50d187c23e3126
              position: 'absolute',
              width: '75%',
              textAlign: 'center',
              color: 'white',
<<<<<<< HEAD
              textShadow: '1px 1px rgba(0,0,0,0.5)',
              top: -5,
              left: '50%',
              transform: 'translate(-50%)'
            }}>{props.item.name}</h3>
            <h4 style={{
=======
              textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
              top: 49,
              left: '50%',
              transform: 'translate(-50%)'
            }}>{props.item.name}</h2>
            <h3 style={{
>>>>>>> 21ce7f1c812cbba6b14db2119d50d187c23e3126
              position: 'absolute',
              width: '55%',
              textAlign: 'center',
              color: 'white',
<<<<<<< HEAD
              textShadow: '1.5px 1.5px rgba(0,0,0,0.6)',
              bottom: -10,
              left: '50%',
              transform: 'translate(-50%)',
              '@media (maxWidth: 400px)': {}
            }}>{props.item.description}</h4>
=======
              textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
              bottom: 15,
              left: '50%',
              transform: 'translate(-50%)',
              '@media (maxWidth: 400px)': {}
            }}>{props.item.description}</h3>
>>>>>>> 21ce7f1c812cbba6b14db2119d50d187c23e3126
            <img alt="images" loading="eager" object-fit="cover" display="block" height="100%" maxheight="300px" width="100%" overflow="hidden"  src={props.item.image}></img>
            </Paper>
          </div>
      </div>
      </>
    );
};
export default Announcements;