import {Container,Row ,Col,Image} from "react-bootstrap";
import { CustomCard } from "./CustomCards";
import { LineSpinner } from "./LineSpinner";


export const Grid =() =>{
    return(
    <Container>
          <Row className='px-5 my-5'>
            <h1 class='text-center fw-light'>NineTw<img src="./images/gem.svg" alt="◇" width="30" height="30"></img>Five </h1>
          </Row>
          
            <Row>
            <Image src=" ./images/bg1.png"
               fluid rounded className="" />
            </Row>

          <Row className="px-3 my-5">
            <Col sm={3}>
             <Image src="./images/p1.jpg"
               fluid rounded className="offset-md-7 order-lg-1 align-self-end" />
            </Col>
            
            <Col sm={3} className="px-3 my-5">
            <Image src="./images/shop1.jpg"
               fluid rounded className="offset-md-7 order-lg-1 align-self-end" />
            </Col>
            
            <Col sm={3} >
            <Image src="./images/p3.jpg"
               fluid rounded className="offset-md-7 order-lg-1 align-self-end" />
            </Col>
          </Row>

          <Row className='px-5 my-5'>
            <Col>
              <LineSpinner /> 
            </Col>
      
          </Row>

          <Row className='px-4 my-5 offset-md-1 order-lg-1 align-self-end'>
                <Col className="px-1 my-5" id="rings">
                    <CustomCard buttonText="טבעות" imageUrl="./images/r9.jpg" />
                </Col>
                <Col className="px-1 my-5" id="watches">
                    <CustomCard buttonText="שעונים" imageUrl="./images/m-w4.jpg"/>
                </Col>
                <Col className="px-3 my-5" id="necklace">
                    <CustomCard buttonText="שרשראות" imageUrl="./images/p2.jpg" />
                </Col>
            </Row>

          <Row className='px-4 my-5 offset-md-1 order-lg-1 align-self-end'>
                <Col className="px-1 my-5" id="bracelets">
                    <CustomCard buttonText="צמידים" imageUrl="./images/b6.jpg" />
                </Col>
                <Col className="px-1 my-5" id="earing">
                      <CustomCard buttonText="עגילים" imageUrl="./images/ear2.jpg" />
                </Col>

                <Col className="px-3 my-5"  id="newc">
                      <CustomCard buttonText="קולקציאה חדשה" imageUrl="./images/p4.jpg" />
                </Col>
         </Row>

        
    </Container>
    );
};