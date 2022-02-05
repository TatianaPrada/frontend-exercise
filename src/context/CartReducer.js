import { ADD_ITEM, REMOVE_ITEM } from "./Types";

const CartReducer = (state, action) => {
  switch (action.type) {
    case ADD_ITEM: {
      return {
        ...state,
        cartProducts: [...state.cartProducts, action.payload],
      };
    }
    case REMOVE_ITEM: {
      return {
        ...state,
        cartProducts: state.cartProducts.filter(
          (item) => item.id !== action.payload
        ),
      };
    }
    default: 
    return state
  }
  
  
};

export default CartReducer;
