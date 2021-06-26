/*eslint-disable*/
import React from "react";

// reactstrap components
import { Row,Col,Container,Button } from "reactstrap";
import home from '../../assets/img/home.gif';
import search from '../../assets/img/search.gif';
import about from '../../assets/img/about.gif';
import pro from '../../assets/img/pro.png';
// core components

function ProductSec() {
  return (
    <>
    <div
        className="page-header section"
       >
        <div>
          <Container>
            <h1 className="title" style={{color:'black'}}>
            Final Product
            </h1>
            <h2 style={{color:"grey"}} className="presentation-subtitle" style={{color:'black'}}>The wireframes and mockups made it very clear what needs to be implemented and where each element needs to be coded and placed.</h2>
            <br/><br/>
            <Row>
            <Col className="ml-auto mr-auto">
            <img src={pro} alt="product" width="90%" height="90%" />
            </Col>
            </Row>
          </Container>
        </div>
      </div>
      <div
        className="content-center"
        style={{position:"relative"}}
       >
        <div>
          <Container>
            <h1 className="title">
            Mobile View
            </h1>
            <h2 style={{color:"grey"}} className="presentation-subtitle">The site is perfectly responsive to suit the needs of mobile and tablet users.</h2>
            <br/><br/>
            <Row>
              <Col md="4">
              <img src={home} alt="home" width="75%" height="75%" />
              </Col>
              <Col md="4">
              <img src={search} alt="search" width="75%" height="75%" />
              </Col>
              <Col md="4">
              <img src={about} alt="about" width="75%" height="75%" />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default ProductSec;
