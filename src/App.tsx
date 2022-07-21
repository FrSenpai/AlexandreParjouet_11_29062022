import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import NavBar from './layout/navBar/NavBar';
import Error from "./pages/error/Error";
import { Footer } from "./layout/footer/Footer";
import { About } from "./pages/about/About";
import { Accomodation } from "./pages/accomodation/Accomodation";
import { Navigation } from "./layout/navigation/Navigation";

function App() {
  return (
    //@ts-ignore
    <BrowserRouter>
      <section className="mainCtn">
        <header>
          <NavBar></NavBar>
        </header>
        <Navigation/>
      </section>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
