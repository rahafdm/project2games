import { Card, Button, Col, Row } from "react-bootstrap"
import styles from "./mystyle.module.css"


function DevolberCard(props) {
  const { game } = props

  return (
   
    <Col>
      <Card
      className={styles.card}
        style={{
          width: "25rem",
          backgroundColor: "rgba(16, 167, 175, 0.301)",
          borderRadius: "10px",
          fontFamily: "Isemin",
        }}
      >
        <Card.Body>
          <Card.Img className={styles.img} style={{ borderRadius: "15px" }} variant="top" src={game.thumbnail} />
          <Card.Body>
            <Card.Title className={styles.title}>{game.title}</Card.Title>
            <Card.Text className={styles.text}>{game.short_description}</Card.Text>
            <Row>
              <Button href={game.game_url} target="_blank" variant="outline-dark">
                Play this game
              </Button>
            </Row>
          </Card.Body>
        </Card.Body>
      </Card>
    </Col>
    
  )
}

export default DevolberCard
