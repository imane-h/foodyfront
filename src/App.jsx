import Login from "./Login/Login"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Ark from "./Menus/Content"
import Header from "./Menus/Header"
function App() {
  return (
    <>
    <Header/>
    <BrowserRouter>
      <Routes>
      <Route path="/Menus" element={<Ark />} />
        <Route path="/">
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
