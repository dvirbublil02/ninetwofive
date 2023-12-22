import React from 'react';
import { Row, Col, Alert } from 'react-bootstrap';
import { ContactFooter } from '../components/ContactFooter';

export const New =() =>{
    return(
      
      <div className="Main">
          <Row className="justify-content-center py-5">
              <Col xs={12} md={8} lg={6} className="text-center">
                <Alert variant="warning">
                  <h1 className="display-4">הדף נמצא תחת תחזוקה</h1>
                  <p className="lead">מצטערים על האי נוחות, אנא בדוק שוב בקרוב</p>
                </Alert>
              </Col>
            </Row>
    <ContactFooter />
    </div>
    );
  };
  