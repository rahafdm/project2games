import { useContext, useState } from "react"
import { Card, Button, Row, Col } from "react-bootstrap"
import GamesContext from "../utils/GameContext"
import ModalItem from "./Modal"
import styles from "./mystyle.module.css"

function UsersCardGames(props) {
  const { usergame, inProfile } = props
  const [show, setshow] = useState(false)
  const { deleteGames } = useContext(GamesContext)

  const handleClose = () => {
    setshow(false)
  }

  const handleOpen = () => {
    setshow(true)
  }
  return (
    <>
      <Col>
        <Card
          style={{
            width: "25rem",
            backgroundColor: "rgba(16, 167, 175, 0.301)",
            borderRadius: "10px",
            fontFamily: "Isemin",
          }}
        >
          <Card.Img style={{ borderRadius: "15px" }} variant="top" src={usergame.image} />
          <Card.Body>
            <Card.Title className={styles.title}>{usergame.title}</Card.Title>
            <Card.Text className={styles.text}>{usergame.description}</Card.Text>

            {inProfile ? (
              <>
                <Button variant="info" onClick={handleOpen}>
                  EDIT
                </Button>
                <Button className="ms-2" variant="danger" onClick={() => deleteGames(usergame._id)}>
              
                  Delete
                </Button>
              </>
            ) : (
              <Row>
                <Button href={usergame.url} target="_blank" variant="outline-dark">
                  PLAY THIS GAME!
                </Button>
              </Row>
            )}
          </Card.Body>
        </Card>
        <ModalItem show={show} handleClose={handleClose} usergame={usergame} />
      </Col>
    </>
  )
}

export default UsersCardGames
