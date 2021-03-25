import React, { useState } from 'react'
import { MenuHeading, Price, Icon, MenuHeader, MenuSection, MenuBox, ImageBox, Wrap, MenuRow, MenuView, MenuDesc } from '../../styled-components/menu/menu'
import { MdViewComfy } from 'react-icons/md';
import { MdViewList } from 'react-icons/md';

const data = [
    {
        item: 1,
        img: 'https://images.unsplash.com/photo-1607116176195-b81b1f41f536?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZCUyMGFuZCUyMGRyaW5rfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        name: 'Beef'
    },
    {
        item: 1,
        img: 'https://images.unsplash.com/photo-1546549032-9571cd6b27df?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cGFzdGF8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        name: 'Pasta'
    },
    {
        item: 1,
        img: 'https://images.unsplash.com/photo-1587606381492-7586d66a04a5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDB8fGNoaWNrZW4lMjBmb29kfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        name: 'Chicken'
    }
]


const Menu = () => {
    const [toggle, setToggleButton] = useState(false);
    const [menuItems, setMenuItems] = useState(data || []);
    return (
        <React.Fragment>
            <MenuHeader>
                <MenuHeading>Menu</MenuHeading>
                <MenuView>
                    <Icon as={MdViewComfy} />
                    <Icon as={MdViewList} />
                </MenuView>
            </MenuHeader>
            <MenuSection>
                {menuItems.length > 0 && menuItems.map((item, index) => {
                    return (
                        <MenuBox key={index}>
                            <Wrap>
                                <ImageBox img={item.img} />
                            </Wrap>
                            <MenuDesc>
                                <h3>{item.name}</h3>
                            </MenuDesc>
                            <Price>$57
                            </Price>
                        </MenuBox>
                    )
                })}
            </MenuSection>
        </React.Fragment>
    )
}

export default Menu

