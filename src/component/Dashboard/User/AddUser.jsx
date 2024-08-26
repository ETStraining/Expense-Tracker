import { Box, Button, FormControl, Input, InputLabel,  OutlinedInput, TextField } from '@mui/material';
import React from 'react';

const AddUser = ()=>{
    return (
        <div className='-z-10 flex items-center justify-center mt-2'>
    <div className=' flex items-center justify-center shadow w-96 border bg-[#f6f7f8] rounded-md text-[#000300]'>
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 ,width:300 ,margin:5}}>
        <p className='mt-2 mb-2 text-2xl font-bold'>ADD USER</p>
           <FormControl fullWidth required variant="outlined">
            <InputLabel htmlFor="name" sx={{ color: "#dfe1e4" }}>Name</InputLabel>
              <OutlinedInput
                id="name"
                name="name"
                type="text"
                value={name}
                onChange={(e) => { setName(e.target.value) }}
                label="text"
                sx={{background:"#000300",color:"#dfe1e4",border:"#020725"}}
              />
            </FormControl>
            <FormControl fullWidth required variant="outlined">
            <InputLabel htmlFor="email" sx={{ color: "#dfe1e4" }}>Email</InputLabel>
              <OutlinedInput
                id="email"
                name="email"
                type="email"
                // value={email}
                // onChange={(e) => { setEmail(e.target.value) }}
                label="Email"
                sx={{background:"#000300",color:"#dfe1e4"}}
              />
            </FormControl>
            <FormControl fullWidth required variant="outlined">
            <InputLabel htmlFor="phone" sx={{ color: "#dfe1e4" }}>Phone</InputLabel>
              <OutlinedInput
                id="phone"
                name="phone"
                type="text"
                // value={phone}
                // onChange={(e) => { setPhone(e.target.value) }}
                label="Phone"
                sx={{background:"#000300",color:"#dfe1e4"}}
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
         
            <FormControl>
               <button type='submit' className='text-[#000300] bg-[#a6f9bd] p-2 rounded-md' variant='contained'>AddUser</button>
            </FormControl>
           
          
            </Box>
    
            
    </div>
          
        </div>
      )
}
export default AddUser;