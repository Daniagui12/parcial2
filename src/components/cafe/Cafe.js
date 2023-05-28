import React, { useEffect, useState } from 'react';
import './Cafe.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Header from '../header/header';
import CafeElement from './CafeElement';
import { FormattedDate, FormattedMessage } from 'react-intl';
import Footer from '../footer/Footer';

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
          <Col md={8} className="firstColumnTable">
            <table className="table table-striped">
              <thead style={{ backgroundColor: '#343a40', color: 'white' }}>
                <tr>
                  <th>#</th>
                  <th>
                    <FormattedMessage id="Nombre" />
                  </th>
                  <th>
                    <FormattedMessage id="Tipo" />
                  </th>
                  <th>
                    <FormattedMessage id="Region" />
                  </th>
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
            <div className="detailContainer">
              {selectedCafe ? (
                <Card style={{ backgroundColor: '#f2f2f2' }}>
                  <Card.Body>
                    <Card.Title className="titleCard" style={{ fontWeight: 'bold', fontSize: '15px' }}>{selectedCafe.nombre}</Card.Title>
                    <Card.Text>
                      <FormattedDate>
                        value={selectedCafe.fecha_cultivo}
                      </FormattedDate>
                      </Card.Text>
                    <div className="imageContainer">
                      <Card.Img
                        variant="top"
                        src={selectedCafe.imagen}
                        alt="Cafe Image"
                        className="imageCard"
                      />
                    </div>
                    <Card.Text>
                      <FormattedMessage id="Notas"/>
                    </Card.Text>
                    <Card.Text>{selectedCafe.notas}</Card.Text>
                    <Card.Text style={{ fontWeight: 'bold', fontSize: '15px' }}>
                      <FormattedMessage id="Harvest" />
                    </Card.Text>
                    <Card.Text style={{ fontWeight: 'bold', fontSize: '15px' }}>{selectedCafe.altura} 
                      <FormattedMessage id="msnm" />
                    </Card.Text>
                  </Card.Body>
                </Card>
              ) : (
                <div className="empty-card"></div>
              )}
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default Cafe;