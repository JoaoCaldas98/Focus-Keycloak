import {Button, Checkbox, Col, Divider, Form, Typography, Input, Layout, Row} from "antd";
import BoxBlue from "../../Components/BoxBlue/BoxBlue";
import BoxWhite from "../../Components/BoxWhite/BoxWhite";
import {LockOutlined, UserOutlined} from "@ant-design/icons";

const {Title, Paragraph} = Typography

const typeStyle = BoxWhite()
const boxWhite_SmallScreen = typeStyle[0]
const boxWhite_BigScreen = typeStyle[1]


const boxCreateNewPassword = (style: any) => {

    const onFinish = (values: any) => {
        console.log("Username: (string)", values.username)
        console.log("password: (string)", values.password)
        console.log("remember me (bool): ", values.remember)
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return(
        <div style={style}>
            <Col style={{padding: "2.5rem"}}>
                <Row justify={"center"}>
                    <Title>Create Password</Title>
                </Row>
                <Row justify={"start"}>
                    <Paragraph>Your next password should be different from the previous used passwords.</Paragraph>
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
                            id="password"
                            label="New password"
                            name="password"
                            hasFeedback
                            rules={[
                                { required: true, message: 'Please input your password!' },
                                {min: 8, message: "Password is less thant 8 characters."},
                                {max: 16, message: "Password is longer thant 16 characters."},
                                {pattern: new RegExp(/^[a-zA-Z\d@~`!@#$%^&*()_=+\\\\';:\"\\/?>.<,-]+$/i), message: "Character not allowed!"}
                            ]}
                        >
                            <Input.Password
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                            />
                        </Form.Item>

                        <Form.Item
                            name="confirm"
                            label="Confirm Password"
                            dependencies={['password']}
                            hasFeedback
                            rules={[
                                {
                                    required: true,
                                    message: 'Please confirm your password!',
                                },
                                ({ getFieldValue }) => ({
                                    validator(_, value) {
                                        if (!value || getFieldValue('password') === value) {
                                            return Promise.resolve();
                                        }
                                        return Promise.reject(new Error('Should match the new password.'));
                                    },
                                }),
                            ]}
                        >
                            <Input.Password prefix={<LockOutlined className="site-form-item-icon" />}/>
                        </Form.Item>


                        <Form.Item wrapperCol={{ span: 24 }} id="submit" style={{ marginTop: "2.500rem"}}>
                            <Button style={{ width: "100%"}} size={"large"} htmlType="submit" type="primary">
                                Confirm and login
                            </Button>
                        </Form.Item>
                    </Form>
                    {/* FORM - END */}
                </Col>
            </Col>
        </div>
    )
}

export default function CreatePassword(){

return(
    <Layout style={{ minHeight: "100vh", background: "linear-gradient(107.54deg, #124051 3.61%, #00819F 97.2%)", padding: "20vh"}}>
        <Row align="middle" justify={"center"} gutter={[16, 16]}>
            {/* Login for Big Views - START */}
            <Col xs={0} sm={0} md={0} lg={24} xl={24} xxl={24}>
                <Row justify={"center"}>
                    {BoxBlue(boxCreateNewPassword, boxWhite_BigScreen)}
                </Row>
            </Col>
            {/* Login for Big Views - START */}

            {/* Login for Small Views - START */}
            <Col xs={24} sm={24} md={24} lg={0} xl={0} xxl={0}>
                <Row justify={"center"}>
                    {boxCreateNewPassword(boxWhite_SmallScreen)}
                </Row>
            </Col>
            {/* Login for Small Views - END */}
        </Row>
    </Layout>
)
}