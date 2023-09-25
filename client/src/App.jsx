import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import './App.css'
import Home from "./Components/Home"
import Login from "./Components/Login"
import Signup from "./Components/Signup"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />

        </Routes>
      </Router>
    </div>
  )
}

export default App
