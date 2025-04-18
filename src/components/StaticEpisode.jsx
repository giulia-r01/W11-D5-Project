import { Col, Row, Card } from "react-bootstrap"

const StaticEpisode = function () {
  return (
    <Row className="justify-content-center px-4 pt-3 g-1">
      <h2 className="text-white">
        Episodi e altro <i className="bi bi-chevron-right text-white fs-5"></i>
      </h2>
      {/* Card 1 */}
      <Col xs={12} md={4} lg={2} className="mb-4">
        <Card className="help-color text-white">
          <Card.Img variant="top" src="/assets/img/2a.png" />
          <Card.Body>
            <Card.Text>Prologo con Abuelo</Card.Text>
          </Card.Body>
        </Card>
      </Col>

      {/* Card 2 */}
      <Col xs={12} md={4} lg={2} className="mb-4">
        <Card className="help-color text-white">
          <Card.Img variant="top" src="/assets/img/2b.png" />
          <Card.Body>
            <Card.Text>The Wandered</Card.Text>
          </Card.Body>
        </Card>
      </Col>

      {/* Card 3 */}
      <Col xs={12} md={4} lg={2} className="mb-4">
        <Card className="help-color text-white">
          <Card.Img variant="top" src="/assets/img/2c.png" />
          <Card.Body>
            <Card.Text>Michael Bublé & Carry Pearce</Card.Text>
          </Card.Body>
        </Card>
      </Col>

      {/* Card 4 */}
      <Col xs={12} md={4} lg={2} className="mb-4">
        <Card className="help-color text-white">
          <Card.Img variant="top" src="/assets/img/2d.png" />
          <Card.Body>
            <Card.Text>Stephan Moccio: The Zane Lowe Interview</Card.Text>
          </Card.Body>
        </Card>
      </Col>

      {/* Card 5 */}
      <Col xs={12} md={4} lg={2} className="mb-4">
        <Card className="help-color text-white">
          <Card.Img variant="top" src="/assets/img/2e.png" />
          <Card.Body>
            <Card.Text>Chart Spotlight Julia Michaels</Card.Text>
          </Card.Body>
        </Card>
      </Col>

      <Col xs={12} md={4} lg={2} className="mb-4">
        <Card className="help-color text-white">
          <Card.Img variant="top" src="/assets/img/2f.png" />
          <Card.Body>
            <Card.Text>Karry & Travis Millis</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  )
}
export default StaticEpisode
