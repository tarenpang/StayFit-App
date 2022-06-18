import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import Button  from "@mui/material/Button";
import Intro from "./Intro";
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import Delete from '@mui/icons-material/Delete';
import {Link} from 'react-router-dom';

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
            name: "Follow & track your vital signs",
            description: "Track, and log vital signs to share with health care professionals to optimize and empower users!",
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
          <div style={{position: 'relative'}}>
            <h1 style={{textAlign: "center", color:"#0b4c8a"}}>StayFit <FitnessCenterIcon style={{color:"#0b4c8a"}}/></h1>
            <Paper>
            <h2 style={{
              position: 'absolute',
              width: '75%',
              textAlign: 'center',
              color: 'white',
              textShadow: '1px 1px rgba(0,0,0,0.5)',
              top: 49,
              left: '50%',
              transform: 'translate(-50%)'
            }}>{props.item.name}</h2>
            <h3 style={{
              position: 'absolute',
              width: '75%',
              textAlign: 'center',
              color: 'white',
              textShadow: '1.5px 1.5px rgba(0,0,0,0.6)',
              bottom: 245,
              left: '50%',
              transform: 'translate(-50%)',
              '@media (maxWidth: 400px)': {}
            }}>{props.item.description}</h3>
            <img object-fit="cover" display="block" height="100%" maxHeight="300px" width="100%" overflow="hidden"  src={props.item.image}></img>
            </Paper>                     
            <div style={{margin: 'auto', textAlign: 'center'}}>
              <Link to="/mainpage" style={{display: 'inline-block', textDecoration: "none"}}>
                <Button className="CheckButton" variant="contained" style={{marginTop: "10px"}}>Enter!</Button>
              </Link>
              <Link to="/userlogin" style={{display: 'block', textDecoration: "none"}}>
                <Button className="CheckButton" variant="textd" style={{marginTop: "10px"}}>Login</Button>
              </Link>
            </div>
            <Intro/>
          </div>
      </div>
    );
};

export default LandingPage;
