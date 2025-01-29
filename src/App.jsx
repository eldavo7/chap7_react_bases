/*
Chap 7 Le hook useEffect partie A.b
v2
*/
import { useEffect, useState } from 'react'
import { Input } from './components/froms/Input.jsx'
// import { Checkbox } from './components/froms/Checkbox.jsx'

function App() {
  const [duration, setDuration] = useState(5)
  const [secondsLeft, setSecondsLeft] = useState(duration)

  const handleChange = (v) => {
    setDuration(v)
    setSecondsLeft(v)
  }

// console.log('render')

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft(v => {
        if (v <= 1) {
          clearInterval(timer)
          return 0
        }
        return v - 1
      })
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [duration]);

/*
  return <div className='vstack gap-2'>
    <Input
      value={duration}
      onChange={handleChange}
      placeholder="Timer..."
    />
    <p>
        Décompte : {secondsLeft}
    </p>
  </div>
}
*/

  return (
    <div className="vstack gap-2 text-center p-3 bg-light rounded">
      <Input
        value={duration}
        onChange={handleChange}
        placeholder="Timer..."
        className="form-control text-center"
      />
      <p className="fw-bold text-primary">
        Décompte : {secondsLeft}
      </p>
    </div>
  );
}

export default App
