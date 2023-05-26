import React, { useEffect, useState } from 'react';
import './Cafe.css';
import { Nav, Navbar, Row } from 'react-bootstrap';
import Header from '../header/header';
import CafeElement from './CafeElement';

function Cafe() {
  const [state, setState] = useState([]);

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

  return (
    <div>
      <Header />
      <Row>
        <table className="table table-striped">
          <tbody>
            {state.map((val) => (
              <CafeElement key={val.id} {...val} />
            ))}
          </tbody>
        </table>
      </Row>
    </div>
  );
}

export default Cafe;