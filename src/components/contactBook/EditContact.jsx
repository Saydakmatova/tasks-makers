import React, { useState, useContext, useEffect } from "react";
import { Button, FormControl, Modal } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { MainContext } from "../../context/MainProvider";

const EditContact = () => {
  const { show, handleClose, contactToEdit, handleShow, saveEditedContact } =
    useContext(MainContext);
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [phone, setPhone] = useState("");
  const params = useParams();
  useEffect(() => {
    handleShow(params.id);
  }, []);

  useEffect(() => {
    if (contactToEdit) {
      setName(contactToEdit.name);
      setImg(contactToEdit.img);
      setPhone(contactToEdit.phone);
    }
  }, [contactToEdit]);
  const handleSubmit = (e) => {
    e.preventDefault();
    let editedContact = {
      name,
      img,
      phone,
      id: contactToEdit.id,
    };
    saveEditedContact(editedContact);
  };
  if (!contactToEdit) {
    return <h2>Loading...</h2>;
  }
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit modal</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleSubmit} className="m-0">
          <Modal.Body>
            <FormControl
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Enter name..."
            />
            <FormControl
              value={img}
              onChange={(e) => setImg(e.target.value)}
              type="text"
              placeholder="Enter phote..."
            />
            <FormControl
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="number"
              placeholder="Enter phone number..."
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button type="submit" onClick={handleClose} variant="primary">
              Save Changes
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </div>
  );
};

export default EditContact;
