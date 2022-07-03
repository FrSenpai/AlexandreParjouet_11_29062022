import React from "react";
import "./App.css";
import "./assets/css/fonts/Montserrat.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import NavBar from './layout/navBar/NavBar';

function App() {
  return (
    //@ts-ignore
    <BrowserRouter>
      <section className="mainCtn">
        <header>
          <NavBar></NavBar>
        </header>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </section>
    </BrowserRouter>
  );
}

export default App;
