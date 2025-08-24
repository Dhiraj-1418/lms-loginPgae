import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../AuthContext/AuthContext";

function PrivateRoute({ children }) {
  console.log("Hello form Private Route");

  const { token, check } = useContext(AuthContext);

  if (localStorage.getItem('token')) {
    
      return children;
    
  } else {
    if (!token) {
      return <Navigate to={"/LoginPage"} />;
    } else {
      return children;
    }
  }

  // if (!token) {
  //   return <Navigate to={"/LoginPage"} />
  // } else {
  //   return children;
  // }
}

export default PrivateRoute;
