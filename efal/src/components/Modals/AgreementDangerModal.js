import React from 'react'
import { Button, Modal } from 'react-bootstrap'

const AgreementDangerModal = (props) => {
  return (
    <Modal
    {...props}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
      Mesafeli Satın Alma Sözleşmesi
            </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <p>
        Lütfen devam edebilmek için Mesafeli satın alma sözleşmesini onaylayınız!
      </p>
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={props.onHide}>Close</Button>
    </Modal.Footer>
  </Modal>
  )
}

export default AgreementDangerModal