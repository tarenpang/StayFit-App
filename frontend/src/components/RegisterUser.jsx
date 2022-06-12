import { useState } from 'react';
import stayFitDataService from '../services/stayFitDataService'; 

const RegisterUser = () => {
    const initialUserState = {
        firstName: "",
        lastName: "",
        userName: "",
        password: "",
        imageUrl: "",
    }
    const [user, setUser] = useState([initialUserState]);

    const handleInputChange = event => {
        event.preventDefault();
        const {name, value} = event.target;
        setUser({...user, [name]: value});
    }

    const saveUser = () => {
        var data = {
            firstName: user.firstName,
            lastName: user.lastName,
            userName: user.userName,
            password: user.password,
            imageUrl: user.imageUrl
        }
        stayFitDataService.createUser(data)
        .then(response => {
            console.log(response.data); 
            setUser(initialUserState)
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
                id="repeatPassWord"
                required
                value={user.repeatPassword}
                onChange={handleInputChange}
                name="repeatPassWord"
            />
            </div>
            <div className="form-group">
            <label htmlFor='imageUrl'>Picture</label>
            <input
                type="text"
                id="imageUrl"
                required
                value={user.imageUrl}
                onChange={handleInputChange}
                name="imageUrl"
            />
            </div>
            <br/>
            <button onClick={saveUser} className="btn btn-success">Submit</button>
            </div>
     );
}
 
export default RegisterUser;