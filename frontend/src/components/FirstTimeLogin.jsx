import ResponsiveAppBar from './Navbar'
import { Button } from '@chakra-ui/button';
import { Textarea } from '@chakra-ui/react'
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import stayFitDataService from '../services/stayFitDataService';

const FirstTimeLogin = () =>{

    const initialUserInfoState = {
        height: "",
        currentWeight: "",
        fitnessGoals: ""       
    }
    const [userInfo, setUserInfo] = useState([initialUserInfoState]);
    const [checked, setChecked] = useState(false)
    const [route, setRoute] = useState("/mainpage")

    const handleInputChange = event => {
        event.preventDefault();
        const {name, value} = event.target;
        setUserInfo({...userInfo, [name]: value})
    }

    const handleChecked = () => {
        setChecked(!checked)
    }
    
    if(checked === true){
        setRoute("/trainers")
    }else{
        setRoute("/mainpage")
    }

    const saveUserInfo = () => {

        var data = {
            height: userInfo.height,
            currentWeight: userInfo.currentWeight,
            fitnessGoals: userInfo.fitnessGoals
        }
        stayFitDataService.updateUser(data)
        .then(response => {
            console.log(response.data);
            setUserInfo(initialUserInfoState)
        })
        .catch(e => {
            console.log(e)
        })
    }

    return(
        <>
        <ResponsiveAppBar/>
        <div style={{textAlign: 'center', fontSize: "20px"}} className="submit-form">
            <h1 >Congratulations on joining StayFit!</h1>
            <br/>
            <h3>Please fill out a brief survey:</h3>
            <div className="form-group">
            <label htmlFor="height">Height </label>
            <input
                type="number"
                id="height"
                required
                value={userInfo.height}
                onChange={handleInputChange}
                name="height"
            />
            </div>
            <br/>
            <div className="form-group">
            <label htmlFor="currentWeight">Weight </label>
            <input
                type="number"
                id="currentWeight"
                required
                value={userInfo.currentWeight}
                onChange={handleInputChange}
                name="currentWeight"
            />
            </div>
            <br/>
            <div className="form-group">
            <label htmlFor="trainerPref">Would you like to work with a trainer?  
            <input
                type="checkbox"
                id="trainerPref"
                required
                value={userInfo.trainerPref}
                onChange={handleChecked}
                name="trainerPref"
            />Yes
            </label>
            </div>
            <br/>
            <div className="form-group">
            <label htmlFor="fitnessGoals">What are your fitness goals?
            <br/><br/>
            <Textarea
                id="fitnessGoals"
                required
                value={userInfo.fitnessGoals}
                onChange={handleInputChange}
                name="fitnessGoals"
            />
            </label>
            </div>
            <Link to={route} style={{display: 'inline-block', textDecoration: "none"}}>
            <Button onClick={saveUserInfo}>Submit</Button>
              </Link>
            
        </div>
        </>
    )
}

export default FirstTimeLogin; 