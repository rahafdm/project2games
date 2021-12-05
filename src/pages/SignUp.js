import { useContext } from "react"
import { Form, Col, Row, Button, Modal } from "react-bootstrap"
import GamesContext from "../utils/GameContext"
import signandlog from "./signandlog.module.css"

function SignUp() {
  const { signUp, signupshow, handleCloseSignup, handleOpenLogin } = useContext(GamesContext)
  return (
    <div style={{ borderRadius: "10%" }} className="ms-4 mt-4">
      <Modal show={signupshow} onHide={handleCloseSignup}>
        <Form
          className={signandlog.log}
          onSubmit={e => {
            signUp(e)
            handleCloseSignup()
            handleOpenLogin()
          }}
        >
          <Modal.Header closeButton>
            <Modal.Title className={signandlog.signup}> SIGN UP </Modal.Title>
          </Modal.Header>
          <Modal.Body className={signandlog.signup1}>
            <Form.Group as={Row} className="mb-3">
              <Row>
                <Form.Label>First Name</Form.Label>
              </Row>
              <Col md="10">
                <Form.Control type="text" name="firstName" required />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Row>
                <Form.Label>Last Name</Form.Label>
              </Row>
              <Col md="10">
                <Form.Control type="text" name="lastName" required />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Row>
                <Form.Label>Email</Form.Label>
              </Row>
              <Col md="10">
                <Form.Control type="email" name="email" required />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Row>
                <Form.Label>Password</Form.Label>
              </Row>
              <Col md="10">
                <Form.Control type="password" name="password" required />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Row>
                <Form.Label>Image</Form.Label>
              </Row>
              <Col md="10">
                <Form.Control type="url" name="photo" required />
              </Col>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline-warning" type="submit">
              SIGNUP
            </Button>
            <Button onClick={handleCloseSignup} variant="outline-secondary">
              close
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  )
}

export default SignUp
