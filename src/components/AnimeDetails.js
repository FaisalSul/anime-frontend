import React, { useState, useEffect } from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

const AnimeDetails = () => {
    const navigate = useNavigate();
    const [anime, setAnime] = useState({});
    const { id } = useParams();

    const handleDelete = (event) => {
        event.preventDefault();
        fetch(`${process.env.REACT_APP_API_URL}/api/anime/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(() => {
                navigate('/animes');
            });
    }

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/api/anime/${id}`)
            .then(response => response.json())
            .then(data => {
                setAnime(data);
            });
    }, [id]);

    return (
        <Container fluid className="mt-5">
            <Row className="justify-content-center">
                <Col md={8}>
                    <Card className="p-4 shadow">
                        <h1>{anime.title}</h1>
                        <Row className="mt-3">
                            <Col>
                                <Button onClick={() => navigate(-1)} variant="dark" className="mr-2">Back</Button>
                                &nbsp;
                                <LinkContainer to={`/animes/update/${id}`}>
                                    <Button variant="dark" className="mr-2">Edit Anime</Button>
                                </LinkContainer>
                                &nbsp;
                                <Button onClick={handleDelete} variant="danger">Delete</Button>
                            </Col>
                        </Row>
                        <Row className="mt-4">
                            <Col>
                                <Card className="my-3 p-3 rounded">
                                    <Card.Title as="h2" className="mb-4">
                                        <strong>{anime.title}</strong>
                                    </Card.Title>
                                    <Card.Text>
                                        <strong>Description: </strong>{anime.description}
                                    </Card.Text>
                                    <Card.Text>
                                        <strong>Seasons: </strong>{anime.estimatedTime}
                                    </Card.Text>
                                    <Card.Text>
                                        <strong>Year Started: </strong>{anime.yearStarted}
                                    </Card.Text>
                                </Card>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default AnimeDetails;
