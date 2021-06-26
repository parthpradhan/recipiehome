import React from "react";

// core components
import StudyNavbar from "components/Navbars/StudyNavbar.js";
import StudyHeader from "components/Headers/StudyHeader.js";
import StartSec from "components/Sections/startSec";
import DesignProcess from "components/Sections/designprocess";
import ProblemSec from "components/Sections/problemSec";
import Footer from "components/Footers/Footer.js";
//add competitive section later
//add survey section
import IdeationProcess from "components/Sections/ideation";
import ProductSec from "components/Sections/productSec";
import FinalSec from "components/Sections/final";
function StudyPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  return (
    <>
      <StudyNavbar />
      <StudyHeader />
      <StartSec />
      <DesignProcess />
      <ProblemSec/>
      <IdeationProcess/>
      <ProductSec/>
      <FinalSec/>
      <Footer />
    </>
  );
}

export default StudyPage;
