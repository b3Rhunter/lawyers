import { Col, Container, Row } from "react-bootstrap";
import { BsEnvelope } from "react-icons/bs";
//import { BsLinkedin, BsTwitter, BsEnvelope } from "react-icons/bs";
import { BiBuildingHouse } from "react-icons/bi";

import "./Contacts.css";

export const Contacts = () => {
  return (
    <section >
      <Container>
        <Row>
          <Col>
            <h3 className="contacts-title">CONTACTS</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <p><span><BsEnvelope /></span> email</p>
            <p><span><BiBuildingHouse /></span> address</p>
          </Col>
          <Col className="contacts-links-col">
            {/*<a href="#" target="_blank" rel="noreferrer"><BsLinkedin /></a>
            <a href="#" target="_blank" rel="noreferrer"><BsTwitter /></a>*/}
          </Col>
        </Row>
      </Container>
    </section>
  );
}