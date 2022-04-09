import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./Project.css";
import fin from "../Assets/4-fin-logo.png";

export default class Project extends React.Component {
  render() {
    return (
      <div id="contact" className="contact">
        <p className="title p-3">Clients worked with</p>
        <Container className="details">
          <Row>
            <Col>
              <Container className="card-container">
                <div>
                  <div className="client-card">
                      <img className="logo-image" src={fin} alt="4fin" />
                      <h3>4Fin Technologies Pvt. Ltd.</h3>
                  </div>
                </div>
              </Container>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
