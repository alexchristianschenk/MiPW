import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import FormGroupExample from './formulariotop'; 
import './formulario.css'

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [count, setCount] = useState(0)
  
  const [disabled, setDisabled] = useState(false);
  const [enabled, setEnabled] = useState(true);
  var ll=45;
  
  const handleClick = (className) => {
      
      
      setDisabled(true);
      setEnabled(false);
      const rr=document.getElementsByClassName(className);
      () => setCount((count) => count+45)
      
  };
  const handleClic = (className) => {
      
    setEnabled(true);
    setDisabled(false);
    const rr=document.getElementsByClassName(className);
    () => setCount((count) => count+45)
  };
  const precioconavion=400;
  return (
    <>
      <Button className="derecha" variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>
      <button disabled={enabled} onClick={() => {
      setCount((count) => count-precioconavion);
      handleClic();
      }} > Cancelar boleto de aviòn en el paquete {count}</button>
    
      {/* <Form>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      </Form> */}
      <FormGroupExample />
    <p>para enviar precio acordado (mìnimo de $200)+ extras</p>
      <button className="boton" onClick={() => setCount((count) => count+0)}>
          precio final=${(count)}
      </button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
        
      </Modal>
      {/*  */}
      
      <button className="Botonsuma" disabled={disabled} onClick={(Botonsuma) => {
      setCount((count) => count+precioconavion);
      handleClick();
      }} > sumar al viaje boleto de aviòn ($400)</button>
      
      <p>PRECIO FINAL:${count}</p>
      
      
    </>
  );
}

export default Example;

