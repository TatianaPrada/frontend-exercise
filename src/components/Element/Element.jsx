import { Card, Col, Button } from "react-bootstrap";
import CartContext from "../../context/CartContext";
import { useContext } from "react";

const Element = ({ item }) => {
  const { addItem } = useContext(CartContext);
  const { removeItem } = useContext(CartContext);
  const { cartProducts } = useContext(CartContext);
  return (
    <>
      <Col>
        <Card border={cartProducts.includes(item) && "primary"} style={{ width: "18rem" }}>
          <Card.Img variant="top" src="" />
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>
              <p>
                <b>Type:</b> <span>{item.type}</span>
              </p>
              <p>
                <b>Value:</b> <span>{item.value} €</span>
              </p>
            </Card.Text>
            {cartProducts.includes(item) ? (
              <Button variant="danger" onClick={() => removeItem(item.id)}>
                Remove
              </Button>
            ) : (
              <Button variant="secondary" onClick={() => addItem(item)}>
                Add
              </Button>
            )}
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};
export default Element;
