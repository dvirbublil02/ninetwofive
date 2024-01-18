import { useState } from 'react';
import { Container, Card, Form, Button,Row,Col } from 'react-bootstrap';
import { Footer } from '../components/MainFooter';
import { addProduct } from '../apis/ServerApi';

export const Add =  () => {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    image: null,
    category: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setProduct({ ...product, image: file });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Validation checks
    if (!product.name || !product.price || !product.image || !product.category) {
      alert('Please fill in all details');
      return;
    }
  
    if (!/^[a-zA-Z\s]+$/.test(product.name)) {
      alert('Invalid name. Use only letters and spaces.');
      return;
    }
  
    if (!/^\d+(\.\d{1,2})?$/.test(product.price)) {
      alert('Invalid price. Use only digits and an optional decimal point.');
      return;
    }
  
    const allowedExtensions = /(\.jpg)$/i;
    if (!allowedExtensions.test(product.image.name)) {
      alert('Invalid image format. Use only JPG images.');
      return;
    }


    // TODO: Send the product information to the server
    try {
      const response = await addProduct(product.name,product.price,product.image,product.category);
      console.log(response);
    }catch(error){
      console.log(error);
    };
  
    // Reset the form after submission
    setProduct({ name: '', price: '', image: null, category: '' });
  };

  return(
    
    <div className="Main ">
     <div className="Main d-flex align-items-center justify-content-center py-5 ">
     <Container className=" ">
        <Row>
          <Col md={6} className="mx-auto my-5">
            <Card >
              <Card.Header className="text-center">הוספת פריט</Card.Header>
              <Card.Body>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-4" controlId="productName">
                    <Form.Label>שם המוצר</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="הכנס שם"
                      name="name"
                      value={product.name}
                      onChange={handleInputChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-4" controlId="productPrice">
                    <Form.Label>מחיר</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="הכנס מחיר"
                      name="price"
                      value={product.price}
                      onChange={handleInputChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>תמונה</Form.Label>
                    <Form.Control
                      type="file"
                      accept="image/*"
                      name="image"
                      onChange={handleImageChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-4" controlId="productCategory">
                    <Form.Label>קטגוריה</Form.Label>
                    <Form.Control
                      as="select"
                      name="category"
                      value={product.category}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">תבחר סוג פריט</option>
                      <option value="bracelet">צמיד</option>
                      <option value="necklace">שרשרת</option>
                      <option value="earring">עגילים</option>
                      {/* Add more categories as needed */}
                    </Form.Control>
                  </Form.Group>

                  <Button variant="primary" type="submit">
                    הוסף מוצר
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
   
      </div>
     <Footer />
  </div>
  );
};
