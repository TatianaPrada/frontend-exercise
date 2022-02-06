import { Card, Col, Button } from "react-bootstrap";
import Context from "../../context/Context";
import { useContext } from "react";
import "./element.css";

const Element = ({ item }) => {
  //Context for state management of cart:
  const { addItem } = useContext(Context);
  const { removeItem } = useContext(Context);
  const { cartProducts } = useContext(Context);
  return (
    <>
      <Col>
        <Card border={cartProducts.includes(item) && "primary"}> 
          <Card.Header>
            <Card.Title>{item.name}</Card.Title>
          </Card.Header>
          <Card.Body>
            <Card.Text>
              <p>
                <b>Type:</b> <span>{item.type}</span>
              </p>
              <p>
                <b>Value:</b> <span>{item.value} €</span>
              </p>
            </Card.Text>
            {cartProducts.includes(item) ? (
              <Button
                variant="outline-danger"
                onClick={() => removeItem(item.id)}
              >
                Remove
              </Button>
            ) : (
              <Button variant="outline-secondary" onClick={() => addItem(item)}>
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
