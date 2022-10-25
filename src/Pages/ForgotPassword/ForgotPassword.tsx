import {Button, Col, Form, Input, Layout, Row, Typography} from "antd";
import { useNavigate } from "react-router-dom";

import BoxBlue from "../../Components/BoxBlue/BoxBlue";
import BoxWhite from "../../Components/BoxWhite/BoxWhite";
import { UserOutlined } from "@ant-design/icons";

const {Title, Paragraph } = Typography

const typeStyle = BoxWhite()
const boxWhite_SmallScreen = typeStyle[0]
const boxWhite_BigScreen = typeStyle[1]


const boxForgotPassword = (style: any) => {
    // const navigate = useNavigate()

    const onFinish = (values: any) => {
        console.log("Username: (string)", values.username)
        if ( values.username.includes("@telecom.com")){
           // navigate("/checkyouremail")
        }
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    const onReset = () => {
        console.log("ijfi")
    }

    return (
        <div style={style}>
            <Col style={{padding: "2.5rem"}}>
                <Row justify={"center"}>
                    <Title>Reset Password</Title>
                </Row>
                <Row justify={"start"}>
                    <Paragraph>Enter the email associated with your account and we will send you an email with instructions to reset your password.</Paragraph>
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
                            label="Email"
                            name="username"
                            rules={[{ required: true, message: 'Please input your email!' }]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder={"email@telecom.pt"}/>
                        </Form.Item>



                        <Form.Item wrapperCol={{ span: 24 }} id="submit">
                            <Button style={{ width: "100%", marginBottom: "0.5rem"}} size={"large"} htmlType="submit" type="primary">
                                Reset Password
                            </Button>
                            <Button style={{ width: "100%"}} size={"large"} htmlType="button" type="default" onClick={onReset}>
                                Cancel
                            </Button>
                        </Form.Item>
                    </Form>
                    {/* FORM - END */}

                </Col>
            </Col>
        </div>
    )
}

export default function ForgotPassword(){
return(
    <Layout style={{ minHeight: "100vh", background: "linear-gradient(107.54deg, #124051 3.61%, #00819F 97.2%)", padding: "20vh"}}>
        <Row align="middle" justify={"center"} gutter={[16, 16]}>
            {/* Login for Big Views - START */}
            <Col xs={0} sm={0} md={0} lg={24} xl={24} xxl={24}>
                <Row justify={"center"}>
                    {BoxBlue(boxForgotPassword, boxWhite_BigScreen)}
                </Row>
            </Col>
            {/* Login for Big Views - START */}

            {/* Login for Small Views - START */}
            <Col xs={24} sm={24} md={24} lg={0} xl={0} xxl={0}>
                <Row justify={"center"}>
                    {boxForgotPassword(boxWhite_SmallScreen)}
                </Row>
            </Col>
            {/* Login for Small Views - END */}
        </Row>
    </Layout>
)
}