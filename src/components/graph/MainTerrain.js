import './graph.css';
import PhotoLibraryOutlinedIcon from '@mui/icons-material/PhotoLibraryOutlined';
import TableauTerrain from '../statistique/TableauTerrain';
import '../../fonction';
import { useState,useEffect} from 'react';
import {getDataFromUrl} from '../../fonction';

export default function MainTerrain(){
    const [position] = useState(null);    
    const storedParcelles = JSON.parse(localStorage.getItem('parcelles')) || [];
    const numberOfParcelles = storedParcelles.length;

    const nbParcelle = useState(numberOfParcelles);
    

    const insertParcele = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const newParcelle = {
          superficie: formData.get('superficie'),
          cultures: formData.getAll('culture[]').join(', '),
        };
        console.log('New Parcelle : ', newParcelle);
      
        const storedParcelles = JSON.parse(localStorage.getItem('parcelles')) || [];
        storedParcelles.push(newParcelle);
        localStorage.setItem('parcelles', JSON.stringify(storedParcelles));
        window.location.reload();
      }
    
    const getParcellesFromLocalStorage = () => {
        const storedParcelles = JSON.parse(localStorage.getItem('parcelles'));
        if (storedParcelles !== null) {
            return storedParcelles;
        } else {
            return [];
        }
    }

    const tabParcelle = getParcellesFromLocalStorage();


    useEffect(() => {
        if (position) {
            console.log(`Latitude: ${position.lat}, Longitude: ${position.lng}`);
        }
    }, [position]);

    function getMapCenter(map) {
        const center = map.getCenter();
        return {
          lat: center.lat(),
          lng: center.lng(),
        };
      }

   


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


    
    return(
        <>
        
        <div className="terrain">
            <div className="terrain__form">
                <h2> Terrain </h2>

                <p> Nombre de parcelle : <span > {nbParcelle} </span></p>
                <input type='hidden' name="nbParcelle" value={nbParcelle}></input>
                <p> Localisation : </p>
                <div className="googlemaps">
                    {/* <iframe src={mapSrc} width="90%" height="250" style={{ border: '0' }} allowFullScreen loading="lazy" onClick={handleClick} /> */}
                {position && (
                  <p>
                    Latitude: {position.lat}, Longitude: {position.lng}
                  </p>
                )}
        </div>
                <p>Description : <textarea></textarea></p>

                <label htmlFor="fileInput" className="custom-file-input">
                    <input
                        type="file" id="fileInput" multiple style={{ display: 'none' }} />
                    <PhotoLibraryOutlinedIcon></PhotoLibraryOutlinedIcon>
                    <span>Ajouter des photos</span>
                </label>

               <p><button className="submit__button" >Ajouter terrain</button></p> 
            </div>
            
            <div className="terrain__parcelle">
                <form className="formParcelle" onSubmit={insertParcele}>
                    <h2> Parcelle </h2>
                    <p> Superficie : <input type="text" placeholder='m²' name='superficie'></input> </p>
                    <p> Type de cutulre possible : </p>
                    <div className="checkbox__list">

                        {dataCulture.map((culture,index) =>(
                            <label key={index}>
                                <input type="checkbox" name="culture[]" value={culture.name_culture}></input> 
                                <span>{culture.name_culture}</span>
                            </label>  
                        ))}
    
                    </div>
                        
                    <button className="submit__button">Ajouter parcelle</button>
                </form>
            </div>
            
            <div className="terrain__liste">
                <div className="terrain__liste__parcelle">
                    <div className="entete">
                        <span className="entete__numero"> N° </span>
                        <span className="entete__superficie"> Superficie </span>
                        <span className="entete__culture">Culture</span>
                    </div>
                    
                    {tabParcelle.map((parcelle,index) =>(
                        <div className="content" key={index+1}>
                            <span className="content__numero"> # {index+1}</span>
                            <span className="content__superficie" style={{fontWeight:'600'}}> {parcelle.superficie} m² </span>
                            <span className="content__culture" style={{fontSize:'0.9em'}}> {parcelle.cultures} </span>
                        </div>
                    ))}
                    

                    
                </div>
            </div>

            
        </div>
        
                {/* ambany */}

        <div className='terrain__second'>
            <div className="terrain__second__table">
                <h3 style={{marginLeft:'10px',marginBottom:'20px'}}>Terrain en attente de confirmation</h3>
                <TableauTerrain></TableauTerrain>
            </div>
            <div className="terrain__second__cards">
                
            </div>
        </div>
        </>
    );
}