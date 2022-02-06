import "./list.css";
import Element from "../Element/Element";
import { CardGroup, Row } from "react-bootstrap";
import components from "../../data";

const List = () => {
  return (
    <div className="List">
      <CardGroup>
        <Row xs={1} md={2} lg={3} className="g-4">
          {components.map((item) => (
            <Element key={item.value} item={item} />
          ))}
        </Row>
      </CardGroup>
    </div>
  );
};
export default List;
