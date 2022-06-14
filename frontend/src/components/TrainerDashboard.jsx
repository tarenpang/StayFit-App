import { useState, useEffect } from 'react'
import ResponsiveAppBar from './Navbar'
import stayFitDataService from '../services/stayFitDataService'
import BasicMenu from './ClientDropdownMenu'


const TrainerDashboard = () => {
  const [clients, setClients] = useState([]);
    console.log(clients); 
    useEffect(() => {
        retrieveClients();
    }, []);
    
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
    </div>
  );
}
 
export default TrainerDashboard;

