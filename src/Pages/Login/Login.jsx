import styled from 'styled-components'
import { mobile } from '../../responsive';
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
padding: 15px 35px;
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
const Register = () => {
  return (
    <>
    <Container>
        <Wrapper>
            <Tittle>SIGN IN</Tittle>
            <Form>
                <Input placeholder='Username'/>
                <Input type="password" placeholder='Password'/>
            </Form>
            <Button>Login</Button>
            <Link>Forget Password?</Link>
            <Link>Create Account</Link>
        </Wrapper>
    </Container>
    </>
  )
}

export default Register