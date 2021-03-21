import styled, { css } from 'styled-components';

export const ItemCard = styled.div`
position: relative;
 width: 250px;
 height: 380px;
 border-radius: 20px;
 margin: 0 80px;
 background-color: white;
 box-shadow: 0 0 20px rgba(0,0,0,0.2);
`;

export const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0,0,0,0.6);
  overflow: hidden;
  width: 100%;
  height: 0;
  transition: .5s ease;
  div{
    color: white;
    font-size: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;
  }
`;

export const CardItemImage = styled.div`
position: absolute;
right:-40px;
top: 30px;
height:200px;
width: 200px;
z-index:20px;
background-color:white;
border-radius:50%;
overflow:hidden;
img{
    height:100%;
    width: 100%;
}
&:hover {
    cursor: pointer;
    div{
    ${Overlay}{
      height: 100%;
    }
}
}
`;

export const ItemInfo = styled.div`
width:100%;
position:absolute;
bottom:30px;
display:flex;
align-items: center;
color: #433d3c;
white-space:pre-wrap;
cursor: pointer;
div{
    padding:10px;
}
h4{
   padding:0 10px;
}
&:hover{
    h4{
   color: #f58634;
   white-space:pre-wrap;
   }
}
`;

