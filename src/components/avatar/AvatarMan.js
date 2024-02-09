import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Logout from '@mui/icons-material/Logout';
import {Link} from 'react-router-dom';
import BarChartIcon from '@mui/icons-material/BarChart';
import { deepPurple } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';

function useMesFonctionsUtiles() {
  const navigate = useNavigate();


  const handleLogOut = () => {
    const utilisateur = localStorage.getItem("utilisateur");

    if (utilisateur) {
      localStorage.removeItem("utilisateur");
      navigate('/login');
    } 
  };

  return { handleLogOut };
}



export default function AvatarMan(props) {
  const {avatarName} = props;

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };

  const {handleLogOut} = useMesFonctionsUtiles();



  return (
    
    <React.Fragment>
        <Tooltip title="My Account">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar></Avatar>
          </IconButton>
        </Tooltip>

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&::before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        
      >

        <MenuItem onClick={handleClose}>
          <Link to="/home" style={{textDecoration: 'none',color: '#030303',display:'flex'}} ><Avatar alt="Ismael Raveloson" src={props.image} /><span style={{marginTop:'3px',marginLeft:'5px'}}>{avatarName}</span></Link>
        </MenuItem>
        
        <MenuItem onClick={handleClose} component={Link} to="/stat">
          <Avatar sx={{bgcolor: deepPurple[500]}}><BarChartIcon></BarChartIcon></Avatar><span style={{marginLeft:'5px'}}>Mes Stats</span>
        </MenuItem>
        
        <Divider />


        <MenuItem onClick={handleLogOut}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}