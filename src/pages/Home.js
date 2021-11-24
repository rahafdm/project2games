import { useContext } from "react"
import { Container, Row } from "react-bootstrap"
import CarouselGames from "../components/Carousel"
import DevolberCard from "../components/DevolberCardGame"
import GamesContext from "../utils/GameContext"
import styles from "../components/mystyle.module.css"
import FooterGames from "../components/Foter"

function Home() {
  const { games1 } = useContext(GamesContext)

  return (
    <>
      <CarouselGames />
      <h2 className={styles.title3}> Devolbers Games </h2>
      <Container className="m-10">
        <Row xs={1} sm={2} md={3} className="g-4 mt-4">
          {games1.map(game => (
            <DevolberCard games1={games1} game={game} />
          ))}
        </Row>
      </Container>

      <FooterGames/>

    </>
  )
}

export default Home
