import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Home/Home.css'
import kasol from './kasolimage.jpg'
import kashmir from './kashmirimage.jpg'
import kerala from './keralaimage.jpeg'


function Home() {
  return (
    <div>
    {/* Hero Section */}
    <div className="hero-section text-center text-light">
      <Container>
        <Row>
          <Col>
            <h1>Explore the World with Us</h1>
            <p>Find your perfect destination and start your adventure today.</p>
            <Button variant="primary" size="lg">Get Started</Button>
          </Col>
        </Row>
      </Container>
    </div>

    {/* Featured Destinations */}
    <Container className="my-5">
      <h2 className="text-center mb-4">Featured Destinations</h2>
      <Row>
        <Col md={4} className="mb-4">
          <Card>
            <Card.Img variant="top" className='card'  src={kasol} />
            <Card.Body>
              <Card.Title>kasol</Card.Title>
              <Card.Text>Experience the romance and beauty of Paris, the city of lights.</Card.Text>
              <Button variant="outline-primary">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card>
            <Card.Img variant="top" className='card'  src={kashmir} />
            <Card.Body>
              <Card.Title>kashmir</Card.Title>
              <Card.Text>Discover the hustle and bustle of New York City, the city that never sleeps.</Card.Text>
              <Button variant="outline-primary">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card>
            <Card.Img variant="top" className='card'  src={kerala} />
            <Card.Body>
              <Card.Title>kerala</Card.Title>
              <Card.Text>Immerse yourself in the vibrant culture and technology of Tokyo.</Card.Text>
              <Button variant="outline-primary">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>

    {/* Call-to-Action Section */}
    <div className="cta-section text-center bg-primary text-light py-5">
      <Container>
        <h2>Ready to Book Your Next Trip?</h2>
        <p>Join us today and start planning your next adventure.</p>
        <Button variant="light" size="lg">Book Now</Button>
      </Container>
    </div>
  </div>
  )
}

export default Home
