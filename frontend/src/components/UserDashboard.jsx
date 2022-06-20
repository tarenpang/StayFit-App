import ResponsiveAppBar from "./Navbar";
import stayFitDataService from "../services/stayFitDataService";
import { useState,useEffect } from "react";
import { useParams } from 'react-router-dom'; 


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
        <div className="dashboard">
            <div className="form-group">
            <label htmlFor="age">Age</label>
            <input
                type="number"
                id="age"
                required
                value={updateUserData.age}
                onChange={handleInputChange}
                name="age"
            />
            </div>
            <div className="form-group">
            <label htmlFor="currentWeight">Current weight</label>
            <input
                type="number"
                id="currentWeight"
                required
                value={updateUserData.currentWeight}
                onChange={handleInputChange}
                name="currentWeight"
            />
            </div>
            <div className="form-group">
            <label htmlFor="targetWeight">Target Weight</label>
            <input
                type="number"
                id="targetWeight"
                required
                value={updateUserData.targetWeight}
                onChange={handleInputChange}
                name="targetWeight"
            />
            </div>
            <div className="form-group">
            <label htmlFor="injuries">Injuries</label>
            <input
                type="number"
                id="injuries"
                required
                value={updateUserData.injuries}
                onChange={handleInputChange}
                name="injuries"
            />
            </div>
            <div className="form-group">
            <label htmlFor="hr">HR</label>
            <input
                type="number"
                id="hr"
                required
                value={updateUserData.hr}
                onChange={handleInputChange}
                name="hr"
            />
            </div>
            <div className="form-group">
            <label htmlFor="bp">B/P</label>
            <input
                type="number"
                id="bp"
                required
                value={updateUserData.bp}
                onChange={handleInputChange}
                name="bp"
            />
            </div>
            <div className="form-group">
            <label htmlFor="respirations">Respirations</label>
            <input
                type="number"
                id="respirations"
                required
                value={updateUserData.respirations}
                onChange={handleInputChange}
                name="respirations"
            />
            </div>
            <div className="form-group">
            <label htmlFor="o2">O2</label>
            <input
                type="number"
                id="o2"
                required
                value={updateUserData.o2}
                onChange={handleInputChange}
                name="o2"
            />
            </div>
            <div className="form-group">
            <label htmlFor="bmi">BMI</label>
            <input
                type="number"
                id="bmi"
                required
                value={updateUserData.bmi}
                onChange={handleInputChange}
                name="bmi"
            />
            </div>
            <button onClick={saveUserInfo}>Update</button>
        </div>
    )
}

export default UserDashboard;