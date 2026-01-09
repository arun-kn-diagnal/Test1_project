import React from 'react';
import type { FormProps } from 'antd';
import { Button, Checkbox, Form, Input ,Tooltip,Typography} from 'antd';
import { useNavigate } from 'react-router-dom';
import "./SignUp.css"
type FieldType = {
  username?: string;
  email?: string;
  password?: string;
  remember?: string;
};


const SignUp: React.FC = () => {
  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log(values.username)
    localStorage.setItem(String(values.username), String(values.password));

    navigate("/signin")
  };

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:',);
    alert(`there is an error ${errorInfo.message}`)
  };

  const navigate = useNavigate();

  return (
    <div className="signup-container">

      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>


        <Form.Item<FieldType>
          label="email"
          name="email"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item<FieldType> name="remember" valuePropName="checked" label={null}>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
        <Form.Item>
          <Tooltip title="Useful information">
          <Typography.Link onClick={()=>{navigate('/signin')}}>already a user ?</Typography.Link>
        </Tooltip>
        </Form.Item>
      </Form>
    </div>
  )
}

export default SignUp;