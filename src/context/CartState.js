import {useReducer} from 'react'
import CartContext from './CartContext'
import CartReducer from './CartReducer'
import {ADD_ITEM, REMOVE_ITEM} from './Types'

const CartState = ({children}) => {
    const initialState = {
        cartProducts: []
    }
    const [state, dispatch] = useReducer(CartReducer, initialState)

    const addItem = (item) => {
        dispatch({type: ADD_ITEM, payload: item})
    }
    const removeItem = (id) => {
        dispatch({type: REMOVE_ITEM, payload: id})
    }

    return (
        <CartContext.Provider value ={{
            cartProducts: state.cartProducts,
            addItem,
            removeItem
        }}>
        {children}
        </CartContext.Provider>

    )
}

export default CartState