import React, { useState, useEffect } from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const AnimeList = () => {
    const [animes, setAnimes] = useState([]);
    
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/api/anime`, { method: 'GET' })
            .then(response => response.json())
            .then(data => {
                setAnimes(data);
            });
    }, []);

    return (
        <Container fluid className="mt-5">
            <Row className="justify-content-center">
                <Col md={10}>
                    <Card className="p-4 shadow">
                        <h1>Anime</h1>
                        <LinkContainer to={`/animes/add`}>
                            <Button variant="info" className="mb-3">Add Anime</Button>
                        </LinkContainer>
                        <Row>
                            {animes.map(anime => (
                                <Col key={anime.id} sm={12} md={6} lg={4} xl={3}>
                                    <Card className="my-3 p-3 rounded">
                                        <LinkContainer to={`/anime/${anime.id}`}>
                                            <Card.Title as="h2">
                                                <strong>{anime.title}</strong>
                                            </Card.Title>
                                        </LinkContainer>
                                        <Card.Text as="div">
                                            <div className="my-3">
                                                {anime.description}
                                            </div>
                                        </Card.Text>
                                        <Card.Text as="h3">
                                            {anime.estimatedTime}
                                        </Card.Text>
                                        <Card.Text as="h3">
                                            {anime.yearStarted}
                                        </Card.Text>
                                        <LinkContainer to={`/animes/${anime.id}`}>
                                            <Button variant="success">View Anime</Button>
                                        </LinkContainer>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default AnimeList;
