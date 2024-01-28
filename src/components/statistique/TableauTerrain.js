// material-ui
import { Box, Table, TableBody, TableCell, TableContainer, TableRow} from '@mui/material';


const data = [
    {
        id: 1,
        parcelle : 5,
        localisation : '5,0000 ; 6,58999',
        description : "Lorem ipsum doloret mi dpamfafa",
        photo : ["../photo.png","./sary.jpg"]
    },
    {
        id: 2,
        parcelle : 3,
        localisation : '5,0000 ; 6,58999',
        description : "Lorem ipsum doloret mi dpamfafa",
        photo : ["../photo.png","./sary.jpg"]
    }
]



export default function TableauTerrain() {

  return (
    
    <Box className="box__table">
      <TableContainer sx={{ width: '100%', overflowX: 'auto', position: 'relative', display: 'block', maxWidth: '100%', '& td, & th': { whiteSpace: 'nowrap' } }} >
        <Table aria-labelledby="tableTitle" sx={{ '& .MuiTableCell-root:first-of-type': { pl: 2 }, '& .MuiTableCell-root:last-of-type': { pr: 3 } }}>
          <TableBody>

                <TableRow  hover role="checkbox" sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                  <TableCell component="th"  scope="row" align="left">ID Terrain</TableCell>
                  <TableCell align="left" > Description </TableCell>
                  <TableCell align="center"> Nombre de parcelle </TableCell>
                  <TableCell align="center">Localisation  </TableCell>
                  <TableCell align="left" style={{textAlign: ''}}></TableCell>
                  <TableCell align="left" style={{textAlign: ''}}></TableCell>
                </TableRow>
              
                {data.map((item,index) =>(
                    <TableRow  hover role="checkbox" sx={{ '&:last-child td, &:last-child th': { border: 0 } }} key={item.id} >
                        <TableCell component="th"  scope="row" align="left">{item.id}</TableCell>
                        <TableCell align="left" > {item.description} </TableCell>
                        <TableCell align="center"> {item.parcelle} </TableCell>
                        <TableCell align="center">{item.localisation}  </TableCell>
                        <TableCell align="left" ><button>Confirmer</button></TableCell>
                        <TableCell align="left" ><button>Refuser</button></TableCell>
                    </TableRow>
                ))}
            
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
