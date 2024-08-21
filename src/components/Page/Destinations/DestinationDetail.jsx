import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

// Import images or use a placeholder for the destination images
import Manali from './image/Manali.jpeg';
import Kerala from './image/kerala.jpeg';
import Goa from './image/goa.jpeg';
import Ladakh from './image/ladakh.jpg';
import Rishikesh from './image/rishikesh.jpeg';
import Sikkim from './image/sikkim.jpeg';
import Darjeeling from './image/darjeeling.jpeg';
import Kolkata from './image/kolkata.jpg';
import Delhi from './image/delhi.jpeg';

const destinationData = [
  { id: 1, name: 'Manali', description: 'Experience the romance and beauty of Manali.', image: Manali, details: 'Detailed information about Manali.' },
  { id: 2, name: 'Kerala', description: 'Discover the lush greenery and tranquil backwaters of Kerala.', image: Kerala, details: 'Detailed information about Kerala.' },
  { id: 3, name: 'Goa', description: 'Enjoy the beaches and vibrant nightlife of Goa.', image: Goa, details: 'Detailed information about Goa.' },
  { id: 4, name: 'Ladakh', description: 'Explore the stunning landscapes of Ladakh.', image: Ladakh, details: 'Detailed information about Ladakh.' },
  { id: 5, name: 'Rishikesh', description: 'Experience the spiritual and adventurous activities in Rishikesh.', image: Rishikesh, details: 'Detailed information about Rishikesh.' },
  { id: 6, name: 'Sikkim', description: 'Discover the diverse flora and fauna of Sikkim.', image: Sikkim, details: 'Detailed information about Sikkim.' },
  { id: 7, name: 'Darjeeling', description: 'Enjoy the scenic beauty of the tea gardens in Darjeeling.', image: Darjeeling, details: 'Detailed information about Darjeeling.' },
  { id: 8, name: 'Kolkata', description: 'Experience the cultural richness and history of Kolkata.', image: Kolkata, details: 'Detailed information about Kolkata.' },
  { id: 9, name: 'Delhi', description: 'Explore the historical monuments and bustling markets of Delhi.', image: Delhi, details: 'Detailed information about Delhi.' },
];

function DestinationDetail() {
  const { id } = useParams();
  const destination = destinationData.find(dest => dest.id === parseInt(id));

  return (
    <Container className="my-5">
      {destination ? (
        <Row>
          <Col md={6}>
            <Card>
              <Card.Img variant="top" src={destination.image} />
              <Card.Body>
                <Card.Title>{destination.name}</Card.Title>
                <Card.Text>{destination.details}</Card.Text>
                <Button variant="primary">Book Now</Button>
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

export default DestinationDetail;
