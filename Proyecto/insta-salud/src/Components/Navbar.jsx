import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button"
import NavDropdown from "react-bootstrap/NavDropdown";

import InstaSaludIcon from "../assets/icon.svg";
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
            <Navbar expand="lg" className="bg-body-tertiary general-background">
                <Container>
                    <Navbar.Brand className="logo" href="#home"><img src={InstaSaludIcon} /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <button className="btn-hover color-5" href="#home">Inicio</button>
                            <button className="btn-hover color-5" href="#home">Especialidades</button>
                            <button className="btn-hover color-5" href="#home">Especialistas</button>
                            <button className="btn-hover color-5" href="#home">Gestión de Citas</button>
                            <button className="btn-hover color-5" href="#home">Sala de Citas</button>
                            <ToggleTheme></ToggleTheme>
                            <NavDropdown title="Información" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1"></NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2"></NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4"></NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default InstaSaludNavbar;
