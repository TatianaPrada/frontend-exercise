import { useReducer } from "react";
import CartContext from "./CartContext";
import CartReducer from "./CartReducer";
import { ADD_ITEM, REMOVE_ITEM, CLEAR_CART, GET_CHEAPEST_BUILD } from "./Types";

const CartState = ({ children }) => {
  const initialState = {
    cartProducts: [],
  };
  const [state, dispatch] = useReducer(CartReducer, initialState);

  const addItem = (item) => {
    dispatch({ type: ADD_ITEM, payload: item });
  };
  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: id });
  };
  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };
  const getCheapest = () => {
    dispatch({ type: GET_CHEAPEST_BUILD });
  };

  return (
    <CartContext.Provider
      value={{
        cartProducts: state.cartProducts,
        addItem,
        removeItem,
        clearCart,
        getCheapest,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartState;
