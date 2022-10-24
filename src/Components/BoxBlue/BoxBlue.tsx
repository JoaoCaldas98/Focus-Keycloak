import {Col, Row, Typography } from "antd";
import Focus from "../../Assets/Focus.png";

const { Title } = Typography

export default function BoxBlue( boxWhite: any, styleBoxWhite: any){
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
            {boxWhite(styleBoxWhite)}
        </>
    )
}