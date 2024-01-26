import './card.css';
import { Avatar } from '@mui/material';
import AgricultureOutlinedIcon from '@mui/icons-material/AgricultureOutlined';

function PostCard(props) {
  
  return (
    <div className="card">
        <div className="card__image">
            <label className="card__image__name">Tomate</label>
            <img src="./tomate.jpg" alt=""></img>
        </div>

        <div className="card__info">
            <div className="card__info__avatar">
                <span className="card__info__avatar__img">
                  <Avatar alt="Ismael Raveloson"  />
                  <p><AgricultureOutlinedIcon className='tracteur-icon'></AgricultureOutlinedIcon></p>
                </span>
            </div>

            <div className="card__info__culture">
                <span className="card__info__culture__name">
                    <h3> John </h3>
                </span>

                <span className="card__info__culture__date">
                    <p> 22 Janvier 2024 5:00</p>
                </span>

                <span className="card__info__culture__rend">
                    <p>500 kg</p>
                </span>

                <span className="card__info__culture__terrain">
                    <p>Terrain :  <strong>T11</strong></p>
                    <p>Parcelle : <strong>P5</strong></p>
                </span>
         
            </div>
        </div>
    </div>
  );
}

export default PostCard;
