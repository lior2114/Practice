import { Routes, Route } from "react-router-dom"
import { NavBar } from "./Components/NavBar"
import { About } from "./Pages/About/About"
import { Home } from "./Pages/Home/Home"
import { Login } from "./Pages/Login/Login"
import { Register } from "./Pages/Register/Register"
import { Update } from "./Pages/Update/Update"
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
