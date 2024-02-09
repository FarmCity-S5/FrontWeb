import './graph.css';
import Tableau from '../statistique/Tableau';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { useState,useEffect } from 'react';
import { getDataFromUrl } from '../../fonction';
import axios from 'axios';

function MainCulture(){

    
    // liste culture

    const [dataCulture, setDataCulture] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await getDataFromUrl("https://farmcity.up.railway.app/cultures/all");
            setDataCulture(response);
          } catch (error) {
            console.error("Erreur lors de la récupération des données :", error.message);
          }
        };
    
        fetchData();
      }, []); 

      const handleSubmit = async (event) => {
        event.preventDefault();
    
        function formatTimeInput(timeValue) {
          const [hour, minute] = timeValue.split(':');
          return `00:${hour}:${minute}`;
        }

        const formData = new FormData(event.target);
        const cultureData = {
            name_culture: formData.get('nom'),
            prix: formData.get('prix'),
            duration: formatTimeInput(formData.get('duration')),
        };

        try {
            const response = await axios.post('https://farmcity.up.railway.app/cultures?name_culture='+ cultureData.name_culture + '&prix=' + cultureData.prix + '&duration=' + cultureData.duration );
            console.log(response.data);
            window.location.reload();
        } catch (error) {
            console.error(error);
        }
      };






    return(
        <div className="culture">
            <form className="culture__form" onSubmit={handleSubmit}>
                <h3> Culture </h3>

                <p><span className="culture__form__label">Nom : </span><input name="nom" type="text"></input></p>
                <p><span className="culture__form__label">Duration : </span><input name="duration" type="time"></input></p>
                <p><span className="culture__form__label">Prix : </span><input name="prix" type="number"></input></p>
                
                <Button variant="contained" color="success" style={{float:'right',marginTop:'20px',textTransform:'none',width:'9vw'}} type="submit">Valider</Button>
            </form>
            <div className="culture__tableau">
                <Typography variant="h6" style={{paddingLeft:'15px'}}>Liste Culture</Typography>
                <Tableau data={dataCulture}></Tableau>
            </div>
        </div>
    );
}

export default MainCulture;