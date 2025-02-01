/*   - Partie 3 : le hook useRef  ->   branch : part_3.2     */

import { useEffect, useId, useMemo, useRef, useState } from 'react';
import { Input } from './components/froms/Input.jsx';
// import { Checkbox } from './components/froms/Checkbox.jsx';

function App() {

  const ref = useRef(null)
  console.log('App', ref)
  const [prefix, setPrefix] = useState('')

  /*
  useEffect(() => {
    if (ref.current) {
      //
    }
  }, []);
  */
  return <div>
    <Input ref={ref} label="prefix" value={prefix} onChange={setPrefix}/>
    {prefix.length === 0 && <div ref={ref}>Hello</div>}
  </div>
}
  

export default App