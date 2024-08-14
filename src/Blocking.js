import {useState} from "react";
import sleep from "./sleep";

export default function Blocking() {
  const [message, setMessage] = useState('');

  const doSomeWork = () => {
    sleep(5000)
  }

  const handleSleepClicked = () => {
    setMessage('work in progress');
    doSomeWork()
    setMessage('work complete')
  }

  return (
    <div>
      <div>
        <button className='btn' onClick={handleSleepClicked}>Do some work</button>
        <button className='btn ml-4' onClick={() => setMessage('')}>Reset</button>
      </div>

      <div className='mb-8'>
        <p>status: {message}</p>
      </div>

      <div>
        <h2>code:</h2>
        <div className='code-block'>
          <p><span className='text-orange'>const</span> <span className='text-blue'>doSomeWork</span> = () => &#123;</p>
          <p>&nbsp;&nbsp;<span className='text-blue'>sleep</span><span className='text-green'>(</span>5000<span className='text-green'>)</span></p>
          <p>&#125;</p>
          <p><br/></p>
          <p><span className='text-orange'>const</span> <span className='text-blue'>handleSleepClicked</span> = () => &#123;</p>
          <p>&nbsp;&nbsp;<span className='text-blue'>doSomeWork</span>()</p>
          <p>&nbsp;&nbsp;setMessage('work complete')</p>
          <p>&#125;</p>
        </div>
      </div>
    </div>
  )
}
