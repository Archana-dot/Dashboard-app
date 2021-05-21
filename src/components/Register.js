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
  const [userType, setUserType] = useState("");
  const [email, setEmail] = useState("");
  const [userData, setUserData] = useState([]);

  const registerForm = () => {
    let obj = {
        username: username,
        password: password,
        userType: userType,
        email    : email
      };
  
      let arr = Object.assign([], props.user);
      arr.push(obj);
      setUserData(arr);
      props.updateUserDetails(arr);
      setUserData(arr)
      setUserName("")
      setPassword("")
      setUserType("")
      setEmail ("")
  }
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
    {console.log('user',props.user)}
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
                />
                <Input type="select" name="select" id="exampleSelect"
                onChange={(e) => {
                    setUserType(e.target.value);
                  }}
                >
                  <option value='admin'>Admin</option>
                  <option value='user'>User</option>
                </Input>
                <Input
                type="email"
                style={{ marginBottom: 10, marginTop: 10 }}
                placeholder="email"
                onChange={(e) => {
                  setEmail(e.target.value);
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
                  onClick={() => registerForm ()}
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
  const mapDispatchToProps = (dispatch) =>{
      
      return{
      updateUserDetails: (s) => { dispatch(updateUserDetails(s)) },
      
  }
     };
  export default connect(mapStateToProps, mapDispatchToProps)(Register);
  