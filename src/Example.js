import {useState} from "react";

export default function Example({title, children}) {
  const [counter, setCounter] = useState(0);

  return (<div className='example'>
    <div>
      <h1>{title}</h1>
    </div>

    <div className="mb-4">
      <p>Counter: {counter}</p>
      <button className='btn' onClick={() => setCounter(counter + 1)}>Increment</button>
    </div>

    {children}
  </div>)
}
