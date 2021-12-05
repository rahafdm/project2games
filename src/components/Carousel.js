import { Carousel, Row, Col } from "react-bootstrap"
import Game1 from "../images/game1.jpg"
import Game2 from "../images/game2.jpg"
import Game3 from "../images/game3.jpg"
import Game4 from "../images/game4.jpg"
import Game5 from "../images/game5.jpg"
import styles from "./mystyle.module.css"

function CarouselGames() {
  return (
    <>
      <Row>
      <h1 className={styles.title3}> - TOP 5 - </h1>
        <Col md="8" className="mx-auto mt-5">
          <Carousel>
            <Carousel.Item>
              <img className={styles.item} src={Game1} height="400px" alt="black survival" />
              <Carousel.Caption>
               
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className={styles.item} src={Game2} height="400px" alt="Heavy metal Machinse" />

              <Carousel.Caption>
               
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className={styles.item} src={Game3} height="400px" alt="SpellsWorn" />

              <Carousel.Caption>
               
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className={styles.item} src={Game4} height="400px" alt="Awosome Nuts" />
              <Carousel.Caption>
              
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className={styles.item} src={Game5} height="400px" alt="Awosome Nuts" />
              </Carousel.Item>
          </Carousel>
          <h3 className={styles.title3}> FREE GAMES ONLINE ON GAMESGAMES </h3>
          <p className={styles.par}> GAMES has the best free online games selection and offers the most fun experience to play alone or with friends. </p>
          <p className={styles.par}>Our games are playable on desktop, tablet and mobile so you can enjoy them at school, at home or on the road. </p>
        </Col>
      </Row>
    </>
  )
}

export default CarouselGames
