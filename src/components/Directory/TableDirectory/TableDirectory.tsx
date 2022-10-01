import { Col, Container, Row } from "react-bootstrap";
import { TableComponent } from "./TableComponent/TableComponent";
import { TableFilter } from "./TableFilter/TableFilter";

export const TableDirectory = () => {
  return (
    <Container>
      <Row>
        <Col>
          <TableFilter />
        </Col>
      </Row>
      <Row>
        <Col>
          <TableComponent />
        </Col>
      </Row>
    </Container>
  );
}