import { useState } from 'react';
import stayFitDataService from '../services/stayFitDataService';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { VStack } from "@chakra-ui/layout";
import Button from "@mui/material/Button";
import ResponsiveAppBar from './Navbar';

const RegisterTrainer = () => {
    const initialTrainerState = {
        firstName: "",
        lastName: "",
        userName: "",
        password: "",
        repeatPassword: "",
<<<<<<< HEAD
        // credentials: "",
        // imageUrl: "",
=======
>>>>>>> origin
    }
    const [trainer, setTrainer] = useState(initialTrainerState);

    const handleInputChange = event => {
        event.preventDefault();
        const {name, value} = event.target;
        setTrainer({...trainer, [name]: value});
    }
    
    const saveTrainer = () => {
        console.log("save trainer activated")
        var data = {
            firstName: trainer.firstName,
            lastName: trainer.lastName,
            userName: trainer.userName,
            password: trainer.password,
<<<<<<< HEAD
            // credentials: trainer.credentials,
            // imageUrl: trainer.imageUrl
=======
>>>>>>> origin
        }
        console.log(data); 
         stayFitDataService.createTrainer(data)
        .then(response => {
            console.log("CRUD activated"); 
            console.log(response.data)
            setTrainer(initialTrainerState)
        })
        .catch(e => {
            console.log(e)
        })
    }

    

<<<<<<< HEAD
  return (
    <> 
    <ResponsiveAppBar/>
    <VStack spacing="12px">
      <h2 style={{color: "gray"}}>Register New Trainer</h2>
      <FormControl id="firstName" isRequired sx={{mt: "30px"}}>
      <FormLabel>First Name</FormLabel>
      <input
          type="text"
          id="firstName"
          required
          value={trainer.firstName}
          onChange={handleInputChange}
          name="firstName"
          placeholder="Enter First Name"
      />
      </FormControl>
      <FormControl id="lastName" isRequired sx={{mt: "30px"}}>
      <FormLabel>Last Name</FormLabel>
      <input
          type="text"
          id="lastName"
          required
          value={trainer.lastName}
          onChange={handleInputChange}
          name="lastName"
          placeholder="Enter Last Name"
      />
      </FormControl>
      <FormControl id="userName" isRequired sx={{mt: "30px"}}>
      <FormLabel>Username</FormLabel>
      <input
          type="text"
          id="userName"
          required
          value={trainer.userName}
          onChange={handleInputChange}
          name="userName"
          placeholder="Enter Username"
      />
      </FormControl>
      <FormControl id="userName" isRequired sx={{mt: "30px"}}>
      <FormLabel>Password</FormLabel>
      <input
          type="text"
          id="password"
          required
          value={trainer.password}
          onChange={handleInputChange}
          name="password"
          placeholder="Enter Password"
      />
      </FormControl>
      <FormControl id="repeatPassword" isRequired sx={{mt: "30px"}}>
      <FormLabel>Confirm Password</FormLabel>
      <input
          type="text"
          id="repeatPassword"
          required
          value={trainer.repeatPassword}
          onChange={handleInputChange}
          name="repeatPassword"
          placeholder="Confirm Password"
      />
      </FormControl>
      <p style={{textAlign: "center", color:"gray", fontSize: ".8em"}}>* Required Fields</p>
      {/* <FormControl id="credentials" isRequired sx={{mt: "30px"}}>
      <FormLabel>Credentials</FormLabel>
      <input
          type="text"
          id="credentials"
          required
          value={trainer.credentials}
          onChange={handleInputChange}
          name="credentials"
      />
      </FormControl> */}
      {/* <div className="form-group">
      <label htmlFor='imageUrl'>Picture</label>
      <input
          type="text"
          id="imageUrl"
          required
          value={trainer.imageUrl}
          onChange={handleInputChange}
          name="imageUrl"
      />
      </div> */}
      <Button onClick={saveTrainer} className="CheckButton" variant="contained" size="small" style={{marginTop: "10px"}}>Submit</Button>
    </VStack>
    </>
    );
=======
    return ( 
        <div className="submit-form">
            <h1>Register New Trainer</h1>
            <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
                type="text"
                id="firstName"
                required
                value={trainer.firstName}
                onChange={handleInputChange}
                name="firstName"
            />
            </div>
            <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
                type="text"
                id="lastName"
                required
                value={trainer.lastName}
                onChange={handleInputChange}
                name="lastName"
            />
            </div>
            <div className="form-group">
            <label htmlFor='userName'>Username</label>
            <input
                type="text"
                id="userName"
                required
                value={trainer.userName}
                onChange={handleInputChange}
                name="userName"
            />
            </div>
            <div className="form-group">
            <label htmlFor='password'>Password</label>
            <input
                type="text"
                id="password"
                required
                value={trainer.password}
                onChange={handleInputChange}
                name="password"
            />
            </div>
            <div className="form-group">
            <label htmlFor='repeatPassword'>Repeat Password</label>
            <input
                type="text"
                id="repeatPassword"
                required
                value={trainer.repeatPassword}
                onChange={handleInputChange}
                name="repeatPassword"
            />
            </div>
            <br/>
            <Button onClick={saveTrainer} className="CheckButton" variant="contained" style={{marginTop: "10px"}}>Submit</Button>
        </div>
     );
>>>>>>> origin
}
 
export default RegisterTrainer;