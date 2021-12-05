import { useContext } from "react"
import GamesContext from "../utils/GameContext"
import { Col, Container, Image, Row } from "react-bootstrap"
import UsersCardGames from "../components/UsersCardGames"
import styles from "../components/mystyle.module.css"
import FooterGames from "../components/Foter"

function Profile() {
  const { profile, deleteGames, editGames } = useContext(GamesContext)
  if (!profile) {
    return <h1>Loading...</h1>
  }

  return (
    <>
    <Container>
      <Row className="d-flex align-items-center mb-5 mt-5">
        <Col md="3">
          <Image className={styles.img} src={profile.photo}/>
        </Col>
        <Col>
          <h2 className={styles.title4}>
            {profile.firstName} {profile.lastName}
          </h2>
          <p className={styles.title5}>{profile.email}</p>
        </Col>
      </Row>
      <Row md={4} sm={2} xs={1}></Row>

      <Row  xs={1} sm={2} md={3} className="g-4 mt-4">
        {profile.items.map(usergame => {
          return <UsersCardGames inProfile={true} usergame={usergame} editGames={editGames} deleteGames={deleteGames} />
        })}
      </Row>
    </Container>
    <FooterGames/>
    </>
  )
}

export default Profile
