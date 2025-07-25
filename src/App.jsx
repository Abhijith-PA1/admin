
import { Route, Routes } from 'react-router-dom'
import './App.css'
import PasswordSetting from './Pages/PasswordSetting'
import Login from './Pages/Login'
import PasswordReset from './Pages/PasswordReset'
import Dashboard from './Pages/Dashboard'
import Header from './Components/Header'
import RegisteredUserList from './Pages/RegisteredUserList'

function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<PasswordSetting/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/passwordreset' element={<PasswordReset/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/registereduserlist' element={<RegisteredUserList/>}/>
    </Routes>
    </>
  )
}

export default App
