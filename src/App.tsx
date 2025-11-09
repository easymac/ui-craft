import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './HomePage'
import CounterPage from './ui/Counter/_CounterPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/counter" element={<CounterPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
