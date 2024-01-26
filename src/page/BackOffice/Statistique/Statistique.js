
import HeaderStat from '../../../components/headerStat/HeaderStat';
import MainGraph from '../../../components/graph/MainGraph';
import React from 'react';

function Statistique(){

    return(
        <HeaderStat  active={'graph'} element={<MainGraph></MainGraph>}></HeaderStat>
    );
}

export default Statistique;