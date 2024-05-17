import React, { useState, useEffect } from 'react';
import { Form, Card, Container, Row, Col, Button } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';

const AnimeUpdate = () => {
    const navigate = useNavigate();
    const [anime, setAnime] = useState({});
    const { id } = useParams();

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setAnime({ ...anime, [name]: value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        
        fetch(`${process.env.REACT_APP_API_URL}/api/anime/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(anime),
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                navigate(-1);
            }
           );
    }

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/api/anime/${id}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setAnime(data)
            });
    }
        , [id]);

    return (
        <Card>
            <Container>
                <h1>Modify Anime</h1>
                <Row>
                    <Col>
                        <Card className="my-3 p-3 rounded">
                            <Form>
                                <Form.Group controlId="formTitle">
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter Anime Title"
                                        name="title"
                                        value={anime.title}
                                        onChange={handleInputChange}

                                    />
                                </Form.Group>
                                <Form.Group controlId="formformDescription">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter Anime Description"
                                        name="description"
                                        value={anime.description}
                                        onChange={handleInputChange}

                                    />
                                </Form.Group>
                                <Form.Group controlId="formEstimatedTime">
                                    <Form.Label>Seasons</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter total seasons "
                                        name="estimatedTime"
                                        value={anime.estimatedTime}
                                        onChange={handleInputChange}

                                    />
                                </Form.Group>
                                
                                <Form.Group controlId="formYearStarted">
                                    <Form.Label>Year Started</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter Anime year Started"
                                        name="yearStarted"
                                        value={anime.yearStarted}
                                        onChange={handleInputChange}

                                    />
                                </Form.Group>
                            </Form>



                        </Card>
                        <Button onClick={handleSubmit} variant="dark">Save</Button>
                        &nbsp;
                        <Button onClick={() => navigate(-1)} variant="dark">Cancel</Button>
                    </Col>
                </Row>
            </Container>
        </Card>
    )
}

export default AnimeUpdate;
