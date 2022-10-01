import { Col, Container, Row } from "react-bootstrap";

import { FilterComponent } from "./FilterComponent/FilterComponent";

import "./TableFilter.css";

export const TableFilter = () => {
  return (
    <Container className="filter-container">
      <Row>
        <Col className="filter-col">
          <FilterComponent/>
        </Col>
        <Col>
          <input style={{backgroundColor: "rgba(255, 255, 255, 0.1)", color: "#fff"}} placeholder="Search for a Lawyer or Keyword" className="filter-name-input" type="text" />
        </Col>
      </Row>
    </Container>
  );
}