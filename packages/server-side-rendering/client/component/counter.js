import React, {useState} from 'react';

function Counter (props) {
  const [counter, setCounter] = useState(props.startValue || 0);
  const plus = () => setCounter(counter + 1)
  const minus = () => setCounter(counter - 1)
  return (
    <div>
      <p>Counter: { counter }</p>
      <p>
          <button onClick={ plus }>+</button><br /><br />
          <button onClick={ minus }>–</button>
      </p>
    </div>
  )
}

export default Counter;
