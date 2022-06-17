import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';


function Announcements(props) {
    
    var items = [
        {
            name: "Hello new users!",
            description: "StayFit would like to welcome all new users and look forward to helping you StayFit",
            image: "https://www.gym-pact.com/wp-content/uploads/2020/12/Best-Punching-Bags-2-1-scaled.jpg",
        },
        {
            name: "Bring a friend",
            description: "Did you know that working out with friends can be a fun way to StayFit?",
            image: "https://fitness1440.com/legacycalgary/wp-content/uploads/2018/08/group-fitness1.jpg",
        },
        
    ]

    return (
        <Carousel>
        {
            items.map( (item, i) => <><Item key={i} item={item} /> <Description key={i} item={item}/></> )
        }
        </Carousel>
        
    )
}
    function Item(props) {

        return (
        <div className="landingPage">
          <div style={{position: 'relative'}}>
            <h1 style={{textAlign: "center"}}>Announcements</h1>
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
            
            <img object-fit="cover" display="block" height="100%" maxHeight="300px" width="100%" overflow="hidden"  src={props.item.image}></img>
            </Paper>                                 
          </div>
      </div>
    );
};

function Description(props){

    return (
        <div className="description">
          <div style={{position: 'relative'}}>
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
            }}>{props.item.description}</h2>          
            </Paper>                                 
          </div>
      </div>
    );
}

export default Announcements;