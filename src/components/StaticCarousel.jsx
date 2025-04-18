import React from "react"
import { Carousel, Card, Row, Col, Container } from "react-bootstrap"

const StaticCarousel = () => {
  return (
    <>
      <Carousel
        interval={3000}
        indicators={false}
        className="d-block d-md-none"
      >
        <Carousel.Item>
          <Row className="justify-content-center">
            <Col xs={12} className="mb-3">
              <Card className="help-color text-white border-0">
                <Card.Body>
                  <Card.Title className="text-white-50">
                    NUOVA STAZIONE RADIO
                  </Card.Title>
                  <Card.Text>
                    Rilassati, al resto ci pensiamo noi.
                    <br />
                    Ascolta Apple Music Chill
                  </Card.Text>
                  <Card.Img variant="bottom" src="/assets/img/1a.png" />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row className="justify-content-center">
            <Col xs={12} className="mb-3">
              <Card className="help-color text-white border-0">
                <Card.Body>
                  <Card.Title className="text-white-50">
                    NUOVA STAZIONE RADIO
                  </Card.Title>
                  <Card.Text className="pb-4">
                    Ecco la nuova casa della musica latina
                  </Card.Text>
                  <Card.Img variant="bottom" src="/assets/img/1b.png" />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Carousel.Item>
      </Carousel>

      <Row className="justify-content-between d-none d-md-flex">
        <Col md={6} className="mb-3">
          <Card className="help-color text-white border-0">
            <Card.Body>
              <Card.Title className="text-white-50">
                NUOVA STAZIONE RADIO
              </Card.Title>
              <Card.Text>
                Rilassati, al resto ci pensiamo noi.
                <br />
                Ascolta Apple Music Chill
              </Card.Text>
              <Card.Img src="/assets/img/1a.png" />
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="mb-3">
          <Card className="help-color text-white border-0">
            <Card.Body>
              <Card.Title className="text-white-50">
                NUOVA STAZIONE RADIO
              </Card.Title>
              <Card.Text className="pb-4">
                Ecco la nuova casa della musica latina
              </Card.Text>
              <Card.Img src="/assets/img/1b.png" />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default StaticCarousel
