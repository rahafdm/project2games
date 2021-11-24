import { useContext } from "react"
import { Form, Button, Col, Row } from "react-bootstrap"
import GamesContext from "../utils/GameContext"
import video from "../images/video1.MOV"
import styles from "./addgame.module.css"

function AddGame() {
  const { addGames } = useContext(GamesContext)
  return (
    <div className=" addgame">
      <video className={styles.video} src={video} autoPlay muted loop />
      <h1 className={styles.title}> ADD GAME </h1>
      <Form className="mt-5" onSubmit={addGames}>
        <Form.Group as={Row} className="mb-3">
          <Col md="5">
            <Form.Control
              type="text"
              name="title"
              placeholder=" Type your Title ... "
              style={{ textAlign: "center", marginLeft: "400px" }}
              required
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Col md="5">
            <Form.Control
              type="text"
              name="description"
              placeholder=" Type your discription ..."
              style={{ textAlign: "center", marginLeft: "400px" }}
              required
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Col md="5">
            <Form.Control
              type="URL"
              name="image"
              placeholder=" Type your Image ... "
              style={{ textAlign: "center", marginLeft: "400px" }}
              required
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Col md="5">
            <Form.Control
              type="url"
              name="url"
              placeholder=" Type your Link ..."
              style={{ textAlign: "center", marginLeft: "400px" }}
              required
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mt-5">
          <div>
            <Row style={{ paddingLeft: "25%", paddingRight: "32%" }}>
              <Button variant="outline-dark" type="submit">
                ADD GAME
              </Button>
            </Row>
          </div>
        </Form.Group>
      </Form>
    </div>
  )
}

export default AddGame
