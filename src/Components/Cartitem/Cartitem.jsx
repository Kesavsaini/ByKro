import { Add, Remove } from '@mui/icons-material';
import styled from 'styled-components';
const Container=styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width:100%;
margin: 10px;
`;
const Left=styled.div`
height: 200px;
display: flex;
align-items: center;
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
`;
const Count=styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-top: 20px;
`;
const Number=styled.h2`
margin:0px 5px;
font-weight:200;
`
const Price=styled.h1`
font-weight:300;
margin-top: 20px;
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
            <Info><b>Product: </b>{item.name}</Info>
            <Info><b>ID: </b>{item.id}</Info>
             <Color color={item.color}></Color>
            <Info><b>Size </b>{item.size}</Info>
          </Details>
        </Left>
        <Right>
            <Count>
                <Add style={{fontSize:"30px"}}/>
                <Number>{item.count}</Number>
                <Remove style={{fontSize:"30px"}}/>
            </Count>
            <Price>₹ {item.price}</Price>
        </Right>
    </Container>
    </>
  )
}

export default Cartitem