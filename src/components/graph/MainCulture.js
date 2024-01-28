import './graph.css';
import Tableau from '../statistique/Tableau';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
function MainCulture(){
    return(
        <div className="culture">
            <form className="culture__form">
                <h3> Culture </h3>

                <p><span className="culture__form__label">Nom : </span><input name="nom" type="text"></input></p>
                <p><span className="culture__form__label">Duration : </span><input name="duration" type="time"></input></p>
                <p><span className="culture__form__label">Rendement : </span><input name="rendement" type="number"></input></p>
                <p><span className="culture__form__label">Prix : </span><input name="prix" type="number"></input></p>
                
                <Button variant="contained" color="success" style={{float:'right',marginTop:'20px',textTransform:'none',width:'9vw'}}>Valider</Button>
            </form>
            <div className="culture__tableau">
                <Typography variant="h6" style={{paddingLeft:'15px'}}>Liste Culture</Typography>
                <Tableau></Tableau>
            </div>
        </div>
    );
}

export default MainCulture;