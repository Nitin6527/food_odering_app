import React from 'react';
import ItemCards from "../ItemCards/itemCards";
import { SpecialSection } from "../../styled-components/special/special";
import { SquareButton } from '../../styled-components/button/button';

const Special = () => {
    return (
        <SpecialSection>
            <h1>Special<span><SquareButton Special >View The Menu</SquareButton></span></h1>
            <div>
                <ItemCards />
            </div>
        </SpecialSection>
    )
}

export default Special
