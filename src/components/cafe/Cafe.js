import React, { useEffect, useState } from 'react';
import './Cafe.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Header from '../header/header';
import CafeElement from './CafeElement';

function Cafe() {
  const [state, setState] = useState([]);
  const [selectedCafe, setSelectedCafe] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/cafes');
        const data = await response.json();
        setState(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleCafeClick = async (id) => {
    try {
      const response = await fetch(`http://localhost:3001/cafes/${id}`);
      const data = await response.json();
      setSelectedCafe(data);
    } catch (error) {
      console.error('Error fetching cafe detail:', error);
    }
  };

  return (
    <div>
      <Header />
      <Container>
        <Row>
          <Col md={8}>
            <table className="table table-striped">
              <thead style={{ backgroundColor: '#343a40', color: 'white' }}>
                <tr>
                  <th>#</th>
                  <th>Nombre</th>
                  <th>Tipo</th>
                  <th>Region</th>
                </tr>
              </thead>
              <tbody>
                {state.map((val) => (
                  <CafeElement
                    key={val.id}
                    props={val}
                    onClick={() => handleCafeClick(val.id)}
                  />
                ))}
              </tbody>
            </table>
          </Col>
          <Col md={4}>
            {selectedCafe ? (
              <Card>
                <Card.Body>
                  <Card.Title>{selectedCafe.nombre}</Card.Title>
                  <Card.Img variant="top" src={selectedCafe.imagen} className='imageCard'/>
                  <Card.Text>Fecha Cultivo: {selectedCafe.fecha_cultivo}</Card.Text>
                  <Card.Text>Altura: {selectedCafe.altura}</Card.Text>
                  <Card.Text>Notas: {selectedCafe.notas}</Card.Text>
                </Card.Body>
              </Card>
            ) : (
              <div style={{ backgroundColor: 'white' }}>
                <p>No cafe selected</p>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Cafe;