import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Features from "./Features";
import Home from "./Home";
import Pricing from "./Pricing";
export default function Header() {
  return (
    <Router>
 <div>
        {/* <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Features">Features</Link>
          </li> 
          <li>
            <Link to="/Pricing">Pricing</Link>
          </li>
        </ul> */}
        <Navbar bg="primary" variant="dark">
    <Container>
   
    <Nav className="me-auto">
      <Nav.Link as={Link} to="/">Home</Nav.Link>
      <Nav.Link as={Link} to="/Features">Features</Nav.Link>
      <Nav.Link as={Link} to="/Pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
        <Routes>
          <Route  exact path="/Features" element={<Features/>}>
            
          </Route>
          <Route exact path="/Pricing" element={<Pricing/>}>
          
          </Route>
          <Route  exact path="/" element={<Home/>}>
          
          </Route>
        </Routes>
      </div>
          
    </Router>
  );
}
