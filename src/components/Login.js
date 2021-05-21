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
import "../App.css";
import { updateUserDetails } from "../redux/Action";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import Dashboard from "./Dashboard";

function Login(props) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const History = useHistory();

  const LoginForm = () => {
    
    props.user.forEach((item) => {
      if (item.username === userName && item.password === password) {
        
        History.push("/dashboard", { from: "Login" } )
      }
      
    });
  };

  return (
    <Container
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#e5e4e2",
        height: "100vh",
      }}
    >
      <Row className="box-shadow">
        <Col>
          <Form>
            <Row>
              <h2
                style={{ fontSize: 35, fontWeight: "bolder", marginBottom: 20 }}
              >
                Login Page
              </h2>
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
                />
                <Input
                  type="password"
                  style={{ marginBottom: 10, marginTop: 10 }}
                  placeholder="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <Button
                  color="primary"
                  style={{ width: "100%", marginTop: 10 }}
                  onClick={(item) => LoginForm(item) }
                >
                  Login
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
export default connect(mapStateToProps, mapDispatchToProps)(Login);
