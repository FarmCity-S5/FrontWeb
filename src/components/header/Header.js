import './header.css';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AvatarMan from '../avatar/AvatarMan';
import SearchIcon from '@mui/icons-material/Search';
import {Link} from 'react-router-dom';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    },

  }));


function Header(){
    return (
        <div className = "header"  >
            <div className="header__logo">
                
            </div>                


            <div className="header__navbar">
                <div className="header__navbar__search">
                    <div className="container-input">
                        <input type="text" placeholder="Search" name="text" className="input"></input>
                        <SearchIcon  className='search-icon'></SearchIcon>
                    </div>
                </div>
                <div className="header__navbar__icons">
                    <div className="header__navbar__icons__items">
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
                            {/* <Avatar alt="Ismael Raveloson" src="./sary.jpg" /> */}
                            <AvatarMan image={"./sary.jpg"} ></AvatarMan>
                        </StyledBadge>
                    
                </div>
            </div>
        </div>
    );
}
export default Header;