import React, { useState } from "react";
// import styles from "./index.module.css";
// import Button from "../Button";
// import Input from "../Input";
import stayFitDataService from "../services/stayFitDataService"; 
import PropTypes from 'prop-types';


async function loginUser(credentials){
  return fetch('http://localhost:5002/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  }).then(data => data.json())
};


const Login = ({setToken}) => {
    const initialLoginState = {
        userName: "",
        password: "",
        isLoading: false,
        success: false
      };

        const [loginInfo, setLoginInfo] = useState([initialLoginState]);

        const handleInputChange = event => {
            event.preventDefault();
            const {name, value} = event.target;
            setLoginInfo({...loginInfo, [name]: value})
        }

        // const findUser = () => {
        //     var data = {
        //         userName: loginInfo.userName,
        //         password: loginInfo.password
        //     }
        //     stayFitDataService.findUser(data)

        // }

        const handleSubmit = async (e) => {
          e.preventDefault();
          const token = await loginUser({
            userName: loginInfo.userName,
            password: loginInfo.password
          });
          
        };
     
        return (
          <>
            <div className="form-group">
            <label htmlFor='userName'>Username</label>
            <input
                type="text"
                id="userName"
                required
                value={loginInfo.userName}
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
                value={loginInfo.password}
                onChange={handleInputChange}
                name="password"
            />
            </div>
            <button onClick={handleSubmit} className="btn btn-success">Submit</button>
            </>
        );
      }

// Login.propTypes = {
//   setToken: PropTypes.func.isRequired
// };      

export default Login;

