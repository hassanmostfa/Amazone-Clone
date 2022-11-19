export const getBasketTotal = (basket)=>
basket?.reduce((amount , item) => item.price + amount,0);
export  const initialState = {
    basket: [],
    user: null 
};
const reducer = (state , action) => {
    
    console.log(action , state);
    switch (action.type) {
        case "ADD_TO_BASKET":
            // logic to add item in the basket
            return {
            ...state,
                basket: [...state.basket , action.item]
            }
        case "REMOVE_FROM_BASKET":
            // logic to remove item in the basket  
            let newBasket = [...state.basket];
            const index = state.basket.findIndex((basketItem)=>basketItem.id === action.id);
                //remove items
                newBasket.splice(index , 1);
                console.log(newBasket);
            return {...state , basket: newBasket };
        default:
        return state ;
        }
};
export default reducer;