import  React, {useState} from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const media = (array)=>{
    return array.reduce(function(acc, grades){ return (acc + grades)},0 ) 
}

export function TablesFrequency() {
    const [listStudantes, setListStudantes] = useState([
        {
            id: 1,
            name: 'Alexandre Nascimento',
            grades: [10, 10, 9]
        },
        {
            id: 2,
            name: 'Isa Viviane',
            grades: [10, 9.5, 10]
        },
        {
            id: 3,
            name: 'Sara Silvana',
            grades: [7, 0, 0]
        },
        {
            id: 4,
            name: 'Damiana Cordeiro',
            grades: [9, 8, 7]
        }
    ])
  return (
    <>
        <TableContainer component={Paper} style={{margin: '40px 0'}}>
        <Table sx={{ minWidth: 500 }} aria-label="customized table">
            <TableHead>
            <TableRow>
                <StyledTableCell>Estudantes (1º Trimestre)</StyledTableCell>
                <StyledTableCell align="center">1ª Nota</StyledTableCell>
                <StyledTableCell align="center">2ª Nota</StyledTableCell>
                <StyledTableCell align="center">3ª Nota</StyledTableCell>
                <StyledTableCell align="center">Média</StyledTableCell>
                <StyledTableCell align="center"> Atualizar </StyledTableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {listStudantes.map((studant) => (
                <StyledTableRow key={studant.name}>
                
                <StyledTableCell component="th" scope="row">
                    {studant.name}
                </StyledTableCell>

                <StyledTableCell align="center">
                    {studant.grades[0]}
                </StyledTableCell>

                <StyledTableCell align="center">
                    {studant.grades[1]}
                </StyledTableCell>

                <StyledTableCell align="center">
                    {studant.grades[2]}
                </StyledTableCell>

                <StyledTableCell align="center">{(media(studant.grades)/3).toLocaleString()}</StyledTableCell>

                <StyledTableCell align="center">
                    <IconButton aria-label="edit" >
                        <EditIcon color="primary"  />
                    </IconButton>
                </StyledTableCell>

                </StyledTableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
        
    </>
  );
}
