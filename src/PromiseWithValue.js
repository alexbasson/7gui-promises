import {useState} from "react";

export default function PromiseWithValue() {
  const [message, setMessage] = useState('');

  const doSomeWork = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('work complete')
      }, 5000)
    })
  }

  const handleSleepClicked = () => {
    setMessage('work in progress')
    doSomeWork()
      .then((resolvedValue) => {
        setMessage(resolvedValue)
      })
  }

  return (
    <div>
      <div>
        <button className='btn' onClick={handleSleepClicked}>Do some work</button>
        <button className='btn ml-4' onClick={() => setMessage('')}>Reset</button>
      </div>

      <div className="mb-8">
        <p>status: {message}</p>
      </div>

      <div>
        <h2>code:</h2>
        <div className='code-block'>
          <p><span className='text-orange'>const</span> <span className='text-blue'>doSomeWork</span> = () => &#123;</p>
          <p>&nbsp;&nbsp;<span className='text-orange'>return new</span> Promise<span className='text-yellow'>(</span>(resolve) => &#123;</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className='text-blue'>setTimeout</span><span className='text-green'>(</span>() => &#123;</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;resolve('work complete')</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&#125;, 5000<span className='text-green'>)</span></p>
          <p>&nbsp;&nbsp;&#125;<span className='text-yellow'>)</span></p>
          <p>&#125;</p>
          <p><br/></p>
          <p><span className='text-orange'>const</span> <span className='text-blue'>handleSleepClicked</span> = () => &#123;</p>
          <p>&nbsp;&nbsp;<span className='text-blue'>doSomeWork</span>()</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;.<span className='text-blue'>then</span><span className='text-green'>(</span>(value) => &#123;</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;setMessage(value)</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&#125;<span className='text-green'>)</span></p>
          <p>&#125;</p>
        </div>
      </div>
    </div>
  )
}
