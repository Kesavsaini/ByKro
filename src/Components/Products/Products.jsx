import styled from 'styled-components'
import Product from './Product'
import { productdata } from '../../dummydata'
const Container=styled.div`
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`;
const Products=()=> {
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