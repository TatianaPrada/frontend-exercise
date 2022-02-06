import { Navbar, Container, Form, FormControl, Button } from "react-bootstrap/";
import './navigation.css'
import { FaSearch } from 'react-icons/fa';

const Navigation = ({ inputHandler }) => {
  return (
      <Navbar sticky="top"  bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Tech Store</Navbar.Brand>
          <Form className="d-flex" >
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={inputHandler}
            />
            <Button variant="outline-light" disabled ><FaSearch/></Button>
          </Form>
        </Container>
      </Navbar>
  );
};

export default Navigation;
