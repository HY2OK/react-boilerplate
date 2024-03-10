import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage/MainPage'
import LandingPage from './pages/LandingPage/LandingPage'
import SignPage from './pages/SignPage/SignPage'
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <BrowserRouter>
      <div className="bg-slate-100 h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/sign" element={<SignPage />} />
          <Route path="/main" element={<MainPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
