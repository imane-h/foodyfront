import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Menus/Header";
import Content from "./Menus/Content";
import Footer from "./Menus/Footer";
import Home from "./Home/Home";
function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/Menus" element={<Content />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
