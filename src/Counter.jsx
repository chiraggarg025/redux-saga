import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './redux/ducks/counter';
const Counter = (props) => {
  const count = useSelector((state) => state.counter.count)
  const dispatch = useDispatch()
const  handleDecrement = () => {
    dispatch(decrement())
  }
const  handleIncrement = () => {
    dispatch(increment())
  }
  return (
    <div className="App">
      <button
        style={{ width: "10%", display: "block", marginLeft: "50%" }}
        onClick={handleDecrement}
      >
        -
      </button>
      <span style={{ fontSize: "2rem", display: "block", textAlign: "center" }}>
        {count}
      </span>
      <button
        style={{ width: "10%", display: "block", marginLeft: "50%" }}
        onClick={handleIncrement}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
