import React, { useState } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { ContactFooter } from '../components/ContactFooter';

export const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Product 1', price: 20, quantity: 2, image: 'product1.jpg' },
    { id: 2, name: 'Product 2', price: 30, quantity: 1, image: 'product2.jpg' },
    // Add more items as needed
  ]);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="Main">
      <Container className="mt-5">
        <h2 className="mb-4 text-center">סל קניות</h2>
        {cartItems.length === 0 ? (
          <p className="text-center">הסל ריק</p>
        ) : (
          <>
            <Table striped bordered hover className="text-center">
              <thead>
                <tr>
                  <th>מוצר</th>
                  <th>מחיר</th>
                  <th>כמות</th>
                  <th>מחיר ביניים</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <img src={item.image} alt={item.name} style={{ width: '50px', height: '50px' }} />
                      {item.name}
                    </td>
                    <td>${item.price}</td>
                    <td>{item.quantity}</td>
                    <td>${item.price * item.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <p className="text-center">
              <strong>סה"כ: ${calculateTotal()}</strong>
            </p>
            <Button variant="primary" className="mx-auto d-block">
              המשך ברכישה
            </Button>
          </>
        )}
      </Container>
      <ContactFooter />
    </div>
  );
};