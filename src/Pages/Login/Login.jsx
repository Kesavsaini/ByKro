import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components'
import { loginError, loginStart, loginSucsess } from '../../redux/UserRedux';
import { mobile } from '../../responsive';
import axios from "axios";
import { useSelector } from 'react-redux';
import { CircularProgress } from '@mui/material';
const Container=styled.div`
width: 100vw;
height: 100vh;
background:linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url("https://t3.ftcdn.net/jpg/01/17/33/22/360_F_117332203_ekwDZkViF6M3itApEFRIH4844XjJ7zEb.jpg");
background-repeat: no-repeat;
background-size:cover;
display: flex;
align-items: center;
justify-content: center;
`;
const Wrapper=styled.div`
width: 30%;
background-color: white;
display: flex;
flex-direction: column;
padding: 10px;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
${mobile({width:"80%"})}
`;
const Tittle=styled.h1`
margin: 10px;
`;
const Form=styled.form``;
const Input=styled.input`
width: 90%;
padding: 10px;
outline: none;
margin: 10px;
`;
const Button=styled.button`
width:95%;
height: 40px;
margin: 10px;
background-color: white;
background-color: red;
color:white;
border: none;
cursor: pointer;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;
const Link=styled.a`
margin: 2px 10px;
font-size: 12px;
cursor: pointer;
color: blue;
`
const Error=styled.div`
  color:red;
  margin: 2px 10px;
`;
const Login = () => {
  const dispatch=useDispatch();
  const [password,setPassword]=useState("");
  const [username,setUsername]=useState("");
  const {isFetching,isError}=useSelector(state=>state.user)
  const handleLogin=()=>{
    const DoLogin=async()=>{
      dispatch(loginStart());
      try {
        const res=await axios.post("http://localhost:5000/api/auth/login",{username,password});
        dispatch(loginSucsess(res.data));
        console.log(res.data)
      } catch (err) {
         dispatch(loginError()); 
         console.log(err)
      }
    }
    DoLogin();
  }
  return (
    <>
    <Container>
        <Wrapper>
            <Tittle>SIGN IN</Tittle>
            <Form>
                <Input placeholder='Username' onChange={(e)=>setUsername(e.target.value)}/>
                <Input type="password" placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
            </Form>
            <Button onClick={handleLogin} disabled={isFetching}>
              {isFetching ? <CircularProgress style={{color:"white",width:"30px",height:"30px"}}/>:"Login"}
            </Button>
            {isError &&
              <Error>Somthing went wrong...</Error>
            }
            <Link>Forget Password?</Link>
            <Link>Create Account</Link>
        </Wrapper>
    </Container>
    </>
  )
}

export default Login