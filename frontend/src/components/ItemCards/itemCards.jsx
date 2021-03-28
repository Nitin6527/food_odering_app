import React, { useState, useEffect } from 'react';
import { ItemCard, ItemInfo, CardItemImage, Overlay } from "../../styled-components/ItemCard/item-card";
import { ItemCardButton } from "../../styled-components/button/button";

const Images = [
    {
        name: 'Lorem Ipsum Dolor Sit Amet',
        img: "https://images.unsplash.com/photo-1574126154517-d1e0d89ef734?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cGl6emF8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 45,
        item: 'Pizza'
    },
    {
        name: 'Lorem Ipsum',
        img: "https://images.unsplash.com/photo-1596956470007-2bf6095e7e16?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTZ8fGJ1cmdlcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 59,
        item: 'Burgers'
    },
    {
        name: 'Lorem Ipsum Dolor Sit Amet',
        img: "https://images.unsplash.com/photo-1551024601-bec78aea704b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9udXR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 38,
        item: 'Donuts'
    }
]

const ItemCards = () => {
    const [cardData, SetCardData] = useState(Images || []);

    return (
        <React.Fragment>
            {cardData.length && cardData.map((data, index) => {
                return (
                    <ItemCard key={index}>
                        <CardItemImage>
                            <img src={data.img} alt="Item-image" />
                            <div>
                                <Overlay>
                                    <div className="text">{data.item}</div>
                                </Overlay>
                            </div>
                        </CardItemImage>
                        <ItemInfo>
                            <div>
                                <h4>{data.name}</h4>
                            </div>
                            <ItemCardButton>${data.price}</ItemCardButton>
                        </ItemInfo>
                    </ItemCard>)
            })}

        </React.Fragment>
    )
}

export default ItemCards
