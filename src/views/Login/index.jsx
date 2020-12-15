import React from "react";
import { Input, Form, Button } from "antd";
const FormItem = Form.Item;

const Login = () => {
  return (
    <div className="login-main">
      <div className="login-bg">
        <div className="login-center">
          <h1>后台管理系统</h1>
          <Form>
            <FormItem
              name="username"
              rules={[
                {
                  required: true,
                  message: "用户名不能为空",
                },
              ]}
            >
              <Input placeholder="用户名" />
            </FormItem>
            <FormItem
              name="password"
              rules={[
                {
                  required: true,
                  message: "密码不能为空",
                },
              ]}
            >
              <Input type="password" placeholder="密码" />
            </FormItem>
            <FormItem>
              <Button type="primary" className="login-form-button">
                登录
              </Button>
            </FormItem>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
