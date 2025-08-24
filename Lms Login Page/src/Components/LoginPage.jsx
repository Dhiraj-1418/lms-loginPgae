import React, { useContext, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LoginForm from "./LoginForm";
import { AuthContext } from "../AuthContext/AuthContext";

function LoginPage() {
  const { token } = useContext(AuthContext);
 



  return (
    <>
      <Container className="">
        <Row>
          <Col className="">
            <div
              style={{
                height: "80vh",
                width: "60vw",
                margin: "auto",
              }}
              className="p-4 mt-4 d-flex"
            >
              <div
                className="h-100 w-100 bg-danger"
                style={{ borderRadius: "20px 0px 0px 20px" }}
              ></div>
              <div
                className="h-100 w-100 bg-light d-flex justify-content-center align-items-center"
                style={{ borderRadius: "0px 20px 20px 0px" }}
              >
                <div style={{ height: "80%", width: "80%" }} className="p-2">
                  <h1>LOGIN</h1>

                  {token || localStorage.getItem("token") ? (
                    "Logged In"
                  ) : (
                    <LoginForm />
                  )}
                  <button className="btn btn-primary rounded-pill w-100 mt-2" onClick={()=>localStorage.clear()}>
                    Log Out
                  </button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default LoginPage;
