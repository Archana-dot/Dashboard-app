import React, { useState, useEffect } from "react";
import { Table, Button, Modal,ModalHeader,ModalBody,  Input } from "reactstrap";
import { updateUserDetails } from "../redux/Action";
import { connect } from "react-redux";

function Dashboard(props) {

  const [loginUserType, setLoginUserType] = useState("");
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [department, setDepartment] = useState("");
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    let loginDetails = localStorage.getItem("name");
    let userType = null;

    props.user.forEach((item) => {
      if (item.username === loginDetails) {
        userType = item.userType;
      }
    });
    setLoginUserType(userType);
  }, []);

  return (
    <div>
      <Modal  show={ showModal} onHide={() => setShowModal(false)}>
      <ModalHeader >Modal title</ModalHeader>
      <ModalBody>

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
          type="email"
          style={{ marginBottom: 10, marginTop: 10 }}
          placeholder="email"
          onChange={(e) => {
          setUserName(e.target.value);
          }}
         value={userName}
          />


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
        </ModalBody>
      </Modal>
      {console.log("usertype", props.user)}
      {console.log("showmodal", showModal)}

      <Table bordered>
        <thead>
          <tr>
            <th>Username</th>
            <th>Email Id</th>
            <th>Usertype</th>
            <th>Department</th>
            {loginUserType === "admin" ? <th>Action</th> : null}
          </tr>
        </thead>
        <tbody>
          {props.user.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>{item.userType}</td>
                <td>{item.userType === "user" ? item.department : "admin"}</td>
                {loginUserType === "admin" ? (
                  <td>
                    <Button onClick={ () => setShowModal(true)}>Edit </Button>
                  </td>
                ) : null}
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
