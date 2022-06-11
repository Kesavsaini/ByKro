import { Send } from "@mui/icons-material";
import styled from "styled-components"
const Container=styled.div`
    height: 70vh;
    background-color:#F7EEEE;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;
const Title=styled.h1`
font-size: 80px;
margin: 10px;
`;
const Desc=styled.div`
font-size: 30px;
margin: 10px;
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
`
const Input=styled.input`
flex:9;
height: 100%;
border: none;
outline: none;
text-decoration: none;
`;
const Button=styled.button`
flex:1;
height: 100%;
border: none;
background-color:red;
font-size:30px;
color: white;
cursor: pointer;
`;
const Newsletter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Desc>Get Timely Update for Your Faviourt Products.</Desc>
        <IntputContainer>
            <Input placeholder="Your Email"/>
            <Button>
                <Send/>
            </Button>
        </IntputContainer>
    </Container>
  )
}

export default Newsletter