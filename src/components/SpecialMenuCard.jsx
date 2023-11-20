import React from 'react'
import { Card } from 'react-bootstrap'
import Product1 from "../assets/specialBurgerP3.png";
const SpecialMenuCard = () => {
    return (
        <>
            <Card className='border-0'>
                <img src={Product1} alt="special product" className='img-fluid' />
            </Card>
        </>
    )
}

export default SpecialMenuCard