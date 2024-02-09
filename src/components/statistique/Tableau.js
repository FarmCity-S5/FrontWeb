// material-ui
import { Box, Table, TableBody, TableCell, TableContainer, TableRow} from '@mui/material';

// const data = [
//   {name_culture:"Salade",prix:20,duration:"00:00:06"},
//   {name_culture:"Tomate",prix:10,duration:"00:00:08"},
//   {name_culture:"Pomme de terre",prix:40,duration:"00:00:20"}
// ]



export default function TableauTerrain(props) {

  const{data} = props;

  return (
    
    <Box className="box__table">
      <TableContainer sx={{ width: '100%', overflowX: 'auto', position: 'relative', display: 'block', maxWidth: '100%', '& td, & th': { whiteSpace: 'nowrap' } }} >
        <Table aria-labelledby="tableTitle" sx={{ '& .MuiTableCell-root:first-of-type': { pl: 2 }, '& .MuiTableCell-root:last-of-type': { pr: 3 } }}>
          <TableBody>

                <TableRow  hover role="checkbox" sx={{ '&:last-child td, &:last-child th': { border: 0 } }} style={{backgroundColor:'whitegray'}} >
                  <TableCell component="th"  scope="row" align="left">Nom</TableCell>
                  <TableCell align="left" >Prix</TableCell>
                  <TableCell align="center"> Durée </TableCell>
                </TableRow>
              
                {data.map((item,index) =>(
                    <TableRow  hover role="checkbox" sx={{ '&:last-child td, &:last-child th': { border: 0 } }} key={index} >
                        <TableCell component="th"  scope="row" align="left">{item.name_culture}</TableCell>
                        <TableCell align="left" > {item.prix} $</TableCell>
                        <TableCell align="center"> {item.duration} </TableCell>
                    </TableRow>
                ))}
            
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
