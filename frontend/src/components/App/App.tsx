import React from 'react';
import './App.css';
import { Container } from 'react-bootstrap';
import { faHome, faUpload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function App() {
  return (
    <Container>
      <FontAwesomeIcon icon={faHome} /> Home
      <br />
      <FontAwesomeIcon icon={faUpload} /> Upload
    </Container>
  );
}

export default App;
 