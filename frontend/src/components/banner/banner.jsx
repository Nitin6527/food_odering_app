import React from 'react'
import { BannerWrap, BannerLeftBox, BannerRightBottom } from '../../styled-components/banner/banner';
import { ButtonStyledComponent } from '../../styled-components/button/button';

const Banner = () => {
    return (
        <BannerWrap>
            <BannerLeftBox>
                <h3>WIDE OPTIONS OF CHOICE</h3>
                <h1>Delicious <span style={{ color: "#f58634" }}>Receipes</span></h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temp<br />
                or incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
                <ButtonStyledComponent>CHECK OUR MENU</ButtonStyledComponent>
            </BannerLeftBox>
            <BannerRightBottom />
        </BannerWrap>
    )
}

export default Banner
