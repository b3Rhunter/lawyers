import { ReactNode, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

import "./MBCard.css";

export type IMBCard = {
  children: ReactNode,
  title: string,
  text: string
}

export const MBCard = (props: IMBCard) => {
  const [active, setActive] = useState(false);

  const handleClick = () => setActive(!active);
  
  return (
    <Container onClick={handleClick} className={`mbcard ${active ? 'active' : ''}`}>
      <Row className="mbcard-row-text">
        <Col>
          <p>{props.title}</p>
          <p>{props.text}</p>
        </Col>
      </Row>
      <Row>
        <Col className="mbcard-icon-col">_________________</Col>
      </Row>
    </Container>
  );
}