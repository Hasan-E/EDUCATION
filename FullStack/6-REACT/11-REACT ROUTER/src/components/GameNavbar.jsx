import React from "react";
import gameLogo from "../assets/gamevere.png";
import "./GameNavbar.css";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const GameNavbar = () => {
  return (
    <div>
      <nav className="navbar bg-dark">
        <div className="navbar-left">
          <Link to="/" className="navbar-logo">
            <img src={gameLogo} alt="" />
          </Link>
          {/* <a href="" className="nav-link">Home</a>
          <a href="" className="nav-link">Games</a>
          <a href="" className="nav-link">Contact</a>
          <a href="" className="nav-link">Developers</a>
          <a href="" className="nav-link">Github</a> */}

          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/games" className="nav-link">
            Games
          </Link>
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
          <Link to="/developers" className="nav-link">
            Developers
          </Link>

          <a
            target="_blank"
            href="https://github.com/bobeff/open-source-games"
            className="nav-link"
          >
            Github
          </a>

          <Link to="/signin">
            <Button variant="outline-success">Sign in</Button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default GameNavbar;

//! React bootstrap gibi yapılarda Link kullanımı
// as={Link} to="/home" yapısı ile kullanılır

// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import { Link } from 'react-router-dom';
// import { Button } from 'react-bootstrap';
// function GameNavbar() {
//   return (
//     <Navbar expand="lg" className="bg-body-tertiary">
//       <Container>
//         <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link as={Link} to="/" >Home</Nav.Link>
//             <Nav.Link as={Link} to="/games">Games</Nav.Link>
//             <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//               <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.2">
//                 Another action
//               </NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action/3.4">
//                 Separated link
//               </NavDropdown.Item>
//             </NavDropdown>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default GameNavbar;
