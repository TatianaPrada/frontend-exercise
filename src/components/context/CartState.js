import {userReducer} from 'react'
import CartContext from './CartContext'
import CartReducer from './CartReducer'
import {ADD_ELEMENT, REMOVE_ELEMENT} from './Types'

const CartState = ({children}) => {
    const initialState = {
        cartElements: []
    }
    const [state, dispatch] = userReducer(CartReducer, initialState)

    const addElement = (element) => {
        dispatch({type: ADD_ELEMENT, payload: element})
    }
    const removeElement = (id) => {
        dispatch({type: REMOVE_ELEMENT, payload: id})
    }

    return (
        <CartContext.Provider value ={{
            cartElements: state.cartElements,
            addElement,
            removeElement
        }}></CartContext.Provider>

    )
}

export default CartState