import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Fab from '@mui/material/Fab';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Avatar from '@mui/material/Avatar';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';


export default function BottomAppBar() {
  return (
    <React.Fragment>
      <footer style={{ position: "fixed", bottom: 0, display:"flex", flexDirection: "row", justifyContent: "space-around"}}>
      <img alt ="getstarted" src="https://blog.fitbit.com/wp-content/uploads/2017/01/Fitbit-community.jpg" style={{width:"27%"}}/>
      <img alt="toolbox" src="https://iamdistrict54.com/wp-content/uploads/2020/05/community-networking-people-relationship-social-teamwork-icon-community-icon-png-512_512.png" style={{width:"27%"}}/>
      <img alt="support" src="https://cdn-icons-png.flaticon.com/512/2344/2344684.png" style={{width:"27%"}}/>
      </footer>
    </React.Fragment>
  );
}