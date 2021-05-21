import React from "react";
import { Table } from "reactstrap";
import { updateUserDetails } from "../redux/Action";
import { connect } from "react-redux";

 function Dashboard(props) {
  return (
    <div>
      <Table bordered>
        <thead>
          <tr>
            <th>Username</th>
            <th>Email Id</th>
            <th>Usertype</th>
          </tr>
        </thead>
        <tbody>
          {props.user.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.username}</td>
                <td>{item.usertype}</td>
                <td>{item.email}</td>
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
  const mapDispatchToProps = (dispatch) =>{
      
    return{
    updateUserDetails: (s) => { dispatch(updateUserDetails(s)) },
    
}
   };
  export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
  