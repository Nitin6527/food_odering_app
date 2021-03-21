import React, { useEffect, useState } from 'react'
import { HeaderStyledComponent, HeaderContent, HeaderLeft, HeaderLogo } from '../../styled-components/header/header';
const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 200) {
            setScrolled(true);
        }
        else {
            setScrolled(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    })

    let navbarClasses = ['navbar'];
    if (scrolled) {
        navbarClasses.push('scrolled');
    }
    return (
        <HeaderStyledComponent scrolled={scrolled}>
            <HeaderContent >
                <HeaderLogo>
                    <h1>Food</h1>
                </HeaderLogo>
                <HeaderLeft scrolled={scrolled}>
                    <ul>
                        <li><a href="default.asp">Home</a></li>
                        <li><a href="news.asp">News</a></li>
                        <li><a href="contact.asp">Contact</a></li>
                        <li><a href="about.asp">About</a></li>
                    </ul>
                </HeaderLeft>
            </HeaderContent>
        </HeaderStyledComponent>
    )
}

export default Header
