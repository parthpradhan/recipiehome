import React from "react";
import classnames from "classnames";
import {
  Button,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
} from "reactstrap";

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <Navbar className={classnames("fixed-top", navbarColor)} expand="lg">
      <Container>
        <div className="navbar-translate">
          <NavbarBrand
            data-placement="bottom"
            href="/"
            rel="noopener noreferrer"
            title="Parth Pradhan"
          >
          Recipie React
          </NavbarBrand>
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse,
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://www.linkedin.com/in/parth-shankar-pradhan-584b761aa/"
                target="_blank"
                title="Follow me on LinkedIN"
              >
                <i className="fa fa-linkedin" />
                <p className="d-lg-none">LinkedIn</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://github.com/parthpradhan"
                target="_blank"
                title="Github"
              >
                <i className="fa fa-github" />
                <p className="d-lg-none">Github</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://www.instagram.com/thesoulfrost/"
                target="_blank" rel="noopener noreferrer"
                title="Follow us on Instagram"
              >
                <i className="fa fa-instagram" />
                <p className="d-lg-none">Instagram</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://www.behance.net/parthpradhan1"
                target="_blank"
                title="Behance"
              >
                <i className="fa fa-behance" />
                <p className="d-lg-none">Behance</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="https://aboutmain.gatsbyjs.io/"
              >
              About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink active
                href="#"
              >
                <i className="nc-icon nc-book-bookmark" /> Case Study
              </NavLink>
            </NavItem>
            <NavItem>
              <Button
                className="btn-round"
                color="danger"
                href="https://parthpradhan.github.io/Recipie/"
                rel="noopener noreferrer"
              >
                <i className="fa fa-search"></i> Search
              </Button>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default IndexNavbar;
