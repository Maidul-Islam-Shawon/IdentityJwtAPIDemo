import axios from "axios";
import React, { useState } from "react";
import { Form, Button, Col } from "react-bootstrap";

const RegisterPage = () => {
  const [state, setState] = useState({
    Email: "",
    Password: "",
    ConfirmPassword: "",
  });
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setState({ ...state, [name]: value });
  };

  console.log(state);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`https://localhost:44393/api/auth/Register`, state)
      .then((res) => {
        setState(res.data);
        console.log("from res: ", res);
        setMessage(res.data.message);
      });
  };

  return (
    <div>
      <h2>Registraton</h2>
      <br />
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            required
            type="email"
            name="Email"
            placeholder="Enter Email"
            onChange={handleChange}
            value={state.Email || ""}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            type="password"
            name="Password"
            placeholder="Password"
            onChange={handleChange}
            value={state.Password || ""}
          />
        </Form.Group>

        <Form.Group controlId="formBasicConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            required
            type="password"
            name="ConfirmPassword"
            placeholder="Confirm Password"
            onChange={handleChange}
            value={state.ConfirmPassword || ""}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <br />
      {message}
    </div>
  );
};

export default RegisterPage;
