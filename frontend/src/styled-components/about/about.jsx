import styled, { css } from 'styled-components';

export const Container = styled.section`
  width:100%;
  justify-content:center;
  align-items:center;
`;

export const AboutSection = styled.div`
  display:flex;
  flex-direction: row-reverse;
  padding:80px;
`;

export const Info = styled.div`
  display:flex;
  flex-direction:column;
  padding:0 100px;
  h1{
      font-family: "Playfair Display", serif;
      color: #433d3c;
      font-weight:100;
      font-size: 50px;
      margin:0;
  }
  p:first-child{
    letter-spacing: 5px;
    font-family: "Raleway", sans-serif;
    margin-bottom:0;
  }
  p{
    font-family: "Raleway", sans-serif;
    font-size: 16px;
    line-height: 1.6;
    letter-spacing: 0.5px;
    color: #b8b8b8;
  }
`;

export const Image = styled.div`
  display:flex;
  width:100%;
  img{
    border-radius:5px;
    border-style: none;
    &:hover{
      cursor: pointer;
    }
  }
`;