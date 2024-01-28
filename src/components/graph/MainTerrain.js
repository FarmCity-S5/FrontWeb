import './graph.css';
import PhotoLibraryOutlinedIcon from '@mui/icons-material/PhotoLibraryOutlined';
import TableauTerrain from '../statistique/TableauTerrain';

export default function MainTerrain(){
    return(
        <>
        
        <div className="terrain">
            <div className="terrain__form">
                <h2> Terrain </h2>

                <p> Nombre de parcelle : <span > 1 </span></p>
                <p> Localisation : </p>
            

                <p>Description : <textarea></textarea></p>

                <label htmlFor="fileInput" className="custom-file-input">
                    <input
                        type="file" id="fileInput" multiple style={{ display: 'none' }} />
                    <PhotoLibraryOutlinedIcon></PhotoLibraryOutlinedIcon>
                    <span>Ajouter des photos</span>
                </label>

               <p><button className="submit__button">Ajouter terrain</button></p> 
            </div>
            
            <div className="terrain__parcelle">
                <h2> Parcelle </h2>
                <p> Superficie : <input type="text" placeholder='m²'></input> </p>
                <p> Type de cutulre possible : </p>
                <div className="checkbox__list">
                    <label>
                        <input type="checkbox"></input> 
                        <span>Pomme de terre</span>
                    </label>  
                    <label>
                        <input type="checkbox"></input> 
                        <span>Tomate</span>
                    </label>  
                    <label>
                        <input type="checkbox"></input> 
                        <span>Laitue</span>
                    </label>  
                    <label>
                        <input type="checkbox"></input> 
                        <span>Carotte</span>
                    </label>  
                    <label>
                        <input type="checkbox"></input> 
                        <span>Haricot vert</span>
                    </label>  
                    <label>
                        <input type="checkbox"></input> 
                        <span>Salade</span>
                    </label>  
                </div>
                    
                
                <button className="submit__button">Ajouter parcelle</button>
            </div>
            
            <div className="terrain__liste">
                <div className="terrain__liste__parcelle">
                    <div className="entete">
                        <span className="entete__numero"> N° </span>
                        <span className="entete__superficie"> Superficie </span>
                        <span className="entete__culture">Culture</span>
                    </div>
                    
                    <div className="content">
                        <span className="content__numero"> #1 </span>
                        <span className="content__superficie" style={{fontWeight:'600'}}> 500 m² </span>
                        <span className="content__culture" style={{fontSize:'0.9em'}}>Pomme de terre , Carotte , Laitue , Haricot vert , Salade</span>
                    </div>

                    <div className="content">
                        <span className="content__numero"> #1 </span>
                        <span className="content__superficie" style={{fontWeight:'600'}}> 500 m² </span>
                        <span className="content__culture" style={{fontSize:'0.9em'}}>Pomme de terre , Carotte , Laitue , Haricot vert , Salade</span>
                    </div>

                    <div className="content">
                        <span className="content__numero"> #1 </span>
                        <span className="content__superficie" style={{fontWeight:'600'}}> 500 m² </span>
                        <span className="content__culture" style={{fontSize:'0.9em'}}>Pomme de terre , Carotte , Laitue , Haricot vert , Salade</span>
                    </div>

                    <div className="content">
                        <span className="content__numero"> #1 </span>
                        <span className="content__superficie" style={{fontWeight:'600'}}> 500 m² </span>
                        <span className="content__culture" style={{fontSize:'0.9em'}}>Pomme de terre , Carotte , Laitue , Haricot vert , Salade</span>
                    </div>

                    <div className="content">
                        <span className="content__numero"> #1 </span>
                        <span className="content__superficie" style={{fontWeight:'600'}}> 500 m² </span>
                        <span className="content__culture" style={{fontSize:'0.9em'}}>Pomme de terre , Carotte , Laitue , Haricot vert , Salade</span>
                    </div>

                    <div className="content">
                        <span className="content__numero"> #1 </span>
                        <span className="content__superficie" style={{fontWeight:'600'}}> 500 m² </span>
                        <span className="content__culture" style={{fontSize:'0.9em'}}>Pomme de terre , Carotte , Laitue , Haricot vert , Salade</span>
                    </div>
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