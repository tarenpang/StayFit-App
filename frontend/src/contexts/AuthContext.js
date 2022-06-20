import React, { useState, useEffect, createContext } from 'react';
import stayFitDataService from '../services/stayFitDataService'

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const setAuth = (boolean) => {
    setIsAuthenticated(boolean);
  };

  //Auth API logic here//
  const isAuth = async(id)=>{

    await stayFitDataService.findUser(id)
    .then (response => {
      console.log(id)
      setIsAuthenticated(true)
    }).catch (error => {
      console.log(error)
    })

  }

  useEffect(() => {
    isAuth();
  }, []);

  return (
    <AuthContext.Provider 
      value={{isAuthenticated, setIsAuthenticated, setAuth}}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
