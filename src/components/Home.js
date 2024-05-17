import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

const Home = () => {
    return (
        <Card>
            <Container>
                <Row className="justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
                    <Col md={6}>
                        <Card.Body>
                            <Card.Title className="text-center">Welcome to the Anime App</Card.Title>
                            <Card.Text className="text-center">
                                This is a simple app that allows you to view, create, update, and delete animes.
                            </Card.Text>
                        </Card.Body>
                    </Col>
                    <Col md={6} >
                        <img
                            src={'/zoro.png'}
                            alt="Anime"
                            style={{ maxWidth: '100%', height: 'auto', borderRadius: '5px' }}
                        />
                    </Col>
                </Row>
            </Container>
        </Card>
    );
}

export default Home;
