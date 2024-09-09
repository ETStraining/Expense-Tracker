import {
    Box,
    Button,
    FormControl,
    Input,
    InputLabel,
    OutlinedInput,
    TextField,
  } from "@mui/material";
  import { Link, useNavigate } from "react-router-dom";
  import { NavLink } from "react-router-dom";
  import Typewriter from "react-typewriter-effect";
  import React, { useState } from "react";
  import { FaGoogle } from "react-icons/fa";
  
  // import { FIREBASE_AUTH, FIRESTORE_DB } from '../../firebase/config';
  // import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
  // import { doc, setDoc } from "firebase/firestore"; // Add Firestore imports
  
  const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
  
    const handeleRegister = async (e) => {
      e.preventDefault();
      if (!email || !password) {
        alert("All fields are required!");
        return;
      }
      if (!email.endsWith("@gmail.com")) {
        alert("Email must be a @gmail.com address!");
        return;
      }
    
   
    };
  
    const navigate = useNavigate();
    return (
      <div className="flex bg-[#000300]">
        <div className="text-white px-10 w-1/2">
          <div className="max-w-[800px]  w-full h-screen mx-auto text-center flex flex-col justify-center">
            <p className="text-[#a6f9bd] font-bold p-2">MANAGE YOUR EXPENSE</p>
            <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
              control your Money
            </h1>
            <div className="flex justify-center items-center">
              <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
                Fast, flexible budgeting
              </p>
              <Typewriter
                options={{
                  strings: ["BTB", "BTC", "SASS"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
            <p className="md:text-2xl text-xl font-bold text-gray-500">
              for start creating your budget and save ton of money & SASS
              platforms.
            </p>
            <NavLink to={"/"}>
              {/* {" "} */}
              <button className="bg-[#a6f9bd] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
                Back
              </button>
            </NavLink>
          </div>
        </div>
        <div></div>
        <div className=" flex items-center justify-center bg-white w-1/2">
          <div className=" ">
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                width: 300,
                margin: 5,
              }}>
              <p className="mt-2 mb-2 text-2xl font-bold">Sign In </p>

              <FormControl fullWidth required variant="outlined">
                  <InputLabel htmlFor="email" sx={{ color: "#274C5B" }}>
                    <FaGoogle/> sign in with google
                  </InputLabel>
                  <OutlinedInput
                    id="email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    label="Email"
                  />
                </FormControl>
                <p className="text-xl text-center">Or</p>
            
              
                <FormControl fullWidth required variant="outlined">
                  <InputLabel htmlFor="email" sx={{ color: "#274C5B" }}>
                    Email
                  </InputLabel>
                  <OutlinedInput
                    id="email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    label="Email"
                  />
                </FormControl>
              
  
          
  
              <FormControl fullWidth required variant="outlined">
                <InputLabel htmlFor="password" sx={{ color: "#274C5B" }}>
                  Password
                </InputLabel>
                <OutlinedInput
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  label="Password"
                />
              </FormControl>
           
              <FormControl>
                <button
                  type="submit"
                  className="text-gray-100 bg-[#a6f9bd] p-2 rounded-md"
                  variant="contained"
                  onClick={handeleRegister}>
                  Login
                </button>
              </FormControl>
              <p className='text-right mt-3 text-[#144c90]'><Link  color="primary"
        sx={{ textDecoration: 'none' ,cursor:"pointer" }}>forget password?</Link></p>
              <p className="text-left">
                Don't have an accouent?
                <Link
                  to={"/signup"}
                  className="pl-3 text-[#a6f9bd] font-bold"
                  sx={{ textDecoration: "none", cursor: "pointer" }}>
                  Sign up
                </Link>
              </p>
            </Box>
          </div>
        </div>
      </div>
    );
  };
  
  export default Login;
  