import { Send } from "@mui/icons-material";
import { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components"
import {mobile} from "../../responsive";
import emailjs from '@emailjs/browser';
const Container=styled.div`
    height: 70vh;
    background-color:#F7EEEE;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    ${mobile({height:"50vh"})};
`;
const Title=styled.h1`
font-size: 80px;
margin: 10px;
${mobile({fontSize:"40px"})};
`;
const Desc=styled.div`
font-size: 30px;
margin: 10px;
${mobile({fontSize:"15px"})};
`;
const IntputContainer=styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 60%;
height: 50px;
background-color: white;
padding:2px;
margin: 10px;
${mobile({width:"90%"})};
`
const Input=styled.input`
flex:9;
height: 100%;
border: none;
outline: none;
text-decoration: none;
${mobile({flex:"8"})};
`;
const Button=styled.button`
flex:1;
height: 100%;
border: none;
background-color:red;
font-size:30px;
color: white;
cursor: pointer;
${mobile({flex:"2"})};
`;
const Newsletter = () => {
  const name=useSelector(state=>state.user.userInfo.name);
  const [template,setTemp]=useState({name:name,message:"Hello Guys Greetings from Byrko You will now get notify for Latest Products",email:""});
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.send('service_bel9gj1', 'template_qej0sva',template, 'QGXJnwPjIxGEAGBd6')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <Container>
        <Title>Newsletter</Title>
        <Desc>Get Timely Update for Your Faviourt Products.</Desc>
        <IntputContainer>
            <Input placeholder="Your Email" onChange={(e)=>setTemp({...template,email:e.target.value})}/>
            <Button onClick={sendEmail}>
                <Send/>
            </Button>
        </IntputContainer>
    </Container>
  )
}

export default Newsletter