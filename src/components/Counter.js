import React from 'react';

const Counter = ({ count, totalCount, onDecrement, onIncrement, onReplace, onChangeCount }) => {

  return (
    <div>
      <div>
        <button onClick={onDecrement}>-</button>
        <span>{count}</span>
        <button onClick={onIncrement}>+</button>
        <br />
        <p>Times the increment/decrement buttons have been clicked: <span>{totalCount}</span></p>
        <input type='number' onChange={event => onReplace(event.target.value)}></input>
        <button onClick={onChangeCount}>Change Count Number</button>
      </div>
    </div>
  );
}

export default Counter;