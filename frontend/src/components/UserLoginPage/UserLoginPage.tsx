import React from 'react';
import { Card, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignIn, faSignOut } from '@fortawesome/free-solid-svg-icons';

export default class UserLoginPage extends React.Component {
    render(){
        return(
            <Container>
                <Card>
                    <Card.Body>
                        <Card.Title>
                            <FontAwesomeIcon icon={ faSignIn } /> Sing in
                            <br />
                            <FontAwesomeIcon icon={ faSignOut } /> Sing out
                        </Card.Title>
                        <Card.Text>
                            Ovde treba da se unese forma za prijavu korisnika
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        );
    }
}