import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Button } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import ToggleTheme from "./ToggleTheme";
import LoginModal from "./LoginModal";
import { useState } from "react";

function InstaSaludNavbar() {
    const [visible, setVisibility] = useState(false);

    const handleVisibility = () => setVisibility(false);
    return (
        <>
            <LoginModal show={visible} ></LoginModal>
            <Button onClick={handleVisibility}></Button>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>2
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Inicio</Nav.Link>
                            <Nav.Link href="#home">Especialidades</Nav.Link>
                            <Nav.Link href="#home">Especialistas</Nav.Link>
                            <Nav.Link href="#link">Gestión de Citas</Nav.Link>
                            <Nav.Link onClick={handleVisibility}>Iniciar Sesión</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1"></NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2"></NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4"></NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                    <ToggleTheme></ToggleTheme>
                </Container>
            </Navbar>
        </>
    );
}

export default InstaSaludNavbar;
