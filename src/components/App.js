
import React from "react";
import './../styles/App.css';
import {BrowserRouter,Switch,Route} from "react-router-dom";
import ItemList from "./ItemList";
import ItemDetail from "./ItemDetail";
const App = () => {
  return (
    <div>
        <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ItemList}/>
           <Route exact path="/items/:id" component={ItemDetail}/>

        </Switch>
        </BrowserRouter>
    </div>
  )
}

export default App;
