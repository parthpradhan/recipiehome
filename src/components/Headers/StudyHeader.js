
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function StudyHeader() {
  return (
    <>
      <div
        className="page-header section-dark"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/5908061/pexels-photo-5908061.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500)",
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="title-brand">
              <h1 className="presentation-title">Recipie React</h1>
            </div>
            <h2 className="presentation-subtitle text-center">
            Make your recipes quickly and easily!
            </h2>
          </Container>
        </div>
        <div
          className="moving-clouds"
          style={{
            backgroundImage:
              "url(" + require("assets/img/clouds.png").default + ")",
          }}
        />
        <h6 className="category category-absolute">
          Designed and coded by{" "}
          <a
            href="https://aboutmain.gatsbyjs.io/"
            target="_blank"
          >
           Parth Pradhan
          </a>
        </h6>
      </div>
    </>
  );
}

export default StudyHeader;
