import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

const Home = () => {
    return (
        <Container fluid>
            <Row className="justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
                <Col md={6}>
                    <Card className="p-4 shadow">
                        <Card.Body>
                            <h1 className="text-center mb-4">Welcome to the Anime App</h1>
                            <p className="lead text-center">
                                This is a simple app that allows you to view, create, update, and delete animes.
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} className="d-flex justify-content-center">
                    <img
                        src={process.env.PUBLIC_URL + '/zoro.png'}
                        alt="Anime"
                        style={{ maxWidth: '80%', height: 'auto', borderRadius: '5px' }}
                    />
                </Col>
            </Row>
        </Container>
    );
}

export default Home;
