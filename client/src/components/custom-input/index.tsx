import React from "react";
import { Form, Input } from "antd";

type Props = {
  name: string;
  placeholder: string;
  type?: string;
};

const CustomInput = ({ name, placeholder, type = "text" }: Props) => {
  return (
    <Form.Item
      rules={[{ required: true, message: "Обязательное поле" }]}
      name={name}
      shouldUpdate={true}
    >
      <Input placeholder={placeholder} type={type} size="large"></Input>
    </Form.Item>
  );
};

export default CustomInput;
