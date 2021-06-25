/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function ProblemSec() {
  return (
    <>
      <div
        className="page-header section-dark text-center">
        <div>
          <Container>
            <h1 className="title">
            Problem Statement
            </h1>
            <br/>
            <p className="presentation-subtitle">
             <strong>User's need a one-stop website that will let them search and use the services efficiently and quickly.</strong>
            </p>
            <br/>
            <br/>
            <p className="presentation-subtitle">
            The challenge is to create a tool that will streamline the search process and at the same time provide users with enough details about the searched recipes.
           </p>
            <br/>
          </Container>
        </div>
      </div>
    </>
  );
}

export default ProblemSec;
