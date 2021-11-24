import { useContext } from "react"
import { Form, Col, Row, Button, Modal, } from "react-bootstrap"
import GamesContext from "../utils/GameContext"
import signandlog from "./signandlog.module.css"


function Login() {
  const { login, loginshow, handleCloseLogin } = useContext(GamesContext)
  return (
    <div className="ms-4 mt-4">
    <Modal show={loginshow} onHide={handleCloseLogin}>
      <Form className={signandlog.log} onSubmit={e => {
        login(e)
        handleCloseLogin()
        
        }}>
        <Modal.Header closeButton>
          <Modal.Title className={signandlog.signup}> LOGIN </Modal.Title>
        </Modal.Header>
        <Modal.Body className={signandlog.signup1}>
         
          <Form.Group as={Row} className="mb-3">
            <Row>
            <Form.Label >
              Email
            </Form.Label>
            </Row>
            <Col md="10">
              <Form.Control type="email" name="email" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
          <Row>
            <Form.Label >
              Password
            </Form.Label>
            </Row>
            <Col md="10">
              <Form.Control type="password" name="password" required />
            </Col>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-warning" type="submit">
            LOGIN
          </Button>
          <Button onClick={handleCloseLogin}  variant="outline-secondary">
            CLOSE
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  
  </div>
  
  )
}


export default Login
