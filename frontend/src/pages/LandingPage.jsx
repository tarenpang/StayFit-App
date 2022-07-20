import { Paper } from "@mui/material";
import Button  from "@mui/material/Button";
import Intro from "../components/Intro";
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import {Link} from 'react-router-dom';
import benchPress from '../assets/images/benchPress.jpg';
import stretchGirl from '../assets/images/stretchGirl.jpeg'
import groupFitness from '../assets/images/groupFitness.jpg'
import womanSquats from '../assets/images/womanSquats.jpg'
import trainerPic from '../assets/images/trainerPic.png'
import normalVitals from '../assets/images/normalVitals.jpg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
function LandingPage(props) {
    var items = [
        {
            name: "Bench Press",
            description: "Learn proper technique & form!",
            image: benchPress,
        },
        {
            name: "Pull ups",
            description: "Select from a vast array of exercises, stretches, and breathing activities!",
            image: "https://www.trainheroic.com/wp-content/uploads/2021/11/Pull-up.jpg",
        },
        {
            name: "Squats",
            description: "Connect with our trainers, schedule workouts & customized plans!",
            image: womanSquats,
        },
        {
            name: "Follow & track your vital signs",
            description: "Log and track vital signs to optimize your workouts!",
            image: normalVitals,
        },
        {
          name: "Hello new users!",
          description: "We look forward to helping you stay motivated, stay moving, and stayFit!",
          image: stretchGirl
      },
      {
          name: "Bring a friend!",
          description: "Did you know that working out with friends can be a fun way to StayFit?",
          image: groupFitness,
      },
      {
        name: "Need some help?",
        description: "Our trainers here at StayFit can help you reach your fitness goals",
        image: trainerPic,
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
        <h1 style={{textAlign: "center", color:"#0B4C8A"}}>StayFit <FitnessCenterIcon style={{color:"#0B4C8A"}}/></h1>
        <Slider {...settings}>
        {
            items.map( (item, i) => <Item key={i} item={item} />  )
        }
        </Slider>
        <br/>
        <Buttons/>
        <Intro/>
        </>
    )
}
    function Item(props) {
        return (
        <div className="landingPage">
          {/* <h1 style={{textAlign: "center", color:"#0B4C8A"}}>StayFit <FitnessCenterIcon style={{color:"#0B4C8A"}}/></h1> */}
          <div style={{position: 'relative'}}>
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
              width: '65%',
              textAlign: 'center',
              color: 'white',
              textShadow: '1.5px 1.5px rgba(0,0,0,0.6)',
              bottom: -10,
              left: '50%',
              transform: 'translate(-50%)',
              '@media (maxWidth: 400px)': {}
            }}>{props.item.description}</h4>
            <img alt="images" loading="eager"  style={{objectFit:"cover", display:"block", height:"100%", maxheight:"300px", width:"100%", overflow:"hidden"}}   src={props.item.image}></img>
            </Paper>
          </div>
        </div>
      );
    };
    function Buttons(){
      return(
        <div style={{margin: 'auto', textAlign: 'center'}}>
        <Link to="/mainpage" style={{display: 'inline-block', textDecoration: "none"}}>
          <Button className="CheckButton" variant="contained" style={{marginTop: "10px"}}>Enter!</Button>
        </Link>
        <Link to="/userlogin" style={{display: 'block', textDecoration: "none"}}>
          <Button className="CheckButton" variant="textd" style={{marginTop: "10px"}}>Login</Button>
        </Link>
      </div>
      )
    };
export default LandingPage;