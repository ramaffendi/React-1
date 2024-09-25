import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../StyleSheet/StyleIndex.scss";

const MainFull = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <div class="container-fluid header">
              <div className="row">
                <div className="col-md-6 offset-md-1" id="button0">
                  <i className="fa-regular fa-envelope fa-2x"></i>
                  <h6 id="eduwork">Eduwork</h6>
                </div>
                <div className="col-md-1 offset-md-1 navbar1">
                  <h6>Home</h6>
                </div>
                <div className="col-md-1 navbar1">
                  <h6>Kelas</h6>
                </div>
                <div className="col-md-1 navbar1">
                  <h6>Hubungi admin</h6>
                </div>
                <div className="col-md-1 navbar">
                  <button
                    type="button"
                    className="btn btn-primary"
                    id="button4"
                  >
                    Membership
                  </button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MainFull;
