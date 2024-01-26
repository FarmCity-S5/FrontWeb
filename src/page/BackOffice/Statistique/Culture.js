import MainCulture from "../../../components/graph/MainCulture";
import HeaderStat from "../../../components/headerStat/HeaderStat";
export default function Culture(){
    return(
        <HeaderStat active={"culture"} element={<MainCulture></MainCulture>}></HeaderStat>

    );
}