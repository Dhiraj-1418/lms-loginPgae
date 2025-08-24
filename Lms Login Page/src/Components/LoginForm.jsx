import React, { useContext, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { AuthContext } from "../AuthContext/AuthContext";
function LoginForm() {

 const [checked,setChecked]= useState(null);
 
  const { setToken,setCheck } = useContext(AuthContext);
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");

  
  async function handleLogIn(e) {
    e.preventDefault();

    let userData = { email, password };
    console.log(userData);

    try {
      const res = await axios.post("https://reqres.in/api/login", userData, {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "reqres-free-v1",
        },
      });

      setCheck(checked)
      if(checked){
        localStorage.setItem('token',res.data.token)
      }
      else{
        localStorage.setItem('token',"")
     setToken(res.data.token);
      }
     
    } catch (error) {
      console.log(error);
      setUser(error?.response?.data?.error || "Something Went Worng");
    }
  }

  return (
    <>
      <Form onSubmit={handleLogIn}>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            value={email}
            placeholder="eve.holt@reqres.in"
            className="border rounded-pill"
            style={{ border: "none", outline: "none" }}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            placeholder="Password"
            className="border rounded-pill"
            onChange={(e) => setPass(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check
            type="checkbox"
            label="Remember Me"
            onChange={(e) => setChecked(e.target.checked)}
          />
        </Form.Group>
        <span>
          <h2>{user}</h2>
        </span>
        <Button variant="primary" type="submit" className="w-100 rounded-pill">
          Log In
        </Button>
      </Form>
    </>
  );
}

export default LoginForm;
