import Carousel from 'react-bootstrap/Carousel';
import './Hcaroussel.css';

function Hcarousel() {
  return (
    <Carousel data-bs-theme="dark" className='caroussel'>
      <Carousel.Item>
        <img 
          src="https://t4.ftcdn.net/jpg/02/96/15/35/360_F_296153501_B34baBHDkFXbl5RmzxpiOumF4LHGCvAE.jpg"
          className="d-block w-100"
          alt="First slide"
        />
        <Carousel.Caption>
     
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.cronista.com/files/image/302/302492/5ffe1e5aec0ab.webp?oe=jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.state.gov/wp-content/uploads/2022/01/shutterstock_248799484-scaled.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
    
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Hcarousel;