import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Manali from './image/Manali.jpeg';
import Kerala from './image/kerala.jpeg';
import Goa from './image/goa.jpeg';
import Ladakh from './image/ladakh.jpg';
import Rishikesh from './image/rishikesh.jpeg';
import Sikkim from './image/sikkim.jpeg';
import Darjeeling from './image/darjeeling.jpeg';
import Kolkata from './image/kolkata.jpg';
import Delhi from './image/delhi.jpeg';
import './Destinations.css';

// Sample data for destinations
const destinations = [
  { id: 1, name: 'Manali', description: 'Experience the romance and beauty of Manali.', image: Manali },
  { id: 2, name: 'Kerala', description: 'Discover the lush greenery and tranquil backwaters of Kerala.', image: Kerala },
  { id: 3, name: 'Goa', description: 'Enjoy the beaches and vibrant nightlife of Goa.', image: Goa },
  { id: 4, name: 'Ladakh', description: 'Explore the stunning landscapes of Ladakh.', image: Ladakh },
  { id: 5, name: 'Rishikesh', description: 'Experience the spiritual and adventurous activities in Rishikesh.', image: Rishikesh },
  { id: 6, name: 'Sikkim', description: 'Discover the diverse flora and fauna of Sikkim.', image: Sikkim },
  { id: 7, name: 'Darjeeling', description: 'Enjoy the scenic beauty of the tea gardens in Darjeeling.', image: Darjeeling },
  { id: 8, name: 'Kolkata', description: 'Experience the cultural richness and history of Kolkata.', image: Kolkata },
  { id: 9, name: 'Delhi', description: 'Explore the historical monuments and bustling markets of Delhi.', image: Delhi },
];

function Destinations() {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter destinations based on search term
  const filteredDestinations = destinations.filter(destination =>
    destination.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {/* Hero Section */}
      <div className="hero-section text-center text-light mb-5">
        <Container>
          <Row>
            <Col>
              <h1>Explore Our Destinations</h1>
              <p>Find the perfect place for your next adventure.</p>
              <Form.Control
                type="text"
                placeholder="Search Destinations"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="mb-4"
              />
            </Col>
          </Row>
        </Container>
      </div>

      {/* Featured Destinations */}
      <Container>
        <h2 className="text-center mb-4">Featured Destinations</h2>
        <Row>
          <Col md={12} className="mb-4">
            <Carousel>
              {filteredDestinations.map(destination => (
                <Carousel.Item key={destination.id}>
                  <img
                    className="d-block w-100"
                    src={destination.image}
                    alt={destination.name}
                  />
                  <Carousel.Caption>
                    <h3>{destination.name}</h3>
                    <p>{destination.description}</p>
                    <Link to={`/book/${destination.id}`}>
                      <Button className="btn-red">Book Now</Button>
                    </Link>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Destinations;
