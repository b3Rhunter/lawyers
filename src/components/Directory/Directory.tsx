import { Col, Container, Row } from "react-bootstrap";

import { TableDirectory } from "./TableDirectory/TableDirectory";
import { Navbar } from "../Navbar/Navbar";
import { useAppDispatch } from "../../app/hooks";
import { toggle } from "../../features/applicationForm/applicationFormSlice";
import { Footer } from "../Home/Footer/Footer";

import "./Directory.css";

export const Directory = () => {
  const dispatch = useAppDispatch();

  const handleClick = () => dispatch(toggle());
  
  return (
    <Container fluid>
      <Row className="header-navbar-row">
        <Col>
          <Navbar/>
        </Col>
      </Row>
      <Container>
        <Row>
          <Col>
            <h1 id="directory" style={{fontFamily: 'Rajdhani'}} className="directory-title">Directory</h1>
          </Col>
          <Col className="directory-apply-button-col">
            <a href="https://docs.google.com/forms/d/1xByegLdLm69gYBMulSTbWl9uswE-WsuNPDKVbo80wrA/viewform?edit_requested=true">
            <button className="po-button">Apply</button>
            </a>
          </Col>
        </Row>
      </Container>
      <TableDirectory />
      <Footer />
    </Container>
  );
}