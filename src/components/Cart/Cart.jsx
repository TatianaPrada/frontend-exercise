import { Table, Button } from "react-bootstrap";
import "./cart.css";
import CartContext from "../../context/CartContext";
import { useContext } from "react";

const Cart = () => {
  const { cartProducts } = useContext(CartContext);
  const { clearCart } = useContext(CartContext);
  const { getCheapest } = useContext(CartContext);

  return (
    <div className="cart">
      <Table size="sm" hover>
        <thead>
          <tr>
            <th>Your Cart</th>
            <th>{cartProducts.length > 0 && cartProducts.length}</th>
          </tr>
        </thead>
        <tbody>
          {cartProducts.map((item) => (
            <tr key={item.id}>
              <td>{item.name} </td>
              <td>{item.value} €</td>
            </tr>
          ))}
          <tr>
            <td>Total: </td>
            <td>
              {" "}
              {cartProducts.reduce(
                (reducer, item) => item.value + reducer,
                0
              )}{" "}
              €
            </td>
          </tr>
        </tbody>
      </Table>
      <div className="button-box">
        <Button variant="outline-primary" onClick={() => getCheapest()}>
          {" "}
          Get cheapest build
        </Button>
        <Button variant="outline-danger" onClick={() => clearCart()}>
          {" "}
          Clear all
        </Button>
      </div>
    </div>
  );
};

export default Cart;
