import { ADD_ITEM, REMOVE_ITEM, CLEAR_CART, GET_CHEAPEST_BUILD } from "./Types";
import components from "../data";

//Functions for the different actions in the cart:
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
    case CLEAR_CART: {
      return {
        ...state,
        cartProducts: [],
      };
    }
    case GET_CHEAPEST_BUILD: {
      //Function to get the cheapest item by type:
      const types = [...new Set([...components.map((item) => item.type)])];
      const cheapestByType = (type) => {
        return components
          .filter(function (item) {
            return item.type === type;
          })
          .reduce(function (prev, curr) {
            return prev.value < curr.value ? prev : curr;
          });
      };
      const cheapestItems = types.map((item) => cheapestByType(item));

      return {
        ...state,
        cartProducts: cheapestItems,
      };
    }
    default:
      return state;
  }
};

export default CartReducer;
