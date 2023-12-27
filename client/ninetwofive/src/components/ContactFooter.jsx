
import {Container,Col,Row,Button,Form} from 'react-bootstrap';
import {Link} from 'react-router-dom';
export const ContactFooter =() =>{
    return(


                <footer className="py-4 my-5 bg-dark">
                <Container>

                <Row>
                    <Col>
                    <h2 className="text-light mb-4 text-end">: ליצירת קשר </h2>
                        <Form className="col-md-6 offset-md-6">
                                <div className="mb-3 text-end">
                                    <label htmlFor="name" className="form-label text-light text-left">שם מלא</label>
                                    <input type="text" className="form-control mb-3 text-end" id="name" />
                                </div>
                                <div className="mb-3 text-end">
                                    <label htmlFor="email" className="form-label text-light">כתובת דואר אלקטרוני</label>
                                    <input type="email" className="form-control mb-3 text-end" id="email" />
                                </div>
                                <div className="mb-3 text-end">
                                    <label htmlFor="email" className="form-label text-light">מספר פלאפון</label>
                                    <input type="email" className="form-control mb-3 text-end" id="email" />
                                </div>
                                <div className="mb-3 text-end">
                                    <label htmlFor="message" className="form-label text-light">תוכן הפנייה</label>
                                    <textarea className="form-control mb-3 text-end" id="message" rows="4"></textarea>
                                </div>
                                <p className="text-light text-end">
                                                    * בלחיצה על שלח אתה מסכים לתקנון וחוקי האתר *
                                </p>
                                <div className="d-grid gap-2 col-6 mx-auto">
                                <Button type="submit" className="btn btn-primary">שלח</Button>
                                </div>
                                
                        </Form>
                    </Col>

                </Row>

                <Row className="py-4">
                    <Col>
                    
                    
                       
                        <Link to="/WebRules" className="btn btn-secondary  mx-1">
                                תקנון האתר
                                </Link> 
                    </Col > 

                </Row>

                <Row className="py-4">
                    <Col>
                    
                    
                        <p class="text-center text-white">Copyright &copy; Dvir Bublil </p>
                        
                    </Col>

                </Row>



                </Container>
                </footer>


    );
};