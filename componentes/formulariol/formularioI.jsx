import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Example from '../formulario/formulario';
import ListaLugares from '../busqueda/busqueda';

function FormularioI() {
  const [validated, setValidated] = useState(false);
  const [price, setPrice] = useState(0);
  const [mas2, setMas2]=useState(false);
  
  
  
  
  const [id, setId] = useState('');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    if (validated==true){
      console.log(ll)
    }
  };
  const ll=0;
  
  // useEffect(() => {
  //   const fetchData = async () => {
  //     if (id.length === 0) {
  //         setData(null);
  //         setLoading(false);
  //         return;
  //     }
  //     try {
  //         const response = await fetch(`https://dataservice.accuweather.com/locations/v1/cities/search?apikey=wAs7rBBfVumCC6Da4SBUuM44PLCAI3Jd&q=${id}`);
  //         if (!response.ok) {
  //             throw new Error('Network response was not ok');
  //         }
  //         const result = await response.json();
  //         setData(result);
  //     } catch (error) {
  //         setError(error);
  //     } finally {
  //         setLoading(false);
  //     }
  //   };

  // fetchData();
  // }, [id]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     if (id.length === 0) {
  //         setData(null);
  //         setLoading(false);
  //         return;
  //     }
  //     try {
  //         const response = await fetch(`https://dataservice.accuweather.com/currentconditions/v1/${data[0].Key}?apikey=wAs7rBBfVumCC6Da4SBUuM44PLCAI3Jd`);
  //         if (!response.ok) {
  //             throw new Error('Network response was not ok');
  //         }
  //         const result = await response.json();
  //         setData(result);
  //     } catch (error) {
  //         setError(error);
  //     } finally {
  //         setLoading(false);
  //     }
  //   };

  // fetchData();
  // }, []);














  // if (loading) return <p>Cargando...</p>;
  // if (error) return <p>Error: {error.message}</p>;



  
  return (
    
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
       
      <aside>
      <ListaLugares class="ListaLugares" />
      </aside>
  
      
      {/* <p>valor del viaje:${price}</p>
      <label>Price</label>
      <input type="number" value={price} onChange={(e) => setPrice(+e.target.value)}></input>
      <p >value={price + (10 / 100) * price}</p>
       */}
      <Example />
        
      <Button type="submit">Submit</Button>
    </Form>
    
  )
}

export default FormularioI;
// https://stackoverflow.com/questions/65449121/how-can-we-add-two-different-value-in-react-jsx
// https://developer.accuweather.com/accuweather-locations-api/apis/get/locations/v1/cities/search
// https://rapidapi.com/wirefreethought/api/geodb-cities/playground/59908659e4b028109d40dd75
// https://github.com/yanelricarte/diplo_fullstack_2024/tree/main/proyecto_react/vite-project/src/componentes
// https://app.netlify.com/sites/deft-melba-39826c/overview