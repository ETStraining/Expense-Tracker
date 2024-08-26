import { Box, Button, FormControl, Input, InputLabel,  OutlinedInput, TextField } from '@mui/material';
import React from 'react';

const AddExpense = ()=>{
    return (
        <div className='-z-10 flex items-center justify-center mt-12'>
    <div className=' flex items-center justify-center shadow w-96 border bg-[#f1f1f1] rounded-md text-[#000300]'>
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 ,width:300 ,margin:5}}>
        <p className='mt-2 mb-2 text-2xl font-bold'>ADD EXPENSE</p>
           <FormControl fullWidth required variant="outlined">
            <InputLabel htmlFor="date" sx={{ color: "#dfe1e4" }}></InputLabel>
              <OutlinedInput
                id="date"
                name="date"
                type="date"
                value={name}
                onChange={(e) => { setName(e.target.value) }}
                label=""
                sx={{background:"#000300",color:"#dfe1e4",border:"#020725"}}
              />
            </FormControl>

            <FormControl fullWidth required >
            <InputLabel htmlFor="depert" sx={{ color: "#dfe1e4" }}>Depertment</InputLabel>
              <OutlinedInput
                id="depert"
                name="depert"
                type="text"
            //     value={password}
            //    onChange={(e) => { setPassword(e.target.value) }}
                label="depertment"
                sx={{background:"#000300",color:"#dfe1e4"}}
              />
            </FormControl>
         
            <FormControl fullWidth required variant="outlined">
            <InputLabel htmlFor="amount" sx={{ color: "#dfe1e4" }}>Amount</InputLabel>
              <OutlinedInput
                id="amount"
                name="amount"
                type="text"
                // value={phone}
                // onChange={(e) => { setPhone(e.target.value) }}
                label="amount"
                sx={{background:"#000300",color:"#dfe1e4"}}
              />
            </FormControl>
    
            
         
            <FormControl>
               <button type='submit' className='text-[#000300] bg-[#a6f9bd] p-2 rounded-md' variant='contained'>AddIncome</button>
            </FormControl>
           
          
            </Box>
    
            
    </div>
          
        </div>
      )
}
export default AddExpense;