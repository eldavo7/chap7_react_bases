/*   - Partie 3 : le hook useRef  ->   branch : part_3.1     */

import { useEffect, useId, useMemo, useRef, useState } from 'react';
import { Input } from './components/froms/Input.jsx';
// import { Checkbox } from './components/froms/Checkbox.jsx';

function App() {

  const prefixRef = useRef()
  const [prefix, setPrefix] = useState('')
  prefixRef.current = prefix

  useEffect(() => {
    const timer = setInterval(() => {
      console.log(prefixRef.current)
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, []);

  return <div>
    <Input label="prefix" value={prefix} onChange={setPrefix}/>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, labore? Id temporibus laboriosam reprehenderit dicta, vitae doloribus facere doloremque? Deleniti totam eaque voluptas illum consectetur ratione enim iure perspiciatis accusamus.
  </div>
}
  

export default App