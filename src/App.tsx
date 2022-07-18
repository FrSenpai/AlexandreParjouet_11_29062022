import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import NavBar from './layout/navBar/NavBar';
import Error from "./pages/error/Error";
import { Footer } from "./layout/footer/Footer";
import { About } from "./pages/about/About";

function App() {
  return (
    //@ts-ignore
    <BrowserRouter>
      <section className="mainCtn">
        <header>
          <NavBar></NavBar>
        </header>
        <Routes>
          <Route path="/" element={<Navigate replace to="home" />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Error />}>
            <Route path=":error" element={<Error />}></Route>
          </Route>
        </Routes>
        
      </section>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
