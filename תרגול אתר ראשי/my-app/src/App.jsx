import { Routes, Route } from "react-router-dom"
import { NavBar } from "./Components/NavBar"
import { About } from "./Pages/About"
import { Home } from "./Pages/Home"
import { Login } from "./Pages/Login"
import { Register } from "./Pages/Register"
import { Update } from "./Pages/Update"
import { useUser } from "./Contexts/userContext"


function App() {
  const {user} = useUser()

  return (
    <>
    <NavBar/>
    <Routes>
    <Route path = "/" element = {<Home/>}/>
    <Route path = "/About" element = {<About/>}/>
    <Route path = "/Login" element = {<Login/>}/>
    <Route path = "/Register" element = {<Register/>}/>
    {user?.role_id === 1 && (
      <Route path="/UpdateUser" element={<Update/>}/>
    )}
    </Routes>
    </>
  )
}

export default App
