import { useState } from "react";
import {
  Button,
  ButtonGroup,
  Col,
  Container,
  Form,
  Row,
} from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";

const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

function NewField({ fieldType, index }) {
  const [date, setDate] = useState();
  switch (fieldType) {
    case "text":
      return (
        <Form.Group className="mb-3" controlId={"text" + index}>
          <Form.Label>Text field</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
      );
    case "email":
      return (
        <Form.Group className="mb-3" controlId={"email" + index}>
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" />
        </Form.Group>
      );
    case "password":
      return (
        <Form.Group className="mb-3" controlId={"password" + index}>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" />
        </Form.Group>
      );
    case "datepicker":
      return (
        <Form.Group className="mb-3" controlId={"datepicker" + index}>
          <Form.Label>Pick a date</Form.Label>
          <DatePicker
            selected={date}
            onChange={(date) => setDate(date)}
            dateFormat="dd/MM/yyyy"
            customInput={<Form.Control type="text" />}
          />
        </Form.Group>
      );
    case "select":
      return (
        <Form.Group className="mb-3" controlId={"select" + index}>
          <Form.Label>Select an option</Form.Label>
          <Select options={options} inputId={"select" + index} />
        </Form.Group>
      );
    default:
      return null;
  }
}

export default function Demo() {
  const [date, setDate] = useState();
  const [newFields, setNewFields] = useState([]);
  return (
    <Container fluid="lg">
      <Row>
        <Col className="subtitle">Demo</Col>
      </Row>
      <Row>
        <Col className="lead">
          Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem
          IpsumLorem IpsumLorem IpsumLorem Ipsum
        </Col>
      </Row>
      <Container className="demo-block pt-2">
        <Form.Group className="mb-3" controlId="addButtons">
          <Form.Label>Add more fields</Form.Label>
          <ButtonGroup aria-label="Add or Remove fields">
            <Button onClick={() => setNewFields([...newFields, "text"])}>
              Text field
            </Button>
            <Button onClick={() => setNewFields([...newFields, "email"])}>
              Email field
            </Button>
            <Button onClick={() => setNewFields([...newFields, "password"])}>
              Password field
            </Button>
            <Button onClick={() => setNewFields([...newFields, "datepicker"])}>
              Date picker
            </Button>
            <Button onClick={() => setNewFields([...newFields, "select"])}>
              Select box
            </Button>
            <Button onClick={() => setNewFields([])}>Remove all</Button>
          </ButtonGroup>
        </Form.Group>
        <Form>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="datepicker">
            <Form.Label>Pick a date</Form.Label>
            <DatePicker
              selected={date}
              onChange={(date) => setDate(date)}
              dateFormat="dd/MM/yyyy"
              customInput={<Form.Control type="text" />}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="select">
            <Form.Label>Select an option</Form.Label>
            <Select options={options} inputId="select" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="checkbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          {newFields.map((fieldType, index) => (
            <NewField key={index} fieldType={fieldType} index={index} />
          ))}
        </Form>
      </Container>
      <Container>
        <Button>Auto fill</Button>
        <Button>Clear all</Button>
      </Container>
    </Container>
  );
}
