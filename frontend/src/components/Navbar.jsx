import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { textDecoration } from '@chakra-ui/react';
// import loggedInStatus from '../contexts/auth';
// import { AuthProvider } from '../contexts/AuthContext'

// import AdbIcon from '@mui/icons-material/Adb';


const ResponsiveAppBar = (props) => {

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  // const [ loggedIn, setLoggedIn ] = useContext(AuthProvider);
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/mainpage')
  }

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        {/* <Link style={{ textDecoration: 'none' }} to="/">  */}
          <FitnessCenterIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/mainpage"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            StayFit
          </Typography>
          {/* </Link> */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              
              <MenuItem  onClick={handleCloseUserMenu}>
                <Link style={{ textDecoration: 'none' }} to="/exercises">
                  <Typography textAlign="center">Exercises</Typography>
                </Link>
              </MenuItem>
              <MenuItem  onClick={handleCloseUserMenu}>
                <Link style={{ textDecoration: 'none' }} to="/about">
                  <Typography textAlign="center">About Us</Typography>
                </Link>
              </MenuItem>
              <MenuItem  onClick={handleCloseUserMenu}>
                <Link style={{ textDecoration: 'none' }} to="/support">
                  <Typography textAlign="center">Support</Typography>
                </Link>
              </MenuItem>
              <MenuItem  onClick={handleCloseUserMenu}>
                <Link style={{ textDecoration: 'none' }} to="/trainers">
                  <Typography textAlign="center">Trainers</Typography>
                </Link>
              </MenuItem>
            </Menu>
          </Box>
          {/* <Link style={{ textDecoration: 'none' }} to="/">  */}
          <FitnessCenterIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            StayFit
          </Typography>
          {/* </Link> */}
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          <Link style={{ textDecoration: 'none' }} to="/exercises"> 
              <Button
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Exercises
              </Button>  
          </Link>   
          <Link style={{ textDecoration: 'none' }} to="/about"> 
              <Button
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                About Us
              </Button>  
          </Link>
          <Link style={{ textDecoration: 'none' }} to="/trainers"> 
              <Button
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Trainers
              </Button>  
          </Link>   
          <Link style={{ textDecoration: 'none' }} to="/support"> 
              <Button
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Support
              </Button>  
          </Link>      

          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }} style={{ width:"121px" }}>
              <ul style={{ display:"flex", flexDirection:"row", flexWrap:"wrap", justifyContent:"flex-start" }}>
                {user ? (
                  <li style={{ listStyleType:"none" }}>
                    <Link to='/mainpage' style={{ fontSize:".6em", color:"white", textDecoration:"none" }} onClick={onLogout}>
                      <FaSignOutAlt color="white"/> Logout
                    </Link>
                  </li>
                ) : (
                  <>
                    <li style={{ listStyleType:"none" }}>
                      <Link to='/userLogin' style={{ fontSize:".6em", color:"white", textDecoration:"none" }}>
                        <FaSignInAlt color="white" style={{ marginLeft:"9px" }}/> Login
                      </Link>
                    </li>
                    <li style={{ listStyleType:"none" }}>
                      <Link to='/registerUser' style={{ fontSize:".6em", color:"white", textDecoration:"none", marginLeft:"8px" }}>
                        <FaUser color="white"/> Register
                      </Link>
                    </li>
                  </>
                )}
              </ul>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {/* {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))} */}
              <MenuItem  onClick={handleCloseUserMenu}>
                <Link style={{ textDecoration: 'none' }} to="/userprofile">
                  <Typography textAlign="center">Profile</Typography>
                </Link>
              </MenuItem>
              <MenuItem  onClick={handleCloseUserMenu}>
                <Link style={{ textDecoration: 'none' }} to="/">
                  {user
                    ? <Typography textAlign="center">Logout</Typography>
                    : <Typography textAlign="center">Login</Typography>
                  }
                </Link>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    
  );
};
export default ResponsiveAppBar;