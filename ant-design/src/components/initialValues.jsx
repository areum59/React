import React from "react";
import { Form, Input, Button } from "antd";

export default function InitialValues() {
    const initialValues = {  // 초기값으로 설정할 데이터
        username: 'areum', 
        email: 'reddoll88@naver.com',
    }

    const onFinish = () => {}

    return (
        <>
            <Form
                name="myForm"
                initialValues={initialValues} // 초기값 설정
                onFinish={onFinish}
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: "Please input your username!" }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: "Please input your email!" }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
}