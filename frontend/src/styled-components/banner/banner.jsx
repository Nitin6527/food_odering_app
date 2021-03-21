import styled, { css } from 'styled-components';

export const BannerWrap = styled.section`
position: relative;
 width: 100%;
 background-image: linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('https://images.unsplash.com/photo-1610614991969-ceeb293e7ff5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1049&q=80');
 background-position: center;
 background-repeat: no-repeat;
 background-size: cover;

`;

export const BannerLeftBox = styled.div`
  padding: 200px 200px;
  line-height: 20px;
  h3{
      color: white;
      font-weight: 300;
  }
  h1{
      color: white;
      font-weight: 700;
      font-size: 60px;
  }
  p{
    color: white;
    font-weight: 400;
  }
`;

export const BannerDiscription = styled.div`
 
`;

export const BannerRightBottom = styled.div`
  position: absolute;
  height: 500px;
  width: 400px;
  right: 50px;
  border-radius: 10px;
  bottom: -60px;
  z-index: 100;
  background-color: #fafafa;
  box-shadow: 0 0 30px rgba(0,0,0,0.2);
`;