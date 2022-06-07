import styled from "styled-components";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Badge } from "@mui/material";
const Container=styled.div`
`;
const Wrapper=styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
    align-items: center;

`;
const Left=styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
const Center=styled.div`
    font-weight:bolder;
    font-size: 40px;
    flex: 1;
`;
const Right=styled.div`
    flex: 1;
    display: flex;
    justify-content:flex-end;

`
const Language=styled.span`
    margin-right:10px;
`
const Input=styled.input`
    border: none;
    outline: none;
    height: 100%;
`;
const Searchbox=styled.div`
    display: flex;
    align-items: center;
    border: 1px black solid;
`;
const MenuItem=styled.div`
    margin-left: 25px;
    cursor: pointer;
`
const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
              <Language>EN</Language>
              <Searchbox>
                <Input placeholder="Search"></Input>
                <SearchIcon style={{cursor:"pointer"}}/>
              </Searchbox>
            </Left>
            <Center>ByKro.</Center>
            <Right>
                <MenuItem>Register</MenuItem>
                <MenuItem>SIGN IN</MenuItem>
                <MenuItem>
                <Badge badgeContent={4} color="primary">
                   <ShoppingCartOutlinedIcon/>
                 </Badge>
                </MenuItem>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar;