import styled from 'styled-components'
import Announcment from '../../Components/Announcment/Announcment'
import Cartitem from '../../Components/Cartitem/Cartitem'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import Newsletter from '../../Components/Newsletter/Newsletter'
import { cartdata } from '../../dummydata'
const Container=styled.div`
`;
const Tittle=styled.div`
font-size: 40px;
font-weight: 350;
display: flex;
align-items: center;
justify-content: center;
padding: 10px;
`;
const Top=styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px;
`;
const Button=styled.button`
border: none;
padding: 15px 10px;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
background-color: ${props=>props.bg};
color: ${props=>props.color};
cursor: pointer;
`;
const Subcontainer=styled.div`
display: flex;
`;
const Options=styled.div`
margin:0px 10px;
text-decoration: underline;
cursor: pointer;
`;
const Bottom=styled.div`
display: flex;

width: 100vw;
max-width: 100%;
`;
const Products=styled.div`
width:70%;
`;
const Line=styled.hr`
background-color:#eee;
border: none;
height:2px;
`;
const Summary=styled.div`
margin-left: 30px;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
padding: 20px;
height:50vh;
width: 20%;
border-radius: 5px;
`;
const Sumtittle=styled.div`
font-size: 30px;
margin:10px 0px;
`;
const Info=styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
margin:30px 0px;
`;
const Infotitle=styled.div`
font-size: 20px;
`;
const Money=styled.div`
font-size: 20px;
`;
const Checkout=styled.button`
background-color: black;
color: white;
border: none;
padding: 15px 25px;
cursor: pointer;
border-radius: 30px;
`;
const Cart = () => {
  return (
    <>
    <Navbar/>
    <Announcment/>
    <Container>
        <Tittle>YOUR BAG</Tittle>
        <Top>
         <Button bg="white" color='black'>CONTINUE SHOPPING</Button>
           <Subcontainer>
             <Options>Shopping Bag(2)</Options>
             <Options>Your whishlist(0)</Options>
           </Subcontainer>
         <Button bg="black" color='white'>CHECKOUT NOW</Button>
        </Top>
        <Bottom>
          <Products>
            {
              cartdata.map((item,index)=>{
                return(
                  <>
                  <Cartitem item={item}/>
                  {index<cartdata.length-1 && <Line/>}
                  </>
                );
              })
            }
          </Products>
          <Summary>
             <Sumtittle>ORDER SUMMARY</Sumtittle>
             <Info>
                <Infotitle>Subtotal</Infotitle>
                <Money>₹1700</Money>
             </Info>
             <Info>
                <Infotitle>Estemeted Shopping</Infotitle>
                <Money>₹17</Money>
             </Info>
             <Info>
                <Infotitle>Shopping Discount</Infotitle>
                <Money>-₹100</Money>
             </Info>
             <Info>
                <Infotitle style={{fontWeight:"600",fontSize:"30px"}}>Total</Infotitle>
                <Money style={{fontWeight:"600",fontSize:"30px"}}>₹1617</Money>
             </Info>
             <Checkout>CHECKOUT NOW</Checkout>
          </Summary>
        </Bottom>
    </Container>
    <Newsletter/>
    <Footer/>
    </>
  )
}

export default Cart