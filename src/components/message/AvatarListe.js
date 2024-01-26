import { Avatar } from '@mui/material';
import './avatar.css';

function AvatarListe(){
    return(
        
        <div className="avatar">
            <div className="avatar__icon">
                <Avatar alt="Ismael Raveloson" sizes="large" />
            </div>

            <div className="avatar__info">
                <h3>Nouvel utilisateur</h3>
            </div>
        </div>
        
    );
}

export default AvatarListe;