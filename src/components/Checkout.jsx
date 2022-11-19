import React from 'react'
import { useStateValue } from './StateProvider';
import Header from './Header';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

function Checkout() {
    const [{basket}] = useStateValue() ;
    return (
    <div>
    <Header/>
        <div className="checkout">
        <div className="checkout__left">
            <img src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/Consumer_Electronics/XCM_Manual_1471173_5003474_1500x200_2X.jpg" alt="" className='checkout__ad' />
            {basket?.length === 0 ?(
                <div>
                    <h2>Your Shopping basket is empty </h2>
                    <p>
                        The price and availability of items at amazon.eg are subject to change.
                        The Cart is a temporary place to store a list of your items and reflects each item's most recent price.
                    </p>
                </div>
                ) : (
                <div>
                    <h2 className='checkout__title'>Your Shopping Basket </h2>
                    {basket.map( item => {
                            return(
                                <CheckoutProduct
                                id = {item.id}
                                title = {item.title}
                                image = {item.image}
                                price = {item.price}
                                rating = {item.rating}
                                />
                        )  
                    })}
                </div>
            )}
        </div>
        {basket.length > 0 && (
            <div className="checkout__right">
                <h1><Subtotal/></h1>
                
            </div>
        )}
        </div>
    </div>
    
    )
}

export default Checkout ;