import React, { useContext } from "react";
import { Button, Container, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { MainContext } from "../../context/MainProvider";
const ShowEmail = () => {
  const { showName, email } = useContext(MainContext);

  React.useEffect(() => {}, [showName]);

  const navigate = useNavigate();
  function exit() {
    navigate("/form");
  }
  return (
    <>
      {showName && (
        <Navbar bg="light" expand="lg">
          <Container fluid>
            <Navbar.Brand href="#">{email}</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Button variant="outline-success" onClick={exit}>
              exit
            </Button>
          </Container>
        </Navbar>
      )}
    </>
  );
};
export default ShowEmail;
