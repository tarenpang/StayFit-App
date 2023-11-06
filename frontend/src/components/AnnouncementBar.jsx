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
      {
        name: "Welcome new trainer Steve!",
        description: "Steve has been a personal trainer for 8 years and specializes in core strength",
        image: newPersonalTrainer
      },
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
    
    return (
      <>
        <h1 style={{textAlign: "center", color:"#0B4C8A"}}>Announcements</h1>
        <Slider {...settings}>
        {
            items.map( (item, i) => <><Item key={i} item={item} /></> )
        }
        </Slider>    
      </>
    )
}
    function Item(props) {
        return (
          <>
        <div className="landingPage">
          <div style={{position: 'relative'}}>
            {/* <h1 style={{textAlign: "center", color:"#0B4C8A"}}>Announcements</h1> */}
            <Paper style={{marginRight: '15%', marginLeft: '15%'}}>
            <h3 style={{
              position: 'absolute',
              width: '75%',
              textAlign: 'center',
              color: 'white',
              textShadow: '1px 1px rgba(0,0,0,0.5)',
              top: -5,
              left: '50%',
              transform: 'translate(-50%)'
            }}>{props.item.name}</h3>
            <h4 style={{
              position: 'absolute',
              width: '55%',
              textAlign: 'center',
              color: 'white',
              textShadow: '1.5px 1.5px rgba(0,0,0,0.6)',
              bottom: -10,
              left: '50%',
              transform: 'translate(-50%)',
              '@media (maxWidth: 400px)': {}
            }}>{props.item.description}</h4>
            <img alt="images" loading="eager" object-fit="cover" display="block" height="100%" maxheight="300px" width="100%" overflow="hidden"  src={props.item.image}></img>
            </Paper>
          </div>
      </div>
      </>
    );
};
export default Announcements;