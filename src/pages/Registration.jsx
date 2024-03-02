import "../index.css";
import React, { useEffect, useState } from "react";
import { Button, Radio, notification, Form, Input } from "antd";

function Registration() {
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [usernameS, setUsernameS] = useState();
  const [nameS, setNameS] = useState();
  const [genderS, setGenderS] = useState();
  const [passwordS, setPasswordS] = useState();

  const onFinish = (values) => {
    localStorage.setItem("registrationForm", JSON.stringify(values));
    notification.success({
      message: "Hooray!:))",
      description: "Your registration form has been saved successfully!",
    });
    setTimeout(() => {
      window.location.href = "/login";
    }, 2000);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  useEffect(() => {
    if (
      usernameS === undefined ||
      nameS === undefined ||
      genderS === undefined ||
      passwordS === undefined
    ) {
      setButtonDisabled(true);
    } else {
      setButtonDisabled(false);
    }
  }, [usernameS, nameS, genderS, passwordS]);
  const onLogin = () => {
    window.location.href = "/login";
  };
  return (
    <>
      <h3>REGISTER</h3>
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
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your name!",
            },
          ]}
        >
          <Input onChange={(e) => setNameS(e.target.value)} />
        </Form.Item>

        <Form.Item
          label="Gender"
          name="gender"
          rules={[
            {
              required: true,
              message: "Please select your gender!",
            },
          ]}
        >
          <Radio.Group onChange={(e) => setGenderS(e.target.value)}>
            <Radio value="male">Male</Radio>
            <Radio value="female">Female</Radio>
          </Radio.Group>
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
            Register
          </Button>
          <p>You have an account?</p>
          <Button type="primary" onClick={onLogin}>
            Login
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}

export default Registration;
