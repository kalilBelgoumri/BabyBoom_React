import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home1 from './components/Home1'
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home1 />} />
    </Routes>
  )
}

export default App
