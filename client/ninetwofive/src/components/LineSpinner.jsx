import {Spinner,Container} from "react-bootstrap";

export const LineSpinner =() =>{
    return(
        <Container className="d-flex justify-content-center align-items-center">
        <Spinner animation="border" size="sm" />
        <Spinner animation="border" size="sm" />
        <Spinner animation="border" />
        <Spinner animation="grow" />
        <Spinner animation="grow" size="sm" />
        <Spinner animation="grow" size="sm" />
        </Container>
    );
};


             