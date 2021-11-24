import { useContext } from "react"
import { Form, Modal, Button } from "react-bootstrap"
import GamesContext from "../utils/GameContext"

function ModalItem(props) {
  const { show, handleClose, usergame } = props
  const { confirmGames } = useContext(GamesContext)
  

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Edit Games</Modal.Title>
      </Modal.Header>
      <Form onSubmit={e => confirmGames(e, usergame._id)}>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label> Title </Form.Label>
            <Form.Control type="text" name="title" defaultValue={usergame.title} required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label column md="2">
              {" "}
              Description{" "}
            </Form.Label>
            <Form.Control as="textarea" name="description" defaultValue={usergame.description} rows={3} required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label column md="2">
              Image
            </Form.Label>
            <Form.Control type="URL" name="image" defaultValue={usergame.image} required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label> Game Link </Form.Label>
            <Form.Control type="url" name="url" defaultValue={usergame.url} required />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" type="submit" onClick={handleClose}>
            Confirm
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}
export default ModalItem
