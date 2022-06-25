import { Add, Remove } from '@mui/icons-material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components'
import Announcment from '../../Components/Announcment/Announcment'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import Newsletter from '../../Components/Newsletter/Newsletter';
import { updateCart } from '../../redux/CartRedux';
import { mobile } from '../../responsive';
import {useDispatch} from "react-redux";
const Wrapper=styled.div`
display: flex;
${mobile({flexDirection:"column"})}
`;
const Left=styled.div`
flex: 1;
padding: 40px;
${mobile({padding:"10px"})}
`;
const Image=styled.img`
width: 100%;
height: 90vh;
object-fit:cover;
${mobile({height:"40vh"})}
`;
const Right=styled.div`
flex:1;
padding: 40px;
${mobile({padding:"10px"})}
`;
const Title=styled.h1`
font-weight: 200;
`;
const Desc=styled.div`
margin: 30px 0px;
font-weight:500;
`;
const Price=styled.div`
font-size: 35px;
font-weight: 200;
`;
const Addcontainer=styled.div`
width: 50%;
display: flex;
align-items: center;
justify-content: space-between;
${mobile({width:"80%"})}
`;
const Filtercontainer=styled.div`
width: 50%;
display: flex;
align-items: center;
justify-content: space-between;
${mobile({width:"80%",marginTop:"10px"})}
`;
const Filter=styled.div`
display: flex;
align-items: center;
margin: 30px 0px;
`;
const FilterTittle=styled.div`
font-size: 20px;
font-weight: 200;
`;
const FilterColor=styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props=>props.color};
margin-left: 5px;
cursor: pointer;
`;
const Select=styled.select`
padding: 3px;
margin-left: 5px;
`;
const Option=styled.option``;
const Additem=styled.div`
display: flex;
align-items: center;
justify-content: center;
margin: 30px 0px;
`;
const Addnumber=styled.div`
width: 30px;
height: 30px;
display: flex;
align-items: center;
justify-content: center;
border-radius: 30%;
border:2px solid #3BACB6;
font-weight: bold;
`;
const AddtoCart=styled.button`
padding: 15px 25px;
background-color: white;
border: 3px solid #3BACB6;
cursor: pointer;
&:hover{
    background-color: #e2e2e2;
}
`;
const Product=()=>{
const location=useLocation();
const id=location.pathname.split("/")[2];
const [product,setProduct]=useState({});
const [quant,setQuant]=useState(1);
const [productcolor,setProductcolor]=useState();
const [productsize,setProductsize]=useState();
const dispatch=useDispatch();
useEffect(()=>{
    const getProduct=async()=>{
        try{
         const res=await axios.get(`http://localhost:5000/api/products/getproduct/${id}`);
         console.log(res);
         setProduct(res.data);
        }catch(err){
            console.log(err);
        }
    }
    getProduct();
})
const handleClick=()=>{
    dispatch(updateCart({...product,quant,productcolor,productsize,price:product.price}));
}
  return (
    <>
    <Navbar/>
    <Announcment/>
     <Wrapper>
        <Left>
           <Image src={product.img}/>
        </Left>
        <Right>
            <Title>{product.title}</Title>
            <Desc> 
                {product.desc}
            </Desc>
            <Price>₹{product.price}/-</Price>
            <Filtercontainer>
                <Filter>
                    <FilterTittle>Color</FilterTittle>
                    {
                      product.color && product.color.map((color)=>{
                           if(color){
                            return(
                                <FilterColor color={color} key={color} onClick={()=>setProductcolor(color)}></FilterColor>
                            );
                           }
                        })
                    }
                </Filter>
                <Filter>
                <FilterTittle>Size</FilterTittle>
                <Select onClick={(e)=>setProductsize(e.target.value)}>
                    <Option selected disabled>Size</Option>
                    {
                      product.size && product.size.map((sz)=>{
                           if(sz){
                            return(
                                <Option >{sz}</Option>
                            );
                           }
                        })
                    }
                </Select>
                </Filter>
            </Filtercontainer>
            <Addcontainer>
                <Additem>
                    <Remove onClick={()=>setQuant(quant>2?quant-1:1)} style={{cursor:"pointer"}}/>
                     <Addnumber>{quant}</Addnumber>
                    <Add onClick={()=>setQuant(quant+1)} style={{cursor:"pointer"}}/>
                </Additem>
                <AddtoCart onClick={handleClick}>ADD TO CART</AddtoCart>
            </Addcontainer>
        </Right>
     </Wrapper>
    <Newsletter/>
    <Footer/>
    </>
  )
}

export default Product
