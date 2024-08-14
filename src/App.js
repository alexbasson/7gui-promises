import './App.css';
import Blocking from "./Blocking";
import PromiseWithValue from "./PromiseWithValue";
import Callback from "./Callback";
import AsyncAwait from "./AsyncAwait";
import {useState} from "react";
import Example from "./Example";

function App() {
  const [displayBlocking, setDisplayBlocking] = useState(false);
  const [displayCallback, setDisplayCallback] = useState(false);
  const [displayPromiseWithValue, setDisplayPromiseWithValue] = useState(false);
  const [displayAsyncAwait, setDisplayAsyncAwait] = useState(false);

  return (
    <div className="App">
      <div>
        <ul className='nav'>
          <li onClick={() => setDisplayBlocking(!displayBlocking)}>Blocking</li>
          <li onClick={() => setDisplayCallback(!displayCallback)}>Callback</li>
          <li onClick={() => setDisplayPromiseWithValue(!displayPromiseWithValue)}>Promise</li>
          <li onClick={() => setDisplayAsyncAwait(!displayAsyncAwait)}>async/await</li>
        </ul>
      </div>
      <div className='examples'>
        <div>{ displayBlocking ? <Example title='Blocking'><Blocking /></Example> : <></> }</div>
        <div>{ displayCallback ? <Example title='Callback'><Callback /></Example> : <></> }</div>
        <div>{ displayPromiseWithValue ? <Example title='Promise'><PromiseWithValue /></Example> : <></> }</div>
        <div>{ displayAsyncAwait ? <Example title='async/await'><AsyncAwait /></Example> : <></> }</div>
      </div>
    </div>
  );
}

export default App;
