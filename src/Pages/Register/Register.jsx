import axios from 'axios';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import styled from 'styled-components'
import {mobile} from "../../responsive";
import {useDispatch, useSelector} from "react-redux"
import { signupError, signupStart, signupSucsess } from '../../redux/SignupRedux';
const Container=styled.div`
width: 100vw;
height: 100vh;
background:linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url("https://learn.g2.com/hubfs/ecommerce%20website.jpg");
background-repeat: no-repeat;
background-size:cover;
display: flex;
align-items: center;
justify-content: center;
`;
const Wrapper=styled.div`
width: 40%;
background-color: white;
display: flex;
flex-wrap: wrap;
padding: 10px;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
${mobile({width:"80%"})}
`;
const Tittle=styled.h1`
margin: 10px;
`;
const Form=styled.form``;
const Input=styled.input`
margin: 10px;
width: 40%;
padding: 10px;
outline: none;
${mobile({width:"80%"})}
`;
const Agreement=styled.div`
margin: 10px;
font-size: 13px;
`;
// const Button=styled.button`
// margin: 10px;
// padding: 15px 35px;
// background-color: white;
// background-color: red;
// color:white;
// border: none;
// cursor: pointer;
// box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
// `;
const Error=styled.div`
  color:red;
  margin: 2px 10px;
`;
const Register = () => {
  const dispatch=useDispatch();
  let {isFetching,isError,user}=useSelector(state=>state.newuser);
 const handleSignup=(e)=>{
  e.preventDefault();
  const Adduser=async()=>{
    if(e.target[5].value===e.target[4].value){
    dispatch(signupStart());
    try{
       const res=await axios.post("http://localhost:5000/api/auth/register",{
          firstname:e.target[0].value,
          lastname:e.target[1].value,
          username:e.target[2].value,
          email:e.target[3].value,
          password:e.target[4].value
       });
       dispatch(signupSucsess(res.data));
      }catch(err){
        dispatch(signupError());
       console.log(err);
    }
  }else dispatch(signupError());
  }
  Adduser();
 }
  return (
    <>
    <Container>
        <Wrapper>
            <Tittle>Create Account</Tittle>
            <Form onSubmit={handleSignup}>
                <Input placeholder='First Name' required/>
                <Input placeholder='Last Name' required/>
                <Input placeholder='username' required/>
                <Input placeholder='Email' required/>
                <Input placeholder='Password' required/>
                <Input placeholder='Confirm Password' required/>
                <Input type="submit" value="Create Account" disabled={isFetching} style={{backgroundColor:"red",border:"none",color:"white",cursor:"pointer"}}/>
            </Form>
              {user && <Navigate to="/login"/>}
              {isError && <Error>Somthing went wrong...</Error>}
            <Agreement>By creating an account i consent to the processing of my personal in accordance with the <b>Privacy Policy</b> </Agreement>
        </Wrapper>
    </Container>
    </>
  )
}

export default Register