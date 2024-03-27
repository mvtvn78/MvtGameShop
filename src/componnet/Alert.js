import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "../css/Alert.scss"
function Alert({heading,content,status,...props}) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className='upper'>
          {heading}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body >
        <div className={status}>
          {content}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default Alert