import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {Link } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AvatarMan from '../avatar/AvatarMan';
import SearchIcon from '@mui/icons-material/Search';
import StackedLineChartIcon from '@mui/icons-material/StackedLineChart';
import GrassOutlinedIcon from '@mui/icons-material/GrassOutlined';
import TerrainOutlinedIcon from '@mui/icons-material/TerrainOutlined';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import './header.css';

const drawerWidth = 240;

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    },

  }));

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));



export default function PersistentDrawerLeft(props) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const {active,element} = props;
  console.log(active);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  
  const listItem = [
    {
      id : 1,
      link : "/stat",
      icons : <StackedLineChartIcon style={{color : 'white'}}></StackedLineChartIcon>,
      name : "Graphique"
    },
    {
      id : 2,
      link : "/culture",
      icons : <GrassOutlinedIcon style={{color : 'white'}}></GrassOutlinedIcon>,
      name : "Culture"
    },
    {
      id : 3,
      link : "/parcelle",
      icons : <ViewModuleIcon style={{color : 'white'}}></ViewModuleIcon>,
      name : "Parcelle"
    },
    {
      id : 4,
      link : "/terrain",
      icons : <TerrainOutlinedIcon style={{color : 'white'}}></TerrainOutlinedIcon>,
      name : "Terrain"
    }
  ];



  return (
    <Box sx={{ display: 'flex' }} className="header__stat">
      <CssBaseline />
      <AppBar position="fixed" open={open} style={{backgroundColor:'#212121'}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>

            <div className="header__navbar__icons" style={{marginLeft:'70%'}}>
                    <div className="header__navbar__icons__items" >
                        <Badge badgeContent={4} color="secondary">
                            <Link to="chat"><MailOutlineIcon style={{color:'white'}}  fontSize='medium' className='icons'></MailOutlineIcon></Link>       
                        </Badge>
                    </div>
                
                    <div className="header__navbar__icons__items">
                        <Badge badgeContent={11} max={9} color="secondary">
                            <NotificationsNoneIcon  style={{color:'white'}} fontSize='medium' className='icons'></NotificationsNoneIcon>   
                        </Badge>
                    </div>

                    <div className="header__navbar__icons__items">
                        <SearchIcon  style={{color:'white'}} fontSize='medium' className='icons'></SearchIcon>   
                    </div>

                        
                <StyledBadge
                    overlap="circular"
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    variant="dot"
                    className="header__navbar__icons__avatar"
                >
                    
                    <AvatarMan image={"./sary.jpg"} ></AvatarMan>
                </StyledBadge>
                    
            </div>
         
        </Toolbar>
      </AppBar>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: '#212121',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader >
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon style={{color: 'white'}} /> : <ChevronRightIcon style={{color: 'white'}} />}
          </IconButton>
        </DrawerHeader>
        <Divider />

        <List className='list'>
            {
              listItem.map((item,index) =>(
                <ListItem key={item.id} >
                  <ListItemButton component={Link} to={item.link}  >
                      <ListItemIcon>{item.icons} </ListItemIcon>
                      <ListItemText style={{color : 'white'}} primary={item.name}></ListItemText>
                  </ListItemButton>
                </ListItem>   
              ))
            }
        </List>


      </Drawer>
      <Main open={open}>
        
          {element}
        
      </Main>
    </Box>
  );
}