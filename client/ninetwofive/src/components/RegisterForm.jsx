// Import necessary React and Bootstrap components
import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

// Create the RegistrationForm component
export const RegisterForm = () => {
    // State to manage input values
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
  
    // Function to handle form submission
    const handleRegistration = (e) => {
      e.preventDefault();
  
      // Perform registration logic here (e.g., send a registration request to a server)
  
      // For this example, just log the registration details
      console.log('User Name:', userName);
      console.log('Password:', password);
      console.log('Email:', email);
  
      // You can redirect the user to another page upon successful registration
      // For now, let's just clear the form fields
      setUserName('');
      setPassword('');
      setEmail('');
    };
  
    return (
      <Container className="mt-5 py-4 mb-3 text-end">
        <Form onSubmit={handleRegistration}>
          <Form.Group controlId="formBasicUserName">
            <Form.Label>: שם משתמש </Form.Label>
            <Form.Control
            className="mb-3 text-end"
              type="text"
              placeholder="מקום להכנסת שם משתמש"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          </Form.Group>
  
          <Form.Group controlId="formBasicEmail" className="my-4 mb-3 text-end">
            <Form.Label>: אימייל </Form.Label>
            <Form.Control
              type="email"
              className="mb-3 text-end"
              placeholder="מקום להכנסת כתובת דואר אלקטרוני"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>
  
          <Form.Group controlId="formBasicPassword" className="my-4 mb-3 text-end">
            <Form.Label>: סיסמה  </Form.Label>
            <Form.Control
              type="password"
              className="mb-3 text-end"
              placeholder="מקום להכנסת סיסמה"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>
  
          <Button variant="primary" type="submit" className="my-4 mx-5">
            Register
          </Button>
        </Form>
      </Container>
    );
  };