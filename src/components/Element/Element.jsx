import { Card, Col, Button } from "react-bootstrap";
import { useEffect, useState } from "react";

const Element = ({ item }) => {
  return (
    <>
       <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src=""/>
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>
                <p><b>Type:</b> <span>{item.type}</span></p>  
                <p><b>Value:</b> <span>{item.value} €</span></p>  
              </Card.Text>
              <Button variant="secondary">Add</Button>
            </Card.Body>
          </Card>
        </Col>
    </>
  );
}
export default Element;