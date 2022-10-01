import { Col, Container, Row } from "react-bootstrap";
import { MBCard } from "../MBCard/MBCard";

import { IMBCard } from "../MBCard/MBCard";

import "./CardsTable.css";

type ICardsTable = {
  cards: IMBCard[]
}

export const CardsTable = (props: ICardsTable) => {
  return (
    <Container>
      <Row className="cards-table-row">
        {props.cards.map((e) => {
          return (
            <Col xs={12} sm={6} md={4}>
              <MBCard {...e} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}