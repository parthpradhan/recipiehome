/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function StartSec() {
  return (
    <>
      <div
        className="page-header section text-center">
        <div>
          <Container>
            <h1 className="title" style={{
           color:'black'
          }}>
            Recipie React
            </h1>
            <br/>
            <p className="presentation-subtitle" style={{
           color:'black'
          }}>
             <strong>Development / Design / June 2021</strong>
            </p>
            <br/>
            <p className="presentation-subtitle" style={{
           color:'black'
          }}>
            This project was for my Google UX Design course. The objective of the course was to learn how to maintain design consistency across different media touchpoints. I completed this project over the course of 2 weeks, and learned an incredible amount about brand identity and strategy.
            </p>
            <br/>
            <p className="presentation-subtitle" style={{
           color:'black'
          }}>
            <strong>Tech used:</strong> Figma, AdobeXD, VSCode, React JS, pen and paper
            </p>
            <br/>
            <p className="presentation-subtitle" style={{
           color:'black'
          }}>
            <strong>My Role:</strong> As a solo designer and developer, I was responsible for the entire design and coding process which included completitive analysis, user surveys, personas, wireframing, mockups, prototyping and more.
            </p>
            <br/>
          </Container>
        </div>
      </div>
    </>
  );
}

export default StartSec;
