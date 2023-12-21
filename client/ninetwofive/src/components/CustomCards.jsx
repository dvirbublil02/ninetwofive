import React from 'react';
import { Card, Button } from 'react-bootstrap';


export const CustomCard = ({ buttonText, imageUrl  }) => {
  
  return (
    <Card style={{ width: '16rem' }}>
      <Card.Img variant="top" src={imageUrl} alt="Card Image" />
      <Card.Body className="text-center">
        <Button variant="primary">{buttonText}</Button>
        
      </Card.Body>
    </Card>
  );
};

