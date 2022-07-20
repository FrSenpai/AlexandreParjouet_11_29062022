import { Navigate, Route, Routes } from "react-router-dom";
import { About } from "../../pages/about/About";
import { Accomodation } from "../../pages/accomodation/Accomodation";
import Error from "../../pages/error/Error";
import Home from "../../pages/home/Home";

export function Navigation() {
    return (
        <Routes>
          <Route path="/" element={<Navigate replace to="home" />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="accomodation">
            <Route path=":id" element={<Accomodation />} />
          </Route>
          <Route path="*" element={<Error />}>
            <Route path=":error" element={<Error />}></Route>
          </Route>
        </Routes>
    )
        
}