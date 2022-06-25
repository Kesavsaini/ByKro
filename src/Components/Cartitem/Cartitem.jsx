import { Add, Remove } from '@mui/icons-material';
import styled from 'styled-components';
import { mobile } from '../../responsive';
const Container=styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width:100%;
margin: 10px;
${mobile({margin:"2px"})};
`;
const Left=styled.div`
height: 200px;
display: flex;
align-items: center;
${mobile({marginRight:"20px"})};
`;
const Imagebox=styled.div`
height: 100%;
width: 200px;
`
const Image=styled.img`
width: 100%;
height: 100%;
`;
const Details=styled.div`
margin-left: 50px;
display: flex;
flex-direction: column;
${mobile({fontSize:"10px",marginLeft:"15px"})};
`;
const Info=styled.div`
margin:10px 0px;
`;
const Color=styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
margin:10px 0px;
background-color: ${props=>props.color};
`;
const Right=styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
${mobile({fontSize:"15px"})};
`;
const Count=styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-top: 20px;
${mobile({marginTop:"0px"})};
`;
const Number=styled.h2`
margin:0px 5px;
font-weight:200;
`
const Price=styled.h1`
font-weight:300;
margin-top: 20px;
${mobile({fontSize:"20px"})};
${mobile({marginTop:"0px"})};
`;
const Cartitem = ({item}) => {
  return (
    <>
    <Container>
        <Left>
            <Imagebox>
          <Image src={item.img}/>
          </Imagebox>
          <Details>
            <Info><b>Product: </b>{item.title}</Info>
            <Info><b>ID: </b>{item._id}</Info>
             <Color color={item.productcolor}></Color>
            <Info><b>Size </b>{item.productsize}</Info>
          </Details>
        </Left>
        <Right>
            <Count>
                <Add style={{fontSize:"30px"}}/>
                <Number>{item.quant}</Number>
                <Remove style={{fontSize:"30px"}}/>
            </Count>
            <Price>₹{item.price}</Price>
        </Right>
    </Container>
    </>
  )
}

export default Cartitem