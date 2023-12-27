// Import necessary React and Bootstrap components
import React, { useState } from 'react';
import { Container, Form, Button,Modal  } from 'react-bootstrap';

import { registerUser } from '../apis/ServerApi';


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
        // Regular expression for English letters, numbers, and specific special characters
    var regex = /^[a-zA-Z0-9!@#%^*()]+$/;

    if (!regex.test(userName)) {
      alert('שם המשתמש יכול לכלול רק אותיות אנגליות, מספרים, ואת התווים המיוחדים ! @ # % ^ * ( )');
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
   
   // Call the server-side API to create a new user
  try {
     const response = await registerUser(userName, password, email);

     if (response && response.success) {
      console.log('User created successfully');
      setModalMessage('!חשבונך נוצר בהצלחה');
      setShowModal(true);
      // Additional logic if needed
    } else if (response && response.message) {
      console.error('Failed to create user:', response.message);
      setModalMessage('שגיאת מערכת , נסה שוב מאוחר יותר');
      setShowModal(true);
      // Additional error handling logic
    } else {
      console.error('Unexpected response format:', response);
      setModalMessage('שגיאת מערכת , נסה שוב מאוחר יותר');
      setShowModal(true);
    }
  } catch (error) {
    console.error('Error creating user:', error.message);
    setModalMessage('!שם המשתמש או כתובת האימייל תפוסים');
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
          <Modal.Title>הודעת מערכת - הרשמה</Modal.Title>
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
