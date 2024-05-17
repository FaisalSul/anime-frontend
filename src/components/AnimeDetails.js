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
            .then(data => {
                navigate('/animes');
            }
            );
    }


    //TODO: Uncomment to fetch the course details from the REST API
    useEffect(() => {

        fetch(`${process.env.REACT_APP_API_URL}/api/anime/${id}`, { method: 'GET' })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setAnime(data)
            }
            );
    }, [id]);

    return (
        <Card>

            <Container>
                <h1>{anime.title}</h1>
                <Button onClick={() => navigate(-1)} variant="dark">Back</Button>
                &nbsp;
                <LinkContainer to={`/animes/update/${id}`}>
                    <Button variant="dark">Edit Anime</Button>
                </LinkContainer>
                &nbsp;
                <Button onClick={handleDelete} variant="dark">Delete</Button>
                <Row>
                    <Col>

                        <Card className="my-3 p-3 rounded">
                            <Card.Title as="div">
                                <strong>{anime.title}</strong>
                            </Card.Title>
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

                        </Card>
                    </Col>
                </Row>

            </Container>


        </Card>
    )
}

export default AnimeDetails;

