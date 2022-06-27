import styled from 'styled-components'
import Product from './Product'
import { productdata } from '../../dummydata';
import {mobile} from "../../responsive"
import { useEffect } from 'react';
import axios from "axios"
import { useState } from 'react';
import { useSelector } from 'react-redux';
const Container=styled.div`
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    ${mobile({padding:"1px"})};
`;
const Products=({cat,filters,sort})=> {
  const Authtoken=useSelector(state=>state.user.userInfo.token);
  const [products,setProducts]=useState([]);
  const [filteredProducts,setfilteredProducts]=useState([]);
  useEffect(()=>{
    const fetch=async()=>{
      try{
        let config = {
          headers: {
            token:"Bearer "+Authtoken,
          }
        }
        const res=await axios.get(cat ?`http://localhost:5000/api/products/getallproduct?category=${cat}`:"http://localhost:5000/api/products/getallproduct",config);
        setProducts(res.data);
      }catch(err){
        console.log(err);
      }
    }
    fetch();
  },[cat]);
  useEffect(()=>{
   cat && setfilteredProducts(products.filter((item)=>(
      Object.entries(filters).every(([key,value])=>
         item[key].includes(value)
      )
   )))
  },[cat,filters,products]);
  useEffect(()=>{
    if(sort==="newest"){
       setfilteredProducts((pre)=>[...pre].sort((a,b)=>a.createdAt-b.createdAt));
    }else  if(sort==="asc"){
      setfilteredProducts((pre)=>[...pre].sort((a,b)=>a.price-b.price));
   }else  if(sort==="desc"){
    setfilteredProducts((pre)=>[...pre].sort((a,b)=>b.price-a.price));
   }
  },[sort])
  return(
    <Container>
        {cat?filteredProducts.map((item)=>{
           return(
               <Product item={item}/>
           );
        }):products.slice(0,8).map((item)=>{
          return(
              <Product item={item}/>
          );
       })}
    </Container>
  )
}

export default Products;