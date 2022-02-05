
import { useEffect, useState } from "react";
import Element from "../Element/Element";
import {CardGroup, Row} from 'react-bootstrap'

function List({ components }) {
  return (
    <>
    <CardGroup>
    <Row xs={1} md={2} lg={3} className="g-4">
      {components.map((item) => (
        <Element key={item.value} item={item}/>
      ))}
      </Row>
    </CardGroup>
    </>
  );
}
export default List;
