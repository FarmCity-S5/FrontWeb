import MainTerrain from "../../../components/graph/MainTerrain";
import HeaderStat from "../../../components/headerStat/HeaderStat";

export default function Terrain(){
    return(
        <HeaderStat active={"culture"} element={<MainTerrain></MainTerrain>}></HeaderStat>
    );
}