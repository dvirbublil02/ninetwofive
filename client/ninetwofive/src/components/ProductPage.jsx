import React, { useState } from 'react';
import { Container, Row, Col, Card, Modal, Button } from 'react-bootstrap';
import { ContactFooter } from '../components/ContactFooter';

const ProductPage = ({ heading, products }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleImageClick = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleAddToCart = (product) => {
    // Add your logic here for adding the product to the cart
    // You can use a state, context, or dispatch an action to manage the cart state
    console.log(`Added ${product.name} to the cart`);
  };

  const handleBuyNow = (product) => {
    // Add your logic here for handling the "Buy Now" action
    console.log(`Buy Now: ${product.name}`);
  };

  return (
    <div className="Main">
      <Container>
        <h2 className="text-center my-5">{heading}</h2>
        <Row>
          {products.map((product) => (
            <Col key={product.id} md={4} className="mb-4">
              <Card>
                {/* Use a function to handle image click */}
                <Card.Img
                  variant="top"
                  src={product.image}
                  style={{ height: '400px', objectFit: 'cover', cursor: 'pointer' }}
                  onClick={() => handleImageClick(product)}
                />
                <Card.Body className="d-flex flex-column align-items-center">
                  <Card.Title className="text-center">{product.name}</Card.Title>
                  <Card.Text className="text-center">{product.price}</Card.Text>
                  <Button variant="primary" onClick={() => handleAddToCart(product)} className="mt-auto mr-2">
                    Add to Cart
                  </Button>
                  <Button variant="success" onClick={() => handleBuyNow(product)} className="mt-auto">
                    Buy Now
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Modal for displaying the selected image */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton />
        <Modal.Body>
          {selectedProduct && (
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              style={{ width: '100%', maxHeight: '80vh', objectFit: 'contain' }}
            />
          )}
        </Modal.Body>
      </Modal>

      <ContactFooter />
    </div>
  );
};

export default ProductPage;
