import styled from "styled-components";
import Categoriesitem from "./Categoriesitem";
import { categories } from "../../dummydata";
const Container=styled.div`
display: flex;
margin: 5px;
padding: 5px;
`;
const Categories = () => {
  return (
      <>
      <Container>
           {
               categories.map((item)=>{
                   return(
                   <Categoriesitem item={item}/>
                   );
               })
           }
      </Container>
      </>
    
  )
}

export default Categories