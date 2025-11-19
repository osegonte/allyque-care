import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/sections/Footer'
import Home from './pages/Home'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/careers" element={
            <div className="pt-24 container-rosenfeld py-20">
              <h1>Careers</h1>
              <p className="text-xl text-muted-foreground mt-4">
                Careers page coming soon...
              </p>
            </div>
          } />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
