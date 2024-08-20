import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { FaUserEdit } from "react-icons/fa";
import { TiUserDeleteOutline } from "react-icons/ti";
import { IoIosPersonAdd } from "react-icons/io";
import { NavLink } from 'react-router-dom';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#020725",
    color: "#dfe1e4",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    color:"#020725"
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



const All_User = () => {
  return (
    <div className=''>
      <div className='flex justify-between items-center mt-3 mb-3'> <h1 className="text-[#020725]"> User Overview</h1>
      <NavLink to={"/add_user"}><p className='text-[#020725]'><IoIosPersonAdd size={30}/></p></NavLink>
      </div>
      <div>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Id</StyledTableCell>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell >Email</StyledTableCell>
            <StyledTableCell>Phone</StyledTableCell>
            <StyledTableCell>Status</StyledTableCell>
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
              <StyledTableCell>07835464849</StyledTableCell>
              <StyledTableCell>Active</StyledTableCell>
              <StyledTableCell>
              <div className='flex gap-3'>
                <p><FaUserEdit size={30}/></p>
                <p><TiUserDeleteOutline size={30}/></p>
                </div>
              </StyledTableCell>
            </StyledTableRow>
            <StyledTableRow >
              <StyledTableCell component="th" scope="row">
                1
              </StyledTableCell>
              <StyledTableCell>John Willy</StyledTableCell>
              <StyledTableCell >John@gmail.com</StyledTableCell>
              <StyledTableCell>07835464849</StyledTableCell>
              <StyledTableCell>Active</StyledTableCell>
              <StyledTableCell><div className='flex gap-3'>
                <p><FaUserEdit size={30}/></p>
                <p><TiUserDeleteOutline size={30}/></p>
                </div></StyledTableCell>
            </StyledTableRow>
            <StyledTableRow >
              <StyledTableCell component="th" scope="row">
                1
              </StyledTableCell>
              <StyledTableCell>John Willy</StyledTableCell>
              <StyledTableCell >John@gmail.com</StyledTableCell>
              <StyledTableCell>07835464849</StyledTableCell>
              <StyledTableCell>Active</StyledTableCell>
              <StyledTableCell>
              <div className='flex gap-3'>
                <p><FaUserEdit size={30}/></p>
                <p><TiUserDeleteOutline size={30}/></p>
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

export default All_User;
