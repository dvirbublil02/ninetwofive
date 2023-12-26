import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const LoginForm = () => {
  const [userName, setUser] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('User Name:', userName);
    console.log('Password:', password);
  };

  return (
    <Container className="mt-5 py-4 mb-3 text-end">
      <Form onSubmit={handleLogin}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>: שם משתמש </Form.Label>
          <Form.Control
            className="mb-3 text-end"
            type="user name"
            placeholder="מקום להכנסת שם משתמש"
            value={userName}
            onChange={(e) => setUser(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword" className="my-4 mb-3 text-end">
          <Form.Label>: סיסמה </Form.Label>
          <Form.Control
            className="mb-3 text-end"
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

        {/* Use Link to navigate to the register page */}
        <Link to="/register" className="btn btn-secondary my-4 mx-2">
          Register
        </Link>
      </Form>
    </Container>
  );
};
