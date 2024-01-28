import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

// material-ui
import { Box, Link, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';

// third-party
import NumberFormat from 'react-number-format';

// project import
import Dot from '../@extended/Dot';

function createData(id, nom, duration , rendement, prix) {
  return { id, nom, duration , rendement, prix };
}

const rows = [
  createData(1, 'Tomate', 10, 15, 40),
  createData(2, 'Laitue', 30, 10, 10),
  createData(3, 'Pomme de terre', 20, 30, 10)
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc' ? (a, b) => descendingComparator(a, b, orderBy) : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

// ==============================|| ORDER TABLE - HEADER CELL ||============================== //

const headCells = [
  {
    id: 'id',
    align: 'left',
    disablePadding: false,
    label: 'ID Culture'
  },
  {
    id: 'nom',
    align: 'left',
    disablePadding: false,
    label: 'Nom Culture'
  },
  {
    id: 'duration',
    align: 'right',
    disablePadding: false,
    label: 'Duration'
  },
  {
    id: 'rendement',
    align: 'right',
    disablePadding: false,
    label: 'Rendement par m²'
  },
  {
    id: 'constat',
    align: 'right',
    disablePadding: false,
    label: 'Constatation'
  },
  {
    id: 'prix',
    align: 'right',
    disablePadding: false,
    label: 'Prix'
  }
];

// ==============================|| ORDER TABLE - HEADER ||============================== //

function OrderTableHead({ order, orderBy }) {
  return (
    
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.align}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
    
  );
}

OrderTableHead.propTypes = {
  order: PropTypes.string,
  orderBy: PropTypes.string
};

// ==============================|| ORDER TABLE - STATUS ||============================== //

const OrderStatus = ({ status }) => {
  let color;
  let title;
  console.log(status);
  
  if(status >= 0 && status <= 10){
    color = 'warning';
    title = "Faible";
  }
  if(status >= 11 && status <= 20){
    color = 'primary';
    title = "Moyen";
  }
  if(status >= 21  ){
    color = 'success';
    title = "Elevé";
  }

  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <Dot color={color} />
      <Typography>{title}</Typography>
    </Stack>
  );
};

OrderStatus.propTypes = {
  status: PropTypes.number
};

// ==============================|| ORDER TABLE ||============================== //

export default function Tableau() {
  const [order] = useState('asc');
  const [orderBy] = useState('trackingNo');
  const [selected] = useState([]);

  const isSelected = (trackingNo) => selected.indexOf(trackingNo) !== -1;

  return (
    
    <Box className="box__table">
      <TableContainer
        sx={{
          width: '100%',
          overflowX: 'auto',
          position: 'relative',
          display: 'block',
          maxWidth: '100%',
          '& td, & th': { whiteSpace: 'nowrap' }
        }}
      >
        <Table
          aria-labelledby="tableTitle"
          sx={{
            '& .MuiTableCell-root:first-of-type': {
              pl: 2
            },
            '& .MuiTableCell-root:last-of-type': {
              pr: 3
            }
          }}
        >
          <OrderTableHead order={order} orderBy={orderBy} />
          <TableBody>
            {stableSort(rows, getComparator(order, orderBy)).map((row, index) => {
              const isItemSelected = isSelected(row.trackingNo);
              const labelId = `enhanced-table-checkbox-${index}`;

              return (
                <TableRow
                  hover
                  role="checkbox"
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  aria-checked={isItemSelected}
                  tabIndex={-1}
                  key={row.trackingNo}
                  selected={isItemSelected}
                >
                  <TableCell component="th" id={labelId} scope="row" align="left">
                    <Link color="secondary" component={RouterLink} style={{textDecoration:'none'}} to="">
                      {row.id}
                    </Link>
                  </TableCell>
                  <TableCell align="left">{row.nom}</TableCell>
                  <TableCell align="right">{row.duration} s</TableCell>
                  <TableCell align="center">{row.rendement} <span >kg </span></TableCell>
                  <TableCell align="left" style={{textAlign: ''}}><OrderStatus status={row.rendement} /></TableCell>
                  <TableCell align="right">
                    <NumberFormat value={row.prix} displayType="text" thousandSeparator prefix="$" />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
