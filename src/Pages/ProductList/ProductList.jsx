import styled from 'styled-components'
import Announcment from '../../Components/Announcment/Announcment'
import Navbar from '../../Components/Navbar/Navbar'
import Products from '../../Components/Products/Products'
import Newsletter from '../../Components/Newsletter/Newsletter'
import Footer from '../../Components/Footer/Footer';
import { mobile } from '../../responsive'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
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
const Filtertext=styled.h3`
${mobile({display:"none"})}
`;
const Select=styled.select`
padding: 7px;
margin-left: 10px;
${mobile({marginLeft:"10px",fontSize:"10px"})}
`;
const Option=styled.option`
`;
const ProductList = () => {
  const location=useLocation();
  const cat=location.pathname.split("/")[2];
  const [filters,setFilters]=useState({});
  const [sort,setSort]=useState("newest");
  const handleFilter=(e)=>{
    const value=e.target.value;
    setFilters({
      ...filters,
      [e.target.name]:value,
    });
}
  return (
    <>
    <Navbar/>
    <Announcment/>
    <Container>
    <Title>{cat}</Title>
    <Filterbox>
        <Filter>
            <Filtertext>Filter Products</Filtertext>
                <Select name='color' onChange={handleFilter}>
                    <Option selected disabled>Color</Option>
                    <Option>White</Option>
                    <Option>Black</Option>
                    <Option>Blue</Option>
                    <Option>Green</Option>
                    <Option>Yellow</Option>
                    <Option>Red</Option>
                </Select>
                <Select name='size' onChange={handleFilter}>
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
        <Select onChange={e=>setSort(e.target.value)}>
            <Option value="newest" selected>Newest</Option>
            <Option value="asc">Price(asc.)</Option>
            <Option value="desc">Price(desc.)</Option>
          </Select>
        </Filter>
    </Filterbox>
    <Products cat={cat} filters={filters} sort={sort}/>
    </Container>
    <Newsletter/>
    <Footer/>
    </>
  )
}

export default ProductList