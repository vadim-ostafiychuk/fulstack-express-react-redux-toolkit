import React from "react";
import Layout from "../../components/layout";
import { Card, Form, Row, Space, Typography } from "antd";
import CustomInput from "../../components/custom-input";
import PasswordInput from "../../components/password-input";
import CustomButton from "../../components/custom-button";
import { Link } from "react-router-dom";
import { Paths } from "../../paths";

const Register = () => {
  return (
    <Layout>
      <Row align="middle" justify="center">
        <Card title="Зарегистрируйтесь" style={{ width: "30rem" }}>
          <Form onFinish={() => null}>
            <CustomInput placeholder="Имя" name="name" />
            <CustomInput placeholder="Email" name="email" type="email" />
            <PasswordInput placeholder="Пароль" name="password" />
            <PasswordInput
              placeholder="Повторите пароль"
              name="confirmPassword"
            />
            <CustomButton type="primary" htmlType="submit">
              Войти
            </CustomButton>
          </Form>
          <Space direction="vertical" size="large">
            <Typography.Text>
              Уже зарегистрированы? <Link to={Paths.login}>Ввойдите</Link>
            </Typography.Text>
          </Space>
        </Card>
      </Row>
    </Layout>
  );
};

export default Register;
