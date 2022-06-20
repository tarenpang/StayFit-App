import Button from "@mui/material/Button";
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { VStack } from "@chakra-ui/layout";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import React, { useState } from "react";
import axios from 'axios';
import { useToast } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import stayFitDataService from "../services/stayFitDataService";
import ResponsiveAppBar from './Navbar'


var trainerLoggedIn = false;

const TrainerLogin = () => { 
  const initialLoginState = {
    userName: "",
    password: "",
    isLoading: false,
    success: false
  };

  const [loginInfo, setLoginInfo] = useState([initialLoginState]);
  const [trainerName, setTrainerName] = useState('');
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

            await stayFitDataService.loginTrainer(data)
            .then(response => {
              console.log(response.data);
              toast({
                title: "Login Successful",
                status: "success",
                duration: 5000,
                isClosable: true,
                position: "bottom",
              });
              setLoading(false);
              trainerLoggedIn = true; 
              setTrainerName(loginInfo.userName);
              navigate.push("/trainerdashboard"); // redirect to TrainerDashboard
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
            trainerLoggedIn = false;
          }
        }
  
        return (
          <>
          <ResponsiveAppBar/>
            <VStack spacing="12px">
              <h2 style={{color: "gray"}}>Trainer Login</h2>
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

              <Button onClick={submitHandler} className="CheckButton" variant="contained" size="small" style={{marginTop: "10px"}}>Submit</Button>
            </VStack>
          </>                   
        );
      }

export default TrainerLogin ;
export {trainerLoggedIn} ;




