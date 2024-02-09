import Header from "../../components/header/Header";

import PostCard from "../../components/cards/PostCard";
import './home.css';
function Home(){

    const data = [
        {
            name_culture: "Laitue",
            proprietaire : "Fanilo",
            dateCulture : "2023-12-10 05:25:30",
            rendement : 20,
            terrain : 4,
            parcelle : 10
        },
        {
            name_culture: "Tomate",
            proprietaire : "Mitia",
            dateCulture : "2024-02-09 06:30:30",
            rendement : 10,
            terrain : 3,
            parcelle : 5
        },
        {
            name_culture: "Salade",
            proprietaire : "Fanilo",
            dateCulture : "2023-10-10 12:30:00",
            rendement : 15,
            terrain : 3,
            parcelle : 2
        },
        {
            name_culture: "Cerise",
            proprietaire : "Mitia",
            dateCulture : "2023-08-05 05:15:30",
            rendement : 15,
            terrain : 4,
            parcelle : 1
        },
        {
            name_culture: "Pomme",
            proprietaire : "Fanilo",
            dateCulture : "2024-02-9 05:50:30",
            rendement : 30,
            terrain : 5,
            parcelle : 6
        }
    ];



    return(
        <>
            <Header></Header>
            
            <div className="home__section">

                {data.map((item,index)=>(
                    <PostCard key={index} name_culture={item.name_culture} proprietaire={item.proprietaire} dateCulture={item.dateCulture} rendement={item.rendement} terrain={item.terrain} parcelle={item.parcelle}></PostCard>
                ))}
                

            </div>


        </>
    ); 
}

export default Home;