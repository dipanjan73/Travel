import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import './BookingPage.css'; 

// Import images or use placeholders for the destination images
import Manali from './image/Manali.jpeg';
import Kerala from './image/kerala.jpeg';
import Goa from './image/goa.jpeg';
import Ladakh from './image/ladakh.jpg';
import Rishikesh from './image/rishikesh.jpeg';
import Sikkim from './image/sikkim.jpeg';
import Darjeeling from './image/darjeeling.jpeg';
import Kolkata from './image/kolkata.jpg';
import Delhi from './image/delhi.jpeg';

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

function BookingPage() {
  const { id } = useParams();
  const destination = destinations.find(dest => dest.id === parseInt(id));

  return (
    <Container className="my-5 booking-page-container">
      {destination ? (
        <Row>
          <Col md={8} lg={6} className="mx-auto">
            <Card className="shadow-sm">
              <Card.Img variant="top" src={destination.image} />
              <Card.Body>
                <Card.Title>{destination.name}</Card.Title>
                <Card.Text>{destination.description}</Card.Text>
                <Form>
                  <Form.Group controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" />
                  </Form.Group>

                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" />
                  </Form.Group>

                  <Form.Group controlId="formBasicDate">
                    <Form.Label>Travel Date</Form.Label>
                    <Form.Control type="date" />
                  </Form.Group>

                  <Button variant="primary" type="submit">
                    Submit Booking
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      ) : (
        <p>Destination not found.</p>
      )}
    </Container>
  );
}

export default BookingPage;
