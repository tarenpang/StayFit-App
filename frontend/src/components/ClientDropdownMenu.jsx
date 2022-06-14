import * as React from 'react';
import { useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import stayFitDataService from '../services/stayFitDataService'

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  // const [clients, setClients] = useState([]);
  //   console.log(clients); 
  //   useEffect(() => {
  //       retrieveClients();
  //   }, []);
    
  //   const retrieveClients = () => {
  //       stayFitDataService.findUser()
  //       .then(response => {
  //           setClients(response.data);
  //           console.log("response data is: ")
  //           console.log(response.data);
  //       })
  //       .catch(e => {
  //           console.log(e)
  //       })
  //   }
  const clients = ['Bob Allen', 'Marcy Dulles', 'James Belkin']

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Client List
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {clients && clients.map((client, index) => {
               return (
                <div key={index}>
                  <MenuItem onClick={handleClose}>{client}</MenuItem>
               </div>
               )
            })}
        {/* <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem> */}
      </Menu>
    </div>
  );
}