import "./list.css";
import Element from "../Element/Element";
import { Row, Container } from "react-bootstrap";
import components from "../../data";

const List = ({ searchQuery }) => {
  // Function for filtering the items by the search bar:
  const filteredList = components.filter((item) => {
    if (searchQuery === "") {
      return item;
    } else {
      return (
        item.name.toLowerCase().includes(searchQuery) ||
        item.type.toLowerCase().includes(searchQuery)
      );
    }
  });
  return (
    <Container>
      <div className="List">
        <Row xs="auto" md={2} lg={3} className="g-4">
          {filteredList.map((item) => (
            <Element key={item.value} item={item} />
          ))}
        </Row>
      </div>
    </Container>
  );
};
export default List;
