import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
const Info=styled.div`
    opacity: 0;
    position:absolute;
    width: 100%;
    height: 100%;
    top:0;
    left:0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,0.2);
    z-index:4;
`;
const Container=styled.div`
    position: relative;
    flex: 1;
    margin: 3px;
    height: 350px;
    min-width: 300px;
    background-color:#e2f0ee;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover ${Info}{
        transition:0.5s all ease;
        opacity: 1;
    }
    z-index: 1;
`;
const Circle=styled.div`
   position: absolute;
   width: 250px;
   height: 250px;
   border-radius: 50%;
   background-color: #ffffff;
   z-index: 2;
`;
const Image=styled.img`
   height: 75%;
   z-index: 3;
`;
const Icon=styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin: 5px;
    z-index: 5;
`;
const Product=({item})=>{
  return (
   <>
   <Container>
       <Circle/>
           <Image src={item.img}/>
           <Info>
           <Link to={`/product/${item._id}`} style={{textDecoration:"none",color:"black"}}>
               <Icon>
               <ShoppingCartOutlined/>
               </Icon>
               </Link>
               <Icon>
                 <SearchOutlined/>
               </Icon>
               <Icon>
               <FavoriteBorderOutlined/>
               </Icon>
           </Info>
       
   </Container>

   </>
  )
}

export default Product