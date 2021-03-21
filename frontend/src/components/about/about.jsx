import React from 'react';
import { Container, AboutSection, Info, Image } from '../../styled-components/about/about';
import { SquareButton } from '../../styled-components/button/button';

const About = () => {
    return (
        <Container>
            <AboutSection>
                <Image><img src="https://images.unsplash.com/photo-1571805529673-0f56b922b359?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8Y2hlZnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="about_us_image" /></Image>
                <Info>
                    <p>OUR STORY</p>
                    <h1>Welcome</h1>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.<br /><br />

                        A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                    <SquareButton>Learn More About Us</SquareButton>
                </Info>
            </AboutSection>

        </Container>
    )
}

export default About
