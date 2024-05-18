import React, { useState } from 'react';
import { Form, Card, Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const AnimeAdd = () => {
    const navigate = useNavigate();
    const [anime, setAnime] = useState({});
    const [error, setError] = useState(null);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setAnime({ ...anime, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        
        fetch(`${process.env.REACT_APP_API_URL}/api/anime/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(anime),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
                navigate('/animes');
            })
            .catch(err => {
                console.error('Fetch error:', err);
                setError('Failed to add anime. Please try again.');
            });
    };

    return (
        <Container fluid>
            <Row className="justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
                <Col md={6}>
                    <Card className="p-4 shadow">
                        <h1 className="text-center mb-4">Add Anime</h1>
                        {error && <div className="alert alert-danger">{error}</div>}
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="formTitle">
                                <Form.Label>Title</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter Anime Title"
                                    name="title"
                                    onChange={handleInputChange}
                                />
                            </Form.Group>
                            <Form.Group controlId="formDescription">
                                <Form.Label>Description</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter Anime Description"
                                    name="description"
                                    onChange={handleInputChange}
                                />
                            </Form.Group>
                            <Form.Group controlId="formEstimatedTime">
                                <Form.Label>Seasons</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter Anime total seasons"
                                    name="estimatedTime"
                                    onChange={handleInputChange}
                                />
                            </Form.Group>
                            <Form.Group controlId="formYearStarted">
                                <Form.Label>Year Started</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter Anime year Started"
                                    name="yearStarted"
                                    onChange={handleInputChange}
                                />
                            </Form.Group>
                            <div className="mb-4"></div> {/* Added space between form content and buttons */}
                            <div className="d-flex justify-content-start">
                                <Button type="submit" variant="success">Save</Button>
                                &nbsp;
                                <Button onClick={() => navigate(-1)} variant="dark" className="mr-2">Cancel</Button>
                            </div>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default AnimeAdd;
