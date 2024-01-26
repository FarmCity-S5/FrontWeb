import AvatarListe from "./AvatarListe";
import './avatar.css';
function ListMessage(){
    return(
        <div className="list__user">
            <div className="list__user__info">
                <h3>Messages</h3>
            </div>

            <div className="list__user__message">
                <AvatarListe></AvatarListe>
                <AvatarListe></AvatarListe>
                <AvatarListe></AvatarListe>
                <AvatarListe></AvatarListe>
            </div>
            
        </div>
    );
}

export default ListMessage;