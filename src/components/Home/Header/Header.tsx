import { Container, Row, Col } from "react-bootstrap";
import { GlobeComponent } from "../../../features/GlobeComponent/GlobeComponent";
import { Navbar } from "../../Navbar/Navbar";
import { TextDecrypt } from "../../TextDecrypt";

import "./Header.css";



export const Header = () => {



  return (
    <Container fluid>
      <Row className="header-navbar-row">
        <Col>
          <Navbar/>
        </Col>
      </Row>
      <Row className="canvas-row">
        <Col className="canvas-col">
          <GlobeComponent />
          <Container >
            <Row >
              <Col >

              <div className="titleArea">
                <p style={{fontFamily: "Tango"}}>Find a leading</p>
        
                <h1><span className="textGradient">WEb3</span>&nbsp;
                <span style={{fontFamily: "Tango"}}>Lawyer,</span></h1>
         
                <p style={{fontFamily: "Tango-Light"}}>anywhere.</p>
              </div>  

                <div id="mobileParagraph" style={{ textAlign: "justify"}}>
                <br></br>
                <h5  style={{
                  borderTop: "1px solid #fff",
                  paddingTop: "15px"
                }}>Blockchain Lawyers Group connects a global network of legal experts in blockchain and crypto asset-related matters increasing the ease of access to competent and qualified legal advice.</h5>
                </div>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}