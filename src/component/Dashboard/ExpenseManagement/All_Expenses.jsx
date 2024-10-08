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
import { IoMdAdd } from "react-icons/io";
import { NavLink } from 'react-router-dom';

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



const All_Expenses = () => {
  return (
    <div className=''>
      <div className='flex justify-between items-center mt-3 mb-3'> <h1 className=" text-3xl font-roboto"> Expenses Overview</h1>
      <NavLink to={"/user_dashboard/add_expense"}><p className='bg-[#000300] text-[#a6f9bd] p-2 rounded-sm'><IoMdAdd/></p>
      </NavLink>
      </div>
      <div>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Id</StyledTableCell>
            <StyledTableCell>Date</StyledTableCell>
            <StyledTableCell align="right">Amount&nbsp;($)</StyledTableCell>
            <StyledTableCell>Category</StyledTableCell>
            <StyledTableCell>Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          
            <StyledTableRow >
              <StyledTableCell component="th" scope="row">
                1
              </StyledTableCell>
              <StyledTableCell>23/4/2024</StyledTableCell>
              <StyledTableCell align="right">10$</StyledTableCell>
              <StyledTableCell>Material</StyledTableCell>
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
              <StyledTableCell>23/4/2024</StyledTableCell>
              <StyledTableCell align="right">10$</StyledTableCell>
              <StyledTableCell>Material</StyledTableCell>
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
              <StyledTableCell>23/4/2024</StyledTableCell>
              <StyledTableCell align="right">10$</StyledTableCell>
              <StyledTableCell>Material</StyledTableCell>
              <StyledTableCell><div className='flex gap-3'>
               <p><MdModeEditOutline size={30}/></p>
               <p ><MdDelete size={30}/></p>
               
               </div></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow >
              <StyledTableCell component="th" scope="row">
                1
              </StyledTableCell>
              <StyledTableCell>23/4/2024</StyledTableCell>
              <StyledTableCell align="right">10$</StyledTableCell>
              <StyledTableCell>Material</StyledTableCell>
              <StyledTableCell><div className='flex gap-3'>
               <p><MdModeEditOutline size={30}/></p>
               <p ><MdDelete size={30}/></p>
               
               </div></StyledTableCell>
            </StyledTableRow>
        
        </TableBody>
      </Table>
    </TableContainer>
      </div>
    </div>
  
  );
};

export default All_Expenses;
