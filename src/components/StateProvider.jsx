//setup 
//We Need This to track the basket
import React , {createContext , useContext , useReducer  } from "react";



//Is The Data Layer
export const StateContext = createContext();

//Build A Provider
export const StateProvider = ({reducer , initialState , children }) =>(
    <StateContext.Provider value={useReducer(reducer , initialState)}>
        {children}
    </StateContext.Provider>
)

// How we use it
export const useStateValue = () => useContext(StateContext) ;