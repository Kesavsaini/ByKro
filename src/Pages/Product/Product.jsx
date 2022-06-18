import { Add, Remove } from '@mui/icons-material';
import styled from 'styled-components'
import Announcment from '../../Components/Announcment/Announcment'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import Newsletter from '../../Components/Newsletter/Newsletter';
import { mobile } from '../../responsive';
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
const Product = () => {
  return (
    <>
    <Navbar/>
    <Announcment/>
     <Wrapper>
        <Left>
           <Image src='https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZmFzaGlvbiUyMG1vZGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'/>
        </Left>
        <Right>
            <Title>Rozen Jackate</Title>
            <Desc> 
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat perferendis eaque tenetur quam fugiat obcaecati perspiciatis vitae. Incidunt ipsum cum obcaecati quasi eius accusantium, ducimus dignissimos nam, rerum maxime reiciendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, nulla?
            </Desc>
            <Price>₹4000/-</Price>
            <Filtercontainer>
                <Filter>
                    <FilterTittle>Color</FilterTittle>
                    <FilterColor color="Yellow"></FilterColor>
                    <FilterColor color="Black"></FilterColor>
                    <FilterColor color="Blue"></FilterColor>
                </Filter>
                <Filter>
                <FilterTittle>Size</FilterTittle>
                <Select>
                    <Option selected disabled>Size</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>X</Option>
                    <Option>XL</Option>
                    <Option>XXL</Option>
                </Select>
                </Filter>
            </Filtercontainer>
            <Addcontainer>
                <Additem>
                    <Remove/>
                     <Addnumber>1</Addnumber>
                    <Add/>
                </Additem>
                <AddtoCart>ADD TO CART</AddtoCart>
            </Addcontainer>
        </Right>
     </Wrapper>
    <Newsletter/>
    <Footer/>
    </>
  )
}

export default Product