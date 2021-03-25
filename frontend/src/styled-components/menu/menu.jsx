import styled from 'styled-components';
import { ItemCardButton } from '../button/button';


export const MenuHeading = styled.h1`
  font-family: "Lora", Georgia, serif;
  font-size:35px;
  color: #404044;
  font-size: 44px;
  text-align:center;
  font-weight: 400;
  line-height: 1.4;
  margin-bottom:50px;
`;

export const MenuView = styled.div`
position:absolute;
border: 2px solid #c8c6a7;
padding: 10px;
display:flex;
font-size: 30px;
color: #c8c6a7;
right:200px;
`;

export const Icon = styled.div`
&:hover{
  cursor:pointer;
  fill:#f58634;
}
`;

export const MenuHeader = styled.div`
position:relative;
  display:flex;
  align-items:center;
  justify-content:center;
`;

export const MenuSection = styled.div`
  width: 100%;
  display: flex;
  justify-content:center;
  align-items:center;
  text-align:center;
  margin: 0 auto;
  padding-bottom: 200px;
  h1{
    font-family: "Lora", Georgia, serif;
    color: #404044;
    font-size: 44px;
    font-weight: 400;
    line-height: 1.4;
    margin-bottom:50px;
  }
`;

export const Price = styled(ItemCardButton)`
position:absolute;
top:10px;
left:10px;
`;

export const MenuBox = styled.div`
  overflow: hidden;
  height: 410px;
  display: block;
  margin:0 20px;
  cursor: pointer;
  width: 23%;
  position: relative;
  z-index: 0;
  background: #f7f7f7;
  &:hover{
    ${Price}{
      opacity: 1;
      border:2px solid #f58634;
      background-color: #f58634;
      color: white;
    }
  }
`;

export const Wrap = styled.div`
  position: relative;
  transition: 0.2s;
  &:hover{
    margin-top: -70px;
  }
`;

export const ImageBox = styled.div`
  background-image: url(${props => props.img});
  height: 400px;
  z-index: -1;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  position: relative;
 
`;

export const MenuDesc = styled.div`
  display: flex;
  justify-content: center;
  h3{
    font-family: "Lora", Georgia, serif;
    font-size:25px;
    font-weight: 400;
    color: rgba(48, 48, 48, 0.75);
    text-decoration: none;
  }
`;



export const MenuRow = styled.div`
`;