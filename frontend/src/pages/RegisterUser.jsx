import { useState } from 'react';
import stayFitDataService from '../services/stayFitDataService';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { VStack } from "@chakra-ui/layout";
import Button from "@mui/material/Button";
import ResponsiveAppBar from '../components/Navbar';  

const RegisterUser = () => {
    const initialUserState = {
        firstName: "",
        lastName: "",
        userName: "",
        password: "",
        repeatPassword: "",
        // imageUrl: ""
    }
    const [user, setUser] = useState([initialUserState]);

    const handleInputChange = event => {
        event.preventDefault();
        const {name, value} = event.target;
        setUser({...user, [name]: value});
    }
    
    const saveUser = () => {
       console.log("save user activated")
        var data = {
            firstName: user.firstName,
            lastName: user.lastName,
            userName: user.userName,
            password: user.password,
            // imageUrl: user.imageUrl
        }
        stayFitDataService.createUser(data)
        .then(response => {
            console.log("CRUD activated");
            console.log(response)
            setUser(initialUserState)
        })
        .catch(e => {
            console.log(e)
        })
    
    }

    return (
      <>
      <ResponsiveAppBar/>
      <VStack spacing="12px">
        <h2 style={{color: "gray"}}>Register New User</h2>
        <FormControl id="firstName" isRequired sx={{mt: "30px"}}>
        <FormLabel>First Name</FormLabel>
        <input
            type="text"
            id="firstName"
            required
            value={user.firstName}
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
            value={user.lastName}
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
            value={user.userName}
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
            value={user.password}
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
            value={user.repeatPassword}
            onChange={handleInputChange}
            name="repeatPassword"
            placeholder="Confirm Password"
        />
        </FormControl>
        <p style={{textAlign: "center", color:"gray", fontSize: ".8em"}}>* Required Fields</p>
        {/* <div className="form-group">
        <label htmlFor='imageUrl'>Picture</label>
        <input
            type="text"
            id="imageUrl"
            required
            value={user.imageUrl}
            onChange={handleInputChange}
            name="imageUrl"
        />
        </div> */}
        <Button onClick={saveUser} className="CheckButton" variant="contained" size="small" style={{marginTop: "10px"}}>Submit</Button>
      </VStack>
      </> 
     );
}
 
export default RegisterUser;