import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Features from "./Features";
import Pricing from "./Pricing";
export default function Header() {
  return (
    <Router>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand >Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/" >Home</Nav.Link>
            <Nav.Link href="/features" >Features</Nav.Link>
            <Nav.Link href="/pricing" >Pricing</Nav.Link>
          </Nav>
          <Routes>
            <Route path="/"></Route>
            <Route path="/features" exact component={Features}></Route>
            <Route path="/pricing" component={Pricing}></Route>
          </Routes>
        </Container>
      </Navbar>
    </Router>
  );
}
