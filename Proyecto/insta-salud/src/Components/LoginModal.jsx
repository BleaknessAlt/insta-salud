import Button from "react-bootstrap/Button";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function LoginModal({visible, handleClose}) {
    return (
        <>
            <Modal  show={visible} onHide={handleClose}>
                <Modal.Header className="modal-title general-background" closeButton>
                    <Modal.Title>Iniciar Sesión</Modal.Title>
                </Modal.Header>
                <Modal.Body> 
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Correo Electrónico</Form.Label>
                            <Form.Control type="email" placeholder="Introduzca su e-mail" required />
                            </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control type="password" placeholder="Contraseña" required00 />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Acepto los terminos de servicio." required />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer  className="modal-footer">
                    <Button variant="primary" onClick={handleClose}>
                        Registrarse
                    </Button>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancelar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default LoginModal;
