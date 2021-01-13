import React from "react";
import "./App.css";
import {useDispatch, useSelector} from "react-redux";

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
      <>
        <p>{count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </>
  );
}

export default App;