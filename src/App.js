import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Cart from "./components/Cart/Cart";
import List from "./components/List/List";
import {useState} from 'react'

function App() {
  //Managament of state for searching query
  const [searchQuery, setSearchQuery] = useState("");
  const inputHandler = (e) => {
    let lowerCase = e.target.value.toLowerCase();
    setSearchQuery(lowerCase);
  };
  return (
    <>
      <Navigation inputHandler={inputHandler}/>
      <div className="layout">
        <List searchQuery={searchQuery}/>
        <Cart />
      </div>
    </>
  );
}

export default App;
