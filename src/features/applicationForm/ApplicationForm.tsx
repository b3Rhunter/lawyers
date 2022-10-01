import { Button, Form, Modal } from "react-bootstrap";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectOpen, toggle } from "./applicationFormSlice";
import { FilterComponent } from "../../components/Directory/TableDirectory/TableFilter/FilterComponent/FilterComponent";

import "./ApplicationForm.css";

export const ApplicationForm = () => {
  const show = useAppSelector(selectOpen);
  const dispatch = useAppDispatch();

  const handleOpened = () => dispatch(toggle());

  // TODO
  const handleSubmit = () => dispatch(toggle());

  return (
    <Modal show={show} onHide={handleOpened} className="modal">
      <Modal.Header>
        <Modal.Title>Application Form</Modal.Title>
        <button onClick={handleOpened} type="button" className="btn-close btn-close-white" aria-label="Close"></button>
      </Modal.Header>
      <Form>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" required/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicJurisdiction">
            <Form.Label>Jurisdiction</Form.Label>
            <FilterComponent className="form-filter"/>
          </Form.Group>
          {/* TODO: Max 150 words */}
          <Form.Group className="mb-3" controlId="formBasicBio">
            <Form.Label>Biography</Form.Label>
            <Form.Control as="textarea" rows={5} required/>
            <Form.Text className="text-muted">
              150 maximum words.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicExpertise">
            <Form.Label>Areas of Expertise</Form.Label>
            <Form.Control type="text" placeholder="Enter areas"/>
            <Form.Text className="text-muted">
              Please separate the areas with a ";".
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" required/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPhone">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="number" placeholder="Enter phone number"/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicLinkedIn">
            <Form.Label>LinkedIn</Form.Label>
            <Form.Control type="text" placeholder="Enter LinkedIn link" required/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicTwitter">
            <Form.Label>Twitter</Form.Label>
            <Form.Control type="text" placeholder="Enter Twitter link" required/>
          </Form.Group>
          {/* TODO: Validation */}
          <Form.Group className="mb-3" controlId="formBasicFace">
            <Form.Label>Face Photo</Form.Label>
            <Form.Control type="file" required/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicProof">
            <Form.Label>Proof Photo</Form.Label>
            <Form.Control type="file" required/>
            <Form.Text className="text-muted">
              Please provide a file that proves your experise.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicWallet">
            <Form.Label>Wallet Address</Form.Label>
            <Form.Control type="text" placeholder="Enter wallet address" required/>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleOpened}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}