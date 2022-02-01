import { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { MainContext } from "../context/MainProvider";

const Task6 = () => {
  const {
    onSumbitChange,
    setName,
    setPassword,
    setPassword1,
    name,
    password,
    password1,
  } = useContext(MainContext);
  return (
    <>
      <Form onSubmit={(e) => e.preventDefault()}>
        <h3 className="text-center">Task6</h3>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={(e) => setName(e.target.value)}
            type="email"
            placeholder="Enter email"
            value={name}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            value={password}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Confirm your password</Form.Label>
          <Form.Control
            onChange={(e) => setPassword1(e.target.value)}
            type="password"
            placeholder="Password"
            value={password1}
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          className="btn-inp"
          onClick={onSumbitChange}
        >
          Get in
        </Button>
      </Form>
    </>
  );
};

export default Task6;
