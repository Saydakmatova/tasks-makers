import React, { useContext, useEffect } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import { MainContext } from "../../context/MainProvider";
import DeleteIcon from "./images/delete-friend.png";
import EditIcon from "./images/editing.png";

const HomeContact = () => {
  const { getContacts, contacts, handleShow, deleteContact } =
    useContext(MainContext);
  useEffect(() => {
    getContacts();
  }, []);

  if (!contacts) {
    return <h2>Loading...</h2>;
  }
  return (
    <div>
      <Row xs={1} md={3} className="g-4">
        {contacts.map((item) => (
          <Col key={item.id}>
            <Card>
              <Card.Img variant="top" src={item.img} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>Phone number: {item.phone}</Card.Text>
                <Button
                  onClick={() => deleteContact(item.id)}
                  variant="inherit"
                >
                  <img width={35} src={DeleteIcon} alt="" />
                </Button>
                <Button variant="inherit" onClick={() => handleShow(item.id)}>
                  <img width={35} src={EditIcon} alt="" />
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <ToastContainer />
    </div>
  );
};

export default HomeContact;
