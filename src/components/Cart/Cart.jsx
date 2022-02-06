import { Table, Button, Badge } from "react-bootstrap";
import "./cart.css";
import Context from "../../context/Context";
import { useContext } from "react";
import { BsCart4 } from "react-icons/bs";

const Cart = () => {
  //Context for state managament:
  const { cartProducts } = useContext(Context);
  const { clearCart } = useContext(Context);
  const { getCheapest } = useContext(Context);
  //Total of cart:
  const total = cartProducts.reduce((reducer, item) => item.value + reducer, 0);

  return (
    <div className="cart">
      <div className="cart-title">
        <h5>
          <BsCart4 /> Your Cart
        </h5>
        <p>
          <Badge bg="primary">
            {cartProducts.length > 0 && cartProducts.length}
          </Badge>
        </p>
      </div>

      <Table variant="light" responsive="sm" size="md" hover>
        <thead>
          <tr>
            <th className="pt-3 pb-3"></th>
            <th className="pt-3 pb-3"> Value: </th>
            <th className="pt-3 pb-3">Taxes:</th>
          </tr>
        </thead>
        <tbody>
          {cartProducts.map((item) => (
            <tr key={item.id}>
              <td className="pt-2 pb-2">{item.name} </td>
              <td className="pt-2 pb-2">{item.value}€ </td>
              <td className="pt-2 pb-2">({(item.value * 0.23).toFixed(2)}€)</td>
            </tr>
          ))}
          <tr>
            <td className="pt-3 pb-3">
              <strong>Total: </strong>
            </td>
            <td className="pt-3 pb-3">
              <strong>{total}€ </strong>
            </td>
            <td className="pt-3 pb-3">({(total * 0.23).toFixed(2)}€)</td>
          </tr>
        </tbody>
      </Table>
      <div className="button-box">
        <Button variant="outline-primary" onClick={() => getCheapest()}>
          Get cheapest build
        </Button>
        <Button variant="outline-danger" onClick={() => clearCart()}>
          Clear all
        </Button>
      </div>
    </div>
  );
};

export default Cart;
