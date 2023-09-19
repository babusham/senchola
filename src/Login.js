import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Figure } from "react-bootstrap";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import Footer from "./Footer";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      {" "}
      <Container>
        <Row className="mt-5 mb-5 ms-5">
          <Col className="ml-200">
            <h1 style={{ fontWeight: "700" }}>LOGIN FORM</h1>
            <h4 style={{ fontSize: "30px" }}>Welcome back!</h4>
            <p style={{ fontSize: "15px", color: "gray" }}>
              Enter your Credential Details to access your account
            </p>
            <Form style={{ width: "400px" }}>
              <Form.Group controlId="form.Email">
                <Form.Label
                  style={{
                    fontSize: "11px",
                    fontWeight: "600",
                    marginTop: "20px",
                  }}
                >
                  Email address<span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Form.Control
                  className="border-1 shadow mb-0.5 mt-0.5 p-2 ps-2"
                  size="sm"
                  style={{ fontSize: "11px", height: "40px" }}
                  type="email"
                  placeholder="Enter your email"
                  required
                />
              </Form.Group>
              <Form.Group controlId="form.password">
                <Form.Label
                  style={{
                    fontSize: "11px",
                    fontWeight: "600",
                    marginTop: "20px",
                  }}
                >
                  Password<span style={{ color: "red" }}>*</span>
                </Form.Label>
                <div className="input-group">
                  <Form.Control
                    className="border-1 shadow mb-0.5 mt-0.5 p-2 ps-2"
                    size="sm"
                    style={{ fontSize: "11px", height: "40px" }}
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <span
                    className="input-group-text"
                    style={{ backgroundColor: "azure" }}
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? (
                      <AiOutlineEyeInvisible style={{ color: "gray" }} />
                    ) : (
                      <AiOutlineEyeInvisible style={{ color: "gray" }} />
                    )}
                  </span>
                </div>
              </Form.Group>
              <input
                style={{
                  color: "grey",
                  backgroundColor: "grey",
                  width: "20px",
                  marginTop: "30px",
                }}
                type="checkbox"
                inline
              />
              <span style={{ fontSize: "11px", color: "black" }}>
                {" "}
                Reminder me
              </span>
              <Button
                className="mt-4"
                type="submit"
                style={{
                  backgroundColor: "green",
                  width: "400px",
                  fontWeight: "600",
                }}
              >
                LOGIN
              </Button>

              <div className="d-flex mb-1 mt-3">
                <hr className="border-2 " style={{ width: "48%" }} />
                <span className="text-dark">&nbsp; Or &nbsp;</span>
                <hr className="border-2" style={{ width: "48%" }} />
              </div>
              <Row>
                <Col className="text-center mt-0.1">
                  <Button
                    className="text-dark bg-white ps-1 pe-1"
                    style={{ fontSize: "10px", borderColor: "gray" }}
                  >
                    <FcGoogle style={{ fontSize: "1.5em" }} />
                    &nbsp;<b>sign in with Google</b>
                  </Button>
                </Col>
                <Col className="text-center mt-0.1">
                  <Button
                    className="text-dark bg-white ps-1 pe-1"
                    style={{ fontSize: "10px", borderColor: "gray" }}
                  >
                    <BsApple style={{ fontSize: "1.5em" }} />
                    &nbsp;<b>sign in with Apple</b>
                  </Button>
                </Col>
              </Row>
              <p
                style={{ fontSize: "12px", marginTop: "20px" }}
                className="text-center"
              >
                Don't have an account?
                <span className="text-primary"> Sign Up</span>
              </p>
            </Form>
          </Col>

          <Col md={7} className="justify-content-end ">
            <Figure>
              <Figure.Image
                style={{
                  height: "580px",
                  width: "500px",
                  marginLeft: "30px",
                  marginTop: "-20px",
                }}
                src={require("./assets/Rectangle 4597.png")}
              />
            </Figure>
          </Col>
        </Row>
        <Row></Row>
      </Container>
      <Footer></Footer>
    </div>
  );
}

export default Login;