import React from "react";
import { Container, Nav } from "react-bootstrap";

export class MainMenu extends React.Component {
    render() {
        return(
            <Container>
                <Nav variant="tabs">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                    <Nav.Link href="/login">Log In</Nav.Link>
                </Nav>
            </Container>
        );
    }
}