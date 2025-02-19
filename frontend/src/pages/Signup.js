import React from "react"
import { Form, Input, Button } from "antd"
import { UserOutlined, LockOutlined } from "@ant-design/icons"
import { signupService } from "../services/auth"
import { useContextInfo } from "../hooks/context"
import { toast } from "react-toastify"

const Signup = ({ history }) => {
  const { user } = useContextInfo()
  if (user) history.push("/")
  const handleSignup = async (userInput) => {
    signupService(userInput)
      .then((res) => {
        history.push("/login")
      })
      .catch((err) => toast.error("Something went wrong! Please try again."))
  }

  return (
    <>
      <br />
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
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Signup
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}

export default Signup
