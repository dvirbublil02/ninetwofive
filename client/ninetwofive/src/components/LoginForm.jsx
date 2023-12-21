// Import necessary React and Bootstrap components
import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

// Create the Login component
export const LoginForm =() => {
  // State to manage input values
  const [userName, setUser] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle form submission
  const handleLogin = (e) => {
    e.preventDefault();

    // Perform authentication logic here (e.g., send a request to a server)

    // For this example, just log the credentials
    console.log('User Name:', userName);
    console.log('Password:', password);

    // You can redirect the user to another page upon successful login
    // For now, let's just clear the form fields
    setUser('');
    setPassword('');
  };

  return (
    <Container className="mt-5 py-4 mb-3 text-end">
      <Form onSubmit={handleLogin}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>: שם משתמש </Form.Label>
          <Form.Control className="mb-3 text-end"
            type="user name"
            placeholder="מקום להכנסת שם משתמש"
            value={userName}
            onChange={(e) => setUser(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword" className="my-4 mb-3 text-end ">
          <Form.Label>: סיסמה  </Form.Label>
          <Form.Control className="mb-3 text-end"
            type="password"
            placeholder="מקום להכנסת סיסמה"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="my-4">
          Login
        </Button>
      </Form>
    </Container>
  );
};
