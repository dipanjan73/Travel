import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './About.css'; // Optional for custom styling
import Download   from './download 1.jpeg'
import Download2 from './download 3.jpeg'
import Download3 from './photo-1605723517503-3cadb5818a0c.avif'

function About() {
  return (
    <Container className="my-5">
      {/* About Section */}
      <Row>
        <Col md={6}>
          <h1>About Us</h1>
          <p>
            Welcome to Travel Haven! We are a team of travel enthusiasts dedicated to helping you find your next great adventure. Whether you're looking for a relaxing beach holiday, an adventurous mountain trek, or a cultural city experience, we've got you covered.
          </p>
          <p>
            Our mission is to provide personalized travel experiences that cater to your interests and preferences. With our expert recommendations and comprehensive travel guides, you can be sure that your next trip will be unforgettable.
          </p>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Img variant="top" src={Download} alt="Travel Image" />
            <Card.Body>
              <Card.Title>Our Journey</Card.Title>
              <Card.Text>
                Since our inception, we have been committed to offering the best travel services and experiences. Our team of dedicated travel experts ensures that every trip you book with us is smooth and enjoyable.
              </Card.Text>
              <Button variant="primary">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Team Section */}
      <Row className="mt-5">
        <Col>
          <h2>Meet Our Team</h2>
        </Col>
      </Row>
      <Row>
        {/* Example Team Member */}
        <Col md={4} className="mb-4">
          <Card>
            <Card.Img variant="top" src= {Download2} alt="Team Member" />
            <Card.Body>
              <Card.Title>John Doe</Card.Title>
              <Card.Text>Travel Expert & Guide</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card>
            <Card.Img variant="top" src={Download3} alt="Team Member" />
            <Card.Body>
              <Card.Title>Jane Smith</Card.Title>
              <Card.Text>Customer Relations</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        {/* Add more team members as needed */}
      </Row>
    </Container>
  );
}

export default About;
