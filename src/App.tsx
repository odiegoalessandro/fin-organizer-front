import { Route, Routes } from 'react-router-dom'
import { CreateAccount } from './templates/CreateAccount'
import { Login } from './templates/Login'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route path="/create-account" element={ <CreateAccount /> } />
      </Routes>
    </div>
  )
}

export default App
