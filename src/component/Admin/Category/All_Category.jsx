import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { MdDelete } from "react-icons/md";
import { MdModeEditOutline } from "react-icons/md";
import { IoMdAdd } from 'react-icons/io';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#000300",
    color: "#a6f9bd",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    color:"#000300"
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));



const All_Category = () => {
  return (
    <div className=''>
      <div className='flex justify-between items-center mt-3 mb-3'> <h1 className="text-[#000300]"> Category Overview</h1>
      <p className='bg-[#000300] text-[#dfe1e4] p-2 rounded-sm'><IoMdAdd/></p>
      </div>
      <div>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Id</StyledTableCell>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell >Depertment</StyledTableCell>
            
            <StyledTableCell>Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          
            <StyledTableRow >
              <StyledTableCell component="th" scope="row">
                1
              </StyledTableCell>
              <StyledTableCell>John Willy</StyledTableCell>
              <StyledTableCell >John@gmail.com</StyledTableCell>
              
              <StyledTableCell>
              <div className='flex gap-3'>
               <p><MdModeEditOutline size={30}/></p>
               <p ><MdDelete size={30}/></p>
               
               </div>
              </StyledTableCell>
            </StyledTableRow>
            <StyledTableRow >
              <StyledTableCell component="th" scope="row">
                1
              </StyledTableCell>
              <StyledTableCell>John Willy</StyledTableCell>
              <StyledTableCell >John@gmail.com</StyledTableCell>

              <StyledTableCell>
              <div className='flex gap-3'>
               <p><MdModeEditOutline size={30}/></p>
               <p ><MdDelete size={30}/></p>
               
               </div>
              </StyledTableCell>
            </StyledTableRow>
            <StyledTableRow >
              <StyledTableCell component="th" scope="row">
                1
              </StyledTableCell>
              <StyledTableCell>John Willy</StyledTableCell>
              <StyledTableCell >John@gmail.com</StyledTableCell>

              <StyledTableCell>
              <div className='flex gap-3'>
               <p><MdModeEditOutline size={30}/></p>
               <p ><MdDelete size={30}/></p>
               
               </div>
              </StyledTableCell>
            </StyledTableRow>
        
             
        
        </TableBody>
      </Table>
    </TableContainer>
      </div>
    </div>
  
  );
};

export default All_Category;
