import React, { useState } from 'react';
import { Container, Form, Button,Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


import { loginUser } from '../apis/ServerApi';

export const LoginForm = () => {
  const [userName, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

    // useNavigate hook for programmatic navigation
    const navigate = useNavigate();

  const handleCloseModal = () => setShowModal(false);
  const handleLogin = async (e) => {
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
    try {
      const response = await loginUser(userName, password);
 
      if (response && response.success) {
       console.log('User created successfully');
       setModalMessage('! התחברת בהצלחה ');
       setShowModal(true);

       
       // Use navigate to redirect the user to a new page after successful login
        navigate('/Owners');
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
     setModalMessage('!שם משתמש או סיסמה לא נכונים ');
     setShowModal(true);
     // Additional error handling logic
   }
   
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
