import React from 'react';
import ItemCards from "../ItemCards/itemCards";
import { SpecialSection } from "../../styled-components/special/special";
import { SquareButton } from '../../styled-components/button/button';

const Special = () => {
    return (
        <SpecialSection>
            <div>
                <h1>Our Delicious Specialties</h1>
                <SquareButton Special >View The Menu</SquareButton>
            </div>
            <div>
                <ItemCards />
            </div>
        </SpecialSection>
    )
}

export default Special
