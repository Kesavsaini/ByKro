import styled from 'styled-components'
import {mobile} from "../../responsive"
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
const Button=styled.button`
margin: 10px;
padding: 15px 35px;
background-color: white;
background-color: red;
color:white;
border: none;
cursor: pointer;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;
const Register = () => {
  return (
    <>
    <Container>
        <Wrapper>
            <Tittle>Create Account</Tittle>
            <Form>
                <Input placeholder='First Name'/>
                <Input placeholder='Last Name'/>
                <Input placeholder='username'/>
                <Input placeholder='Email'/>
                <Input placeholder='Password'/>
                <Input placeholder='Confirm Password'/>
            </Form>
            <Agreement>By creating an account i consent to the processing of my personal in accordance with the <b>Privacy Policy</b> </Agreement>
            <Button>CREATE ACCOUNT</Button>
        </Wrapper>
    </Container>
    </>
  )
}

export default Register