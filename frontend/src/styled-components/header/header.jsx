import styled, { css } from 'styled-components';

const WhiteNav = css`
color: white;
width: 100%;
background-color: transparent;
transition: all 0.5s ease-in-out;
`;

const BlackNav = css`
color: #b8b8b8;
width: 100%;
background-color: white;
transition: all 0.5s ease-in-out;
box-shadow: 0 0 30px rgba(0,0,0,0.15);
`;

const ToggleNav = props => {
    if (props.scrolled) {
        return BlackNav;
    }
    return WhiteNav;
};

export const HeaderStyledComponent = styled.div`
 position: fixed;
 z-index: 9999;
 top: -1px;
 ${ToggleNav}
`;

export const HeaderContent = styled.div`
 width: 100%;
 display: flex;
 justify-content:space-between;
`;

export const HeaderLogo = styled.div`
margin-left: 100px;
h1{
    color: #f58634;
}
`;

export const HeaderLeft = styled.div`
 display: flex;
 align-items: center;
 margin-right: 100px;
ul{
 display: flex;
 justify-content:space-between;
 align-items: center;
 li{
    margin: 0 20px;
    list-style-type: none;
    font-size: 18px;
    a{
    color: ${props => props.scrolled ? 'black' : '#ffffff'};
    text-decoration: none;
    letter-spacing: .2em;
    display: inline-block;
    padding: 0 10px;
    transition: all .5s ease-in-out;
    &:after{
    content: '';
    display: block;
    width: 0;
    height: 1px;
    background: #f58634;
    transition: width .5s;
    }
    &:hover{
        color: #f58634;
    }
    &:hover::after{
        width: 100%;
    }
    }
 }
}
`;