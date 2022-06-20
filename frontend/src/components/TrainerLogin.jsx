import Button  from "@mui/material/Button";
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { VStack } from "@chakra-ui/layout";
import React, { useState } from "react";
import { useToast } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import stayFitDataService from "../services/stayFitDataService";
import ResponsiveAppBar from './Navbar'
// import styles from "./index.module.css";
// import Button from "../Button";
// import Input from "../Input";

const Login = () => { 
  const initialLoginState = {
    userName: "",
    password: "",
    isLoading: false,
    success: false
  };

  const [loginInfo, setLoginInfo] = useState([initialLoginState]);
  // const [show, setShow] = useState(false);
  const [trainerName, SetTrainerName] = useState('');
  // const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false)

  // const handleClick = () => setShow(!show);
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

            await stayFitDataService.loginTrainer(data)
            .then(response => {
              const loggedInStatus = response.data.trainerLoggedIn
              toast({
                title: "Login Successful",
                status: "success",
                duration: 5000,
                isClosable: true,
                position: "bottom",
              });
              setLoading(false);
              setLoggedIn(loggedInStatus); 
              // setTrainerName(loginInfo.userName);
              navigate("/mainPage"); // redirect to UserDashboard
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
            setLoggedIn(false);
          }
        }
  
        return (
          <>
          <ResponsiveAppBar/>
            <VStack spacing="10px">
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
                  // onChange={(e) => SetUserName(e.target.value)}
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
                    // onChange={(e) => setPassword(e.target.value)}
                  />
                  {/* <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleClick} className="btn btn-success">
                      {show ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement> */}
                </InputGroup>
                </FormControl>
                <br></br>
              <Button onClick={submitHandler} className="CheckButton" variant="contained">Submit</Button>
              <br></br>
              <h5>New Trainer? Please register...</h5>
              <Link to="/registerTrainer" style={{display: 'inline-block', textDecoration: "none"}}>
                <Button className="CheckButton" variant="contained" style={{marginTop: "10px"}}>Register as a Trainer</Button>
              </Link>
            </VStack>
          </>                   
        );
      }

export default Login;




