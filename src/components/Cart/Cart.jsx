import {Table, Button} from "react-bootstrap";
import './cart.css'

const Cart = () => {
  return (
    <div className="cart">
      <Table size="sm" hover>
        <thead>
          <tr>
            <th>Your Cart</th>
            <th>0</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Title </td>
            <td>0 </td>
          </tr>
          <tr>
            <td>Total: </td>
            <td> 0 €</td>
          </tr>
        </tbody>
      </Table>
      <div className="button-box">
      <Button variant="outline-primary"> Get cheapest build</Button>
      <Button variant="outline-danger"> Clear all</Button>
      </div>
    </div>
  );
}

export default Cart;
