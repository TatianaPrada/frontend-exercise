import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Cart from "./components/Cart/Cart";
import List from "./components/List/List";
import { Container } from "react-bootstrap";

function App() {
 

  return (
    <>
      <Navigation />
      <div className="layout">
        <Container>
          <List />
        </Container>
        <Cart />
      </div>
    </>
  );
}

export default App;
