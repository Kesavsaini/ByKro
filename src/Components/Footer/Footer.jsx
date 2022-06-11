import { Email, Facebook, GitHub, Instagram, LocationOn, PhoneIphone, Twitter } from '@mui/icons-material';
import styled from 'styled-components'
const Container=styled.div`
    display: flex;
    margin-top: 10px;
`;
const Left=styled.div`
flex: 1;
padding: 10px;
`;
const Title=styled.h3`
font-size: 30px;
margin-bottom: 5px;
`;
const Desc=styled.div`
margin: 5px;
`;
const Icon=styled.div`
display: flex;
`;
const Socialicon=styled.div`
padding: 7px;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
background-color:${props=>props.bc};
color: white;
margin: 5px;
cursor: pointer;
`;
const Center=styled.div`
flex: 1;
padding: 10px;
`;
const Titlecenter=styled.h3`
margin-bottom: 5px;
`;
const List=styled.ul`
list-style: none;
display: flex;
flex-wrap:wrap;
`;
const Listitem=styled.li`
width: 50%;
margin-top: 10px;
`;
const Right=styled.div`
flex: 1;
margin: 5px;
padding: 10px;
`;
const Info=styled.h3`
margin-bottom: 5px;
`;
const Infoitem=styled.div`
display: flex;
align-items: center;
margin-top: 20px;
`;
const Payment=styled.img`
width: 60%;
margin-top: 7px;
margin-left: -3px;
`;
const Footer = () => {
  return (
    <Container>
        <Left>
            <Title>ByKro.</Title>
            <Desc> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum tempora minima sit doloribus voluptate, vel nesciunt a fugiat animi laboriosam reprehenderit pariatur corrupti dolores odit exercitationem ad porro perspiciatis alias. 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam beatae iste nemo eius natus doloremque
            </Desc>
            <Icon>
                <Socialicon bc={"#3b5998"}>
                    <Facebook/>
                </Socialicon>
                <Socialicon bc={"#e95950"}>
                    <Instagram/>
                </Socialicon>
                <Socialicon  bc={"#55acee"}>
                    <Twitter/>
                </Socialicon>
                <Socialicon bc={"#000000"}>
                    <GitHub/>
                </Socialicon>
            </Icon>
        </Left>
        <Center>
           <Titlecenter>Useful Links</Titlecenter>
           <List>
            <Listitem>Home</Listitem>
            <Listitem>Man Fashion</Listitem>
            <Listitem>Accessories</Listitem>
            <Listitem>Order Tracking</Listitem>
            <Listitem>Wishlist</Listitem>
            <Listitem>Cart</Listitem>
            <Listitem>Women Fashion</Listitem>
            <Listitem>My Accounts</Listitem>
            <Listitem>Terms</Listitem>
           </List>
        </Center>
        <Right>
          <Info>Contact</Info>
          <Infoitem>
            <LocationOn/>
            Moradabad, Uttar Pradesh,India
          </Infoitem>
          <Infoitem>
            <PhoneIphone/>
            +91-9027519366
          </Infoitem>
          <Infoitem>
            <Email/>
            Kromansaini@Gmail.com
          </Infoitem>
          <Payment src="https://www.dobotspain.es/wp-content/uploads/2021/03/payment-methods.png"/>
        </Right>
    </Container>
  )
}

export default Footer