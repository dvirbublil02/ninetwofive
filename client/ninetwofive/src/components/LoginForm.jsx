import React, { useState } from 'react';
import { Container, Form, Button,Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const LoginForm = () => {
  const [userName, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const handleCloseModal = () => setShowModal(false);
  const handleLogin = (e) => {
    e.preventDefault();
    // Validation checks
    if (userName.length < 3) {
      alert('שם המשתמש צריך להכיל לפחות 3 תווים');
      return;
    }
        // Regular expression for English letters, numbers, and specific special characters
    var regex = /^[a-zA-Z0-9!@#%^*()]+$/;
    
    if (!regex.test(userName)) {
      alert('שם המשתמש יכול לכלול רק אותיות אנגליות, מספרים, ואת התווים המיוחדים ! @ # % ^ * ( )');
      return;
    }
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

       {/* Modal for displaying messages */}
       <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>הודעת מערכת - התחברות</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalMessage}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            אישור
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};
