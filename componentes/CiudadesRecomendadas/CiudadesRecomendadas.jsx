import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './CiudadesRecomendadas.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Hcarousel from '../Hcaroussel/Hcaroussel';
import { useState } from 'react';

function RowColLayoutColWidthBreakpointExample() {
  return (
    <Container>
      <Row md={4}>
        <Col>
        1 of 3
        </Col>
        <Col xs={6}>
        2 of 3
        </Col>
        <Col>
        3 of 3
        </Col>
      </Row>
    </Container>
  );
}


function Cartas() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [count, setCount] = useState(0)
  
  const [disabled, setDisabled] = useState(false);
  const [enabled, setEnabled] = useState(true);
  const [desactivador, setDesactivador] = useState(false);

  function handleGameClick() {
    setDesactivador(!disabled);
  }
  function handleGameClic() {
    setDesactivador(!enabled);
  }




  var ll=45;
  const precioconavion=400;
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
  
  const desactiv = (className) => {
    () => setCount((count) => count+45)
    const rr=document.getElementsByClassName(className);
    rr.disabled;
    className.disabled;
  };
  



  return (
    <>
   
    <div className='cartas'> 
    <Card  className='cartas1' style={{ width: '100%' }} >
      <Card.Img variant="top" src="https://t4.ftcdn.net/jpg/02/96/15/35/360_F_296153501_B34baBHDkFXbl5RmzxpiOumF4LHGCvAE.jpg" />
      <Card.Body>
        <Card.Title>Paris</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <input type="text" />"readOnly" "disabled"
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card  className='cartas2' style={{ width: '100%' }}>
      <Card.Img variant="top" src="https://www.cronista.com/files/image/302/302492/5ffe1e5aec0ab.webp?oe=jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Reseña de viaje ${count}</Form.Label>
          <Form.Control as="textarea" rows={3} Label="lasas" disabled={desactivador} />
        </Form.Group>
        <button onClick={handleGameClick}>desactivador</button>
        <button onClick={handleGameClic}>activador</button>
        <Button variant="primary" onClick={(Botonsuma) => { 
          setCount((count) => count+precioconavion);
          handleClick();}}>
        valor {count} 
        </Button>
      </Card.Body>
    </Card>
    <Card  className='cartas3' style={{ width: '100%' }}>
      <Card.Img variant="top" src="https://www.state.gov/wp-content/uploads/2022/01/shutterstock_248799484-scaled.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Reseña de viaje ${count}</Form.Label>
          <Form.Control as="textarea" rows={3} Label="lasas" disabled={desactivador} />
        </Form.Group>
        <button onClick={handleGameClick}>desactivador</button>
        <button onClick={handleGameClic}>activador</button>
        <Button variant="primary" onClick={(Botonsuma) => { 
          setCount((count) => count+precioconavion);
          handleClick();}}>
        valor {count} 
        </Button>
      </Card.Body>
    </Card>
    <Card  className='cartas4' style={{ width: '100%' }}>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYkIEdnS0Ouk8ajir-ZQk3NrTHhpa_X9StZw&s" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Reseña de viaje ${count}</Form.Label>
          <Form.Control as="textarea" rows={3} Label="lasas" disabled={desactivador} />
        </Form.Group>
        <button onClick={handleGameClick}>desactivador</button>
        <button onClick={handleGameClic}>activador</button>
        <Button variant="primary" onClick={(Botonsuma) => { 
          setCount((count) => count+precioconavion);
          handleClick();}}>
        valor {count} 
        </Button>
      </Card.Body>
    </Card>
    <Card  className='cartas5' style={{ width: '100%' }}>
      <Card.Img variant="top" src="https://media.istockphoto.com/id/904453184/es/foto/horizonte-de-mt-fuji-y-tokio.webp?b=1&s=170667a&w=0&k=20&c=GSW2GG7BSlCAHJosk9zj5FRiMIf-qk4hnkC8Ha4mOF0=" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Reseña de viaje ${count}</Form.Label>
          <Form.Control as="textarea" rows={3} Label="lasas" disabled={desactivador} />
        </Form.Group>
        <button onClick={handleGameClick}>desactivador</button>
        <button onClick={handleGameClic}>activador</button>
        <Button variant="primary" onClick={(Botonsuma) => { 
          setCount((count) => count+precioconavion);
          handleClick();}}>
        valor {count} 
        </Button>
      </Card.Body>
    </Card>
    <Card  className='cartas6' style={{ width: '100%' }}>
      <Card.Img variant="top" src="https://viajes.nationalgeographic.com.es/medio/2017/02/13/shutterstock-209684521_fd608903.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Reseña de viaje ${count}</Form.Label>
          <Form.Control as="textarea" rows={3} Label="lasas" disabled={desactivador} />
        </Form.Group>
        <button onClick={handleGameClick}>desactivador</button>
        <button onClick={handleGameClic}>activador</button>
        <Button variant="primary" onClick={(Botonsuma) => { 
          setCount((count) => count+precioconavion);
          handleClick();}}>
        valor {count} 
        </Button>
      </Card.Body>
    </Card>
    </div>
    </>
  );
}

export default Cartas;