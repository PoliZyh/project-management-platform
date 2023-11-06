import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import Login from "./views/Login"
import Home from "./views/Home"
import UseInstructions from "./views/Home/components/UseInstructions"

function App() {

  return (
    <>    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />}></Route>
          <Route path="/home/*" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
