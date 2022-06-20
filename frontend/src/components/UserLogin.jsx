import Button  from "@mui/material/Button";
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { VStack } from "@chakra-ui/layout";
import React, { useState } from "react";
import { useToast } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import stayFitDataService from "../services/stayFitDataService";
import ResponsiveAppBar from './Navbar'

var userLoggedIn = false;

const UserLogin = () => { 
  const initialLoginState = {
    userName: "",
    password: "",
    isLoading: false,
    success: false
  };

  const [loginInfo, setLoginInfo] = useState([initialLoginState]);
  const [userName, setUserName] = useState("");
  const [loading, setLoading] = useState(false);

  
  const toast = useToast();
  const navigate = useNavigate();
  
  const handleInputChange = event => {
      event.preventDefault();
      const {name, value} = event.target;
      setLoginInfo({...loginInfo, [name]: value})
  }

        const submitHandler = async () => {
          setLoading(true);
          if(!loginInfo.userName || !loginInfo.password){
            console.log('Enter both username and password')
            toast({
              title: "Please fill out all the fields",
              status: "warning",
              duration: 5000,
              isClosable: true,
              position: "bottom",
            });
            setLoading(false);
            return;
          }
          try {
            var data = {
              userName: loginInfo.userName,
              password: loginInfo.password
            }

            stayFitDataService.loginUser(data)
            .then(response => {
              console.log(response.data)
              toast({
                title: "Login Successful",
                status: "success",
                duration: 5000,
                isClosable: true,
                position: "bottom",
              });
              setLoading(false);
              userLoggedIn =true; 
              console.log("ln 71 userLoggedIn: ", userLoggedIn)
              setUserName(loginInfo.userName);
              navigate.push("/userdashboard"); // redirect to UserDashboard
              setLoginInfo(initialLoginState);
          })
          } catch (error) {
            console.log('error is' + error);
            toast({
              title: "Error Occurred!",
              description: error.response.data.message,
              status: "error",
              duration: 5000,
              isClosable: true,
              position: "bottom",
            });
            setLoading(false);
            userLoggedIn = false;
            console.log("ln 88 userLoggedIn: ", userLoggedIn)
          }
        }
  
        return (
          <>
          <ResponsiveAppBar/>
            <VStack spacing="12px">
            <h2 style={{color: "gray"}}>User Login</h2>
              <FormControl id="userName" isRequired sx={{mt: "30px"}}>
                <FormLabel>Username</FormLabel>
                <input
                  type="text"
                  id="userName"
                  required
                  value={loginInfo.userName}
                  onChange={handleInputChange}
                  name="userName"
                  placeholder="Enter Username"
                />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <input
                    type="text"
                    id="password"
                    required
                    value={loginInfo.password}
                    onChange={handleInputChange}
                    name="password"
                    placeholder="Enter Password"
                  />
                </InputGroup>
              </FormControl>
              <p style={{textAlign: "center", color:"gray", fontSize: ".8em"}}>* Required Fields</p>
              <Button onClick={submitHandler} className="CheckButton" variant="contained" size="small" sx={{marginTop: "15px"}}>Submit</Button>

              <br></br>
              <h5 style={{color: "gray", marginTop: "30px"}}>New User? Please Register...</h5>
              <Link to="/registerUser" style={{display: 'inline-block', textDecoration: "none"}}>
                <Button 
                  className="CheckButton" 
                  variant="contained" 
                  size="small"  
                  sx={{
                    backgroundColor: "gray",
                    marginTop: "10px"
                    }}>Register user</Button>
              </Link>
              <Link to="/trainerlogin" style={{display: 'inline-block', textDecoration: "none"}}>
                <Button className="CheckButton" variant="textd" style={{marginTop: "10px"}}>Trainer Login</Button>
              </Link>
            </VStack>
          </>                   
        );
      }

export default UserLogin;
export { userLoggedIn };




