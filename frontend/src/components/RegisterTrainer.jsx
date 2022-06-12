import { useState } from 'react';
import stayFitDataService from '../services/stayFitDataService'; 

const RegisterTrainer = () => {
    const initialTrainerState = {
        firstName: "",
        lastName: "",
        userName: "",
        password: "",
        credentials: ""
    }
    const [trainer, setTrainer] = useState([initialTrainerState]);

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
            credentials: trainer.credentials
        }
        stayFitDataService.createTrainer(data)
        .then(response => {
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
                id="repeatPassWord"
                required
                value={trainer.password}
                onChange={handleInputChange}
                name="repeatPassWord"
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
            <br/>
            <button onClick={saveTrainer} className="btn btn-success">Submit</button>
            </div>
        </div>
     );
}
 
export default RegisterTrainer;