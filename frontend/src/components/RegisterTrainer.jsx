import { useState } from 'react';
import stayFitDataService from '../services/stayFitDataService';
import Button from "@mui/material/Button";

const RegisterTrainer = () => {
    const initialTrainerState = {
        firstName: "",
        lastName: "",
        userName: "",
        password: "",
        repeatPassword: "",
        credentials: "",
        imageUrl: "",
    }
    const [trainer, setTrainer] = useState(initialTrainerState);

    const handleInputChange = event => {
        event.preventDefault();
        const {name, value} = event.target;
        setTrainer({...trainer, [name]: value});
    }
    
    const saveTrainer = () => {
        var data = {
            firstName: trainer.firstName,
            lastName: trainer.lastName,
            userName: trainer.userName,
            password: trainer.password,
            credentials: trainer.credentials,
            imageUrl: trainer.imageUrl
        }
         stayFitDataService.createTrainer(data)
        .then(response => {
            console.log(response)
            setTrainer(initialTrainerState)
        })
        .catch(e => {
            console.log(e)
        })
    }

    

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
            <div className="form-group">
            <label htmlFor='credentials'>Credentials</label>
            <input
                type="text"
                id="credentials"
                required
                value={trainer.credentials}
                onChange={handleInputChange}
                name="credentials"
            />
            <div className="form-group">
            <label htmlFor='imageUrl'>Picture</label>
            <input
                type="text"
                id="imageUrl"
                required
                value={trainer.imageUrl}
                onChange={handleInputChange}
                name="imageUrl"
            />
            </div>
            <br/>
            <Button onClick={saveTrainer} className="CheckButton" variant="contained" style={{marginTop: "10px"}}>Submit</Button>
            </div>
        </div>
     );
}
 
export default RegisterTrainer;