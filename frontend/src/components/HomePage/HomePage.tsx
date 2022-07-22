import React from 'react';
import { Card, Container } from 'react-bootstrap';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class HomePage extends React.Component{
  render() {
    return (
      <Container>
        <Card>
          <Card.Body>
              <Card.Title>
                <FontAwesomeIcon icon={ faHome } /> Home
              </Card.Title>
              <Card.Text>
                  Ovde ide sadrzaj pocetne
              </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

