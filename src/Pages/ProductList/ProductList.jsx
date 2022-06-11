import styled from 'styled-components'
import Announcment from '../../Components/Announcment/Announcment'
import Navbar from '../../Components/Navbar/Navbar'
import Products from '../../Components/Products/Products'
import Newsletter from '../../Components/Newsletter/Newsletter'
import Footer from '../../Components/Footer/Footer';
const Container=styled.div``;
const Title=styled.h1`
margin: 10px;
`;
const Filterbox=styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`;
const Filter=styled.div`
display:flex;
align-items: center;
margin: 10px;
`;
const Filtertext=styled.h3``;
const Select=styled.select`
padding: 7px;
margin-left: 10px;
`;
const Option=styled.option``;
const ProductList = () => {
  return (
    <>
    <Navbar/>
    <Announcment/>
    <Container>
    <Title>Shirts</Title>
    <Filterbox>
        <Filter>
            <Filtertext>Filter Products</Filtertext>
                <Select>
                    <Option selected disabled>Color</Option>
                    <Option>White</Option>
                    <Option>Black</Option>
                    <Option>Blue</Option>
                    <Option>Green</Option>
                    <Option>Yellow</Option>
                </Select>
                <Select>
                    <Option selected disabled>Size</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>X</Option>
                    <Option>XL</Option>
                    <Option>XXL</Option>
                </Select>
        </Filter>
        <Filter>
        <Filtertext>Sort Products</Filtertext>
        <Select>
            <Option selected>Newest</Option>
            <Option>Price(asc.)</Option>
            <Option>Price(desc.)</Option>
          </Select>
        </Filter>
    </Filterbox>
    <Products/>
    </Container>
    <Newsletter/>
    <Footer/>
    </>
  )
}

export default ProductList