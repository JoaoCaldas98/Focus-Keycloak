import { LockOutlined, UserOutlined } from '@ant-design/icons';
import {Button, Checkbox, Col, Divider, Input, Layout, Row, Typography, Form} from "antd";

import BoxWhite from "../../Components/BoxWhite/BoxWhite";
import BoxBlue from "../../Components/BoxBlue/BoxBlue";


const { Content } = Layout
const {Title, Text, Paragraph, Link} = Typography

const typeStyle = BoxWhite()
const boxWhite_SmallScreen = typeStyle[0]
const boxWhite_BigScreen = typeStyle[1]

const boxWhite = (style: any) => {

    const onFinish = (values: any) => {
        console.log("Username: (string)", values.username)
        console.log("password: (string)", values.password)
        console.log("remember me (bool): ", values.remember)
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div style={style}>
            <Col style={{padding: "2.5rem"}}>
                <Row justify={"center"}>
                    <Title level={3}>Two-factor authentication</Title>
                </Row>
                <Row justify={"start"}>
                    <Paragraph>Enter below the code you've received on your device.</Paragraph>
                </Row>
                <Col span={24}>

                    {/* FORM - START */}
                    <Form
                        name="login"
                        labelCol={{ span: 24 }}
                        wrapperCol={{ span: 24 }}
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                        className="login-form"
                    >
                        <Form.Item
                            id="username"
                            label="One-time code"
                            name="username"
                            rules={[{ required: true, message: 'Please input your code.' }]}
                        >
                            <Input/>
                        </Form.Item>



                        <Form.Item wrapperCol={{ span: 24 }} style={{ marginTop: "3rem"}} id="submit">
                            <Button style={{ width: "100%"}} size={"large"} htmlType="submit" type="primary">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                    {/* FORM - END */}

                </Col>
            </Col>
        </div>
    )
}

export default function TwoFactorAuthentication(){

    return (
        <Layout style={{ minHeight: "100vh", background: "linear-gradient(107.54deg, #124051 3.61%, #00819F 97.2%)", padding: "20vh"}}>
            <Row align="middle" justify={"center"} gutter={[16, 16]}>
                {/* Login for Big Views - START */}
                <Col xs={0} sm={0} md={0} lg={24} xl={24} xxl={24}>
                    <Row justify={"center"}>
                        {BoxBlue(boxWhite, boxWhite_BigScreen)}
                    </Row>
                </Col>
                {/* Login for Big Views - START */}

                {/* Login for Small Views - START */}
                <Col xs={24} sm={24} md={24} lg={0} xl={0} xxl={0}>
                    <Row justify={"center"}>
                        {boxWhite(boxWhite_SmallScreen)}
                    </Row>
                </Col>
                {/* Login for Small Views - END */}
            </Row>
        </Layout>
    )

}