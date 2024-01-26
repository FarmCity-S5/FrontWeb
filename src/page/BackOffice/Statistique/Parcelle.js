import MainParcelle from '../../../components/graph/MainParcelle';
import HeaderStat from '../../../components/headerStat/HeaderStat';

export default function Parcelle(){
    return(
        <HeaderStat active={"culture"} element={<MainParcelle></MainParcelle>}></HeaderStat>
    );
}