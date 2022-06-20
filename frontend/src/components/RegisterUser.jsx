import { useState } from 'react';
import stayFitDataService from '../services/stayFitDataService';
import Button from "@mui/material/Button";  
import { useNavigate } from 'react-router-dom'; 

const RegisterUser = () => {
    const initialUserState = {
        firstName: "",
        lastName: "",
        userName: "",
        password: "",
        repeatPassword: "",
        imageUrl: "",
    }
    const [user, setUser] = useState([initialUserState]);

    const handleInputChange = event => {
        event.preventDefault();
        const {name, value} = event.target;
        setUser({...user, [name]: value});
    }
    
    const navigate = useNavigate(); 

    const saveUser = () => {
       console.log("save user activated")
        var data = {
            firstName: user.firstName,
            lastName: user.lastName,
            userName: user.userName,
            password: user.password,
            imageUrl: user.imageUrl
        }
        stayFitDataService.createUser(data)
        .then(response => {
            console.log("CRUD activated");
            console.log(response)
            setUser(initialUserState)
            navigate('/userLogin')
        })
        .catch(e => {
            console.log(e)
        })
    
    }

    return ( 
        <div className="submit-form">
            <h1>Register New User</h1>
            <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
                type="text"
                id="firstName"
                required
                value={user.firstName}
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
                value={user.lastName}
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
                value={user.userName}
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
                value={user.password}
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
                value={user.repeatPassword}
                onChange={handleInputChange}
                name="repeatPassword"
            />
            </div>
            <br/>
            <Button onClick={saveUser} className="CheckButton" variant="contained" style={{marginTop: "10px"}}>Submit</Button>
            </div>
     );
}
 
export default RegisterUser;