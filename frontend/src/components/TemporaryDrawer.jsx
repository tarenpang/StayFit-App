import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import afe from '../assets/icons/afe.svg';
import awe from '../assets/icons/awe.svg';
import cor from '../assets/icons/cor.svg';
import crv from '../assets/icons/crv.svg';
import fbw from '../assets/icons/fbw.svg';
import hke from '../assets/icons/hke.svg';
import shd from '../assets/icons/shd.svg';

// const [category, setCategory] = useState();

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });


  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem key={1} disablePadding>
          <ListItemButton>
            <ListItemIcon>
            <img src={fbw} className="fbw-icon" alt="icon" />
            </ListItemIcon>
            <ListItemText primary={'Full Body Workout'} />
          </ListItemButton>
        </ListItem>

        <ListItem key={1} disablePadding>
          <ListItemButton>
            <ListItemIcon>
            <img src={cor} className="cor-icon" alt="icon" />
            </ListItemIcon>
            <ListItemText primary={'Core Exercises'} />
          </ListItemButton>
        </ListItem>

        <ListItem key={1} disablePadding>
          <ListItemButton>
            <ListItemIcon>
            <img src={afe} className="afe-icon" alt="icon" />
            </ListItemIcon>
            <ListItemText primary={'Ankle and Foot Exercises'} />
          </ListItemButton>
        </ListItem>

        <ListItem key={1} disablePadding>
          <ListItemButton>
            <ListItemIcon>
            <img src={crv} className="afe-icon" alt="icon" />
            </ListItemIcon>
            <ListItemText primary={'Cervical (Neck) Exercises'} />
          </ListItemButton>
        </ListItem>

        <ListItem key={1} disablePadding>
          <ListItemButton>
            <ListItemIcon>
            <img src={awe} className="afe-icon" alt="icon" />
            </ListItemIcon>
            <ListItemText primary={'Arm and Wrist Exercises'} />
          </ListItemButton>
        </ListItem>

        <ListItem key={1} disablePadding>
          <ListItemButton>
            <ListItemIcon>
            <img src={hke} className="afe-icon" alt="icon" />
            </ListItemIcon>
            <ListItemText primary={'Hip and Knee Exercises'} />
          </ListItemButton>
        </ListItem>

        <ListItem key={1} disablePadding>
          <ListItemButton>
            <ListItemIcon>
            <img src={shd} className="afe-icon" alt="icon" />
            </ListItemIcon>
            <ListItemText primary={'Shoulder Exercises'} />
          </ListItemButton>
        </ListItem>

        
      </List>
    </Box>
  );

  return (
    <div>
      {['filter by categories'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}