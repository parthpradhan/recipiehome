/*eslint-disable*/
import React from "react";

// reactstrap components
import { Row,Col,Container,Button } from "reactstrap";
import pic from '../../assets/img/cr8.jpg';
import pw1 from '../../assets/img/pw1.jpg';
import pw2 from '../../assets/img/pw2.jpg';
import wireframe from '../../assets/img/wireframe.png';
import mockups from '../../assets/img/mockups.png';
import ia from '../../assets/img/sitemap.png';
// core components

function IdeationProcess() {
  return (
    <>
      <div
        className="page-header section"
       >
        <div>
          <Container>
            <h1 className="title" style={{
           color:'black'
          }}>
            Ideation
            </h1>
            <h2>CrazyEights</h2>
            <br/><br/>
            <Row>
              <Col md="6">
              <img src={pic} alt="crazyeight" width="100%" height="100%" />
              </Col>
              <Col md="6">
              <p style={{color:"grey"}}>“Crazy 8’s is a core Design Sprint method. It is a fast sketching exercise that challenges people to sketch eight distinct ideas in eight minutes. The goal is to push beyond your first idea, frequently the least innovative, and to generate a wide variety of solutions to your challenge.”</p>
              <br/>
              <br/>
              <p>
                <strong> Pre-requisite:</strong> You have to have a problem. The problem is the reason behind your challenge.<br/>   <br/>
                <strong>The goal:</strong> To interprete an idea and to generate a solution to your challenge.<br/>   <br/>
                <strong>The deliverable:</strong> 8 distinct ideas into a form of text, images or illustrations.<br/>
              </p>
              <br/>
              <Button
                className="btn-round"
                color="info"
                href="https://uxdesign.cc/how-to-do-crazy-8s-remotely-223d7fbd5e98"
                target="_blank"
              >
                Read More
              </Button>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <div
        className="page-header section"
       >
        <div>
          <Container>
            <h2>Paper Wireframes</h2>
            <h4 style={{color:"grey"}}>It is a sketch or drawing that represents the skeleton of a website or an app interface.It it is often done on a sheet of paper or a whiteboard using a pencil or a pen for rapid simulation and testing</h4>
            <br/><br/>
            <Row>
              <Col md="6">
              <img src={pw1} alt="paper wireframe 1" width="100%" height="100%" />
              </Col>
              <Col md="6">
              <img src={pw2} alt="paper wireframe 2" width="100%" height="100%" />
              </Col>
            </Row>
          </Container>
          </div>
          </div>
 
      <div
        className="page-header section mt-4"
       >
        <div>
          <Container>
            <h1 className="title" style={{
           color:'black'
          }}>
            Information Architecture
            </h1>
            <p style={{color:"grey"}}>Once I had created a rough concept of the features and how they would be organized, I translated these ideas from sticky notes into mid-fidelity information architecture trees. This helped me understand which screen states and modals I needed to design</p>
            <br/><br/>
            <Row>
              <Col>
              <img src={ia} alt="information" width="100%" height="100%" />
              </Col>
            
            </Row>
          </Container>
        </div>
        </div>
      <div
        className="page-header section"
       >
        <div>
          <Container>
            <h1 className="title" style={{
           color:'black'
          }}>
            Digital Wireframes
            </h1>
            <h2>Low Fidelity Prototypes</h2>
            <h4 style={{color:"grey"}}>This process allows all stakeholders to agree on where the information will be placed before the developers build the interface out with code</h4>
            <br/><br/>
            <Row>
              <Col>
              <img src={wireframe} alt="wireframes" width="100%" height="100%" />
              </Col>
            
            </Row>
          </Container>
        </div>
        </div>
        <div
        className="page-header section"
       >
        <div>
          <Container>
            <h1 className="title" style={{
           color:'black'
          }}>
            Mockups
            </h1>
            <h2>High Fidelity Prototypes</h2>
            <h4 style={{color:"grey"}}>It is a rough draft of a finished product or visually rendered representation of a finished product</h4>
            <br/><br/>
            <Row>
              <Col>
              <img src={mockups} alt="mockups" width="100%" height="100%" />
              </Col>
            
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default IdeationProcess;
