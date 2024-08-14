import {useState} from "react";

export default function Callback() {
  const [message, setMessage] = useState('');

  const doSomeWork = (callback) => {
    setTimeout(() => {
      callback('work complete')
    }, 5000)
  }

  const handleSleepClicked = () => {
    setMessage('work in progress');
    const callbackFn = (value) => {
      setMessage(value)
    }
    doSomeWork(callbackFn)
  }

  return (
    <div>
      <div className='mb-4'>
        <button className='btn' onClick={handleSleepClicked}>Do some work</button>
        <button className='btn ml-4' onClick={() => setMessage('')}>Reset</button>
      </div>

      <div className='mb-8'>
        <p>status: {message}</p>
      </div>

      <div>
        <h2>code:</h2>
        <div className='code-block'>
          <p><span className='text-orange'>const</span> <span className='text-blue'>doSomeWork</span> = (callback) => &#123;</p>
          <p>&nbsp;&nbsp;<span className='text-blue'>setTimeout</span><span className='text-green'>(</span>() => &#123;</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;callback('work complete')</p>
          <p>&nbsp;&nbsp;&#125;, 5000<span className='text-green'>)</span></p>
          <p>&#125;</p>
          <p><br/></p>
          <p><span className='text-orange'>const</span> <span className='text-blue'>handleSleepClicked</span> = () => &#123;</p>
          <p>&nbsp;&nbsp;<span className='text-orange'>function</span> callbackFn(value) &#123;</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;setMessage(value)</p>
          <p>&nbsp;&nbsp;&#125;</p>
          <p>&nbsp;&nbsp;<span className='text-blue'>doSomeWork</span><span className='text-green'>(</span>callbackFn<span className="text-green">)</span></p>
          <p>&#125;</p>
        </div>
      </div>
    </div>
  )
}
