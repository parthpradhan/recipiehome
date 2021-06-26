/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container,Button } from "reactstrap";

// core components

function FinalSec() {
  return (
    <>
      <div
        className="page-header section">
        <div>
          <Container>
            <h1 className="title" style={{color:'black'}}>
            Final Thoughts 
            </h1>
            <h3>My reflection</h3>
            <br/>
            <p className="presentation-subtitle" style={{color:'grey'}}>
            <strong style={{color:'black'}}>What went well ?</strong><br/><br/>
            <ul style={{listStyle:'none' }}>
              <li><i class="fa fa-long-arrow-right mr-4"/>   
               Learning to appreciate gradual improvementrather than striving for perfectionism
              </li>
              <li><i class="fa fa-long-arrow-right mr-4"/>   
               Working in a state of flow, being fully immersed and forgetting about the outside world
              </li>
              <li><i class="fa fa-long-arrow-right mr-4"/>   
               Learning to use new tools.
              </li>
              <li><i class="fa fa-long-arrow-right mr-4"/>   
               Getting to know my prospective users well and creating realistic personas.
              </li>
              <li><i class="fa fa-long-arrow-right mr-4"/>   
               Being receptive of other's feedback but still making my own decisions
              </li>
            </ul>
            </p>
            <br/>
            <p className="presentation-subtitle" style={{color:'grey'}}>
            <strong style={{color:'black'}}>What would I do differently?</strong><br/><br/>
            <ul style={{listStyle:'none' }}>
              <li><i class="fa fa-long-arrow-right mr-4"/>   
               I applied trial and error approach and even though it worked out pretty well, I think in some instances it was a case of working hard rather than smart
              </li>
              <li><i class="fa fa-long-arrow-right mr-4"/>   
               I learned how important it is to get breaks and keep a fresh eye. I sometimes continued working when I was tired and not making good choices when it would have been better to simply takea break and come back with a fresh mind.
              </li>
            </ul>
            </p>
            <br/>
          </Container>
        </div>
      </div>
    </>
  );
}

export default FinalSec;
