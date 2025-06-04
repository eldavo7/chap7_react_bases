import { useState, memo, useMemo, useCallback, useRef } from "react";
import { Input } from "./components/froms/Input.jsx";
// import { waitSync } from "./utils/waitSync.js"


function App() {
  
  const [name, setName] = useState('')
  const nameRef = useRef(name)
  nameRef.current = name

  const handleClick = useCallback(() => {
    console.log(nameRef.current)
  }, [])

  return <div className="container my-2 vstack gap-2">
    <div>
      <Input label="Prénom" onChange={setName} value={name}/>
      <div>
        {name.toUpperCase()}
      </div>
    </div>
    <InfoMemo onClick={handleClick}/>

  </div>

}

const InfoMemo = memo(function Info ({onClick}) {
  console.log('Info', 'render')
  // waitSync(500)
  return <div className="alert alert-info" onClick={onClick}>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem necessitatibus corrupti deleniti. Aut veniam nobis quidem dolorem ut voluptas perspiciatis rerum recusandae nihil, tenetur labore explicabo in, nisi magni. Quia.
  </div>
})

export default App;