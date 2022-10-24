import {Button, Checkbox, Col, Divider, Image, Input, Layout, Row, Space, Typography, Form} from "antd";
import Focus from "../../Assets/Focus.png"

const { Content } = Layout
const {Title, Text, Paragraph, Link} = Typography

const styleBoxWhite_BigDevice = {
    backgroundColor: "#ffffff",
    height: "562px",
    maxHeight: "562px",
    maxWidth: "396px",
    position: "absolute",
    left: "50%",
    display: "flex",
    top:-35
}

const styleBoxWhite_SmallDevice = {
    backgroundColor: "#ffffff",
    height: "562px",
    maxHeight: "562px",
    maxWidth: "396px",
    display: "flex",
    top:-35
}


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
                    <Title>Welcome!</Title>
                </Row>
                <Row justify={"start"}>
                    <Paragraph>Please Login to your account.</Paragraph>
                </Row>
                <Col span={24}>

                {/* FORM - START */}
                    <Form
                        name="basic"
                        labelCol={{ span: 24 }}
                        wrapperCol={{ span: 24 }}
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            id="username"
                            label="Username"
                            name="username"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            id="password"
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item name="remember" valuePropName="checked" wrapperCol={{  span: 12 }} id="remember">
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <Form.Item wrapperCol={{ span: 24 }} id="submit">
                            <Button style={{ width: "100%"}} size={"large"} htmlType="submit" type="primary">
                                Login
                            </Button>
                        </Form.Item>
                    </Form>
                {/* FORM - END */}

                    <Content>
                    <Divider>
                        Or
                    </Divider>
                    <Content style={{ marginTop: "1.25rem", marginBottom: "1.25rem"}}>
                        <Row justify={"center"}>
                            <Text style={{ marginRight: "5px"}}>No account yet ? </Text> <Link> Contact us </Link>
                        </Row>
                    </Content>
                    </Content>
                </Col>
            </Col>
        </div>
    )
}

const boxBlue = (formLogin: any, style: any) => {
    return (
        <>
        <div style={{
            backgroundColor: "#124051",
            maxHeight: "494px",
            maxWidth: "813px",
            height: "494px",
            width: "813px",
            position: "relative",
            justifyItems: "center",
            alignItems: "center"
        }}>
            <Row align={"middle"} style={{ height: "100%"}}>
                <Col span={12} style={{padding: "2.5rem"}}>
                    <Row justify={"center"}>
                        <img src={Focus} style={{ width: "80%"}}/>
                    </Row>
                    <Row justify={"center"} style={{marginTop: "1.5rem"}}>
                        <Title level={3} style={{ color: "#DFF1F9"}}>Profiling | Intelligence</Title>
                    </Row>
                    <Row justify={"center"}>
                        <Title level={5} style={{ color: "#DFF1F9"}}>The art of personalized experiences</Title>
                    </Row>
                </Col>
            </Row>
        </div>
            {formLogin(style)}
        </>
    )
}


export default function Login(){

    return (
        <Layout style={{ minHeight: "100vh", background: "linear-gradient(107.54deg, #124051 3.61%, #00819F 97.2%)", padding: "20vh"}}>
            <Row align="middle" justify={"center"} gutter={[16, 16]}>
                {/* Login for Big Views - START */}
                <Col xs={0} sm={0} md={0} lg={24} xl={24} xxl={24}>
                    <Row justify={"center"}>
                        {boxBlue(boxWhite, styleBoxWhite_BigDevice)}
                    </Row>
                </Col>
                {/* Login for Big Views - START */}

                {/* Login for Small Views - START */}
                <Col xs={24} sm={24} md={24} lg={0} xl={0} xxl={0}>
                    <Row justify={"center"}>
                        {boxWhite(styleBoxWhite_SmallDevice)}
                    </Row>
                </Col>
                {/* Login for Small Views - END */}
            </Row>
        </Layout>
    )
}