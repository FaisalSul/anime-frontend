import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {

    return (
        <Navbar bg="black" variant='dark' expand="lg">
            <Container>
                <Navbar.Brand>Anime</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <LinkContainer to="/">
                            <Nav.Link >Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/animes">
                            <Nav.Link >Anime</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;
