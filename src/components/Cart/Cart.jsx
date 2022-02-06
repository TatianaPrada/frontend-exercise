import { Table, Button } from "react-bootstrap";
import "./cart.css";
import CartContext from "../../context/CartContext";
import { useContext } from "react";
import { BsCart4 } from 'react-icons/bs';

const Cart = () => {
  const { cartProducts } = useContext(CartContext);
  const { clearCart } = useContext(CartContext);
  const { getCheapest } = useContext(CartContext);
  const total = cartProducts.reduce(
    (reducer, item) => item.value + reducer, 0)

  return (
    <div className="cart">
      <Table variant="light" responsive="sm" size="sm" hover>
        <thead>
          <tr>
            <th className="p-2" colSpan={2}> <BsCart4 /> Your Cart</th>
            <th className="p-2" >{cartProducts.length > 0 && cartProducts.length}</th>
          </tr>
        </thead>
        <tbody>
          {cartProducts.map((item) => (
            <tr key={item.id}>
              <td className="pt-3 pb-3">{item.name} </td>
              <td className="pt-3 pb-3">{item.value}€ </td>
              <td className="pt-3 pb-3">({(item.value * 0.23).toFixed(2)}€)</td>
            </tr>
          ))}
          <tr>
            <td className="pt-3 pb-3"><strong>Total: </strong></td>
            <td className="pt-3 pb-3"><strong>{total}€ </strong></td>
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
