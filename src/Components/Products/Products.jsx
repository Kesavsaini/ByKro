import styled from 'styled-components'
import Product from './Product'
import { productdata } from '../../dummydata';
import {mobile} from "../../responsive"
import { useEffect } from 'react';
import axios from "axios"
import { useState } from 'react';
const Container=styled.div`
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    ${mobile({padding:"1px"})};
`;
const Products=({cat,filters,sort})=> {
  const [products,setProducts]=useState([]);
  const [filteredProducts,setfilteredProducts]=useState([]);
  useEffect(()=>{
    const fetch=async()=>{
      try{
        let config = {
          headers: {
            token:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYjA1ZjA3ZjI4ZmUyZWQ3ODY5OTg2MCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NTg4NTYwNCwiZXhwIjoxNjU2NDkwNDA0fQ.f-a5LjW4dmq7XDTpLahkZmsqMMUz-BHiLZviANwGG64",
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