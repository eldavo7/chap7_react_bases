/*   - Partie 2 : le hook useMemo, (useId)  ->   branch : part_2     */

import { useId, useMemo, useState } from 'react'
import { Input } from './components/froms/Input.jsx'
// import { Checkbox } from './components/froms/Checkbox.jsx'

function App() {
  const [firstname, setFirstname] = useState('John')
  const [password, setPassword] = useState('MotDePasse')
  const security = passwordSecurity(password)
  const random = useMemo(() => Math.random(), [])

return <div className="container my-3 vstack gap-2">
    <Input 
      label="Nom d'utilisateur"
      value={firstname}
      onChange={setFirstname} 
    />
    <div>
      <Input
        label="Password" 
        type="password" 
        value={password}
        onChange={setPassword} 
      />
      Sécurité : {security}
      </div>
    </div>
  }


function passwordSecurity (password) {
  // Fausse lenteur
  let startTime = performance.now()
  while (performance.now() - startTime < 200 ) {
  }

  if (password.length < 3) {
    return 'Faible'
  } else if (password.length < 6) {
    return 'Moyen'
  }
  return 'Fort';

}
  

export default App