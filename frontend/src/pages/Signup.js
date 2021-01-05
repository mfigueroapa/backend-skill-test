import React from "react"
import { Form, Input, Button, Checkbox } from "antd"
import { UserOutlined, LockOutlined } from "@ant-design/icons"
import { signupService } from "../services/auth"

const Signup = ({ history }) => {
  const handleSignup = async (userInput) => {
    await signupService(userInput)
    history.push("/login")
  }

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={handleSignup}
    >
      <Form.Item
        name="email"
        rules={[{ required: true, message: "Please input your Username!" }]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Username"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "Please enter your Password!" }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Signup
        </Button>
        Or <a href="">Login with Google!</a>
      </Form.Item>
    </Form>
  )
}

export default Signup
