import React, { useState } from 'react'
import { MdViewComfy } from 'react-icons/md';
import { MdViewList } from 'react-icons/md';
import { MenuHeading, Price, IconRow, IconGrid, MenuHeader, MenuSection, MenuBox, ImageBox, Wrap, MenuRow, MenuView, MenuDesc } from '../../styled-components/menu/menu'
import { ButtonStyledComponent } from '../../styled-components/button/button';

const data = [
    {
        item: 1,
        img: 'https://images.unsplash.com/photo-1607116176195-b81b1f41f536?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZCUyMGFuZCUyMGRyaW5rfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        name: 'Beef',
        price: 107
    },
    {
        item: 1,
        img: 'https://images.unsplash.com/photo-1546549032-9571cd6b27df?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cGFzdGF8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        name: 'Pasta',
        price: 50
    },
    {
        item: 1,
        img: 'https://images.unsplash.com/photo-1587606381492-7586d66a04a5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDB8fGNoaWNrZW4lMjBmb29kfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        name: 'Chicken',
        price: 90
    }
]


const Menu = () => {
    const [showGrid, setShowGrid] = useState(true);
    const [showRows, setShowRows] = useState(false);
    const [isGridActive, setGridIsActive] = useState(true);
    const [isRowActive, setRowIsActive] = useState(false);
    const [menuItems, setMenuItems] = useState(data || []);

    const handleGrid = () => {
        setShowGrid(true);
        setShowRows(false);
        setGridIsActive(true)
        setRowIsActive(false)
    }

    const handleRow = () => {
        setShowGrid(false);
        setShowRows(true);
        setRowIsActive(true)
        setGridIsActive(false)
    }

    return (
        <React.Fragment>
            <MenuHeader>
                <MenuHeading>Menu</MenuHeading>
                <MenuView>
                    <IconGrid as={MdViewComfy} isgridactive={isGridActive} onClick={handleGrid} />
                    <IconRow as={MdViewList} isrowactive={isRowActive} onClick={handleRow} />
                </MenuView>
            </MenuHeader>
            <MenuSection showRows={showRows}>
                {menuItems.length > 0 && menuItems.map((item, index) => {
                    return (
                        <React.Fragment key={index}>
                            {showGrid &&
                                <MenuBox>
                                    <Wrap>
                                        <ImageBox img={item.img} />
                                    </Wrap>
                                    <MenuDesc>
                                        <h3>{item.name}</h3>
                                    </MenuDesc>
                                    <Price>${item.price}
                                    </Price>
                                </MenuBox>
                            }
                            {showRows && (<MenuRow>
                                <img src={item.img} height="80px" width="80px" />
                                <h5>{item.name}<span>Meat / Potatoes / Rice / Tomatoe</span></h5>
                                <h3>${item.price}</h3>

                            </MenuRow>)
                            }
                        </React.Fragment>
                    )
                })}
            </MenuSection>
            <ButtonStyledComponent menuButton>Book A Table</ButtonStyledComponent>
        </React.Fragment>
    )
}

export default Menu

