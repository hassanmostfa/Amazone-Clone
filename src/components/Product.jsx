import React from 'react'
import {useStateValue} from './StateProvider';


function Product({id,title,price,rating,image}) {
    const [{ },dispatch] = useStateValue();
    const addToBasket = ()=> {
            dispatch({
            type:"ADD_TO_BASKET" ,
            item: {
                id :id ,
                title: title,
                image:image,
                price : price,
                rating:rating,
            }
        })
    }; 
    return (
    <div className='product'>
        <div className="product__info">
                <p>{title}</p>
            <p className="product__price">
                <strong>Price : </strong>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="product__rating">
                {Array(rating)
                    .fill()
                    .map((_) => {
                        return(
                            <p><i className="fa-solid fa-star"></i></p>
                        )
                    })}
            </div>
        </div>
        <img src={image} alt={title} />
        <button onClick={addToBasket}>Add To Basket</button>
    </div>
    )
}

export default Product ;