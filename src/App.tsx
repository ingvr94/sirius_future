import {Routes, Route,Navigate} from 'react-router-dom'
import Register from './pages/Register'
import Home from './pages/Home'
import Schedule from './pages/Schedule'

function App() {
  return (
    <>
      <div className="app container">
        <Routes>
          <Route path="/" element={<Navigate to='/register'/>}/>
          <Route path='/home' element={<Home />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/schedule' element={<Schedule />}/>
        </Routes>
 
      </div>
    </>
  )
}

export default App
