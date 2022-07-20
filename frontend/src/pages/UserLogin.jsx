import { useState, useEffect } from 'react'
import Button  from "@mui/material/Button";
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { VStack } from "@chakra-ui/layout";
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { login, reset } from '../features/auth/authSlice'
import ResponsiveAppBar from '../components/Navbar'
import Spinner from '../components/Spinner'
import stayFitDataService from "../services/stayFitDataService";
// import React, { useState } from "react";
// import { useToast } from "@chakra-ui/react";
// import { Link, useNavigate } from "react-router-dom";

function UserLogin() {
  const [formData, setFormData] = useState({
    userName: '',
    password: '',
  })

  const { userName, password } = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (isSuccess || user) {
      navigate('/mainpage')
    }

    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const userData = {
      userName,
      password
    }

    dispatch(login(userData))
  }

  if (isLoading) {
    return <Spinner />
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
            value={userName}
            onChange={onChange}
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
              value={password}
              onChange={onChange}
              name="password"
              placeholder="Enter Password"
            />
          </InputGroup>
        </FormControl>
        <p style={{textAlign: "center", color:"gray", fontSize: ".8em"}}>* Required Fields</p>
        <Button onClick={onSubmit} className="CheckButton" variant="contained" size="small" sx={{marginTop: "15px"}}>Submit</Button>

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
  )
}

export default UserLogin




