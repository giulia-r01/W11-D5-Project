import React from "react"
import { Navbar, Nav, Container, Row, Col, Button } from "react-bootstrap"
import MyMain from "./MyMain"
import StaticCarousel from "./StaticCarousel"
import StaticEpisode from "./StaticEpisode"
import SongList from "./SongList"
import MyFooter from "./MyFooter"
import TextOnlyCards from "./TextOnlyCards"

const MyHome = () => {
  return (
    <div>
      {/* Navbar mobile */}
      <Navbar expand="lg" className="d-lg-none" bg="dark" data-bs-theme="dark">
        <Container fluid>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="text-danger"
          />
          <Navbar.Brand className="mx-auto">
            <img
              src="./assets/logos/music.svg"
              alt="Logo"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </Navbar.Brand>
          <a href="#link-rosso" className="text-red fw-bold">
            Accedi
          </a>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className="text-white">
                Home
              </Nav.Link>
              <Nav.Link href="#about" className="text-white">
                About
              </Nav.Link>
              <Nav.Link href="#services" className="text-white">
                Services
              </Nav.Link>
              <Nav.Link href="#contact" className="text-white">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Layout mobile */}
      <div className="d-block d-lg-none px-3">
        <h2 className="pt-2 text-white">Novità</h2>
        <hr className="text-white" />
        <StaticCarousel />

        <StaticEpisode />
        <SongList />
        <TextOnlyCards />
      </div>

      {/* Layout desktop */}
      <Container fluid className="d-none d-lg-block">
        <Row>
          {/* Sidebar */}
          <Col lg={2} className="bg-dark vh-100">
            <Nav className="flex-column pt-4">
              <Nav.Link href="#home" className="text-white">
                <i className="bi bi-house-door text-danger"></i> Home
              </Nav.Link>
              <Nav.Link href="#about" className="text-white">
                <i className="bi bi-grid text-danger"></i> Novità
              </Nav.Link>
              <Nav.Link href="#services" className="text-white">
                <i className="bi bi-broadcast text-danger"></i> Radio
              </Nav.Link>
            </Nav>
          </Col>

          {/* Main Content */}
          <Col lg={10} className="text-white-50">
            <Row>
              <Col lg={3} className="text-center pt-2">
                <h5>
                  <i className="ms-2 bi bi-shuffle me-3">
                    <i className="bi bi-rewind-fill ms-2 me-2"></i>
                    <i className="bi bi-play-fill me-2 fs-1 align-middle"></i>
                    <i className="bi bi-fast-forward-fill me-2"></i>
                    <i className="bi bi-repeat"></i>
                  </i>
                </h5>
              </Col>
              <Col lg={5} className="text-center bg-secondary text-white pt-2">
                <h5>
                  <i className="bi bi-apple align-middle"></i>
                </h5>
              </Col>
              <Col lg={4} className="pt-2 text-start">
                <h5 className="d-flex align-items-center justify-content-between">
                  <i className="bi bi-volume-up-fill me-0"></i>
                  <div
                    className="progress w-25 ms-0"
                    role="progressbar"
                    aria-label="Basic example"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div className="progress-bar w-50"></div>
                  </div>
                  <Button variant="danger" className="text-white me-3">
                    <i className="bi bi-person-fill"></i> Accedi
                  </Button>
                </h5>
              </Col>
            </Row>
            <Row>
              <Col>
                <h2 className="pt-2 text-white ps-4">Novità</h2>
                <hr className="text-white ps-3" />
                <MyMain />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <MyFooter />
    </div>
  )
}

export default MyHome
