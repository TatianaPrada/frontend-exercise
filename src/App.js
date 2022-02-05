import "./App.css";
import { useEffect, useState } from "react";
import Navigation from "./components/Navigation/Navigation";
import Cart from "./components/Cart/Cart";
import List from "./components/List/List";
import components from "./data.js";
import { Container } from "react-bootstrap";

function App() {
  const [items, setItems] = useState([...components]);

  return (
    <>
      <Navigation />
      <div className="layout">
        <Container>
          <List components={items} />
        </Container>
        <Cart />
      </div>
    </>
  );
}

export default App;
