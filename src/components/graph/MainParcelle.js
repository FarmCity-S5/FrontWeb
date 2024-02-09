import '../cards/ParcelleCard';
import ParcelleCard from '../cards/ParcelleCard';
import { useEffect, useState } from 'react';
import { getDataFromUrl } from '../../fonction';

export default function FormParcelle(){

    
    const [dataTerrain,setDataTerrain] = useState();
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await getDataFromUrl("https://farmcity.up.railway.app/terrains");
            setDataTerrain(response);
          } catch (error) {
            console.error("Erreur lors de la récupération des données :", error.message);
          }
        };
    
        fetchData();
      }, []); 




    return(
        <div className="parcelle">
            <h3> Liste terrain </h3>

            <div className="parcelle__liste">
                
            {dataTerrain ? (
                dataTerrain.map((item, index) => (
                    <ParcelleCard
                    key={index}
                    images={["./terrain1.jpg", "./terrain2.jpg", "./terrain3.jpg"]}
                    description={item.description}
                    nbParcelle={item.nombre_parcelle}
                    longitude={item.longitude}
                    latitude={item.latitude}
                    />
                ))
                ) : (
                // Afficher un message si dataTerrain est vide
                <p style={{textAlign:'center'}}>Loading...</p>
                )}

            </div>
        </div>
    );
}