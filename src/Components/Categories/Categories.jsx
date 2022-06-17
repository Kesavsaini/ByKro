import styled from "styled-components";
import Categoriesitem from "./Categoriesitem";
import { categories } from "../../dummydata";
import {mobile} from "../../responsive"
const Container=styled.div`
display: flex;
margin: 5px;
padding: 5px;
${mobile({padding:"0px",margin:"0px",flexDirection:"column"})};
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