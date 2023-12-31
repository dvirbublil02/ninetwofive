import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { ContactFooter } from '../components/ContactFooter';

export const Unauthorized = () => {
  return (
    <div className="Main">
      <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
        <Row className="text-center">
          <div>
            <h1>This URL is not avliable</h1>
            <p>Sorry, the page you are looking for does not allowed with your premissions.</p>
            <p>סליחה, הדף שאתה מחפש לא ניתן לגישה עבור ההרשאות שלך.</p>
          </div>
        </Row>
      </Container>
      <ContactFooter />
    </div>
  );
};
