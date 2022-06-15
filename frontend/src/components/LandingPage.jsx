import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import Button  from "@mui/material/Button";
import Intro from "./Intro";
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import Delete from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';

function LandingPage(props) {

    var items = [
        {
            name: "Bench Press",
            description: "Learn proper technique & form!",
            image: "https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2022/01/Intermediate-bench-press-program.jpg?resize=2048%2C1365&ssl=1",
        },
        {
            name: "Pull ups",
            description: "Select from a vast array of exercises, stretches, and breathing activities!",
            image: "https://www.trainheroic.com/wp-content/uploads/2021/11/Pull-up.jpg",
        },
        {
            name: "Squats",
            description: "Connect with our trainers, schedule workouts, follow incentive plans!",
            image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/young-woman-doing-squats-on-a-road-at-sunset-royalty-free-image-1645654296.jpg",
        },
        {
            name: "Follow, track, observe your vital signs",
            description: "Track, and log your vital signs to share with doctors, and health care professionals to optimize and empower users!",
            image: "https://agurgentcare.com/wp-content/uploads/2021/04/what-are-normal-vitals.jpeg",
        }
    ]

    return (
        <Carousel>
        {
            items.map( (item, i) => <Item key={i} item={item} /> )
        }
        </Carousel>
        
    )
}
    function Item(props) {
        return (
        <div className="landingPage">
            <h1 style={{textAlign: "center"}}>StayFit <FitnessCenterIcon style={{color:"black"}}/></h1>
            <Paper>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>
            <img object-fit="cover" display="block" height="100%" maxHeight="300px" width="100%" overflow="hidden"  src={props.item.image}></img>
            </Paper>
            
            
            
            <div style={{margin: 'auto', textAlign: 'center'}}>
              <Link to="/mainpage" style={{display: 'inline-block', textDecoration: "none"}}>
                <Button className="CheckButton" variant="contained" style={{marginTop: "10px"}}>Enter!</Button>
              </Link>
              
              {/* <Button component={Link} to='/login' className="CheckButton" variant="text" style={{display: "block", justifyContent: "center", margin: "auto", marginTop:"10px"}}>
              Login
              </Button> */}

              <Link to="/login" style={{display: 'block', textDecoration: "none"}}>
                <Button className="CheckButton" variant="textd" style={{marginTop: "10px"}}>Login</Button>
              </Link>
            </div>
            <Intro/>
      </div>
    );
};


export default LandingPage;
