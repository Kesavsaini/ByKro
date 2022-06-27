import styled from "styled-components";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Badge } from "@mui/material";
import Logoimg from "./Logo.png";
import {mobile} from "../../responsive";
import { useSelector } from "react-redux/es/hooks/useSelector";
import {Link, Navigate,useNavigate} from "react-router-dom";
import { useState } from "react";
const Container=styled.div`
`;
const Wrapper=styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
    align-items: center;
    ${mobile({padding:"5px 5px"})};
    
`;
const Left=styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
const Center=styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight:bolder;
    font-size: 40px;
    flex: 1;
`;
const Logo=styled.img`
width: 120px;
height: 40px;
${mobile({width:"60px",height:"20px"})};
`;
const Right=styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content:flex-end;
    ${mobile({flex:2,fontSize:"10px",justifyContent:"center"})};
`
const Language=styled.span`
    margin-right:10px;
    ${mobile({display:"none"})};
   
`
const Input=styled.input`
    border: none;
    outline: none;
    height: 100%;
    ${mobile({width:"90%"})};
`;
const Searchbox=styled.div`
    display: flex;
    align-items: center;
    border: 1px black solid;
    ${mobile({width:"90px"})};
`;
const MenuItem=styled.div`
    margin-left: 25px;
    cursor: pointer;
`
const Navbar = () => {
    const navigate = useNavigate();
    const [searchtext,setSearchtext]=useState("");
    const handleSearch=()=>{
            navigate(`/products/${searchtext}`);
    }
    const cartNumber=useSelector(state=>state.cart.quantity);
  return (
    <Container>
        <Wrapper>
            <Left>
              <Language>EN</Language>
              <Searchbox>
                <Input placeholder="Search" onChange={(e)=>setSearchtext(e.target.value)}></Input>
                <SearchIcon style={{cursor:"pointer"}} onClick={handleSearch}/>
              </Searchbox>
            </Left>
            <Center> 
                <Logo src={Logoimg}/>
            </Center>
            <Right>
               <Link to="/signup" style={{color:"black",textDecoration:"none"}}>
                <MenuItem>Register</MenuItem>
                </Link>
                <Link to="/login" style={{color:"black",textDecoration:"none"}}>
                <MenuItem>SIGN IN</MenuItem>
                </Link>
                <Link to="/cart" style={{color:"black"}}>
                <MenuItem>
                <Badge badgeContent={cartNumber} color="primary">
                   <ShoppingCartOutlinedIcon/>
                 </Badge>
                </MenuItem>
                </Link>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar;