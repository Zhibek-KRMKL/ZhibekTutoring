import React, { useState, useEffect } from "react";
import { Button, Form, Input } from "antd";
import { useDispatch } from "react-redux";
import { setLoggedIn } from "../reducers/LoginReducer";

function Login() {
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [usernameS, setUsernameS] = useState();
  const [passwordS, setPasswordS] = useState();

  const onFinish = (values) => {
    const loginUser = JSON.parse(localStorage.getItem("registrationForm"));
    if (
      loginUser &&
      values.username === loginUser.username &&
      values.password === loginUser.password
    ) {
      setError("");
      dispatch(setLoggedIn());
      localStorage.setItem("loggedIn", "true");
      setTimeout(() => {
        window.location.href = "/homePage";
      }, 2000);
    } else {
      setError("User does not exist");
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const onRegister = () => {
    window.location.href = "/registration";
  };
  useEffect(() => {
    if (
      usernameS === "" ||
      passwordS === "" ||
      usernameS === undefined ||
      passwordS === undefined
    ) {
      setButtonDisabled(true);
    } else {
      setButtonDisabled(false);
    }
  }, [usernameS, passwordS]);
  console.log("where is U", usernameS);
  console.log("where is p?", passwordS);
  return (
    <>
      <h3>LOGIN</h3>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        {<div className="loginError">{error}</div>}
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input onChange={(e) => setUsernameS(e.target.value)} />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password onChange={(e) => setPasswordS(e.target.value)} />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit" disabled={buttonDisabled}>
            Login
          </Button>
          <p>Don`t have an account yet? </p>
          <Button type="primary" onClick={onRegister}>
            Register
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}

export default Login;
