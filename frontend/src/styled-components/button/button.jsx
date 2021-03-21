import styled, { css } from 'styled-components';

export const ButtonStyledComponent = styled.button`
   color: white;
   margin-top: 30px;
   background: rgba(255, 255, 255, 0.1);
   border-radius: 50px;
   padding: 15px 20px;
   border-color: #f58634;
   border: none;
   cursor:pointer;
   font-weight: 600;
   transition: all .5s ease-in-out;
   &:hover{
    opacity: 1;
    background-color: #f58634;
    transform: scale(1.03); 
   }
   &:focus{
    outline:none;
   }
`;

export const SquareButton = styled.button`
   position:${props => `${props.Special ? 'absolute' : 'none'}`};
   right:${props => `${props.Special ? '200px' : 'none'}`};
   top:${props => `${props.Special ? '0px' : 'none'}`};
   color: #c8c6a7;
   display:flex;
   justify-content:center;
   font-size: 18px;
   margin-top: 30px;
   background: white;
   padding: 15px 20px;
   border-color: #c8c6a7;
   border: 2px solid #c8c6a7;
   cursor:pointer;
   font-weight: 100;
   width:${props => `${props.Special ? '150px' : '250px'}`};
   white-space:pre;
   font-family: "Playfair Display", serif;
   transition: all .2s ease-in-out;
   &:hover{
    opacity: 1;
    border:2px solid #f58634;
    background-color: #f58634;
    color: white;
   }
   &:focus{
    outline:none;
   }
`;

export const ItemCardButton = styled.button`
   position: absolute;
   right:-20px;
   border-radius:50%;
   height:60px;
   width:60px;
   color:white;
   background-color: #fafafa;
   border: none;
   background-color: #333333;
   cursor:pointer;
   font-weight: 600;
   font-size: 18px;
   white-space:pre;
   transition: all .2s ease-in-out;
   &:hover{
    opacity: 1;
    border:2px solid #f58634;
    background-color: #f58634;
    color: white;
   }
   &:focus{
    outline:none;
   }
`;

