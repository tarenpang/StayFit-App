import React, { Component, useState, useContext, createContext, useEffect } from 'react';
import stayFitDataService from '../services/stayFitDataService'

const AuthContext = React.createContext();
const AuthUpdateContext = React.createContext();

const AuthList = () => {
  const [loggedIn, setLoggedIn] = useState(false) // create State

  useEffect(()=> {
    AuthStatus()
  }, [])

  const AuthStatus = async(id)=>{

    await stayFitDataService.findUser(id)
    .then (response => {
      console.log(id)
      setLoggedIn(true)
    }).catch (error => {
      console.log(error)
    })

  }

   
  }



// export function useAuth() {       // Custom Hook to provide access to Auth value
//   return useContext(AuthContext)
// }

// export function useAuthUpdate() {       // Custom Hook to provide access to AuthUpdate value
//   return useContext(AuthUpdateContext)
// }

// export function AuthProvider({ children }) {
//   const [loggedIn, setLoggedIn] = useState(false) // create State

//   function toggleAuth() {


//     setLoggedIn(prevLoggedIn => !prevLoggedIn) // update State
//   }

  return (
    <AuthContext.Provider value={loggedIn}>
      <AuthUpdateContext.Provider value={toggleAuth}>
        {children}  
      </AuthUpdateContext.Provider>
    </AuthContext.Provider>
  )
} 
