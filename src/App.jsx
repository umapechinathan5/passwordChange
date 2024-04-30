import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import Signup from './Components/Signup'
import Login from './Components/Login'

import Forgotpassword from './Components/Forgotpassword'
import ResetPassword from './Components/ResetPassword'

function App() {
 

  return (
<BrowserRouter>
  <Routes>
    <Route path='/' element={<Login />}></Route>
    <Route path='/signup' element={<Signup />}></Route>
   
    <Route path='/forgotPassword' element={<Forgotpassword />}></Route>
    <Route path='/resetPassword/:token' element={<ResetPassword />}></Route>
  </Routes>
 
</BrowserRouter>
  )
}

export default App
