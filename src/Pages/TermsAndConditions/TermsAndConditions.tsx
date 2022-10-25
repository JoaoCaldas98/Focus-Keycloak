import { LockOutlined, UserOutlined } from '@ant-design/icons';
import {Button, Checkbox, Col, Divider, Input, Layout, Row, Typography, Form} from "antd";

import BoxWhite from "../../Components/BoxWhite/BoxWhite";
import BoxBlue from "../../Components/BoxBlue/BoxBlue";


const { Content } = Layout
const {Title, Text, Paragraph, Link} = Typography
const typeStyle = BoxWhite()

const boxWhite_SmallScreen = typeStyle[0]
const boxWhite_BigScreen = typeStyle[1]

const boxWhite = (style: any) =>{

    return (
        <div style={style}>
            <Col style={{padding: "2.5rem"}}>
                <Row justify={"start"}>
                    <Title level={2}>Terms and Conditions</Title>
                </Row>
                <Row justify={"start"}>
                    <Text>Please Login to your account.</Text>
                </Row>

                <Row justify={"end"}>
                    <Button style={{ marginRight: "0.5rem"}} type={"default"}>Decline</Button>
                    <Button type={"primary"}>Accept</Button>
                </Row>
            </Col>
        </div>
    )
}

export default function TermsAndConditions(){

    return(
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