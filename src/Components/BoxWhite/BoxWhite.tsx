import {Button, Checkbox, Col, Divider, Form, Input, Typography, Row, Layout} from "antd";
import {LockOutlined, UserOutlined} from "@ant-design/icons";

const { Title, Text, Paragraph, Link } = Typography
const { Content } = Layout

export default function BoxWhite(){

    // Styles - START

    // style with "sm" and "md"
    const styleSmallScreens = {
        backgroundColor: "#ffffff",
        height: "562px",
        maxHeight: "562px",
        width: "396px",
        display: "flex",
        top:-35
    }

    // style with "lg" "xl" xxl"
    const styleBigScreens = {
        backgroundColor: "#ffffff",
        height: "562px",
        maxHeight: "562px",
        width: "375px",
        position: "absolute",
        left: "50%",
        display: "flex",
        top:-35
    }
    // Styles - END

return [ styleSmallScreens, styleBigScreens]

}