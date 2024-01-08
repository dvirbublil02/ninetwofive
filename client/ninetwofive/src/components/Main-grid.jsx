import {Container,Row ,Col} from "react-bootstrap";
import { FaInstagram } from 'react-icons/fa';
import { MessageCarousel } from './MessageCarousel';

import '../style.css';

export const Grid =() =>{



    return(
      <div className="background-container">
    <Container>
          <Row className='px-5 my-5'>
            <h1 className='text-center fw-light'>NineTw<img src="./images/gem.svg" alt="◇" width="30" height="30"></img>Five </h1>
          </Row>
          
            <Row>
            <MessageCarousel />
            </Row>

            <Row className='px-5 my-5'>

            </Row>

          <Row className='px-1 my-5'>
          <Col className='px-1 my-5'>
      <h2 className="text-center py-2 fs-2">- מי אנחנו -</h2>
      <p className="text-center py-2 fs-5">
        <strong> חנות תכשיטי הכסף הטובה בנהריה, הממוקמת בשדרות הגעתון. אנו גאים להציע לכם את הקולקציה המדהימה שלנו, של תכישטים בעיצובים ייחודים ואיכות בלתי מתפשרת</strong>
      </p>
      <h4 className="text-center py-2 fs-3">הרגישו חופשי להתעדכן ולעקוב אחרינו גם באינסטגרם</h4>
      <div className="text-center">
        <a href="https://www.instagram.com/ninetwofive_nahariya?igsh=cTl5MGJxbWNoMXA2" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={70} style={{ color: '#e4405f', margin: '10px' }} />
        </a>
      </div>
    </Col>
      
          </Row>

          <Row className='px-4 my-3  order-lg-1 align-self-end'>
               
        </Row>

        
    </Container>
   </div>
    );
};