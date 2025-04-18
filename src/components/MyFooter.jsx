import { Col, Row } from "react-bootstrap"

const MyFooter = function () {
  return (
    <Row className="bg-dark text-white ps-4 pt-4">
      <Col>
        <p>
          Italia | <span className="text-white-50">English (UK)</span>
        </p>
        <p>
          <span className="text-white-50">
            Copyright <i className="bi bi-c-circle"></i> 2024
          </span>{" "}
          Apple Inc.{" "}
          <span className="text-white-50">Tutti i diritti riservati.</span>
        </p>
        <p>
          Condizioni dei servizi Internet{" "}
          <span className="text-white-50">|</span> Apple Music e Privacy{" "}
          <span className="text-white-50">|</span> Avviso sui cookie{" "}
          <span className="text-white-50">|</span> Supporto{" "}
          <span className="text-white-50">|</span> Feedback
        </p>
      </Col>
    </Row>
  )
}
export default MyFooter
