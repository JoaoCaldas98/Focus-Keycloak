import { LockOutlined, UserOutlined } from '@ant-design/icons';
import {Button, Checkbox, Col, Divider, Input, Layout, Row, Typography, Result} from "antd";

import BoxWhite from "../../Components/BoxWhite/BoxWhite";
import BoxBlue from "../../Components/BoxBlue/BoxBlue";

const {Title, Text, Paragraph} = Typography

const typeStyle = BoxWhite()
const boxWhite_SmallScreen = typeStyle[0]
const boxWhite_BigScreen = typeStyle[1]



const boxError = (style: any) => {

    return (
        <div style={style}>
            <Col style={{padding: "2.5rem"}}>
                <Result
                    status="error"
                    title="Authentication Failed"
                    subTitle="Please check and modify the following information before resubmitting."
                    extra={[
                        <Button type="primary" key="console">
                            Go back to login page
                        </Button>,
                    ]}
                />
            </Col>
        </div>
    )
}

export default function Error(){

    return (
        <Layout style={{ minHeight: "100vh", background: "linear-gradient(107.54deg, #124051 3.61%, #00819F 97.2%)", padding: "20vh"}}>
            <Row align="middle" justify={"center"} gutter={[16, 16]}>
                {/* Login for Big Views - START */}
                <Col xs={0} sm={0} md={0} lg={24} xl={24} xxl={24}>
                    <Row justify={"center"}>
                        {BoxBlue(boxError, boxWhite_BigScreen)}
                    </Row>
                </Col>
                {/* Login for Big Views - START */}

                {/* Login for Small Views - START */}
                <Col xs={24} sm={24} md={24} lg={0} xl={0} xxl={0}>
                    <Row justify={"center"}>
                        {boxError(boxWhite_SmallScreen)}
                    </Row>
                </Col>
                {/* Login for Small Views - END */}
            </Row>
        </Layout>
    )
}