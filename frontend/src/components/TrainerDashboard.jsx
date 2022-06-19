import { useState, useEffect } from 'react'
import ResponsiveAppBar from './Navbar'
import stayFitDataService from '../services/stayFitDataService'
import BasicMenu from './ClientDropdownMenu'
import AddExerciseForm from './AddExerciseForm'
// import Dropdown from 'muicss/lib/react/dropdown';
// import DropdownItem from 'muicss/lib/react/dropdown-item';

   // class Example extends React.Component {
    //   render() {
    //     return (
    //       <Dropdown color="primary" label="Dropdown">
    //         <DropdownItem link="#/link1">Option 1</DropdownItem>
    //         <DropdownItem>Option 2</DropdownItem>
    //         <DropdownItem>Option 3</DropdownItem>
    //         <DropdownItem>Option 4</DropdownItem>
    //       </Dropdown>
    //     );
    //   }
    // }

const TrainerDashboard = () => {
  const [clients, setClients] = useState([]);
    console.log(clients); 
    useEffect(() => {
        retrieveClients();
    }, []);



    //drop down menu for trainer to select user from list of users assigned to trainer, once user is selected user info. pops up on page. Trainer can select from another menu or panel the exercises that trainer wants to add to users array of exercises. 

    
    const retrieveClients = () => {
        stayFitDataService.getAll()
        .then(response => {
            setClients(response.data);
            console.log("response data is: ")
            console.log(response.data);
        })
        .catch(e => {
            console.log(e)
        })
    }

  return (  
    <div className="trainerDashboard">
      <ResponsiveAppBar/>
      <BasicMenu/>
      <AddExerciseForm/>
    </div>
  );
}
 
export default TrainerDashboard;

