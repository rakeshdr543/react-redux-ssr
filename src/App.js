import React from "react";
import "./App.css";
import {useDispatch, useSelector} from "react-redux";
import {Route, Switch, NavLink, BrowserRouter} from 'react-router-dom';
import Component from "./Component1";

function App() {
  const app = useSelector((state)=>state.app)
    const {count} = app
    const dispatch = useDispatch()
  const increment = () => {
   dispatch({type:'INCREMENT_COUNT',payload:count})
  };

  const decrement = () => {
      dispatch({type:'DECREMENT_COUNT',payload:count})

  };
  return (
      <BrowserRouter>
        <p>{count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
          <hr />

          <h2>Part 3: React router</h2>
          <nav>
              <NavLink to="/" exact activeClassName="active">Home</NavLink>
              <NavLink to="/another" activeClassName="active">Another page</NavLink>
          </nav>
          <Switch>
              <Route path="/" exact component={Component} />
              <Route path="/another" component={Component} />
          </Switch>
      </BrowserRouter>
  );
}

export default App;