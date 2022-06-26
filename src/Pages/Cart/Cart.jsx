import styled from 'styled-components'
import Announcment from '../../Components/Announcment/Announcment'
import Cartitem from '../../Components/Cartitem/Cartitem'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import Newsletter from '../../Components/Newsletter/Newsletter'
import { cartdata } from '../../dummydata';
import { mobile } from '../../responsive';
import {useSelector} from "react-redux"
import StripeCheckout from "react-stripe-checkout"
import { useEffect, useState } from 'react';
import axios from "axios";
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
${mobile({padding:"5px",justifyContent:"space-around"})};
`;
const Button=styled.button`
border: none;
padding: 15px 10px;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
background-color: ${props=>props.bg};
color: ${props=>props.color};
cursor: pointer;
${mobile({padding:"10px 5px",fontSize:"12px"})};
`;
const Subcontainer=styled.div`
display: flex;
${mobile({display:"none"})};
`;
const Options=styled.div`
margin:0px 10px;
text-decoration: underline;
cursor: pointer;
${mobile({fontSize:"10px"})};
`;
const Bottom=styled.div`
display: flex;
${mobile({flexDirection:"column"})};
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
${mobile({width:"80%",margin:"20px"})};
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
  const cart=useSelector(state=>state.cart);
  const key="pk_test_51LEWozSGTyh3edWhqmkcFFRzrESifseF3zBKqD7jIRed8zDSLN4npsNzIg3dI9UQSwPNg9o9mqD24ToOgbUp8G5B00q777qZgP";
  const [stripeToken,setStripeToken]=useState(null);
  const onToken=(token)=>{
    setStripeToken(token);
  }
  useEffect(()=>{
    const Dopayment=async()=>{
        let config={
          headers:{
            Authorization:'Bearer sk_test_51LEWozSGTyh3edWh8QxbSe9atVbmvZBOIhi3V0O3gAd0QFG9XkXxcTqIvqGDgloKSzG0jpnopGLin0nINYkHcXmn00JyqQuWx9'
          }
        }
      try{
          const res=await axios.post("http://localhost:5000/api/checkout/payment",{
            tokenId:stripeToken.id,
            amount:cart.total+17-100
          },config);
          console.log(res.data);
      }catch(err){
          console.log(err);
      }
    }
    stripeToken && Dopayment();
  },[stripeToken,cart])
  
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
              cart.product && cart.product.map((item,index)=>{
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
                <Money>₹{cart.total}</Money>
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
                <Money style={{fontWeight:"600",fontSize:"30px"}}>₹{cart.total+17-100}</Money>
             </Info>
             <StripeCheckout 
               name="Bykro"
               image=""
               billingAddress
               shippingAddress
               description={`Your total is ₹${cart.total+17-100}`}
               amount={(cart.total+17-100)*100}
               token={onToken}
               currency="INR"
              stripeKey={key}
             >
             <Checkout>CHECKOUT NOW</Checkout>
             </StripeCheckout>
          </Summary>
        </Bottom>
    </Container>
    <Newsletter/>
    <Footer/>
    </>
  )
}

export default Cart