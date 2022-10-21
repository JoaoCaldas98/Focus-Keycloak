import {Button, Checkbox, Col, Divider, Image, Input, Layout, Row, Space, Typography} from "antd";
import Focus from "../../Assets/Focus.png"

const { Content } = Layout
const {Title, Text, Paragraph, Link} = Typography


export default function Login(){
    return (
        <Layout style={{ minHeight: "100vh", background: "linear-gradient(107.54deg, #124051 3.61%, #00819F 97.2%)", padding: "20vh"}}>
            <Row align="middle" justify={"center"} gutter={[16, 16]}>
                <Col xs={0} sm={0} md={0} xl={24} xxl={24}>
                    <Row justify={"center"}>
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
                            <Title level={3}>Profiling | Intelligence</Title>
                        </Row>
                        <Row justify={"center"}>
                            <Title level={5}>The art of personalized experiences</Title>
                        </Row>
                            </Col>
                        </Row>

                    <div style={{
                        backgroundColor: "#f1f1f1",
                        height: "562px",
                        width: "396px",
                        maxHeight: "562px",
                        maxWidth: "396px",
                        position: "absolute",
                        display: "flex",
                        left: "45%",
                        top:-35
                    }}>
                        <Col span={24} style={{padding: "2.5rem"}}>
                            <Row justify={"center"}>
                            <Title>Welcome!</Title>
                            </Row>
                            <Row justify={"start"}>
                                <Paragraph>Please Login to your account.</Paragraph>
                            </Row>
                            <Col span={24}>
                                <Content style={{ marginBottom: "1.25rem"}}>
                                <Row justify={"start"} style={{ marginBottom: "1.25rem"}}>
                                    <Col span={24}>
                                        <Text>Email/User ID</Text>
                                    <Input placeholder="Basic usage" size={"large"}/>
                                    </Col>
                                </Row>
                                <Row>
                                    <Text>Password</Text>
                                    <Input placeholder="Basic usage" size={"large"}/>
                                </Row>
                                </Content>
                                <Content style={{ marginBottom: "1.25rem"}}>
                                <Row justify={"space-between"}>
                                    <Col span={12}>
                                    <Checkbox>Remember me</Checkbox>
                                    </Col>
                                    <Col span={12}>
                                        <Row justify={"end"}>
                                        <Link>Forgot your password ? </Link>
                                        </Row>
                                    </Col>
                                </Row>
                                </Content>
                                <Row>
                                <Button style={{ width: "100%"}} size={"large"}>
                                    Login
                                </Button>
                                </Row>
                                <Divider>
                                    Or continue with
                                </Divider>
                                <Content style={{ marginTop: "1.25rem", marginBottom: "1.25rem"}}>
                                <Row>
                                    <Col span={8}>
                                        <Button disabled={true}>Google</Button>
                                    </Col>
                                    <Col span={8}>
                                        <Button disabled={true}>LDAP</Button>
                                    </Col>
                                    <Col span={8}>
                                        <Button disabled={true}>Kerberus</Button>
                                    </Col>
                                </Row>
                                </Content>
                                <Content style={{ marginTop: "1.25rem", marginBottom: "1.25rem"}}>
                                <Row justify={"center"}>
                                    <Text style={{ marginRight: "5px"}}>No account yet ? </Text> <Link> Contact us </Link>
                                </Row>
                                </Content>
                            </Col>
                        </Col>

                    </div>
                </div>
                    </Row>
                </Col>
            </Row>
        </Layout>
    )
}