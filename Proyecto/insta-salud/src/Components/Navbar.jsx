import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import ToggleTheme from "./ToggleTheme";
import LoginModal from "./LoginModal";
import { useState } from "react";

function InstaSaludNavbar() {
    const [show, setShow] = useState(false);

    const handleModalShow = () => {
        setShow(true);
    };
    const handleModalHide = () => {
        setShow(false);
    };

    return (
        <>
            <LoginModal visible={show} handleClose={handleModalHide}></LoginModal>
            <Navbar expand="lg" className="bg-body-tertiary navbar">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Inicio</Nav.Link>
                            <Nav.Link href="#especialidades">Especialidades</Nav.Link>
                            <Nav.Link href="#especialistas">Especialistas</Nav.Link>
                            <Nav.Link href="#link">Gestión de Citas</Nav.Link>
                            <Nav.Link onClick={handleModalShow}>Iniciar Sesión</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1"></NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2"></NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4"></NavDropdown.Item>
                            </NavDropdown>
                            <ToggleTheme></ToggleTheme>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default InstaSaludNavbar;
