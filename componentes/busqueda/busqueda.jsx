import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


function ListaLugares() {
    const [id, setId] = useState('');
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [desactivador, setDesactivador] = useState(true);


    useEffect(() => {
        const fetchData = async () => {
            if (id.length === 0) {
                setData(null);
                setLoading(false);
                return;
            }
            try {
                const response = await fetch(`https://dataservice.accuweather.com/locations/v1/cities/search?apikey=wAs7rBBfVumCC6Da4SBUuM44PLCAI3Jd&q=${id}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                setData(result);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [id]); // Añadimos id como dependencia

    // useEffect(() => {
    //     const fetchData = async () => {
    //       if (id.length === 0) {
    //           setData(null);
    //           setLoading(false);
    //           return;
    //       }
    //       try {
    //           const response = await fetch(`https://dataservice.accuweather.com/currentconditions/v1/${data[0].Key}?apikey=wAs7rBBfVumCC6Da4SBUuM44PLCAI3Jd`);
    //           if (!response.ok) {
    //               throw new Error('Network response was not ok');
    //           }
    //           const result = await response.json();
    //           setData(result);
    //       } catch (error) {
    //           setError(error);
    //       } finally {
    //           setLoading(false);
    //       }
    //     };
    
    //  fetchData();
    // }, []);
    const google="google";
    const curretDate=new Date();
    const hotel="hoteles en ";
    const hoteles=hotel+id;
    const desactiv = (className) => {
        className.disabled;
      };
    function handleGameClick() {
        setDesactivador(!true);
    }
    if (loading) return <p>Cargando...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <h2>Buscador de Posibles Lugares de viaje</h2>
            <form className="city">
                <label htmlFor="idd">Busque una ciudad</label>
                <input
                    type="text"
                    className="city"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    placeholder="Ingresa el nombre de la ciudad"
                />
            </form>

            {data && data.length > 0 ? (
                <div>
                    <Card className="carta" style={{ width: '67%' }}>
                        <Card.Body>
                            <Card.Title>{id}</Card.Title>
                            <Card.Text>
                                Pais de la ciudad: {data[0].Country.LocalizedName}
                            </Card.Text>
                            <Card.Text>
                                Continente de la ciudad: {data[0].Region.LocalizedName}
                            </Card.Text>
                            <Card.Text>
                                Distrito/Provincia/Estado: {data[0].AdministrativeArea.EnglishName}
                            </Card.Text>
                            <p>{curretDate.toDateString()}</p>
                        <Button variant="primary" as="a" href={`https://www.google.com/search?q=${hoteles}`} >Buscar hoteles</Button>
                        <Button to="save" onClick={handleGameClick} >cancelador</Button>
                        <Button to="save" onClick={hoteles} disabled={desactivador} >boton dehotel</Button>

                        {/* <IconButton aria-label="delete" size="large">
                            <DeleteIcon /> */}
                        </Card.Body>
                        {/* ´ */}
                        {/* ¨ */}
                    </Card> 
                    {/* <p>Pais de la ciudad: {data[0].Country.LocalizedName}</p> */}
                    {/* <p>Continente de la ciudad: {data[0].Region.LocalizedName}</p> */}
                    {/* <p>Pais de la ciudad: {data[0].}</p> */}
                </div>
            ) : (
                <p>No se encontraron resultados</p>
            )}
        </div>
    );
}

export default ListaLugares;




{/* <p>{JSON.stringify(data[0].TimeZone,null)}</p>  */}
            {/* <p>{today}</p> */}
            {/* <pre>{JSON.stringify(data,null,2)}</pre> */}


// console.log('fetchlugares('manchester'))

// https://dataservice.accuweather.com/locations/v1/cities/search?apikey=wAs7rBBfVumCC6Da4SBUuM44PLCAI3Jd&q=manchester
// https://www.youtube.com/watch?v=kOmOyz5WNQA
// https://d1lb3lf90ja1l2.cloudfront.net/89129642921/89129642921-meeting-56bca440-b4f0-4cbb-972c-dc95f19f8010.mp4
// https://youtu.be/je3FTTunyp4
// https://github.com/public-apis/public-apis?tab=readme-ov-file#geocoding
// https://react-bootstrap.netlify.app/docs/components/carousel/





