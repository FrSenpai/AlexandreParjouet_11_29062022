import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import NavBar from './layout/navBar/NavBar';
import Error from "./error/Error";

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
          <Route path="*" element={<Error />}>
            <Route path=":error" element={<Error />}></Route>
          </Route>
        </Routes>
      </section>
    </BrowserRouter>
  );
}

export default App;
