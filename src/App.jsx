import { BrowserRouter, Route, Router, Routes } from "react-router-dom"
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import Home from "./Components/Home"
import Login from "./Components/Login/Login"
import './App.css'

function App() {
  

  return (
    <div>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login/*" element={<Login />} />
      </Routes>
      <h1>Dogs</h1>
      <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
