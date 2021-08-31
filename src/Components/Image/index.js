import React from 'react';
import { Card, Button } from 'react-bootstrap';
import rose from '../../images/rose.jpeg';

const ImageComponent = () => {
  return (
    <>
      <Card style={{ width: '15rem' }}>
        <Card.Img variant="top" src={rose} />
        <Card.Body>
          <Card.Title>Name: Watermark 1</Card.Title>
          <Card.Title>Detail: </Card.Title>
          <Card.Text>Text Watermark: </Card.Text>
          <Card.Text>Text Watermark: </Card.Text>
          <Card.Text>Opacity: </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default ImageComponent;
