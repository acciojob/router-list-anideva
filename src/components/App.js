
import React from "react";
import './../styles/App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import ItemList from "./ItemList";
import ItemDetails from "./ItemDetails";
const App = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<ItemList/>}/>
           <Route path="/items/:id" element={<ItemDetails/>}/>

        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App;
