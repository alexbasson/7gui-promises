import {useState} from "react";

export default function AsyncAwait() {
  const [message, setMessage] = useState('');

  const doSomeWork = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('work complete')
      }, 5000)
    })
  }

  const handleSleepClicked = async () => {
    setMessage('work in progress')
    const value = await doSomeWork()
    setMessage(value)
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
          <p><span className='text-orange'>const</span> <span className='text-blue'>handleSleepClicked</span> = <span className='text-orange'>async</span> () => &#123;</p>
          <p>&nbsp;&nbsp;<span className='text-orange'>const</span> value = <span className='text-orange'>await</span>&nbsp;<span className='text-blue'>doSomeWork</span>()</p>
          <p>&nbsp;&nbsp;setMessage(value)</p>
          <p>&#125;</p>
        </div>
      </div>
    </div>
  )
}
