import './list.css'
import { useEffect, useState } from "react";
import Element from "../Element/Element";
import {CardGroup, Row} from 'react-bootstrap'

const List = ({ components }) => {
  return (
    <div className="List">
    <CardGroup>
    <Row xs={1} md={2} lg={3} className="g-4">
      {components.map((item) => (
        <Element key={item.value} item={item}/>
      ))}
      </Row>
    </CardGroup>
    </div>
  );
}
export default List;
