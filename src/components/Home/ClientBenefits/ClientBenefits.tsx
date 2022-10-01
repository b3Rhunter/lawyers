import { Container, Row, Col } from "react-bootstrap";

import "./ClientBenefits.css";

export const ClientBenefits = () => {
  return (
    <section className="cb-section">
      <Container>
        <Row>
          <Col>
            <h3 className="cb-title">CLIENT BENEFITS</h3>
            <p>
              Our members are trailblazers who understand your needs in the Web3 
              ecosystem as they too are a part of it. With us, you can be sure that 
              our legal professionals have experience in advising both individuals 
              and businesses in the blockchain ecosystem. Moreover, all members 
              have access to other legal minds from across the globe to share and 
              debate ideas to better advise you. 
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>
              Take advantage of the directory to talk to some of the world's leading Web3 
              legal experts by simply clicking on their contact details. 
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="cb-last-line">
              Find a leading Web3 lawyer, anywhere. 
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}