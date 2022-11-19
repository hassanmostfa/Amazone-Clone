import React from 'react'
import { useStateValue } from './StateProvider'

function CheckoutProduct({id,title,price,rating,image}) {
    const [{ } , dispatch] = useStateValue();
    const removeFromBasket = ()=>{
        dispatch({
            type : "REMOVE_FROM_BASKET",
            id:id
        })
    }
    return (
    <div className='checkoutProduct'>
        <img className='checkoutProduct__image' src={image} alt="" />
        <div className="checkoutProduct__info">
            <p className="checkoutProduct__title">{title}</p>
            <p className="checkoutProduct__price">
                <strong>Price : </strong>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="checkoutProduct__rating">
                {Array(rating)
                    .fill()
                    .map((_) => {
                        return(
                            <p><i className="fa-solid fa-star"></i></p>
                        )
                    })}
            </div>
            <button onClick={removeFromBasket}>Remove From Basket</button>
        </div>
    </div>
)
}

export default CheckoutProduct