import ResponsiveAppBar from "../components/Navbar";
import stayFitDataService from "../services/stayFitDataService";
import { useState,useEffect } from "react";
import { useParams } from 'react-router-dom'; 
import Button  from "@mui/material/Button";
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { VStack } from "@chakra-ui/layout";


const UserDashboard = () => {

    let {id} = useParams(); 

    const initialUserInfoState = {
        age: "",
        height: "",
        currentWeight: "",
        targetWeight: "",
        injuries: "", 
        hr: "",
        bp: "", 
        respirations: "", 
        o2: "",
        bmi: "",
        imageUrl: ""
    }
    const [userData, setUserData] = useState("")
    const [updateUserData, setUpdateUserData] = useState("")

const retrieveUserInfo = id => {
    stayFitDataService.findUser(id)
    .then(response => {
        console.log(response.data)
        setUserData(response.data); 
    })
    .catch(error => {
        console.log(error); 
    })
}
    useEffect(() => {
        if(id)
        retrieveUserInfo(id)
    }, [id])

    const handleInputChange = event => {
        event.preventDefault()
        const {name, value} = event.target
        setUpdateUserData({...updateUserData, [name]: value})
    }

    const saveUserInfo = () => {

        var data = {
            age: updateUserData.age,
            height: updateUserData.height,
            currentWeight: updateUserData.currentWeight,
            targetWeight: updateUserData.targetWeight,
            injuries: updateUserData.injuries,
            hr: updateUserData.hr,
            bp: updateUserData.bp,
            respirations: updateUserData.respirations,
            o2: updateUserData.o2,
            bmi: updateUserData.bmi,
        }
        stayFitDataService.updateUser(data)
        .then(response => {
            console.log(response.data);
            setUpdateUserData(initialUserInfoState)
        })
        .catch(e => {
            console.log(e)
        })
    }


    return (
      <>
        <ResponsiveAppBar/>
        <VStack spacing="12px">
        <h2 style={{color: "gray"}}>User Dashboard</h2>
        <FormControl id="age" isRequired sx={{mt: "30px"}}>
            <FormLabel>Age</FormLabel>
              <input
                  type="number"
                  id="age"
                  required
                  value={updateUserData.age}
                  onChange={handleInputChange}
                  name="age"
              />
            </FormControl>
            <FormControl id="currentWeight" isRequired sx={{mt: "30px"}}>
            <FormLabel>Current Weight</FormLabel>
              <input
                  type="number"
                  id="currentWeight"
                  required
                  value={updateUserData.currentWeight}
                  onChange={handleInputChange}
                  name="currentWeight"
              />
            </FormControl>
            <FormControl id="targetWeight" isRequired sx={{mt: "30px"}}>
            <FormLabel>Target Weight</FormLabel>
              <input
                  type="number"
                  id="targetWeight"
                  required
                  value={updateUserData.targetWeight}
                  onChange={handleInputChange}
                  name="targetWeight"
              />
            </FormControl>
            <FormControl id="injuries" isRequired sx={{mt: "30px"}}>
            <FormLabel>Injuries</FormLabel>
            <input
                type="number"
                id="injuries"
                required
                value={updateUserData.injuries}
                onChange={handleInputChange}
                name="injuries"
            />
            </FormControl>
            <FormControl id="hr" isRequired sx={{mt: "30px"}}>
            <FormLabel>Heart Rate</FormLabel>
            <input
                type="number"
                id="hr"
                required
                value={updateUserData.hr}
                onChange={handleInputChange}
                name="hr"
            />
            </FormControl>
            <FormControl id="bp" isRequired sx={{mt: "30px"}}>
            <FormLabel>Blood Pressure</FormLabel>
            <input
                type="number"
                id="bp"
                required
                value={updateUserData.bp}
                onChange={handleInputChange}
                name="bp"
            />
            </FormControl>
            <FormControl id="respirations" isRequired sx={{mt: "30px"}}>
            <FormLabel>Respirations</FormLabel>
            <input
                type="number"
                id="respirations"
                required
                value={updateUserData.respirations}
                onChange={handleInputChange}
                name="respirations"
            />
            </FormControl>
            <FormControl id="o2" isRequired sx={{mt: "30px"}}>
            <FormLabel>Oxygen Saturation</FormLabel>
            <input
                type="number"
                id="o2"
                required
                value={updateUserData.o2}
                onChange={handleInputChange}
                name="o2"
            />
            </FormControl>
            <FormControl id="bmi" isRequired sx={{mt: "30px"}}>
            <FormLabel>Body Mass Index</FormLabel>
            <input
                type="number"
                id="bmi"
                required
                value={updateUserData.bmi}
                onChange={handleInputChange}
                name="bmi"
            />
            </FormControl>
            {/* <button onClick={saveUserInfo}>Update</button> */}
            <Button onClick={saveUserInfo} className="CheckButton" variant="contained" size="small" sx={{marginTop: "10px"}} >Update</Button>
        </VStack>
      </>
    )
}

export default UserDashboard;