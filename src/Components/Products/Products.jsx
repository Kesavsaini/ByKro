import styled from 'styled-components'
import Product from './Product'
import { productdata } from '../../dummydata';
import {mobile} from "../../responsive"
const Container=styled.div`
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    ${mobile({padding:"1px"})};
`;
const Products=({cat,filter,sort})=> {
  
  return (
    <Container>
        {productdata.map((item)=>{
           return(
               <Product item={item}/>
           );
        })}
    </Container>
  )
}

export default Products