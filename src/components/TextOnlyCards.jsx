import React from "react"
import { Container, Row, Col, Card } from "react-bootstrap"

const TextOnlyCards = () => {
  return (
    <Container className="py-4">
      <Row className="g-4">
        <h2 class="text-white">Altro da esplorare</h2>{" "}
        <Col xs={12} lg={4}>
          <Card className="bg-dark">
            <Card.Body>
              <Card.Text className="text-danger">Esplora per genere</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} lg={4}>
          <Card className="bg-dark">
            <Card.Body>
              <Card.Text className="text-danger">WorldWide</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} lg={4}>
          <Card className="bg-dark">
            <Card.Body>
              <Card.Text className="text-danger">Video musicali</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} lg={4}>
          <Card className="bg-dark">
            <Card.Body>
              <Card.Text className="text-danger">Decenni</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} lg={4}>
          <Card className="bg-dark">
            <Card.Body>
              <Card.Text className="text-danger">Classifiche</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} lg={4}>
          <Card className="bg-dark">
            <Card.Body>
              <Card.Text className="text-danger">Nuovi artisti</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} lg={4}>
          <Card className="bg-dark">
            <Card.Body>
              <Card.Text className="text-danger">
                Attività e stati d'animo
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} lg={4}>
          <Card className="bg-dark">
            <Card.Body>
              <Card.Text className="text-danger">Audio spaziale</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} lg={4}>
          <Card className="bg-dark">
            <Card.Body>
              <Card.Text className="text-danger">Hit del passato</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default TextOnlyCards
