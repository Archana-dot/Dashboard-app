import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from "reactstrap";
// import {select} from 'react-bootstrap'
import "../App.css";
import { updateUserDetails } from "../redux/Action";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function Register(props) {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("admin");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");
  const [userData, setUserData] = useState([]);

  const registerForm = () => {
    let obj = {
      username: username,
      password: password,
      userType: userType,
      email: email,
      department : department
    };

    let arr = Object.assign([], props.user);
    arr.push(obj);
    setUserData(arr);
    props.updateUserDetails(arr);
    setUserData(arr);
    setUserName("");
    setPassword("");
    setUserType("");
    setEmail("");
    setDepartment("");
  };
  return (
    <Container
      className="form-container"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#e5e4e2",
        height: "100vh",
      }}
      fluid
    >
      <Row className="box-shadow">
        <Col>
          <Form>
            <Row>
              <h2
                style={{ fontSize: 35, fontWeight: "bolder", marginBottom: 20 }}
              >
                Create account
              </h2>
              <h5>
                Already have an account?<Link to="/login">login </Link>
              </h5>
            </Row>
            <Row>
              <div style={{ marginTop: 20, marginBottom: 20 }}>
                <Input
                  type="text"
                  style={{ marginBottom: 10, marginTop: 10 }}
                  placeholder="username"
                  onChange={(e) => {
                    setUserName(e.target.value);
                  }}
                  value={username}
                />
                <Input
                  type="select"
                  name="select"
                  id="exampleSelect"
                  style={{ marginBottom: 10, marginTop: 10 }}
                  onChange={(e) => {
                    setUserType(e.target.value);
                  }}
                  value={userType}
                  > <Label>usertype</Label>
                  <option value="admin">Admin</option>
                  <option value="user">User</option>
                </Input>
                {userType === "user" ? 
                  <Input
                    type="select"
                    name="select"
                    id="exampleSelect"
                    style={{ marginBottom: 10, marginTop: 10 }}
                    onChange={(e) => {
                      setDepartment(e.target.value);
                    }}
                    value={department}
                  >
                    <option value="cs">CS</option>
                    <option value="it">IT</option>
                  </Input>
                 : null}
                <Input
                  type="email"
                  style={{ marginBottom: 10, marginTop: 10 }}
                  placeholder="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  value={email}
                />

                <Input
                  type="password"
                  style={{ marginBottom: 10, marginTop: 10 }}
                  placeholder="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  value={password}
                />
                <Button
                  color="primary"
                  style={{ width: "100%", marginTop: 10 }}
                  onClick={() => registerForm()}
                >
                  Register
                </Button>
              </div>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateUserDetails: (s) => {
      dispatch(updateUserDetails(s));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Register);
