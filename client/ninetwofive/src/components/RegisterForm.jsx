// Import necessary React and Bootstrap components
import React, { useState } from 'react';
import { Container, Form, Button,Modal  } from 'react-bootstrap';
import Axios from 'axios';


// Create the RegistrationForm component
export const RegisterForm = () => {
  // State to manage input values
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const handleCloseModal = () => setShowModal(false);
  // Function to handle form submission
  const handleRegistration = async (e) => {
    e.preventDefault();

    // Validation checks
    if (userName.length < 3) {
      alert('שם המשתמש צריך להכיל לפחות 3 תווים');
      return;
    }

    if (password.length < 8) {
      alert('הסיסמה צריכה להכיל לפחות 8 תווים');
      return;
    }

    if (!isValidEmail(email)) {
      alert('כתובת האימייל אינה חוקית');
      return;
    }
    console.log(`${process.env.REACT_APP_API_BASE_URL}/register`);
   // Call the server-side API to create a new user
  try {
    const response = await Axios.post(`${process.env.REACT_APP_API_BASE_URL}/register`, {
        username: userName,
        userpassword: password,
        usermail: email,
      });

      if (response.status === 200 && response.data.success) {
        // User created successfully
        console.log('User created successfully');
        setModalMessage('User created successfully');
        setShowModal(true);
        // Additional logic if needed
      } else {
        // Display the error message
        console.error('Failed to create user:', response.data.message);
        setModalMessage(response.data.message);
        setShowModal(true);
        // Additional error handling logic
      }
    } catch (error) {
      // Display the error message
      console.error('Error creating user:', error.message);
      setModalMessage('Error creating user: ' + error.message);
      setShowModal(true);
      // Additional error handling logic
    }
  
   
  };

  const isValidEmail = (email) => {
    // Simple email validation using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
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

       {/* Modal for displaying messages */}
       <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Registration Message</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalMessage}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};
