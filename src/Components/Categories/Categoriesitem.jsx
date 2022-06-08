import styled from 'styled-components'
const Container=styled.div`
 flex: 1;
 height: 80vh;
 margin: 5px;
 position: relative;
`
const Image=styled.img`
    width: 100%;
    height: 100%;
    justify-content: cover;
    object-fit: cover;
`;
const Info=styled.div`
    position: absolute;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const Title=styled.h1`
    color: white;
    font-weight:600;
    font-size: 50px;
`;
const Button=styled.button`
    width: 160px;
    padding: 10px;
    cursor: pointer;
    font-weight: bold;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border: none;
    padding: 10px;
    font-weight: 600;
`
const Categoriesitem = ({item}) => {
  return (
   <>
   <Container>
       <Image src={item.img}></Image>
        <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
        </Info>
   </Container>
   </>
  )
}

export default Categoriesitem