import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import { useState } from "react";
import styled from "styled-components";
import { slidedata } from "../../dummydata";

const Container=styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
    display: flex;
    align-items: center;
    overflow: hidden;
`;

const Wrapper=styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    transition:1.2s all ease;
    transform: translateX(${props=>props.slideIndex*-100}vw);
`
const Slide=styled.div`
    width: 100vw;
    height: 100vh;
    background-color:${props=>props.bg};
    display: flex;
`;
const ImageBox=styled.div`
    flex: 1;
    width: 50vw;
`;
const InfoBox=styled.div`
    flex: 1;
    width: 50vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding:10px;
`;
const Arrow=styled.div`
    background-color: white;
    height: 40px;
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    position: absolute;
    left:${props=>props.direction==="left" && "20x"};
    right:${props=>props.direction==="right" && "20px"};
    cursor: pointer;
    z-index: 2;
`
const Image=styled.img`
    width: 100%;
    height: 100%;
`;
const Title=styled.div`
    font-size: 100px;
    font-weight: bold;
    
    margin: 15px;
`;
const Desc=styled.div`
word-spacing: 4px;
letter-spacing: 3px;
font-weight: bold;
margin: 15px;
`;
const Button=styled.button`
    width: 160px;
    padding: 10px;
    cursor: pointer;
    font-weight: bold;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border: none;
    margin: 5px;
`;
const Slider = () => {
    const [slideIndex,setSlideIndex]=useState(0);
    const handleClick=(direction)=>{
        if(direction==="right"){
            setSlideIndex(slideIndex<slidedata.length-1?slideIndex+1:0);
        }else{
            setSlideIndex(slideIndex?slideIndex-1:slidedata.length-1);
        }
    }
  return (
    <>
     <Container>
     <Arrow direction="left" onClick={()=>handleClick("left")}>
            <ArrowLeft style={{fontSize:"30px"}} />
         </Arrow>
      <Wrapper slideIndex={slideIndex}>
        
         {slidedata.map((item)=>{
             return(
                <Slide bg={item.bg}>
               <ImageBox>
                <Image src={item.img}/>
               </ImageBox>
               <InfoBox>
                <Title>{item.title}</Title>
               <Desc>{item.desc}</Desc>
               <Button>SHOP NOW</Button>
               </InfoBox>
           </Slide>
               );
         })}
         </Wrapper>
         <Arrow direction="right" onClick={()=>handleClick("right")}>
         <ArrowRight style={{fontSize:"30px"}}/>
         </Arrow>
     </Container>
    </>
  )
}

export default Slider