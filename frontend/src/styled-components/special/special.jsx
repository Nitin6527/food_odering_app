import styled, { css } from 'styled-components';
import { SquareButton } from '../button/button';

export const SpecialSection = styled.section`
position: relative;
padding-bottom: 100px; 
margin: 0px 0;
width: 100%;
display:flex;
flex-direction:column;
justify-content:center;
div:first-child{
    display:flex;
    justify-content:center;
    align-items:center;
    ${SquareButton}{
       position: absolute;
       right: 200px;
    }
}
div{
    display:flex;
    justify-content:center;
}
 h1{
    font-family: "Lora", Georgia, serif;
    font-size:35px;
    color: #404044;
    font-size: 44px;
    font-weight: 400;
    line-height: 1.4;
    margin-bottom:50px;
 }
`;

