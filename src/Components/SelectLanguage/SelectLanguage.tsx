import {Select} from "antd";

const { Option } = Select;

export default function SelectLanguage(width: number){

    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
    };

    return (
        <Select defaultValue="english" style={{ width: width, color: "#ffffff" }} onChange={handleChange} bordered={false}>
            <Option value="english">English</Option>
            <Option value="portuguese">Portuguese</Option>
            <Option value="french">French</Option>
        </Select>
    )
}