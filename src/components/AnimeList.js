import React, { useState, useEffect } from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const AnimeList = () => {
    const [animes, setAnimes] = useState([]);
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/api/anime`, { method: 'GET' })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setAnimes(data)
            });
    }, []);

    return (
        <Card>
            <Container>
                <h1>Anime</h1>
                <LinkContainer to={`/animes/add`}>
                    <Button variant="dark">Add Anime</Button>
                </LinkContainer>
                <Row>
                    {animes.map(anime => (
                        <Col key={anime.id} sm={12} md={6} lg={4} xl={3}>
                            <Card className="my-3 p-3 rounded">
                                <LinkContainer to={`/anime/${anime.id}`}>
                                    <Card.Title as="div">
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
                                    <Button variant="dark">View Anime</Button>
                                </LinkContainer>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </Card>
    )
}

export default AnimeList;





