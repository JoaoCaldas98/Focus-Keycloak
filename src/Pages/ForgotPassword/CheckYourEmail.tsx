import {Button, Col, Form, Input, Layout, Row, Typography} from "antd";

import BoxBlue from "../../Components/BoxBlue/BoxBlue";
import BoxWhite from "../../Components/BoxWhite/BoxWhite";
import { MailOutlined, UserOutlined } from "@ant-design/icons";
import {Content} from "antd/es/layout/layout";

const {Title, Paragraph, Link } = Typography

const typeStyle = BoxWhite()
const boxWhite_SmallScreen = typeStyle[0]
const boxWhite_BigScreen = typeStyle[1]

const boxCheckYourEmail = (style: any) => {
    return (
        <div style={style}>
            <Col style={{padding: "2.5rem"}}>
                <Row justify={"center"}>
                    <Title level={2}>Check your email</Title>
                </Row>
                <Row justify={"center"} style={{ marginBottom: "1.875rem", marginTop: "1.300rem"}}>
                    <MailOutlined style={{ fontSize: '36px', color: '#00819F' }}/>
                </Row>
                <Row justify={"start"}>
                    <Paragraph>We have sent you a password recover instructions to your email.</Paragraph>
                    <Paragraph>Still didn't receive the email ? Check your spam folder or <a href={"/forgotpassword"}> try another email address.</a></Paragraph>
                </Row>
                <Col span={24}>
                </Col>
            </Col>
        </div>
    )
}

export default function CheckYourEmail(){
    return(
        <Layout style={{ minHeight: "100vh", background: "linear-gradient(107.54deg, #124051 3.61%, #00819F 97.2%)", padding: "20vh"}}>
            <Row align="middle" justify={"center"} gutter={[16, 16]}>
                {/* Login for Big Views - START */}
                <Col xs={0} sm={0} md={0} lg={24} xl={24} xxl={24}>
                    <Row justify={"center"}>
                        {BoxBlue(boxCheckYourEmail, boxWhite_BigScreen)}
                    </Row>
                </Col>
                {/* Login for Big Views - START */}

                {/* Login for Small Views - START */}
                <Col xs={24} sm={24} md={24} lg={0} xl={0} xxl={0}>
                    <Row justify={"center"}>
                        {boxCheckYourEmail(boxWhite_SmallScreen)}
                    </Row>
                </Col>
                {/* Login for Small Views - END */}
            </Row>
        </Layout>
    )
}