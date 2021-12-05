import { useContext } from "react"
import { Container, Nav, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"
import GamesContext from "../utils/GameContext"
import styles from "./mystyle.module.css"



function NavbarItem() {
  const { handleOpenSignup, handleOpenLogin, logout } = useContext(GamesContext)
  return (
    <>
    
      <Navbar className={styles.navbar} collapseOnSelect expand="lg" bg="light" variant="dark">
        <Container>
          <Navbar.Brand className={styles.brand} style={{ fontSize: "40px" }}>
            {" "}
             Games{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link to="/" className="nav-link">
                Games by Devolbers 
              </Link>
              {localStorage.tokenGame ? (
                <Nav className="me-auto">
                  <Link to="/usergames" className="nav-link">
                    Game by Users
                  </Link>
                  <Link to="/addGames" className="nav-link">
                    Add Games
                  </Link>
                </Nav>
              ) : null}
            </Nav>
            {localStorage.tokenGame ? (
              <Nav className="ms-auto">
                <Link to="/profile" className="nav-link">
                  Profile
                </Link>
                <Link to="/" className="nav-link" onClick={logout}>
                  Logout
                </Link>
              </Nav>
            ) : (
              <Nav className="ms-auto">
                <div onClick={handleOpenSignup} className="nav-link">
                  Sign Up
                </div>
                <div onClick={handleOpenLogin} className="nav-link">
                  Login
                </div>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavbarItem
