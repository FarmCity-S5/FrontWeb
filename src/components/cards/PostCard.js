import './card.css';
import { Avatar } from '@mui/material';
import AgricultureOutlinedIcon from '@mui/icons-material/AgricultureOutlined';

function PostCard(props) {
  
    const {name_culture,proprietaire,dateCulture,rendement,terrain,parcelle} = props;


  return (
    <div className="card">
        <div className="card__image">
            <label className="card__image__name">{name_culture}</label>
            <img src="./plantation.jpg" alt=""></img>
        </div>

        <div className="card__info">
            <div className="card__info__avatar">
                <span className="card__info__avatar__img">
                  <Avatar></Avatar>
                  <p><AgricultureOutlinedIcon className='tracteur-icon'></AgricultureOutlinedIcon></p>
                </span>
            </div>

            <div className="card__info__culture">
                <span className="card__info__culture__name">
                    <h3> {proprietaire} </h3>
                </span>

                <span className="card__info__culture__date">
                    <p> {dateCulture} </p>
                </span>

                <span className="card__info__culture__rend">
                    <p>{rendement} kg</p>
                </span>

                <span className="card__info__culture__terrain">
                    <p>Terrain :  <strong>T{terrain}</strong></p>
                    <p>Parcelle : <strong>P{parcelle}</strong></p>
                </span>
         
            </div>
        </div>
    </div>
  );
}

export default PostCard;
